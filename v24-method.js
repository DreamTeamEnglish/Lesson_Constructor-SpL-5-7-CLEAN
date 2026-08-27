// ============================================================
// CLEAN v24.0.8 · Methodical normalization layer for GOLD 6
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
    if(cat==='dialogue')return`I can take part in ${article(bare)} and respond clearly and appropriately.`;
    if(cat==='rules'){
      if(/^tourist advice$/i.test(bare))return`I can give clear tourist advice and explain why it is useful.`;
      return`I can give clear rules or advice in ${article(bare)}.`;
    }
    if(cat==='survey')return`I can ask for information, organise the results and present them clearly.`;
    if(cat==='process'){
      if(/puppet/i.test(bare))return`I can explain a process step by step and give clear instructions for making a puppet.`;
      return`I can explain a process step by step and write ${article(bare)}.`;
    }
    if(cat==='game')return`I can use the lesson language to create and explain ${article(bare)}.`;
    if(cat==='present')return`I can present information clearly in ${article(bare)}.`;
    return`I can organise information and create ${article(bare)} for a clear purpose.`;
  }

  function success(l){
    return[
      'I use at least 5 lesson words accurately.',
      'I use at least two useful lesson phrases.',
      `I use the target language (${grammarEn(l)}) accurately.`,
      'My final result is clear and complete for another person.'
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
      out.example=`I think these details are connected because they mention ${w[0]||'the topic'} and ${w[1]||w[0]||'the lesson'}.`;
    }
    if(code==='P1-02')out.example=`${w.slice(0,3).join(' — ')}. These words are connected with today's topic.`;
    if(code==='P2-01'){
      out.instruction=`The final task is ${article(bare)}. What will you need to do? Choose two signs of success.`;
      out.example=newCanDo;
    }
    if(code==='P3-01')out.example=`${w[0]||'Word 1'} and ${w[1]||'word 2'} belong together because they are connected with today's topic.`;
    if(code==='P3-02'){
      out.instruction=`Study the models: ${ff}. Find the target pattern “${gram}”. Explain what it helps the speaker do.`;
      out.example=`${l.micro_situation} Model language: ${f.slice(0,2).join(' ')}`;
    }
    if(code==='P4-01'){
      out.instruction=`Context: ${l.micro_situation} Create ${article(bare)}. Use at least five lesson words and two useful phrases: ${ff}.`;
      if(!/^English in Use/i.test(String(l.section_title||'')))out.example=`${l.micro_situation} Final task: ${article(bare)}. Useful language: ${ff}.`;
    }
    if(code==='P4-02'){
      out.instruction=`Do not show your sheet. Ask questions with the lesson phrases and complete all missing information.`;
    }
    if(code==='P4-03'){
      out.instruction=`Mission 1: use the topic words. Mission 2: apply ${gram}. Mission 3: solve a new situation. Mission 4: create ${article(bare)}.`;
    }
    if(code==='P4-04'){
      out.instruction=`Create ${article(bare)} for a real audience. Include accurate information, lesson language and a clear message.`;
      out.example=`${l.micro_situation} Useful language: ${ff}.`;
    }
    if(code==='P5-01'){
      out.instruction=`Individually create a new short version of ${article(bare)}. Use three lesson words and the target language: ${gram}. Do not copy the class example.`;
    }
    if(code==='P5-02'){
      out.instruction=`Correct the lesson sentences. Check vocabulary, ${gram}, and meaning. Explain at least one correction.`;
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
      out[0].steps=[`Определи, для кого и зачем ты создаёшь «${l.product}».`,'Используй не менее пяти слов из тематического банка.',`Используй минимум две речевые модели: ${f.slice(0,3).join(' · ')}.`,`Проверь языковой фокус: ${l.grammar_focus}.`];
      out[0].bank=bank;out[0].frames=f.join(' · ');
      out[0].check=['Задача и адресат понятны','Использовано минимум 5 слов темы','Есть минимум 2 речевые модели','Языковой фокус проверен'];
    }
    if(out[1]){
      out[1].title=`New situation · ${bare}`;
      out[1].situation='Перенеси речевую задачу урока в новую ситуацию: измени адресата, место, героя, данные или условие.';
      out[1].steps=['Измени одно важное условие исходной ситуации.',`Сохрани итоговую задачу: «${l.product}».`,'Используй минимум пять слов и две речевые модели урока.','Добавь одну новую содержательную деталь и проверь язык.'];
      out[1].bank=bank;out[1].frames=f.join(' · ');
      out[1].check=['Ситуация действительно новая','Задача урока сохранена','Добавлена новая деталь','Язык проверен'];
    }
    if(out[2]){
      out[2].title='Speak, explain and answer';
      out[2].situation=`Подготовь короткое устное представление результата по теме «${l.ktp_topic}» и ответь на уточняющий вопрос.`;
      out[2].steps=['Составь план из 3–4 смысловых пунктов.','Используй минимум пять слов темы и две речевые модели.','Отрепетируй сообщение 45–60 секунд.','Попроси партнёра задать один уточняющий вопрос и ответь на него.'];
      out[2].bank=bank;out[2].frames=f.join(' · ');
      out[2].deliver='План и устное сообщение 45–60 секунд + ответ на один вопрос.';
      out[2].check=['Есть понятная структура','Использована лексика урока','Есть речевые модели','Ответ на вопрос понятен'];
    }
    if(out[3]){
      out[3].title='Partner information gap';
      out[3].situation='Подготовь для партнёра половину задания с недостающей тематической информацией.';
      out[3].steps=['Создай небольшую таблицу, схему, карту, карточки или список фактов.','Оставь четыре смысловых пропуска.','Подготовь четыре вопроса или подсказки, которые помогут восстановить информацию.','Сделай отдельный ключ и проверь однозначность ответов.'];
      out[3].bank=bank;out[3].frames=f.join(' · ');
      out[3].check=['Есть 4 смысловых пропуска','Вопросы помогают получить информацию','Партнёр должен общаться, а не угадывать','Ключ однозначен'];
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

  function recommendedDefaults(l){
    const section=String(l?.section_title||'');
    if(/^English in Use/i.test(section))return['T05','F06'];
    if(/^Culture Corner/i.test(section)||/^Spotlight on Russia/i.test(section))return['T10','F11'];
    if(/^Across the Curriculum/i.test(section))return['T11','F07'];
    if(/^Literature:/i.test(section))return['T03','F05'];
    return['T01','F01'];
  }

  function installRecommendedDefaults(){
    if(window.__KA_DEFS_2408)return true;
    if(typeof window.defs!=='function')return false;
    window.defs=function(l){return recommendedDefaults(l)};
    window.__KA_DEFS_2408=true;
    return true;
  }

  function augmentFrames(){
    (window.LESSONS||[]).forEach(l=>{
      const add=FRAME_ADDITIONS[idOf(l)];
      if(add && !(l.functional_frames||[]).includes(add))l.functional_frames.push(add);
    });
  }

  function install(){
    if(window.__KA_METHOD_2408)return true;
    if(!Array.isArray(window.LESSONS)||typeof window.buildLessonKit!=='function')return false;
    augmentFrames();
    const base=window.buildLessonKit;
    window.buildLessonKit=function(l){
      const kit=base(l);
      if(idOf(l)==='1a')return kit;
      const goal=canDo(l);
      const activities=(kit.activities||[]).map(a=>tuneActivity(l,a,goal));
      const homework=tuneHomework(l,kit.homework||[]);
      return {...kit,canDo:goal,success:success(l),activities,homework};
    };
    window.KA_METHOD_V24={version:'24.0.8',productBare,grammarEn,canDo,success,recommendedDefaults};
    window.__KA_METHOD_2408=true;
    installRecommendedDefaults();
    const defaultsTimer=setInterval(()=>{if(installRecommendedDefaults())clearInterval(defaultsTimer)},25);
    try{ if(typeof reset==='function')setTimeout(()=>reset(),0); }catch(_){}
    return true;
  }

  if(!install()){
    const timer=setInterval(()=>{if(install())clearInterval(timer)},25);
  }
})();
