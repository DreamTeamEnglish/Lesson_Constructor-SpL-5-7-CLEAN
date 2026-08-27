// ============================================================
// CLEAN v23.1 · independent DreamTeam Access Gate
// No supabase-js.
// Direct REST Auth = same route as the successful GUI tester.
// App scripts are loaded ONLY after the gate has decided DEMO/FULL.
// ============================================================

(function(){
  "use strict";

  const cfg = window.KA_ACCESS_CONFIG || {};
  const SESSION_KEY = "dreamteam:spotlight57:v23:session";
  const gateRoot = document.getElementById("gate-root");
  const appShell = document.getElementById("app-shell");
  let promoLoaded = false;
  let currentMode = "NONE";
  let currentStatus = null;

  const $ = (s, root=document) => root.querySelector(s);
  const esc = v => String(v ?? "").replace(/[&<>'"]/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"
  }[ch]));

  function base(){ return String(cfg.SUPABASE_URL || "").replace(/\/+$/,""); }
  function key(){ return cfg.SUPABASE_PUBLISHABLE_KEY || ""; }

  function ensureConfig(){
    if(!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(base())) {
      throw new Error("Не настроен Supabase Project URL.");
    }
    if(!key()) throw new Error("Не настроен Supabase Publishable key.");
  }

  async function request(url, options={}){
    const response = await fetch(url, options);
    const raw = await response.text();
    let body = null;
    try { body = raw ? JSON.parse(raw) : null; } catch(_){}
    if(!response.ok){
      const message =
        body?.message || body?.msg || body?.error_description ||
        body?.error || body?.code || raw || `HTTP ${response.status}`;
      const e = new Error(message);
      e.status = response.status;
      e.body = body;
      throw e;
    }
    return body;
  }

  async function passwordLogin(email,password){
    ensureConfig();
    return await request(base()+"/auth/v1/token?grant_type=password",{
      method:"POST",
      headers:{"Content-Type":"application/json","apikey":key()},
      body:JSON.stringify({email,password}),
      cache:"no-store"
    });
  }

  async function refreshSession(refreshToken){
    ensureConfig();
    return await request(base()+"/auth/v1/token?grant_type=refresh_token",{
      method:"POST",
      headers:{"Content-Type":"application/json","apikey":key()},
      body:JSON.stringify({refresh_token:refreshToken}),
      cache:"no-store"
    });
  }

  async function authUser(accessToken){
    ensureConfig();
    return await request(base()+"/auth/v1/user",{
      method:"GET",
      headers:{"apikey":key(),"Authorization":"Bearer "+accessToken},
      cache:"no-store"
    });
  }

  async function gateApi(accessToken, action, extra={}){
    ensureConfig();
    return await request(base()+"/functions/v1/lesson-constructor-gate-v23",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "apikey":key(),
        "Authorization":"Bearer "+accessToken
      },
      body:JSON.stringify({action,...extra}),
      cache:"no-store"
    });
  }

  function saveSession(payload){
    const expiresIn = Number(payload?.expires_in || 3600);
    const data = {
      access_token:payload.access_token,
      refresh_token:payload.refresh_token,
      expires_at:Math.floor(Date.now()/1000)+expiresIn,
      user:payload.user || null
    };
    localStorage.setItem(SESSION_KEY,JSON.stringify(data));
    return data;
  }

  function readSession(){
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)||"null"); }
    catch(_){ return null; }
  }

  function clearSession(){ localStorage.removeItem(SESSION_KEY); }

  async function usableSession(){
    let s = readSession();
    if(!s?.access_token || !s?.refresh_token) return null;

    const now = Math.floor(Date.now()/1000);
    if(Number(s.expires_at||0) <= now+30){
      try {
        const refreshed = await refreshSession(s.refresh_token);
        s = saveSession(refreshed);
      } catch(_){
        clearSession();
        return null;
      }
    }

    try{
      const user = await authUser(s.access_token);
      s.user = user;
      localStorage.setItem(SESSION_KEY,JSON.stringify(s));
      return s;
    }catch(_){
      clearSession();
      return null;
    }
  }

  function showStart(message=""){
    document.body.classList.add("gate-pending");
    appShell.hidden = true;
    gateRoot.innerHTML = `
      <section class="clean-gate">
        <div class="clean-gate-card">
          <div class="clean-gate-brand">
            <img src="assets/brand-logo.png" alt="">
            <div><b>Копилочка Английского</b><span>Методический конструктор · CLEAN v23</span></div>
          </div>
          <span class="clean-kicker">SPOTLIGHT 5–7 · ЧИСТАЯ СБОРКА</span>
          <h1>Конструктор уроков</h1>
          <p>Сначала проверяем только новый независимый замок. Внутри сейчас работает золотая база Spotlight 6 без сегодняшних фронтенд-заплаток.</p>
          ${message?`<div class="clean-error">${esc(message)}</div>`:""}
          <div class="clean-gate-actions">
            <button class="clean-btn" id="clean-demo">Попробовать DEMO</button>
            <button class="clean-btn gold" id="clean-login-open">Войти</button>
          </div>
          <div class="clean-small">FULL / ADMIN проверяются через тот же Supabase-проект Navigator.</div>
        </div>
      </section>`;
    $("#clean-demo").onclick=()=>openApp("DEMO",null);
    $("#clean-login-open").onclick=()=>showLogin();
  }

  function showLogin(message=""){
    document.body.classList.add("gate-pending");
    appShell.hidden = true;
    gateRoot.innerHTML = `
      <section class="clean-gate">
        <div class="clean-gate-card">
          <div class="clean-gate-brand">
            <img src="assets/brand-logo.png" alt="">
            <div><b>Копилочка Английского</b><span>Защищённый вход · CLEAN v23</span></div>
          </div>
          <span class="clean-kicker">DREAMTEAM ACCESS</span>
          <h1>Вход для учителя</h1>
          <p>Единый e-mail + пароль Supabase. VK Donut определяет право FULL, но не используется как способ входа.</p>
          <div class="clean-login">
            <label>E-mail<input id="clean-email" type="email" autocomplete="username"></label>
            <label>Пароль<input id="clean-password" type="password" autocomplete="current-password"></label>
            <div id="clean-error" class="clean-error" ${message?"":"hidden"}>${esc(message)}</div>
            <button class="clean-btn gold" id="clean-login">Войти</button>
            <button class="clean-btn" id="clean-back">← Назад</button>
          </div>
          <div class="clean-debug" id="clean-step">Ожидание входа</div>
        </div>
      </section>`;
    $("#clean-login").onclick=doLogin;
    $("#clean-password").onkeydown=e=>{if(e.key==="Enter")doLogin()};
    $("#clean-back").onclick=()=>showStart();
    setTimeout(()=>$("#clean-email")?.focus(),20);
  }

  async function doLogin(){
    const email=$("#clean-email").value.trim().toLowerCase();
    const password=$("#clean-password").value;
    const error=$("#clean-error");
    const step=$("#clean-step");
    const button=$("#clean-login");

    error.hidden=true;
    button.disabled=true;

    try{
      step.textContent="1/3 · Supabase Auth…";
      const payload=await passwordLogin(email,password);
      const session=saveSession(payload);

      step.textContent="2/3 · CLEAN Gate: проверка права…";
      const status=await gateApi(session.access_token,"status");
      currentStatus=status;

      if(status.must_change_password){
        throw new Error("TEMP_PASSWORD_OK"); // step 2 UI will be added after gate proves stable
      }
      if(!status.valid_full && status.state!=="demo"){
        clearSession();
        throw new Error(
          status.state==="blocked" ? "Доступ к Конструктору заблокирован." :
          status.state==="expired" ? "Срок доступа закончился." :
          "Для этого аккаунта FULL-доступ к Конструктору не выдан."
        );
      }

      step.textContent="3/3 · CLEAN Gate: запись входа…";
      await gateApi(session.access_token,"start");

      await openApp(status.is_admin?"ADMIN":"FULL",status);
    }catch(e){
      if(e.message==="TEMP_PASSWORD_OK"){
        error.textContent="Временный пароль принят. На следующем шаге подключим обязательную смену пароля.";
      }else{
        error.textContent=e.message || "Ошибка входа.";
      }
      error.hidden=false;
      step.textContent="Остановлено";
    }finally{
      button.disabled=false;
    }
  }

  async function loadScript(src){
    return await new Promise((resolve,reject)=>{
      const s=document.createElement("script");
      s.src=src;
      s.async=false;
      s.onload=resolve;
      s.onerror=()=>reject(new Error("Не загрузился "+src));
      document.body.appendChild(s);
    });
  }

  async function loadPromo(){
    if(promoLoaded) return;
    const scripts=[
      "data.js","lesson1a.js","content-engine.js","ai/activity_catalog.js",
      "ai-config.js","app.js","enhance-all.js","ai-client.js"
    ];
    for(const src of scripts) await loadScript(src);
    promoLoaded=true;
  }

  async function openApp(mode,status){
    gateRoot.innerHTML="";
    appShell.hidden=false;
    document.body.classList.remove("gate-pending");
    currentMode=mode;
    currentStatus=status;

    await loadPromo();
    paintBar();
  }

  function paintBar(){
    const bar=$("#clean-accessbar");
    if(!bar)return;
    if(currentMode==="DEMO"){
      bar.innerHTML=`
        <div class="clean-bar-left"><strong>DEMO · золотая база Spotlight 6</strong><span>Сейчас проверяем оболочку и новый замок</span></div>
        <div class="clean-bar-actions"><button id="clean-home">Главная</button></div>`;
      $("#clean-home").onclick=()=>location.reload();
      return;
    }

    const email=currentStatus?.user?.email || readSession()?.user?.email || "";
    bar.innerHTML=`
      <div class="clean-bar-left">
        <strong>${currentMode==="ADMIN"?"ADMIN · ":""}FULL ACCESS</strong>
        <span>${esc(email)} · CLEAN v23 · Spotlight 6 base</span>
      </div>
      <div class="clean-bar-actions">
        ${currentMode==="ADMIN"?'<button class="admin" id="clean-admin">⚙ Управление доступом</button>':""}
        <button id="clean-logout">Выйти</button>
      </div>`;
    $("#clean-logout").onclick=()=>{clearSession();location.reload()};
    $("#clean-admin")?.addEventListener("click",openAdmin);
  }

  async function openAdmin(){
    const session=readSession();
    if(!session?.access_token)return;
    let overlay=$("#clean-admin-overlay");
    if(!overlay){
      overlay=document.createElement("div");
      overlay.id="clean-admin-overlay";
      overlay.className="clean-admin-overlay";
      document.body.appendChild(overlay);
    }
    overlay.hidden=false;
    overlay.innerHTML=`
      <section class="clean-admin-card">
        <div class="clean-admin-head"><h2>Управление доступом</h2><button class="clean-btn" id="clean-admin-close">Закрыть</button></div>
        <p>Это первый контрольный экран новой админки. Сейчас проверяем чтение списка пользователей.</p>
        <div class="clean-admin-list" id="clean-admin-list"><div>Загрузка…</div></div>
      </section>`;
    $("#clean-admin-close").onclick=()=>overlay.hidden=true;

    try{
      const result=await gateApi(session.access_token,"admin_list");
      const users=result.users||[];
      $("#clean-admin-list").innerHTML=users.length?users.map(u=>`
        <article class="clean-user">
          <div>
            <b>${esc(u.display_name||u.email)}</b>
            <small>${esc(u.email)}</small>
            <span class="clean-chip">${esc(u.access_level)}</span>
            <span class="clean-chip">${esc(u.access_source)}</span>
            <span class="clean-chip">${esc(u.status)}</span>
            ${u.online?'<span class="clean-chip">ONLINE</span>':""}
          </div>
          <div>${Number(u.login_count||0)} вход.</div>
        </article>`).join(""):'<div>Пользователей пока нет.</div>';
    }catch(e){
      $("#clean-admin-list").innerHTML=`<div class="clean-error">${esc(e.message)}</div>`;
    }
  }

  async function boot(){
    try{
      ensureConfig();
      const session=await usableSession();
      if(!session){
        showStart();
        return;
      }

      const status=await gateApi(session.access_token,"status");
      currentStatus=status;

      if(status.must_change_password){
        clearSession();
        showLogin("Временный пароль обнаружен. Первый пароль подключим после проверки чистого входа.");
        return;
      }

      if(status.valid_full){
        await gateApi(session.access_token,"start");
        await openApp(status.is_admin?"ADMIN":"FULL",status);
        return;
      }

      clearSession();
      showStart();
    }catch(e){
      clearSession();
      showStart(e.message||"Ошибка запуска.");
    }
  }

  boot();
})();
