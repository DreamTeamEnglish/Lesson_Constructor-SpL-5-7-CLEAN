// ============================================================
// CLEAN v24.1.3 · Methodical normalization layer for GOLD 6
// Keeps the original GOLD data/content-engine intact and corrects
// systemic language/UX issues for the 69 generated lesson profiles.
// ============================================================
(function(){
  'use strict';

  const PRODUCT_EN={
    'профиль члена семьи':'family-member profile',
    'личная карточка':'personal profile card',
    'мини-путеводитель':'mini-guide',
    'факт-карта страны':'country fact card',
    'диалог-знакомство':'introduction dialogue',
    'викторина о Земле':'Earth quiz',
    'абзац о своей семье':'paragraph about my family',
    'личный календарь':'personal calendar',
    'план и описание комнаты':'room plan and description',
    'карта района':'neighbourhood map',
    'заметка об известной улице':'short note about a famous street',
    'диалог в службе сервиса':'service-call dialogue',
    'план комнаты в масштабе':'scale room plan',
    'описание дачи':'description of a dacha',
    'памятка Road Safety':'road-safety guide',
    'диалог по карте':'map-based route dialogue',
    'профиль известного человека':'profile of a famous person',
    'советы туристу':'tourist advice',
    'диалог Asking the way':'asking-the-way dialogue',
    'плакат дорожных знаков':'road-sign poster',
    'памятка иностранному туристу':'guide for a foreign tourist',
    'мой обычный день':'description of my daily routine',
    'телепрограмма класса':'class TV schedule',
    'статья My perfect day':'article about my perfect day',
    'опрос о досуге':'leisure survey',
    'диалог об изменении планов':'dialogue about changing plans',
    'диаграмма класса':'class chart',
    'заметка о своей жизни':'short note about my life',
    'приглашение на праздник':'party invitation',
    'репортаж с праздника':'festival report',
    'речь о празднике':'short talk about a special day',
    'афиша фестиваля':'festival poster',
    'заказ по телефону':'phone-order dialogue',
    'описание иллюстрации':'description of an illustration',
    'афиша события':'event poster',
    'результаты опроса':'survey results',
    'собственная игра':'new game',
    'статья о популярной игре':'article about a popular game',
    'правила настольной игры':'board-game rules',
    'покупка подарка':'gift-shopping dialogue',
    'кукла и инструкция':'puppet with step-by-step instructions',
    'заметка о досуге':'short leisure note',
    'город 100 лет назад':'description of a town 100 years ago',
    'короткая история':'short story',
    'биографическая справка':'short biography',
    'профиль героя':'hero profile',
    'сообщение о пропаже':'lost-property report',
    'музейная карточка':'museum display card',
    'краткая биография':'short biography',
    'кодекс поведения':'code of conduct',
    'совместный план':'shared plan',
    'правила для гостя':'house rules for a guest',
    'диалог о разрешении':'permission dialogue',
    'памятка класса':'class rights-and-rules guide',
    'памятка посетителю':'visitor guide',
    'здоровое меню':'healthy menu',
    'диалог в ресторане':'restaurant dialogue',
    'рецепт блюда':'recipe',
    'реклама заведения':'advert for a place to eat',
    'бронирование столика':'restaurant-booking dialogue',
    'тарелка здорового питания':'healthy-eating plate',
    'рецепт любимого блюда':'recipe for a favourite dish',
    'план путешествия':'travel plan',
    'прогноз для туриста':'weather forecast for a tourist',
    'письмо о выходных':'email about weekend plans',
    'туристическая программа':'tourist programme',
    'бронирование отеля':'hotel-booking dialogue',
    'информационный плакат':'information poster',
    'туристическая брошюра':'tourist brochure'
  };

  const GRAMMAR_EN={
    'Past Simple':'Past Simple',
    'Past Simple: вопросы':'Past Simple questions',
    'Past Simple: неправильные глаголы':'Past Simple irregular verbs',
    'Past Simple: правильные глаголы':'Past Simple regular verbs',
    'Present Continuous':'Present Continuous',
    'Present Continuous for arrangements':'Present Continuous for arrangements',
    'Present Continuous vs Present Simple':'Present Continuous vs Present Simple',
    'Present Continuous: вопросы и отрицание':'Present Continuous questions and negatives',
    'Present Continuous: утверждение':'Present Continuous affirmative forms',
    'Present Simple':'Present Simple',
    'Present Simple vs Present Continuous':'Present Simple vs Present Continuous',
    'Present Simple: вопросы; наречия частотности':'Present Simple questions and adverbs of frequency',
    'be going to':'be going to',
    "can/can't":"can / can't",
    "can/can't: разрешение и запрет":"can / can't for permission and prohibition",
    'can/could в просьбах':'can / could in requests',
    'can/may':'can / may for permission',
    "can; shall; let's":"can / shall / let's for suggestions",
    'countable/uncountable; some/any':'countable and uncountable nouns; some / any',
    'have got; притяжательный падеж':"have got; possessive 's",
    'like/love/enjoy + ing; because':'like / love / enjoy + -ing; because',
    'much/many; a lot of':'much / many / a lot of',
    'must/have to/can':'must / have to / can',
    "must/mustn't; have to":"must / mustn't / have to",
    'quantifiers; повелительное наклонение':'quantifiers; imperative',
    'some/any; is/are there':'some / any; Is / Are there…?',
    'there is/are; предлоги места':'there is / are; prepositions of place',
    'there was/were':'there was / were',
    'to be; вопросительные слова':'to be; question words',
    'used vocabulary; Past Simple':'Past Simple with topic vocabulary',
    'will; be going to':'will / be going to',
    'артикль the с географическими названиями':'the with geographical names',
    'вежливые вопросы':'polite questions',
    'вежливые клише':'polite phrases',
    'вежливые просьбы':'polite requests',
    'вопросы Present Simple':'Present Simple questions',
    'количественные слова':'quantifiers',
    'модальные глаголы':'modal verbs',
    'повелительное наклонение':'imperative',
    'повторение Past Simple':'Past Simple',
    'повторение Present Simple':'Present Simple',
    'повторение there is/are':'there is / are',
    'повторение будущих форм':'future forms',
    'повторение времён':'the target tenses',
    'повторение модуля':'the module language',
    'порядковые числительные; предлоги времени':'ordinal numbers; prepositions of time',
    'предлоги времени и места':'prepositions of time and place',
    'предлоги движения; омографы':'prepositions of movement; homographs',
    'притяжательные прилагательные и местоимения':'possessive adjectives and pronouns',
    'причина и следствие: so/because':'cause and effect: so / because',
    'разговорные клише':'conversational phrases',
    'связки and/but/because':'linkers and / but / because',
    'устойчивые разговорные клише':'fixed conversational phrases',
    'числительные и единицы измерения':'numbers and units of measurement',
    'числительные и факты':'numbers and factual statements'
  };

  const FRAME_ADDITIONS={
    '3r':'Tourists should…',
    '5c':'People celebrate it by…',
    '5d':'Visitors can watch…',
    '10r':'It is famous for…'
  };

  const CYR=/[А-Яа-яЁё]/;
  const idOf=l=>String(l?.legacy_id||'').toLowerCase();
  const sectionOf=l=>String(l?.section_title||'');
  const isAcross=l=>/^Across the Curriculum/i.test(sectionOf(l));
  const isCulture=l=>/^Culture Corner/i.test(sectionOf(l))||/^Spotlight on Russia/i.test(sectionOf(l));
  const productBare=l=>PRODUCT_EN[l.product]||'final lesson product';
  const grammarEn=l=>GRAMMAR_EN[l.grammar_focus]||'target language';
  const frames=l=>(l.functional_frames||[]).filter(Boolean);
  const words=l=>(l.lexical_bank||[]).filter(Boolean);
  const article=bare=>/^(advice|survey results|board-game rules|house rules)/i.test(bare)?bare:`${/^[aeiou]/i.test(bare)?'an':'a'} ${bare}`;

  function category(l){
    const p=String(l.product||'').toLowerCase();
    if(/диалог|заказ|бронирован|покупка/.test(p))return'dialogue';
    if(/правил|памят|совет|кодекс/.test(p))return'rules';
    if(/опрос|результаты опроса|диаграмм/.test(p))return'survey';
    if(/рецепт|инструкц/.test(p))return'process';
    if(/истори|биограф|статья|замет|абзац|описан|профиль|речь|репортаж|сообщение/.test(p))return'present';
    if(/игр|викторин/.test(p))return'game';
    return'create';
  }

  function canDo(l){
    const bare=productBare(l),cat=category(l);
    if(cat==='dialogue'){
      if(/phone-order/i.test(bare))return`I can order something by phone and answer simple questions about my order.`;
      if(/restaurant-booking/i.test(bare))return`I can book a table and answer simple questions about the booking.`;
      if(/hotel-booking/i.test(bare))return`I can book a room and give the information needed.`;
      if(/gift-shopping/i.test(bare))return`I can ask about a gift, choose one and complete the purchase.`;
      if(/asking-the-way|map-based route/i.test(bare))return`I can ask for directions and understand a short route explanation.`;
      if(/permission/i.test(bare))return`I can ask for permission and respond politely.`;
      return`I can take part in a short dialogue and exchange the information I need.`;
    }
    if(cat==='rules'){
      if(isCulture(l))return`I can give a visitor simple advice based on information from the lesson.`;
      if(/^tourist advice$/i.test(bare))return`I can give clear tourist advice and explain why it is useful.`;
      if(/road-safety/i.test(bare))return`I can write clear road-safety rules for another person.`;
      return`I can give clear rules or advice that another person can use.`;
    }
    if(cat==='survey'){
      if(isAcross(l))return`I can ask a short survey question, make a chart and explain what the results show.`;
      return`I can ask for information, organise the results and present them clearly.`;
    }
    if(cat==='process'){
      if(/puppet/i.test(bare))return`I can explain a process step by step and give clear instructions for making a puppet.`;
      return`I can explain a process step by step and write ${article(bare)}.`;
    }
    if(cat==='game')return`I can use the lesson language to create and explain ${article(bare)}.`;
    if(cat==='present')return`I can present information clearly in ${article(bare)}.`;
    return`I can organise information and create ${article(bare)} for a clear purpose.`;
  }

  function success(l){
    if(isAcross(l)&&category(l)==='survey')return[
      'My survey question is clear.',
      'My chart matches the answers I collected.',
      'The numbers or percentages in my report are correct.',
      'Another person can understand what the chart shows.'
    ];
    if(isCulture(l)&&category(l)==='rules')return[
      'My advice comes from the lesson text or notes.',
      'I use lesson phrases to give clear advice.',
      'I do not invent cultural facts.',
      'A visitor can understand and use my advice.'
    ];
    return[
      'My message includes the important topic details.',
      'I use useful words and phrases from the lesson to make my meaning clear.',
      'I use the lesson sentence patterns accurately.',
      'Another person can understand or use my final result.'
    ];
  }

  function manual1ACanDo(){
    return 'I can describe a family member and explain how people in a family are related.';
  }

  function manual1ASuccess(){
    return[
      'I explain who the person is in the family.',
      "I describe the person's appearance and character clearly.",
      "I use has got / hasn't got and 's correctly.",
      'My partner can identify the person from my description.'
    ];
  }

  function titleFor(l,a){
    const code=String(a.id||'').split('-').slice(-2).join('-');
    const map={
      'P1-01':'О чём будет урок?',
      'P1-02':'Вспомни слова по теме',
      'P2-01':'Цель урока: что я смогу?',
      'P3-01':'Разложи слова по смыслу',
      'P3-02':`Языковой фокус: ${l.grammar_focus}`,
      'P3-03':'Скажи по-своему без полной опоры',
      'P4-02':'Спроси партнёра и заполни пропуски',
      'P4-03':'Четыре миссии по теме',
      'P4-04':'Проект для реального адресата',
      'P5-01':'Самостоятельная задача в новой ситуации',
      'P5-02':'Найди, объясни и исправь',
      'P6-01':'Что я уже умею? Следующий шаг'
    };
    if(code==='P4-01'){
      const s=String(l.section_title||'');
      if(/^English in Use/i.test(s))return`Ролевая ситуация: ${l.product}`;
      if(/^Culture Corner/i.test(s)||/^Spotlight on Russia/i.test(s))return`Сравни и представь: ${l.ktp_topic}`;
      if(/^Across the Curriculum/i.test(s)||/^Literature:/i.test(s))return`Мини-проект: ${l.ktp_topic}`;
      return`Главная задача: ${l.product}`;
    }
    return map[code]||a.title;
  }

  function tuneActivity(l,a,newCanDo){
    const out={...a,title:titleFor(l,a)};
    const w=words(l),f=frames(l),bare=productBare(l),gram=grammarEn(l),ff=f.join(' · ');
    const code=String(a.id||'').split('-').slice(-2).join('-');
    if(code==='P1-01'){
      out.instruction=`Read the situation: ${l.micro_situation} Name two key details. What may today's lesson be about?`;
      if(isAcross(l)&&category(l)==='survey'){
        out.example=`I can read "surveys leisure habits" and "turns answers into a chart". I think the lesson is about a survey and a chart.`;
      }else if(isCulture(l)){
        out.example=`I can read "international visitor" and "Russia". The students need to prepare advice. I think the lesson is about advice for a visitor to Russia.`;
      }else{
        out.example=`I think these details are connected because they are both in the situation I can see or read.`;
      }
    }
    if(code==='P1-02')out.example=`${w.slice(0,3).join(' — ')}. These words are connected with today's topic.`;
    if(code==='P2-01'){
      out.instruction=`The final task is ${article(bare)}. What will you need to do? Choose two signs of success.`;
      out.example=newCanDo;
    }
    if(code==='P3-01'){
      out.example=`${w[0]||'Word 1'} and ${w[1]||'word 2'} belong together because they are connected with today's topic.`;
      out.criterion='Слова распределены осмысленно; ученик может объяснить хотя бы один выбор и использовать лексику в понятном контексте.';
    }
    if(code==='P3-02'){
      if(isAcross(l)&&category(l)==='survey'){
        out.instruction=`Study the survey questions Do you…? / How often do you…? and the result models ${ff}. Write one clear survey question. Then use the sample data to write one correct result sentence.`;
        out.example=`Question: Do you play sport after school? Sample data: 10 students — 4 yes, 6 no. Result: 40 per cent of students play sport after school.`;
        out.criterion='Ученик составляет понятный вопрос для опроса и описывает данные без расхождения между количеством ответов и результатом.';
      }else if(isCulture(l)){
        out.instruction=`Study the models: ${ff}. Decide which one gives advice, which one reports a lesson-based norm and which one compares information. Use It is similar to… only when the text or notes give a real basis for comparison.`;
        out.example=`Visitors should follow the advice in the lesson text. Use It is similar to… only if you can point to two lesson-based ideas that are really similar.`;
        out.criterion='Модель выбрана по смыслу; культурное содержание опирается на текст или записи урока, а сравнение не придумано ради конструкции.';
      }else{
        out.instruction=`Study the models: ${ff}. What do the highlighted sentence patterns help you say or ask? Make two examples of your own.`;
        out.example=`${l.micro_situation} Model language: ${f.slice(0,2).join(' ')}`;
      }
    }
    if(code==='P4-01'){
      if(isAcross(l)&&category(l)==='survey'){
        out.mode='группы → короткий парный/галерейный обмен';
        out.teacher='Помогает каждой группе сформулировать один короткий вопрос. Организует быстрый сбор ровно 10 ответов или выдаёт готовый набор из 10 ответов, если время/численность класса не позволяют реальный опрос. Требует сначала tally, затем диаграмму, затем описание. Длинные фронтальные выступления заменяет коротким обменом между группами.';
        out.students='Задают один согласованный вопрос, фиксируют 10 ответов, считают частоты, строят bar chart и готовят 3–4 предложения, которые точно соответствуют диаграмме. Проценты используют только после проверки расчёта.';
        out.instruction=`Ask one clear survey question. Collect or use exactly 10 answers. Make a bar chart and explain what it shows. Use ${ff} where they help. If you use percentages, check that they match the data.`;
        out.example=`We asked 10 students about weekend activities. 4 watch TV, 3 play sport, 2 play video games and 1 reads. The chart shows 40%, 30%, 20% and 10%. Most students watch TV.`;
        out.materials='карточка вопроса; tally table на 10 ответов; шаблон bar chart; карандаши/линейка; при необходимости калькулятор';
        out.support='готовые начала Do you…? / How often do you…?; таблица tally; памятка: 1 из 10 = 10%';
        out.challenge='Сравнить две категории и объяснить разницу, не меняя исходные данные.';
        out.criterion='Вопрос понятен; сумма ответов равна 10; диаграмма соответствует данным; проценты, если используются, рассчитаны верно; устное описание не противоречит диаграмме.';
      }else if(isCulture(l)&&category(l)==='rules'){
        out.mode='индивидуально → пары → малые группы';
        out.teacher='Использует текст текущего раздела Spotlight on Russia / Culture Corner как основной источник. Не требует дополнительных «экспертных источников», если они реально не выданы. Просит отмечать, из какой части текста взят каждый совет.';
        out.students='Извлекают из текста подтверждённые советы/факты, сравнивают находки в паре и создают короткий Visitor Guide. Не добавляют сведения, источник которых не могут показать.';
        out.instruction=`Use only information you can point to in the lesson text or your lesson notes. Create a short visitor guide. If you cannot show the source for a cultural point, do not add it. Use ${ff} where they fit the meaning.`;
        out.example=`Visitor Guide: choose advice from the Spotlight on Russia text, write it in simple English and keep a note of where each idea came from. Do not add a "typical Russian custom" unless it is actually in the lesson source.`;
        out.materials=`учебник Spotlight 6, текст раздела ${l.legacy_id} · ${l.section_title}; карточка «fact → source → advice»; шаблон Visitor Guide; чек-лист`;
        out.support='таблица «факт из текста → простой совет посетителю»; начала Visitors should… / In Russia it is polite to…';
        out.challenge='Сопоставить два подтверждённых фрагмента и использовать It is similar to… только при реальном основании.';
        out.criterion='Каждый культурный совет можно связать с текстом/записью урока; формулировка понятна посетителю; неподтверждённых фактов нет.';
      }else{
        out.instruction=`Context: ${l.micro_situation} Create ${article(bare)}. Use lesson words and useful phrases where they help the meaning: ${ff}.`;
        if(!/^English in Use/i.test(String(l.section_title||'')))out.example=`${l.micro_situation} Final task: ${article(bare)}. Useful language: ${ff}.`;
      }
    }
    if(code==='P4-02'){
      out.instruction=`Do not show your sheet. Ask questions with the lesson phrases and complete all missing information.`;
    }
    if(code==='P4-03'){
      out.instruction=`Mission 1: use the topic words. Mission 2: use today's sentence pattern correctly. Mission 3: solve a new situation. Mission 4: create ${article(bare)}.`;
    }
    if(code==='P4-04'){
      out.instruction=`Create ${article(bare)} for a real audience. Include accurate information, lesson language and a clear message.`;
      out.example=`${l.micro_situation} Useful language: ${ff}.`;
    }
    if(code==='P5-01'){
      if(isAcross(l)&&category(l)==='survey'){
        out.instruction=`Individually use the new data set to make a mini-chart or write a short report about it. Do not invent or change the data. Check that every number in your report matches the table/chart.`;
        out.teacher='Выдаёт небольшой готовый набор данных, которого достаточно для самостоятельного мини-отчёта. После выполнения открывает модель и критерии; коррекция только адресная.';
        out.students='Самостоятельно читают данные, создают мини-диаграмму или краткий отчёт, сверяют числа и формулировки, исправляют конкретную неточность или отмечают самое сильное доказательство.';
        out.criterion='Самостоятельный продукт точно передаёт заданные данные; числа и формулировки согласованы; самопроверка завершена.';
      }else if(isCulture(l)&&category(l)==='rules'){
        out.instruction=`Individually write a short visitor guide using only facts or advice from the lesson text and your notes. Do not invent a new cultural fact.`;
        out.teacher='Даёт самостоятельную задачу с тем же источником/записями. После выполнения открывает критерии; неподтверждённый факт рассматривается как содержательная ошибка.';
        out.students='Самостоятельно создают короткую памятку, затем проверяют каждый совет по тексту/записям.';
        out.criterion='Памятка самостоятельная и понятная; каждый культурный совет подтверждён материалом урока.';
      }else{
        out.instruction=`Individually create a new short version of ${article(bare)}. Use lesson language that fits the new situation. Do not copy the class example.`;
      }
    }
    if(code==='P5-02'){
      out.instruction=`Correct the lesson sentences. Check the topic words, the lesson sentence pattern and the meaning. Explain at least one correction.`;
    }
    if(code==='P6-01'){
      out.instruction=`Complete: Now I can… My evidence is… Next time I need to…`;
      out.example=`${newCanDo} My evidence is: … Next time I need to…`;
    }
    return out;
  }

  function tuneHomework(l,items){
    const bare=productBare(l),f=frames(l),gram=grammarEn(l),bank=words(l).slice(0,10).join(', ');
    const out=(items||[]).map(x=>({...x,steps:[...(x.steps||[])],check:[...(x.check||[])]}));
    if(out[0]){
      out[0].title=`Core task · ${bare}`;
      out[0].situation=`Подготовь самостоятельную компактную версию итогового продукта «${l.product}».`;
      out[0].steps=[`Определи, для кого и зачем ты создаёшь «${l.product}».`,'Выбери из тематического банка только те слова, которые действительно нужны для смысла.',`Используй подходящие речевые модели: ${f.slice(0,3).join(' · ')}.`,`Перечитай результат как адресат и проверь, всё ли понятно.`];
      out[0].bank=bank;out[0].frames=f.join(' · ');
      out[0].check=['Задача и адресат понятны','Выбранная лексика помогает передать смысл','Речевые модели использованы уместно','Результат понятен без дополнительного объяснения'];
    }
    if(out[1]){
      out[1].title=`New situation · ${bare}`;
      out[1].situation='Перенеси речевую задачу урока в новую ситуацию: измени адресата, место, героя, данные или условие.';
      out[1].steps=['Измени одно важное условие исходной ситуации.',`Сохрани итоговую задачу: «${l.product}».`,'Выбери нужные слова и речевые модели урока по смыслу.','Добавь одну новую содержательную деталь и проверь, понятен ли результат новому адресату.'];
      out[1].bank=bank;out[1].frames=f.join(' · ');
      out[1].check=['Ситуация действительно новая','Задача урока сохранена','Языковые средства подходят новой ситуации','Новая деталь не мешает понятности'];
    }
    if(out[2]){
      out[2].title='Speak, explain and answer';
      out[2].situation=`Подготовь короткое устное представление результата по теме «${l.ktp_topic}» и ответь на уточняющий вопрос.`;
      out[2].steps=['Составь план из 3–4 смысловых пунктов.','Выбери нужные слова и речевые модели урока.','Отрепетируй сообщение 45–60 секунд без чтения полного текста.','Подготовь один возможный вопрос партнёра и короткий ответ; реальный обмен вопросами состоится на следующем уроке.'];
      out[2].bank=bank;out[2].frames=f.join(' · ');
      out[2].deliver='План/карточка с ключевыми словами и готовность выступить 45–60 секунд и ответить на один вопрос на следующем уроке.';
      out[2].check=['Есть понятная структура','Языковые средства помогают передать смысл','Можно говорить по ключевым словам, а не читать','Подготовлен возможный вопрос и понятный ответ'];
    }
    if(out[3]){
      out[3].title='Partner information gap';
      out[3].situation='Самостоятельно подготовь половину задания с недостающей тематической информацией. На следующем уроке используй материал с партнёром, не показывая ключ.';
      out[3].steps=['Создай небольшую таблицу, схему, карту, карточки или список фактов.','Оставь четыре смысловых пропуска.','Подготовь четыре вопроса или подсказки, которые помогут восстановить информацию.','Сделай отдельный ключ и принеси всё на следующий урок для парной работы.'];
      out[3].bank=bank;out[3].frames=f.join(' · ');
      out[3].deliver='Подготовленный материал, вопросы/подсказки и отдельный ключ; взаимодействие с партнёром проходит на следующем уроке.';
      out[3].check=['Есть 4 смысловых пропуска','Вопросы помогают получить информацию','Партнёр должен общаться, а не угадывать','Ключ однозначен и не показывается до проверки'];
    }
    if(out[4]){
      out[4].title='Six-card lesson challenge';
      out[4].situation='Создай мини-игру из шести карточек для короткой разминки следующего урока.';
      out[4].steps=['Сделай шесть разных тематических заданий или ситуаций.','Добавь ответы или отдельный ключ.',`Минимум два задания должны проверять: ${l.grammar_focus}.`,'Проверь, что формулировки понятны без дополнительных объяснений.'];
      out[4].bank=bank;out[4].frames=f.join(' · ');
      out[4].check=['Ровно 6 заданий','Все задания связаны с темой','Есть минимум 2 задания на языковой фокус','Ответы однозначны'];
    }
    // Keep examples in English and free of Russian inserts.
    out.forEach((h,i)=>{
      h.example=`Context: ${l.micro_situation} Useful language: ${f.slice(0,3).join(' · ')}.`;
      if(i===2)h.example=`Model opening: ${f[0]||'Today I want to tell you…'} ${f[1]||''} Follow-up: Could you explain one more detail?`;
      if(i===3)h.example=`Question / clue models: ${f.slice(0,3).join(' · ')}`;
      if(i===4)h.example=`Card model: use one lesson word, one short situation and one clear answer key. Useful language: ${f.slice(0,2).join(' · ')}`;
    });
    return out;
  }


  function tuneSpecialHomework(l,homework){
    const out=(homework||[]).map(h=>({...h,steps:[...(h.steps||[])],check:[...(h.check||[])]}));

    if(isAcross(l)&&category(l)==='survey'){
      if(out[0]){
        out[0].situation='Подготовь небольшой опрос или мини-отчёт по готовым данным. Главное — чтобы вопрос, числа, диаграмма и текст не противоречили друг другу.';
        out[0].steps=['Выбери один понятный вопрос.','Используй ровно 10 ответов или готовую таблицу из 10 ответов.','Сделай tally и диаграмму.','Если пишешь проценты, проверь: 1 ответ из 10 = 10%.','Напиши 3–4 предложения, которые точно описывают диаграмму.'];
        out[0].check=['Есть один ясный вопрос','Сумма ответов равна 10','Диаграмма совпадает с данными','Текст и проценты совпадают с диаграммой'];
      }
      if(out[1]){
        out[1].situation='Создай инфографику по готовому набору данных. Не придумывай проценты отдельно от данных.';
        out[1].check=['Данные заданы до построения диаграммы','Все столбики соответствуют числам','Проценты рассчитаны верно или не используются','Комментарий не противоречит картинке'];
      }
      if(out[4]){
        out[4].steps=['Сделай шесть разных карточек: вопрос для опроса, tally, чтение диаграммы, проверка процента, сравнение данных, короткий вывод.','На каждой карточке дай достаточно данных для однозначного ответа.','На обороте запиши правильный ответ/расчёт.','Проверь математическую и языковую точность.'];
        out[4].check=['Ровно 6 карточек','Карточки проверяют разные действия','Все числа и проценты согласованы','Есть правильный ключ'];
      }
    }

    if(isCulture(l)&&category(l)==='rules'){
      for(const h of out){
        h.bank='Источник содержания: текст текущего раздела Spotlight on Russia / Culture Corner и собственные записи урока. Новые культурные факты не добавлять.';
      }
      if(out[0]){
        out[0].situation='Подготовь короткий Visitor Guide только по материалам текущего урока.';
        out[0].steps=['Открой текст/записи урока.','Выбери несколько реально подтверждённых советов.','Переформулируй их просто и доброжелательно.','Рядом с каждым советом отметь для себя, из какой части материала он взят.','Перечитай глазами посетителя.'];
        out[0].check=['Все советы есть в материалах урока','Нет придуманных культурных фактов','Фразы понятны посетителю','Источник каждого совета можно показать'];
      }
      if(out[1]){
        out[1].situation='Сделай наглядную карточку по тем же подтверждённым советам. Меняй формат, а не культурные факты.';
      }
      if(out[2]){
        out[2].situation='Подготовь 3 коротких совета из текста/записей. На следующем уроке представь их партнёру и ответь на один вопрос.';
      }
      if(out[3]){
        out[3].situation='Подготовь Card A и Card B только на материале урока. На следующем уроке партнёр восстановит пропуски вопросами.';
      }
      if(out[4]){
        out[4].steps=['Сделай шесть разных карточек только по материалу урока.','Используй разные действия: выбрать совет, закончить фразу, проверить источник, выбрать модель, составить совет, добавить подтверждённый пункт.','На обороте запиши ответ или модель.','Проверь, что ни одна карточка не требует знания факта, которого не было на уроке.'];
        out[4].check=['Ровно 6 карточек','Все задания основаны на уроке','Нет стереотипных/придуманных фактов','На каждой карточке есть ответ или модель'];
      }
    }
    return out;
  }

  function augmentManual1ALexicon(l){
    if(idOf(l)!=='1a')return;
    const extra=[
      'grandmother','grandfather','hair','eyes','glasses',
      'fair hair','dark hair','curly hair','kind','patient','funny'
    ];
    l.lexical_bank=l.lexical_bank||[];
    for(const x of extra)if(!l.lexical_bank.includes(x))l.lexical_bank.push(x);
  }

  function tuneManual1A(l,kit){
    const activities=(kit.activities||[]).map(a=>{
      if(a.id!=='1A-P5-01')return {...a};
      return{
        ...a,
        teacher:"Выдаёт новую карточку человека и критерии. После самостоятельного выполнения открывает чек-лист и модель. Если ученик обнаружил неточность, предлагает исправить её другим цветом. Если исправлять нечего, просит отметить самое сильное предложение и критерий, которому оно соответствует.",
        students:"Самостоятельно пишут 4–5 предложений, проводят самопроверку. Исправляют обнаруженную неточность, если она есть; если исправление не требуется, выделяют лучшее доказательство успешного выполнения.",
        criterion:"Есть родственная связь, два признака внешности и характеристика; has got / hasn't got и 's употреблены корректно; родственник угадывается; самопроверка завершена и результат подтверждён конкретным доказательством."
      };
    });
    const homework=(kit.homework||[]).map(h=>({...h,steps:[...(h.steps||[])],check:[...(h.check||[])]}));
    if(homework[2]){
      homework[2].situation='Подготовь короткое устное описание родственника по ключевым словам. На следующем уроке партнёр задаст один вопрос, а ты ответишь.';
      homework[2].steps=['Выбери человека — реального или вымышленного.','Запиши только ключевые слова: relationship, appearance, character.','Отрепетируй описание без чтения полного текста.','Подготовь один возможный вопрос партнёра и короткий ответ; реальный диалог будет на следующем уроке.'];
      homework[2].deliver='Карточка с ключевыми словами и готовность устно описать человека и ответить на вопрос на следующем уроке.';
      homework[2].check=['Я могу говорить по ключевым словам','Описание помогает представить человека','Я использую has got / hasn\'t got и семейные связи по смыслу','Я подготовил возможный вопрос и ответ'];
    }
    if(homework[3]){
      homework[3].situation='Самостоятельно подготовь две карточки information gap о членах семьи. На следующем уроке используй их с партнёром, не показывая ответы.';
      homework[3].steps=['Создай полный профиль персонажа.','Сделай Card A и Card B с разными пропусками.','Подготовь вопросы, которые помогут восстановить пропуски.','На отдельной строке сохрани полный ключ для проверки после разговора.'];
      homework[3].deliver='Card A, Card B и полный ключ; парная работа выполняется на следующем уроке.';
      homework[3].check=['На A и B разные пропуски','Вопросы нужны для получения информации','Партнёру не нужно видеть мой ключ','Полный ответ сохранён для проверки после разговора'];
    }
    return{
      ...kit,
      canDo:manual1ACanDo(),
      success:manual1ASuccess(),
      activities,
      homework
    };
  }

  function recommendedDefaults(l){
    const section=String(l?.section_title||'');
    if(/^English in Use/i.test(section))return['T05','F06'];
    if(/^Culture Corner/i.test(section)||/^Spotlight on Russia/i.test(section))return['T10','F05'];
    if(/^Across the Curriculum/i.test(section))return['T11','F07'];
    if(/^Literature:/i.test(section))return['T03','F05'];
    return['T01','F01'];
  }

  function installRecommendedDefaults(){
    if(window.__KA_DEFS_2413)return true;
    if(typeof window.defs!=='function')return false;
    window.defs=function(l){return recommendedDefaults(l)};
    window.__KA_DEFS_2413=true;
    return true;
  }

  function augmentFrames(){
    (window.LESSONS||[]).forEach(l=>{
      const add=FRAME_ADDITIONS[idOf(l)];
      if(add && !(l.functional_frames||[]).includes(add))l.functional_frames.push(add);
      if(isAcross(l)&&category(l)==='survey'){
        l.functional_frames=l.functional_frames||[];
        for(const x of ['Do you…?','How often do you…?'])if(!l.functional_frames.includes(x))l.functional_frames.push(x);
      }
    });
  }

  function install(){
    if(window.__KA_METHOD_2413)return true;
    if(!Array.isArray(window.LESSONS)||typeof window.buildLessonKit!=='function')return false;
    augmentFrames();
    (window.LESSONS||[]).forEach(augmentManual1ALexicon);
    const base=window.buildLessonKit;
    window.buildLessonKit=function(l){
      const kit=base(l);
      if(idOf(l)==='1a')return tuneManual1A(l,kit);
      const goal=canDo(l);
      const activities=(kit.activities||[]).map(a=>tuneActivity(l,a,goal));
      const homework=tuneSpecialHomework(l,tuneHomework(l,kit.homework||[]));
      return {...kit,canDo:goal,success:success(l),activities,homework};
    };
    window.KA_METHOD_V24={version:'24.1.3',productBare,grammarEn,canDo,success,recommendedDefaults};
    window.__KA_METHOD_2413=true;
    installRecommendedDefaults();
    const defaultsTimer=setInterval(()=>{if(installRecommendedDefaults())clearInterval(defaultsTimer)},25);
    try{ if(typeof reset==='function')setTimeout(()=>reset(),0); }catch(_){}
    return true;
  }

  if(!install()){
    const timer=setInterval(()=>{if(install())clearInterval(timer)},25);
  }
})();
