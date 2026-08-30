(function (global) {
  'use strict';
  const config = global.SPOTLIGHT57_FIREBASE_CONFIG || {};
  async function call(action, payload) {
    if (!config.functionUrl) throw new Error('spotlight57_function_url_missing');
    const session = await global.SPOTLIGHT57_AUTH.currentSession();
    if (!session?.idToken) throw new Error('firebase_session_missing');
    const response = await global.fetch(config.functionUrl, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Firebase-Token': session.idToken },
      body: JSON.stringify({ action, ...(payload || {}) })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok === false) throw new Error(String(result.error || `http_${response.status}`));
    return result;
  }
  global.SPOTLIGHT57_ACCESS = Object.freeze({ call });
})(window);
