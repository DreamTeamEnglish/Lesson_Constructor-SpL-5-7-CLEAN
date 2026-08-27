// ============================================================
// CLEAN v23.2 · DreamTeam Access + Navigator-style Admin
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

  function formatDate(value){
    if(!value)return "—";
    try{
      return new Intl.DateTimeFormat("ru-RU",{dateStyle:"short",timeStyle:"short"}).format(new Date(value));
    }catch(_){return String(value)}
  }

  function expiryText(value){
    return value ? formatDate(value) : "бессрочно";
  }

  function statusLabel(value){
    return ({
      active:"ACTIVE",
      blocked:"BLOCKED",
      pending:"PENDING",
      expired:"EXPIRED"
    })[value] || String(value||"").toUpperCase();
  }

  async function updateOwnPassword(accessToken,password){
    return await request(base()+"/auth/v1/user",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "apikey":key(),
        "Authorization":"Bearer "+accessToken
      },
      body:JSON.stringify({password}),
      cache:"no-store"
    });
  }


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
        showFirstPassword(session,status);
        return;
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
      error.textContent=e.message || "Ошибка входа.";
      error.hidden=false;
      step.textContent="Остановлено";
    }finally{
      button.disabled=false;
    }
  }


  function showFirstPassword(session,status){
    document.body.classList.add("gate-pending");
    appShell.hidden=true;
    gateRoot.innerHTML=`
      <section class="clean-gate">
        <div class="clean-gate-card">
          <div class="clean-gate-brand">
            <img src="assets/brand-logo.png" alt="">
            <div><b>Копилочка Английского</b><span>Первый вход · CLEAN v23</span></div>
          </div>
          <span class="clean-kicker">ВРЕМЕННЫЙ ПАРОЛЬ ПРИНЯТ</span>
          <h1>Создайте свой пароль</h1>
          <p>Придумайте постоянный пароль — не менее 10 символов.</p>
          <div class="clean-login">
            <label>Новый пароль<input id="clean-new-password" type="password" autocomplete="new-password"></label>
            <label>Повторите пароль<input id="clean-new-password-2" type="password" autocomplete="new-password"></label>
            <div id="clean-new-password-error" class="clean-error" hidden></div>
            <button class="clean-btn gold" id="clean-save-password">Сохранить и открыть FULL</button>
          </div>
        </div>
      </section>`;

    $("#clean-save-password").onclick=async()=>{
      const a=$("#clean-new-password").value;
      const b=$("#clean-new-password-2").value;
      const error=$("#clean-new-password-error");
      error.hidden=true;

      if(a.length<10){
        error.textContent="Пароль должен содержать не менее 10 символов.";
        error.hidden=false;
        return;
      }
      if(a!==b){
        error.textContent="Пароли не совпадают.";
        error.hidden=false;
        return;
      }

      const button=$("#clean-save-password");
      button.disabled=true;
      try{
        await updateOwnPassword(session.access_token,a);
        await gateApi(session.access_token,"first_password_complete");
        await gateApi(session.access_token,"start");
        await openApp(status.is_admin?"ADMIN":"FULL",status);
      }catch(e){
        error.textContent=e.message||"Не удалось сохранить пароль.";
        error.hidden=false;
      }finally{
        button.disabled=false;
      }
    };
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


  let adminUsers=[];
  let adminTab="invite";

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
      <section class="clean-admin-card navigator-admin">
        <div class="clean-admin-head nav-admin-head">
          <div>
            <span class="nav-admin-kicker">SPOTLIGHT 5–7 ADMIN</span>
            <h2>Участники и доступ</h2>
          </div>
          <div class="nav-admin-top-actions">
            <a class="nav-admin-link" href="https://dreamteamenglish.github.io/Lesson_Constructor-SpL-5-7-CLEAN/" target="_blank" rel="noopener">Открыть GitHub ↗</a>
            <button class="nav-admin-link" id="clean-admin-refresh">↻ Обновить</button>
            <button class="nav-admin-close" id="clean-admin-close">×</button>
          </div>
        </div>

        <section class="nav-admin-stats" id="clean-admin-stats">
          <div>Загрузка статистики…</div>
        </section>

        <div class="nav-admin-tabs">
          <button class="active" data-admin-tab="invite">По приглашению <span id="admin-count-invite">0</span></button>
          <button data-admin-tab="vk_donut">VK Donut <span id="admin-count-donut">0</span></button>
        </div>

        <section class="nav-admin-create">
          <div>
            <b id="admin-create-title">Email-доступ по приглашению</b>
            <small id="admin-create-help">Создайте пользователю вход по его e-mail. Новый аккаунт получит временный пароль.</small>
          </div>
          <button class="nav-admin-primary" id="admin-create-open">+ Email-доступ</button>
        </section>

        <section class="nav-admin-create-form" id="admin-create-form" hidden>
          <div class="nav-admin-form-grid">
            <label>Имя<input id="admin-new-name" type="text" placeholder="Необязательно"></label>
            <label>E-mail<input id="admin-new-email" type="email" placeholder="teacher@example.com"></label>
            <label>Срок
              <select id="admin-new-expiry">
                <option value="">Бессрочно</option>
                <option value="30">30 дней</option>
                <option value="90">90 дней</option>
                <option value="365">1 год</option>
              </select>
            </label>
            <label id="admin-new-note-wrap" hidden>VK ID / заметка<input id="admin-new-note" type="text" placeholder="Например, VK ID или имя дона"></label>
          </div>
          <div class="clean-error" id="admin-create-error" hidden></div>
          <div class="nav-admin-form-actions">
            <button class="nav-admin-primary" id="admin-create-submit">Создать доступ</button>
            <button class="nav-admin-link" id="admin-create-cancel">Отмена</button>
          </div>
        </section>

        <div class="nav-admin-summary" id="admin-tab-summary"></div>
        <div class="nav-admin-list" id="clean-admin-list"><div class="nav-admin-loading">Загрузка…</div></div>

        <div class="nav-admin-popover" id="admin-message-popover" hidden>
          <div class="nav-admin-message-card">
            <button class="nav-admin-close small" id="admin-message-close">×</button>
            <span class="nav-admin-kicker">ДОСТУП ГОТОВ</span>
            <h3>Сообщение пользователю</h3>
            <pre id="admin-message-text"></pre>
            <div class="nav-admin-form-actions">
              <button class="nav-admin-primary" id="admin-message-copy">Скопировать</button>
              <button class="nav-admin-link" id="admin-message-download">Скачать .txt</button>
            </div>
          </div>
        </div>
      </section>`;

    $("#clean-admin-close").onclick=()=>overlay.hidden=true;
    $("#clean-admin-refresh").onclick=refreshAdmin;
    $("#admin-create-open").onclick=()=>$("#admin-create-form").hidden=false;
    $("#admin-create-cancel").onclick=()=>$("#admin-create-form").hidden=true;
    $("#admin-create-submit").onclick=createAdminAccess;
    $("#admin-message-close").onclick=()=>$("#admin-message-popover").hidden=true;
    $("#admin-message-copy").onclick=copyAdminMessage;
    $("#admin-message-download").onclick=downloadAdminMessage;

    overlay.querySelectorAll("[data-admin-tab]").forEach(btn=>{
      btn.onclick=()=>{
        adminTab=btn.dataset.adminTab;
        overlay.querySelectorAll("[data-admin-tab]").forEach(x=>x.classList.toggle("active",x===btn));
        updateAdminCreateUI();
        renderAdmin();
      };
    });

    $("#clean-admin-list").onclick=handleAdminListClick;

    updateAdminCreateUI();
    await refreshAdmin();
  }

  function updateAdminCreateUI(){
    const donut=adminTab==="vk_donut";
    $("#admin-create-title").textContent=donut?"VK Donut FULL-доступ":"Email-доступ по приглашению";
    $("#admin-create-help").textContent=donut
      ?"Donut подтверждает право FULL. Вход пользователя остаётся обычным: e-mail + пароль Supabase."
      :"Создайте пользователю вход по его e-mail. Новый аккаунт получит временный пароль.";
    $("#admin-create-open").textContent=donut?"+ VK-доступ":"+ Email-доступ";
    $("#admin-new-note-wrap").hidden=!donut;
  }

  async function refreshAdmin(){
    const session=readSession();
    if(!session?.access_token)return;
    $("#clean-admin-list").innerHTML='<div class="nav-admin-loading">Загрузка пользователей…</div>';

    try{
      const result=await gateApi(session.access_token,"admin_list");
      adminUsers=result.users||[];
      const stats=result.stats||{};

      $("#clean-admin-stats").innerHTML=`
        <div><b>${Number(stats.total||0)}</b><span>всего</span></div>
        <div><b>${Number(stats.invited||0)}</b><span>по приглашению</span></div>
        <div><b>${Number(stats.vk_donut||0)}</b><span>VK Donut</span></div>
        <div><b>${Number(stats.active||0)}</b><span>активны</span></div>
        <div><b>${Number(stats.blocked||0)}</b><span>заблокированы</span></div>
        <div><b>${Number(stats.online||0)}</b><span>онлайн</span></div>`;

      $("#admin-count-invite").textContent=String(Number(stats.invited||0));
      $("#admin-count-donut").textContent=String(Number(stats.vk_donut||0));
      renderAdmin();
    }catch(e){
      $("#clean-admin-list").innerHTML=`<div class="clean-error">${esc(e.message)}</div>`;
    }
  }

  function usersForTab(){
    return adminUsers.filter(u=>adminTab==="vk_donut" ? u.access_source==="vk_donut" : u.access_source!=="vk_donut");
  }

  function renderAdmin(){
    const rows=usersForTab();
    const active=rows.filter(u=>u.status==="active").length;
    const pending=rows.filter(u=>u.status==="pending").length;
    const blocked=rows.filter(u=>u.status==="blocked").length;

    $("#admin-tab-summary").textContent=
      `${adminTab==="vk_donut"?"Доны":"Участники"}: ${rows.length} · Active: ${active} · Pending: ${pending} · Blocked: ${blocked}`;

    $("#clean-admin-list").innerHTML=rows.length?rows.map(u=>`
      <article class="nav-user-card ${u.is_self?"self":""}">
        <div class="nav-user-title">
          <b>${esc(u.display_name||u.email)}</b>
          <small>${esc(u.email)}</small>
          <div class="nav-user-chips">
            <span>${u.access_source==="vk_donut"?"VK DONUT":"EMAIL"}</span>
            <span>FULL</span>
            <span class="${u.status==="active"?"good":u.status==="blocked"?"bad":"warn"}">${esc(statusLabel(u.status))}</span>
            ${u.access_level==="ADMIN"?'<span class="gold">ADMIN</span>':""}
            ${u.must_change_password?'<span class="warn">TEMP PASSWORD</span>':""}
            ${u.online?'<span class="good">ONLINE</span>':""}
          </div>
          ${u.note?`<small class="nav-user-note">${esc(u.note)}</small>`:""}
        </div>
        <div class="nav-user-meta">
          <span>Добавлен: <b>${esc(formatDate(u.created_at))}</b></span>
          <span>Срок: <b>${esc(expiryText(u.expires_at))}</b></span>
        </div>
        <div class="nav-user-meta">
          <span>Входов: <b>${Number(u.login_count||0)}</b></span>
          <span>Последний: <b>${esc(formatDate(u.last_login_at))}</b></span>
        </div>
        <div class="nav-user-actions">
          ${u.is_self?'<span class="nav-self">Ваш аккаунт</span>':`
            <button data-plus30="${esc(u.user_id)}">+30 дней</button>
            <button data-forever="${esc(u.user_id)}">Бессрочно</button>
            <button data-reset="${esc(u.user_id)}">Сбросить пароль</button>
            <button class="${u.status==="blocked"?"good-btn":"danger-btn"}" data-toggle="${esc(u.user_id)}">${u.status==="blocked"?"Разблокировать":"Заблокировать"}</button>
          `}
        </div>
      </article>`).join(""):'<div class="nav-admin-empty">В этой вкладке пользователей пока нет.</div>';
  }

  function expiryFromPreset(){
    const raw=$("#admin-new-expiry").value;
    if(!raw)return null;
    const d=new Date();
    d.setDate(d.getDate()+Number(raw));
    return d.toISOString();
  }

  async function createAdminAccess(){
    const session=readSession();
    const error=$("#admin-create-error");
    error.hidden=true;

    const email=$("#admin-new-email").value.trim().toLowerCase();
    if(!email){
      error.textContent="Введите e-mail.";
      error.hidden=false;
      return;
    }

    const button=$("#admin-create-submit");
    button.disabled=true;

    try{
      const result=await gateApi(session.access_token,"admin_create",{
        email,
        display_name:$("#admin-new-name").value.trim(),
        access_source:adminTab==="vk_donut"?"vk_donut":"invite",
        expires_at:expiryFromPreset(),
        note:adminTab==="vk_donut"?$("#admin-new-note").value.trim():""
      });

      $("#admin-create-form").hidden=true;
      $("#admin-new-email").value="";
      $("#admin-new-name").value="";
      $("#admin-new-note").value="";
      showAdminMessage(result.message||"");
      await refreshAdmin();
    }catch(e){
      error.textContent=e.message||"Не удалось создать доступ.";
      error.hidden=false;
    }finally{
      button.disabled=false;
    }
  }

  function showAdminMessage(text){
    $("#admin-message-text").textContent=text;
    $("#admin-message-popover").hidden=false;
  }

  async function copyAdminMessage(){
    const text=$("#admin-message-text").textContent||"";
    try{
      await navigator.clipboard.writeText(text);
      $("#admin-message-copy").textContent="Скопировано ✓";
      setTimeout(()=>$("#admin-message-copy").textContent="Скопировать",1500);
    }catch(_){}
  }

  function downloadAdminMessage(){
    const text=$("#admin-message-text").textContent||"";
    const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="Spotlight_5-7_access.txt";
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }

  function adminRow(id){
    return adminUsers.find(u=>u.user_id===id)||null;
  }

  async function handleAdminListClick(e){
    const button=e.target.closest("button");
    if(!button)return;
    const session=readSession();

    try{
      if(button.dataset.toggle){
        const u=adminRow(button.dataset.toggle);
        const next=u?.status==="blocked"?"active":"blocked";
        if(!confirm(`${next==="blocked"?"Заблокировать":"Разблокировать"} ${u?.email||"пользователя"}?`))return;
        await gateApi(session.access_token,"admin_update",{user_id:button.dataset.toggle,status:next});
        await refreshAdmin();
        return;
      }

      if(button.dataset.plus30){
        const u=adminRow(button.dataset.plus30);
        const base=u?.expires_at&&new Date(u.expires_at).getTime()>Date.now()?new Date(u.expires_at):new Date();
        base.setDate(base.getDate()+30);
        await gateApi(session.access_token,"admin_update",{user_id:button.dataset.plus30,status:"active",expires_at:base.toISOString()});
        await refreshAdmin();
        return;
      }

      if(button.dataset.forever){
        await gateApi(session.access_token,"admin_update",{user_id:button.dataset.forever,status:"active",expires_at:null});
        await refreshAdmin();
        return;
      }

      if(button.dataset.reset){
        const u=adminRow(button.dataset.reset);
        if(!confirm(`Сбросить пароль ${u?.email||"пользователя"}?`))return;
        const result=await gateApi(session.access_token,"admin_reset_password",{user_id:button.dataset.reset});
        showAdminMessage(result.message||"");
        await refreshAdmin();
      }
    }catch(err){
      alert(err.message||"Ошибка управления доступом.");
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
        showFirstPassword(session,status);
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
