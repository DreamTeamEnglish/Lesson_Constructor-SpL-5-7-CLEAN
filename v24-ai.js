// ============================================================
// CLEAN v24 · External AI document flow
// AI creates content; constructor owns structure + formatting.
// No embedded paid Yandex generation.
// ============================================================
(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let returnedText='';

  function typeName(){try{return name(TYPES,type)}catch(_){return type}}
  function formName(){try{return name(FORMS,form)}catch(_){return form}}
  function minutes(s){return (s.blocks||[]).reduce((n,b)=>n+Number(b.min||0),0)}

  function prompt(){
    const kit=typeof buildLessonKit==='function'?buildLessonKit(lesson):null;
    const selected=(stages||[]).map((s,i)=>`${i+1}. ${s.id} · ${s.title} · ${minutes(s)} мин\nЦель этапа: ${s.purpose}\n${(s.blocks||[]).map((b,j)=>`  ${j+1}) ${b.title} · ${b.min} мин · ${b.mode}\n     Учитель: ${b.teacher}\n     Учащиеся: ${b.students}\n     Инструкция: ${b.instruction}\n     Образец: ${b.example}\n     Материалы: ${b.materials}\n     Поддержка: ${b.support}\n     Усложнение: ${b.challenge}\n     Критерий: ${b.criterion}`).join('\n')}`).join('\n\n');
    const success=(kit?.success||[]).map(x=>`- ${x}`).join('\n');
    return `Ты — высококвалифицированный методист по английскому языку, эксперт по ФГОС/ФОП и автор подробных практических материалов для учителя. Создай ТРИ профессиональных документа на РУССКОМ языке. Английский используй только там, где его реально увидит/произнесёт ученик: в инструкциях, репликах, языковых опорах и полных примерах.

КРИТИЧЕСКОЕ ПРАВИЛО №1 — НЕ ПЕРЕПРОЕКТИРОВАТЬ УРОК:
Ни один выбранный учителем этап, блок, Activity, время, тип или форма не должны исчезнуть, быть заменены или слиты с другим. Ты раскрываешь уже собранный сценарий содержательно и методически, но не меняешь его архитектуру.

КРИТИЧЕСКОЕ ПРАВИЛО №2 — НЕ СНИЖАТЬ ГЛУБИНУ:
Запрещены пустые формулы вроде «учитель объясняет», «учащиеся выполняют задание», «проводится рефлексия». Для каждого блока должно быть понятно, ЧТО именно делает учитель, ЧТО именно делает ученик, КАК звучит инструкция, КАК выглядит пример и ПО ЧЕМУ проверяется результат.

КРИТИЧЕСКОЕ ПРАВИЛО №3 — НЕ СМЕШИВАТЬ ЯЗЫКИ В ОДНОЙ ФРАЗЕ:
Методический текст для учителя — по-русски. Ученическая инструкция/реплика/модель — по-английски. Не вставляй русские названия грамматики или продукта внутрь английского предложения.

УРОК
Класс: 6
УМК: Spotlight 6
Модуль: ${lesson.module_title}
Урок: ${lesson.legacy_id} · ${lesson.section_title}
Тема по КТП: ${lesson.ktp_topic}
Фокус: ${lesson.focus}
Грамматика: ${lesson.grammar_focus}
Речевые умения: ${lesson.skills}
Итоговый речевой продукт: ${lesson.product}
Лексический банк: ${(lesson.lexical_bank||[]).join(', ')}
Функциональные модели: ${(lesson.functional_frames||[]).join(' · ')}
Ситуация: ${lesson.micro_situation}
Тип урока: ${typeName()}
Форма урока: ${formName()}
Can-do: ${kit?.canDo||`I can complete the final lesson task.`}
Критерии успеха:
${success}

ЗОЛОТОЙ КАРКАС УРОКА — СОХРАНИТЬ БЕЗ ПОТЕРЬ:
${selected}

КАНОНИЧЕСКАЯ ЛОГИКА 6 ЭТАПОВ:
P1 Мотивация и актуализация — смысловой вход и извлечение опорных знаний.
P2 Целеполагание и критерии — наблюдаемая can-do цель и понятные ученику признаки успеха.
P3 Языковая и речевая подготовка — лексика, грамматика и речевые модели как средства будущей коммуникации.
P4 Центральная коммуникативная задача — адресат, мотив, речевая задача и наблюдаемый продукт.
P5 Контроль, обратная связь и коррекция — индивидуальное доказательство результата → самопроверка → адресная коррекция.
P6 Рефлексия и перенос — доказательство can-do → осознанная трудность → конкретный следующий шаг → мост к домашнему заданию.

МЕТОДИЧЕСКИЕ ТРЕБОВАНИЯ:
1. Сохрани шесть этапов ровно с указанными названиями и текущим временем.
2. Цели формулируй через наблюдаемый результат ученика, а не через действие учителя.
3. Для КАЖДОГО выбранного блока обязательно раскрой: назначение; подготовку; действия учителя; действия учащихся; точную ученическую инструкцию; полный тематический пример; способ проверки; поддержку; усложнение; результат блока.
4. Реплики и образцы должны быть реально произносимыми шестиклассником и соответствовать конкретной теме, а не быть универсальной заглушкой.
5. Речевые опоры давай как scaffold: сначала полнее, затем предусматривай снятие части опор.
6. P4 обязан приводить к законченному наблюдаемому продукту для понятного адресата.
7. P5: сначала самостоятельное выполнение/доказательство результата, затем самопроверка по чек-листу, затем конкретная коррекция. Не превращай P5 в повторное объяснение грамматики.
8. P6: ученик приводит доказательство can-do, называет одну трудность/успех и выбирает конкретный следующий шаг. Не повторяй P2.
9. Дифференциация должна реально менять степень опоры или сложность: банк слов, начала фраз, частично заполненная схема, дополнительное условие, снятие опор и т. п.
10. Фактические сведения не выдумывай. Опирайся на данные урока и предложенные материалы; если конкретный факт не задан, не подменяй его случайным «правдоподобным» фактом.
11. Не используй внутренний методический жаргон там, где можно сказать проще и понятнее.
12. Не добавляй комментарии вне служебных маркеров.
13. Не добавляй в документы дату печати, URL, локальные пути, служебные строки браузера или технические маркеры конструктора.

ЭТАЛОН ТЕХНОЛОГИЧЕСКОЙ КАРТЫ:
Она должна быть не краткой справкой, а полноценной картой урока и включать:
- паспорт урока: класс, УМК, модуль/урок, тема, тип, форма, время, уровень;
- цель урока;
- образовательные, развивающие и воспитательные задачи;
- личностные, метапредметные и предметные планируемые результаты;
- оборудование и ресурсы;
- все P1–P6 с временем и формой работы;
- для каждого этапа: цель этапа, действия учителя, действия учащихся, контроль/критерий, конкретный результат и уместные УУД.
УУД не перечисляй формально: связывай их с реальным действием ученика.

ЭТАЛОН ПОДРОБНОГО КОНСПЕКТА:
Для каждого P1–P6 и каждого выбранного блока последовательно дай:
- цель/назначение;
- подготовку и материалы;
- подробное проведение по шагам;
- точную реплику/инструкцию учителя;
- полный тематический пример на английском;
- проверку результата;
- мини-рефлексию там, где она функциональна;
- базовую поддержку и усложнение;
- итог этапа и форму контроля.
Конспект должен быть пригоден для проведения урока без необходимости «додумывать», что делать дальше.

ЭТАЛОН ДОМАШНЕГО ЗАДАНИЯ — РОВНО 5 ВАРИАНТОВ:
1. Базовый — доступная самостоятельная версия продукта.
2. Творческий — перенос той же речевой задачи в новую ситуацию.
3. Коммуникативный — устное взаимодействие / представление с вопросом или откликом.
4. Парный — information gap / материал для партнёра.
5. Игровой — шесть тематических карточек/заданий для следующего урока.

Для КАЖДОГО из пяти вариантов обязательны:
- рекомендуемое время;
- понятная ситуация для ребёнка;
- «Делай по шагам» — конкретный план;
- банк слов/идей или чёткий источник выбора;
- полезные английские фразы;
- ПОЛНЫЙ развёрнутый тематический пример, а не только начало предложения;
- что именно сдать/принести/подготовить;
- чек-лист «Проверь себя» из 4 конкретных пунктов.
В конце дай готовую дружелюбную реплику учителя, как объявить выбор из пяти вариантов классу.
Домашняя работа должна продолжать результат текущего урока, а не начинать новую случайную тему.

ФГОС / ФОП:
- соблюдай деятельностную и коммуникативную логику;
- планируемые результаты должны соответствовать именно этому уроку;
- контроль и критерии должны быть наблюдаемыми;
- формы работы и ресурсы — конкретными;
- рефлексия связана с can-do и доказательством результата.

ВЕРНИ ОТВЕТ СТРОГО С МАРКЕРАМИ:
[[TECH_MAP_BEGIN]]
## Паспорт урока
## Цель урока и задачи
## Планируемые результаты
## Оборудование и ресурсы
## Технологическая карта: P1–P6
Для каждого этапа: название, время, цель этапа, форма работы, действия учителя, действия учащихся, контроль/критерий, результат, уместные УУД.
## Оценивание и коррекция
[[TECH_MAP_END]]
[[LESSON_PLAN_BEGIN]]
## Паспорт урока
## Цели и ожидаемый результат
## Языковой материал
## Подробный ход урока
Для каждого P1–P6 и каждого выбранного блока: назначение, подготовка, проведение, точная инструкция/реплика, полный тематический пример, проверка, поддержка, усложнение, результат.
## Рефлексия и завершение
[[LESSON_PLAN_END]]
[[HOMEWORK_BEGIN]]
## Связь с результатом урока
## Вариант 1 — базовый
## Вариант 2 — творческий
## Вариант 3 — коммуникативный
## Вариант 4 — парный
## Вариант 5 — игровой
Для каждого варианта: время, ситуация, пошаговый план, банк/источник выбора, языковые опоры, полный развёрнутый тематический пример, что сдать, чек-лист самопроверки.
## Реплика учителя для объявления задания
[[HOMEWORK_END]]`;
  }

  function overlay(title,step,body,actions=''){
    $('.v24-ai-modal')?.remove();
    const m=document.createElement('div');m.className='v24-ai-modal';
    const steps=['Урок и промпт','Выбор ИИ','Возврат ответа','Документы'];
    m.innerHTML=`<section class="v24-ai-panel"><header><div><small>ВНЕШНИЙ ИИ · ЕДИНЫЙ СТАНДАРТ</small><h2>${esc(title)}</h2></div><button data-ai-close>×</button></header><div class="v24-ai-steps">${steps.map((x,i)=>`<span class="${i+1===step?'on':''}">${i+1}. ${x}</span>`).join('')}</div><div class="v24-ai-body">${body}</div><footer>${actions}</footer></section>`;
    m.querySelector('[data-ai-close]').onclick=()=>m.remove();document.body.appendChild(m);return m;
  }

  function templateHTML(){return `<article class="v24-template"><div class="v24-doc-brand"><b>Копилочка Английского</b><span>Spotlight 6 · ${esc(lesson.legacy_id)}</span></div><h2>${esc(lesson.ktp_topic)}</h2><p><b>${esc(typeName())}</b> · ${esc(formName())}</p>${stages.map((s,i)=>`<section><h3>${i+1}. ${esc(s.title)} <small>${minutes(s)} мин</small></h3><p>${esc(s.purpose)}</p>${s.blocks.map(b=>`<div><b>${esc(b.title)}</b><span>${b.min} мин · ${esc(b.mode)}</span><p>${esc(b.instruction)}</p><small>Критерий: ${esc(b.criterion)}</small></div>`).join('')}</section>`).join('')}</article>`}

  function step1(){
    const p=prompt();
    const m=overlay('Урок-шаблон и профессиональный промпт',1,`<p>Сценарий уже собран. Внешний ИИ не меняет структуру урока — он раскрывает её содержательно и возвращает три документа по строгим маркерам.</p><div class="v24-ai-tabs"><button class="on" data-view="template">Урок-шаблон</button><button data-view="prompt">Профессиональный промпт</button></div><div data-pane="template" class="v24-scroll">${templateHTML()}</div><div data-pane="prompt" hidden><textarea class="v24-prompt-text">${esc(p)}</textarea></div>`,`<button data-copy>Скопировать промпт</button><button class="gold" data-next>Выбрать ИИ</button>`);
    m.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{m.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('on',x===b));m.querySelectorAll('[data-pane]').forEach(x=>x.hidden=x.dataset.pane!==b.dataset.view)});
    m.querySelector('[data-copy]').onclick=async()=>{await navigator.clipboard.writeText(p);m.querySelector('[data-copy]').textContent='Скопировано ✓'};
    m.querySelector('[data-next]').onclick=step2;
  }

  function step2(){
    const services=[['ChatGPT','https://chatgpt.com/'],['DeepSeek','https://chat.deepseek.com/'],['Qwen','https://chat.qwen.ai/'],['Алиса AI','https://alice.yandex.ru/'],['GigaChat','https://giga.chat/']];
    const p=prompt();
    const m=overlay('Выберите удобный внешний ИИ',2,`<div class="v24-ai-note"><b>Можно выбрать любой сервис.</b> Промпт будет скопирован, а итоговый ответ сайт оформит сам — поэтому документы сохранят единый вид.</div><div class="v24-ai-services">${services.map(x=>`<article><h3>${x[0]}</h3><p>Скопировать промпт и открыть сервис.</p><button data-service="${x[1]}">Открыть</button></article>`).join('')}</div>`,`<button data-back>Назад</button><button class="gold" data-return>Я получил(а) ответ ИИ</button>`);
    m.querySelectorAll('[data-service]').forEach(b=>b.onclick=async()=>{await navigator.clipboard.writeText(p);window.open(b.dataset.service,'_blank','noopener')});
    m.querySelector('[data-back]').onclick=step1;m.querySelector('[data-return]').onclick=step3;
  }

  function step3(){
    const m=overlay('Верните результат в конструктор',3,`<p>Скопируйте <b>весь</b> ответ ИИ вместе со служебными маркерами.</p><textarea class="v24-returned" placeholder="Вставьте сюда полный ответ ИИ…">${esc(returnedText)}</textarea><small>Текст разбирается в вашем браузере. Конструктор ищет три служебных раздела и затем оформляет их одинаково.</small>`,`<button data-back>Назад</button><button class="gold" data-parse>Проверить и оформить</button>`);
    m.querySelector('[data-back]').onclick=step2;
    m.querySelector('[data-parse]').onclick=()=>{returnedText=m.querySelector('.v24-returned').value;const parts=parse(returnedText);const missing=[];if(!parts.map)missing.push('технологическая карта');if(!parts.plan)missing.push('подробный конспект');if(!parts.homework)missing.push('домашнее задание');if(missing.length){const box=m.querySelector('.v24-ai-body');box.insertAdjacentHTML('afterbegin',`<div class="v24-ai-error">Не удалось распознать: <b>${missing.join(', ')}</b>. Проверьте служебные маркеры.</div>`);return}showDocs(parts)};
  }

  function parse(text){
    const part=k=>{const m=String(text||'').match(new RegExp(`\\[\\[\\s*${k}_BEGIN\\s*\\]\\]([\\s\\S]*?)\\[\\[\\s*${k}_END\\s*\\]\\]`,'i'));return m?.[1]?.trim()||''};
    return {map:part('TECH_MAP'),plan:part('LESSON_PLAN'),homework:part('HOMEWORK')};
  }

  function inline(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')}
  function format(text){
    const lines=String(text||'').replace(/```(?:markdown|text)?/gi,'').split(/\r?\n/);let html='',list=false;
    const close=()=>{if(list){html+='</ul>';list=false}};
    for(const raw of lines){const line=raw.trim();if(!line){close();continue}const h=line.match(/^#{1,4}\s+(.+)$/);if(h){close();html+=`<h3>${inline(h[1])}</h3>`;continue}const bullet=line.match(/^[-*•]\s+(.+)$/);if(bullet){if(!list){html+='<ul>';list=true}html+=`<li>${inline(bullet[1])}</li>`;continue}close();const pair=line.match(/^([^:]{2,70}):\s*(.+)$/);html+=pair?`<p><b>${esc(pair[1])}:</b> ${inline(pair[2])}</p>`:`<p>${inline(line)}</p>`}close();return html;
  }

  function showDocs(parts){
    let activeDoc='map';const labels={map:'Технологическая карта',plan:'Подробный конспект',homework:'Домашнее задание'};
    const draw=()=>{const m=overlay('Единый комплект документов',4,`<p>Содержание получено от выбранного ИИ. Структуру и оформление задаёт Конструктор.</p><div class="v24-ai-tabs">${Object.entries(labels).map(([k,v])=>`<button data-doc="${k}" class="${k===activeDoc?'on':''}">${v}</button>`).join('')}</div><article class="v24-final-doc"><div class="v24-doc-brand"><b>Копилочка Английского</b><span>Spotlight 6 · ${esc(lesson.legacy_id)} · ${esc(lesson.ktp_topic)}</span></div><h2>${labels[activeDoc]}</h2>${format(parts[activeDoc])}</article>`,`<button data-fix>Исправить ответ</button><button class="gold" data-print>Печать / PDF</button>`);m.querySelectorAll('[data-doc]').forEach(b=>b.onclick=()=>{activeDoc=b.dataset.doc;draw()});m.querySelector('[data-fix]').onclick=step3;m.querySelector('[data-print]').onclick=()=>window.print()};draw();
  }

  window.KA_V24_AI={open:step1,buildPrompt:prompt,parse};
})();
