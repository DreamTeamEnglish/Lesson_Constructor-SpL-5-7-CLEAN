(function (global) {
  'use strict';
  const SESSION_KEY = 'dreamteam:spotlight57:firebase:session';
  const config = global.SPOTLIGHT57_FIREBASE_CONFIG || {};

  function resolveIdentifier(value) {
    const clean = String(value || '').trim().toLowerCase();
    if (/^\d+$/.test(clean)) return { kind: 'vk', label: clean, email: `vk-${clean}@dreamteam.invalid` };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return { kind: 'email', label: clean, email: clean };
    return null;
  }
  function readSession() {
    try { return JSON.parse(global.localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; }
  }
  function saveSession(payload, previous) {
    const expiresIn = Number(payload.expiresIn || payload.expires_in || 3600);
    const next = {
      idToken: String(payload.idToken || payload.id_token || ''),
      refreshToken: String(payload.refreshToken || payload.refresh_token || previous?.refreshToken || ''),
      expiresAt: Date.now() + Math.max(60, expiresIn) * 1000,
      uid: String(payload.localId || payload.user_id || previous?.uid || ''),
      email: String(payload.email || previous?.email || '')
    };
    global.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    return next;
  }
  async function firebasePost(path, body, form) {
    if (!config.apiKey) throw new Error('firebase_api_key_missing');
    const response = await global.fetch(`${path}${path.includes('?') ? '&' : '?'}key=${encodeURIComponent(config.apiKey)}`, {
      method: 'POST',
      headers: { 'Content-Type': form ? 'application/x-www-form-urlencoded' : 'application/json' },
      body: form ? new URLSearchParams(body).toString() : JSON.stringify(body)
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(String(payload?.error?.message || 'firebase_request_failed').toLowerCase());
    return payload;
  }
  async function signIn(identifier, password) {
    const login = resolveIdentifier(identifier);
    if (!login) throw new Error('invalid_identifier');
    const payload = await firebasePost('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', {
      email: login.email, password: String(password || ''), returnSecureToken: true
    });
    return saveSession(payload);
  }
  async function refresh() {
    const session = readSession();
    if (!session?.refreshToken) throw new Error('firebase_session_missing');
    const payload = await firebasePost('https://securetoken.googleapis.com/v1/token', {
      grant_type: 'refresh_token', refresh_token: session.refreshToken
    }, true);
    return saveSession(payload, session);
  }
  async function currentSession({ forceRefresh = false } = {}) {
    const session = readSession();
    if (!session) return null;
    if (forceRefresh || session.expiresAt <= Date.now() + 60000) return refresh();
    return session;
  }
  function peekSession() { return readSession(); }
  async function changePassword(password) {
    const session = await currentSession({ forceRefresh: true });
    const payload = await firebasePost('https://identitytoolkit.googleapis.com/v1/accounts:update', {
      idToken: session.idToken, password: String(password || ''), returnSecureToken: true
    });
    return saveSession(payload, session);
  }
  function signOut() { global.localStorage.removeItem(SESSION_KEY); }

  global.SPOTLIGHT57_AUTH = Object.freeze({ resolveIdentifier, signIn, refresh, currentSession, peekSession, changePassword, signOut });
})(window);
