// ============================================================
// CLEAN v24.2.0 · Methodical normalization layer for GOLD 6
// Keeps the original GOLD data/content-engine intact and corrects
// systemic language/UX issues for the 69 generated lesson profiles.
// ============================================================
(function(){
  'use strict';

  const PRODUCT_EN={
    "проект о значении красного цвета":"project about what red symbolises",
    "абзац по результатам опроса о телепрограммах":"paragraph reporting a TV survey",
    "заметка о своём распорядке дня":"short note about my daily routine",
    "настольная игра по образцу":"board game",
    "постер правил комнаты":"bedroom-rules poster",
    "правила кемпинга":"campsite rules",
    "короткий текст о знаменитом здании":"short text about a famous building",
    "бронирование театральных билетов":"theatre-ticket booking dialogue",
    "листовка для района":"neighbourhood leaflet",
    "список покупок":"shopping list",
    "грибной рецепт":"mushroom recipe",
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
    'диаграмма по результатам опроса':'survey graph',
    'мини-гид по Московскому зоопарку':'mini-guide to Moscow Zoo',
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

  const COURSEBOOK_REGISTRY={"1a":{"coursebook_source":"Spotlight 6 · pp. 6–7 · 1a Family Members","coursebook_canonical_section":"Family Members","coursebook_canonical_topic":"Члены семьи. Внешность","coursebook_canonical_focus":"члены семьи; возраст; внешность","coursebook_canonical_grammar":"possessive adjectives/case; have got","coursebook_canonical_skills":"чтение письма о семье; описание внешности; рассказ о семье","coursebook_facts":["Family members and appearance are the core vocabulary.","The page uses a letter about Bill and his family as the main reading model.","Possessive adjectives/case are practised.","The coursebook writing task is a letter to a pen friend about you and your family."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can describe a family member and explain how people in a family are related.","patch":{}},"1b":{"coursebook_source":"Spotlight 6 · pp. 8–9 · 1b Who are you?","coursebook_canonical_section":"Who are you?","coursebook_canonical_topic":"Личные данные и документы","coursebook_canonical_focus":"виды документов; имя; адрес; телефон; личные данные","coursebook_canonical_grammar":"possessive pronouns","coursebook_canonical_skills":"диалог при вступлении в клуб; запрос и сообщение личной информации; заполнение карточки","coursebook_facts":["The lesson works with forms of identification and personal details.","The model dialogue is about joining a video club.","Possessive pronouns are the target grammar.","A library/membership card is a key practical output."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can give my personal details and complete a simple membership card.","patch":{"grammar_focus":"притяжательные местоимения"}},"1c":{"coursebook_source":"Spotlight 6 · p. 10 · 1c My country","coursebook_canonical_section":"My country","coursebook_canonical_topic":"Страны, национальности и положение на карте","coursebook_canonical_focus":"страны; национальности; стороны света; достопримечательности","coursebook_canonical_grammar":"to be; question words","coursebook_canonical_skills":"чтение статьи о Чили; описание положения на карте; короткий текст о своей стране","coursebook_facts":["Countries and nationalities are central vocabulary.","The reading text is an article about Chile.","Students describe location using a compass/map.","The writing task is a short article about their country."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe where my country is and give a few simple facts about it.","patch":{}},"1d":{"coursebook_source":"Spotlight 6 · p. 11 · Culture Corner · The United Kingdom","coursebook_canonical_section":"Culture Corner: The United Kingdom","coursebook_canonical_topic":"Соединённое Королевство","coursebook_canonical_focus":"части Великобритании; столицы; флаги; карта","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; извлечение фактов; создание короткой факт-карты","coursebook_facts":["The Culture Corner is The United Kingdom.","The source works with the UK map, flags and its constituent countries.","Content should remain source-based and factual."],"coursebook_audit_status":"PASS","verified_can_do":"I can find key facts about the United Kingdom and present them in a simple fact card.","patch":{}},"1e":{"coursebook_source":"Spotlight 6 · p. 12 · English in Use · Introducing & greeting people","coursebook_canonical_section":"English in Use: Introducing & greeting people","coursebook_canonical_topic":"Приветствие и знакомство","coursebook_canonical_focus":"формулы приветствия; представления; прощания","coursebook_canonical_grammar":"fixed everyday phrases","coursebook_canonical_skills":"этикетный диалог знакомства; приветствие и прощание","coursebook_facts":["The functional focus is introducing and greeting people.","The lesson practises short everyday exchanges rather than new grammar."],"coursebook_audit_status":"PASS","verified_can_do":"I can greet someone, introduce myself and say goodbye politely.","patch":{}},"1f":{"coursebook_source":"Spotlight 6 · p. 13 · Across the Curriculum: Geography · The Earth","coursebook_canonical_section":"Across the Curriculum: Geography · The Earth","coursebook_canonical_topic":"Планета Земля","coursebook_canonical_focus":"факты о Земле; континенты; океаны; поверхность Земли; числовые данные","coursebook_canonical_grammar":"numbers and factual statements","coursebook_canonical_skills":"чтение информационного файла и карты; чтение чисел; краткое сообщение о Земле","coursebook_facts":["The section is about the Earth, not the planets as a set.","It gives numerical facts about the Earth, including diameter, age, surface and distance from the Sun.","It names continents and oceans and works with a world map."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can read simple facts about the Earth and present them clearly.","patch":{"ktp_topic":"Планета Земля","focus":"факты о Земле; континенты; океаны; поверхность Земли; числовые данные"}},"1r":{"coursebook_source":"Spotlight on Russia · p. 3 · Life in Moscow","coursebook_canonical_section":"Spotlight on Russia: Life in Moscow","coursebook_canonical_topic":"Жизнь Анны в Москве","coursebook_canonical_focus":"семья; квартира; школьная и домашняя жизнь; досуг в разные сезоны","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение интервью; сравнение образа жизни; короткая заметка о себе","coursebook_facts":["Anna is 13 and lives in Moscow with her parents and grandmother.","Her parents are teachers; she helps her grandmother and goes shopping with her.","Winter activities include skiing and ice-skating; in warmer weather she rides a bike and goes to the countryside.","The source asks learners to compare Anna's life with their own and write about themselves."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can compare Anna’s life in Moscow with my own and write a short note.","patch":{"section_title":"Spotlight on Russia: Life in Moscow","ktp_topic":"Жизнь Анны в Москве","focus":"семья; квартира; школьная и домашняя жизнь; досуг в разные сезоны","skills":"чтение интервью; сравнение образа жизни; короткая заметка о себе","product":"заметка о своей жизни"}},"2a":{"coursebook_source":"Spotlight 6 · pp. 16–17 · 2a Happy Times","coursebook_canonical_section":"Happy Times","coursebook_canonical_topic":"Праздники, даты и время","coursebook_canonical_focus":"приглашения; дни недели; месяцы; времена года; порядковые числительные; время","coursebook_canonical_grammar":"ordinal numbers; prepositions of time","coursebook_canonical_skills":"чтение приглашений; называние даты и времени; интервью о днях рождения; создание приглашения","coursebook_facts":["The page begins with party/event invitations.","Days, months, seasons, ordinal numbers and telling the time are core content.","Prepositions of time are practised.","The module outputs include a birthday calendar and a party invitation."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can read dates and times and make a simple party invitation.","patch":{"section_title":"Happy Times","ktp_topic":"Праздники, даты и время","focus":"приглашения; дни недели; месяцы; времена года; порядковые числительные; время","grammar_focus":"порядковые числительные; предлоги времени","skills":"чтение приглашений; называние даты и времени; интервью о днях рождения; создание приглашения"}},"2b":{"coursebook_source":"Spotlight 6 · pp. 18–19 · 2b My place","coursebook_canonical_section":"My place","coursebook_canonical_topic":"Мой дом и моя комната","coursebook_canonical_focus":"комнаты; мебель; предметы интерьера","coursebook_canonical_grammar":"a/an/some/any; prepositions of place","coursebook_canonical_skills":"диалог о новом доме; описание гостиной; описание расположения предметов","coursebook_facts":["Rooms and furniture are the central vocabulary.","The target grammar includes a/an/some/any and prepositions of place.","Students describe a living room."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can describe a room and say where things are.","patch":{"grammar_focus":"a/an/some/any; предлоги места"}},"2c":{"coursebook_source":"Spotlight 6 · p. 20 · 2c My neighbourhood","coursebook_canonical_section":"My neighbourhood","coursebook_canonical_topic":"Мой район","coursebook_canonical_focus":"магазины; здания; места в районе","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение короткой статьи о районе; описание своего района","coursebook_facts":["The vocabulary focus is types of shops and neighbourhood places.","The writing/speaking output is a description of the learner's neighbourhood."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can describe my neighbourhood and the shops and places in it.","patch":{"focus":"магазины; здания; места в районе","grammar_focus":"повторение a/an/some/any; there is/are"}},"2d":{"coursebook_source":"Spotlight 6 · p. 21 · Culture Corner · Famous Streets","coursebook_canonical_section":"Culture Corner: Famous Streets","coursebook_canonical_topic":"Известные улицы","coursebook_canonical_focus":"известная улица; магазины; городские объекты","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; короткая заметка об известной улице","coursebook_facts":["The Culture Corner topic is Famous Streets.","The module writing list includes a paragraph about a famous street in the learner's country."],"coursebook_audit_status":"PASS","verified_can_do":"I can find facts about a famous street and write a short note about it.","patch":{}},"2e":{"coursebook_source":"Spotlight 6 · p. 22 · English in Use · Requesting services","coursebook_canonical_section":"English in Use: Requesting services","coursebook_canonical_topic":"Запрос услуг","coursebook_canonical_focus":"просьба об услуге; адрес; уточнение деталей","coursebook_canonical_grammar":"functional language for requests","coursebook_canonical_skills":"диалог запроса услуги; сообщение необходимой информации","coursebook_facts":["The functional focus is requesting services.","Learners practise a practical service dialogue."],"coursebook_audit_status":"PASS","verified_can_do":"I can request a simple service and give the information needed.","patch":{}},"2f":{"coursebook_source":"Spotlight 6 · p. 23 · Across the Curriculum: Maths · Draw a Map to Scale","coursebook_canonical_section":"Across the Curriculum: Maths · Draw a Map to Scale","coursebook_canonical_topic":"План в масштабе","coursebook_canonical_focus":"масштаб; размеры; расстояние; план помещения","coursebook_canonical_grammar":"numbers and units of measurement","coursebook_canonical_skills":"чтение схемы; измерение; создание плана комнаты в масштабе","coursebook_facts":["The section is Draw a Map to Scale.","The module output is a scaled map of the learner's room."],"coursebook_audit_status":"PASS","verified_can_do":"I can use measurements to draw a simple room plan to scale.","patch":{}},"2r":{"coursebook_source":"Spotlight on Russia · p. 4 · Russian Dachas","coursebook_canonical_section":"Spotlight on Russia: Russian Dachas","coursebook_canonical_topic":"Русские дачи","coursebook_canonical_focus":"дача; сад; овощи и цветы; отдых у воды; времена года","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение страноведческого текста; описание дачи и отдыха","coursebook_facts":["Many Russians spend weekends at dachas in the countryside.","People grow vegetables, fruit and flowers, swim and fish, and make jam.","The text contrasts summer/autumn activities with the long winter wait to return."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe what people do at a Russian dacha.","patch":{}},"3a":{"coursebook_source":"Spotlight 6 · pp. 26–27 · 3a Road safety","coursebook_canonical_section":"Road safety","coursebook_canonical_topic":"Безопасность на дороге","coursebook_canonical_focus":"дорожное движение; транспорт; правила безопасности","coursebook_canonical_grammar":"imperative","coursebook_canonical_skills":"чтение листовки; описание дороги в школу; памятка по безопасности","coursebook_facts":["Road safety and means of transport are core content.","The imperative is the target grammar.","The writing output is a safety leaflet."],"coursebook_audit_status":"PASS","verified_can_do":"I can write clear road-safety rules for another person.","patch":{}},"3b":{"coursebook_source":"Spotlight 6 · pp. 28–29 · 3b On the move","coursebook_canonical_section":"On the move","coursebook_canonical_topic":"В движении: транспорт и инструкции","coursebook_canonical_focus":"виды транспорта; направления; омографы; инструкции водителю","coursebook_canonical_grammar":"can: ability/prohibition/permission","coursebook_canonical_skills":"чтение диалога на уроке вождения; инструкции и направления","coursebook_facts":["The lesson combines means of transport and homographs.","Can is practised for ability, prohibition and permission.","The model reading is a driving-instructions dialogue."],"coursebook_audit_status":"PASS","verified_can_do":"I can understand and give simple driving or direction instructions using can and can’t.","patch":{}},"3c":{"coursebook_source":"Spotlight 6 · p. 30 · 3c Hot wheels","coursebook_canonical_section":"Hot wheels","coursebook_canonical_topic":"Известный гонщик: Михаэль Шумахер","coursebook_canonical_focus":"биографические факты; автоспорт; профессия; достижения","coursebook_canonical_grammar":"no new grammar; module language in context","coursebook_canonical_skills":"чтение статьи о Михаэле Шумахере; представление известного человека; короткая статья","coursebook_facts":["The page centres on an article about Michael Schumacher.","No new grammar point is listed in the coursebook contents for 3c.","Learners present a famous person and write a short article about them."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can present a few key facts about a famous racing driver.","patch":{"grammar_focus":"лексико-речевое повторение модуля","focus":"биографические факты; автоспорт; профессия; достижения","skills":"чтение статьи о Михаэле Шумахере; представление известного человека; короткая статья"}},"3d":{"coursebook_source":"Spotlight 6 · p. 31 · Culture Corner · Getting around London","coursebook_canonical_section":"Culture Corner: Getting around London","coursebook_canonical_topic":"Транспорт Лондона","coursebook_canonical_focus":"лондонский транспорт; метро; автобус; такси","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; практическая информация для туриста","coursebook_facts":["The Culture Corner is Getting around London.","The content is public transport in London."],"coursebook_audit_status":"PASS","verified_can_do":"I can explain how to use London transport and give a tourist useful information.","patch":{}},"3e":{"coursebook_source":"Spotlight 6 · p. 32 · English in Use · Asking for/giving directions","coursebook_canonical_section":"English in Use: Asking for/giving directions","coursebook_canonical_topic":"Как спросить и объяснить дорогу","coursebook_canonical_focus":"ориентиры; направления; вежливое обращение","coursebook_canonical_grammar":"imperative in directions","coursebook_canonical_skills":"диалог запроса и объяснения маршрута","coursebook_facts":["The functional focus is asking for and giving directions."],"coursebook_audit_status":"PASS","verified_can_do":"I can ask for directions and understand a short route explanation.","patch":{}},"3f":{"coursebook_source":"Spotlight 6 · p. 33 · Across the Curriculum: Art & Design · What does red mean?","coursebook_canonical_section":"Across the Curriculum: Art & Design · What does red mean?","coursebook_canonical_topic":"Что означает красный цвет?","coursebook_canonical_focus":"значения красного цвета: danger, respect, protection, love; символы и визуальные образы","coursebook_canonical_grammar":"language in context; prepositions in the text","coursebook_canonical_skills":"чтение текста о символике цвета; обсуждение значений; мини-проект о своей стране","coursebook_facts":["Red is presented as a symbol of danger, respect, protection and love.","Examples include traffic lights, a red carpet, the Red Cross and red roses.","The project asks what red symbolises in the learner's country."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can explain what red can symbolise and give examples from my country.","patch":{"section_title":"Across the Curriculum: Art & Design · What does red mean?","ktp_topic":"Что означает красный цвет?","focus":"значения красного цвета: danger, respect, protection, love; символы и визуальные образы","grammar_focus":"лексико-речевое повторение в контексте текста","skills":"чтение текста о символике цвета; обсуждение значений; мини-проект о своей стране","product":"проект о значении красного цвета"}},"3r":{"coursebook_source":"Spotlight on Russia · p. 5 · Moscow’s Metro","coursebook_canonical_section":"Spotlight on Russia: Moscow’s Metro","coursebook_canonical_topic":"Московское метро","coursebook_canonical_focus":"метро; станции; достопримечательности; архитектура; транспорт","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение страноведческого текста; извлечение фактов; краткий visitor guide","coursebook_facts":["Moscow Metro has many stations and millions of daily passengers.","The text explains male/female announcer voices for trains moving toward/away from the centre.","Stations such as Ploshchad Revolutsii and Teatralnaya connect with major sights.","The metro is described as an Underground Palace because of its architecture."],"coursebook_audit_status":"PASS","verified_can_do":"I can find key facts about the Moscow Metro and make a short visitor guide.","patch":{}},"4a":{"coursebook_source":"Spotlight 6 · pp. 36–37 · 4a Day in, Day out","coursebook_canonical_section":"Day in, Day out","coursebook_canonical_topic":"Распорядок дня","coursebook_canonical_focus":"повседневные действия; время; частотность","coursebook_canonical_grammar":"Present Simple; adverbs of frequency","coursebook_canonical_skills":"чтение/викторина; интервью о распорядке дня; абзац о типичном понедельнике","coursebook_facts":["Daily routine is the vocabulary focus.","Present Simple and adverbs of frequency are practised.","Learners interview a partner and write about a typical Monday."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can describe my daily routine and say how often I do things.","patch":{"grammar_focus":"Present Simple; наречия частотности"}},"4b":{"coursebook_source":"Spotlight 6 · pp. 38–39 · 4b How about…?","coursebook_canonical_section":"How about…?","coursebook_canonical_topic":"Телепрограммы, предпочтения и предложения","coursebook_canonical_focus":"телепрограммы; предпочтения; предложения; результаты опроса","coursebook_canonical_grammar":"Present Simple short answers","coursebook_canonical_skills":"диалог о совместном досуге; выражение likes/dislikes; предложения; абзац по результатам опроса","coursebook_facts":["TV programmes are the vocabulary focus.","Present Simple short answers are practised.","The model dialogue is about arranging to go out.","Learners express likes/dislikes, make suggestions and write a paragraph on a survey."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can talk about TV programmes, make a suggestion and report simple survey results.","patch":{"grammar_focus":"Present Simple: краткие ответы","skills":"диалог о совместном досуге; выражение предпочтений; предложения; абзац по результатам опроса","product":"абзац по результатам опроса о телепрограммах"}},"4c":{"coursebook_source":"Spotlight 6 · p. 40 · 4c My favourite day","coursebook_canonical_section":"My favourite day","coursebook_canonical_topic":"Мой любимый день","coursebook_canonical_focus":"дни; время; занятия; чувства","coursebook_canonical_grammar":"linkers","coursebook_canonical_skills":"чтение I love Saturdays; статья о своём идеальном дне","coursebook_facts":["The reading model is I love Saturdays.","Linkers are used to organise the article.","The writing output is an article about a perfect/favourite day."],"coursebook_audit_status":"PASS","verified_can_do":"I can write about my favourite day and connect my ideas with simple linkers.","patch":{}},"4d":{"coursebook_source":"Spotlight 6 · p. 41 · Culture Corner · Teenage life in Britain","coursebook_canonical_section":"Culture Corner: Teenage life in Britain","coursebook_canonical_topic":"Жизнь подростков в Великобритании","coursebook_canonical_focus":"школа; досуг; повседневная жизнь британских подростков","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; сравнение с собственной жизнью","coursebook_facts":["The Culture Corner topic is teenage life in Britain."],"coursebook_audit_status":"PASS","verified_can_do":"I can compare a British teenager’s daily life with my own.","patch":{}},"4e":{"coursebook_source":"Spotlight 6 · p. 42 · English in Use · Making/cancelling an appointment","coursebook_canonical_section":"English in Use: Making/cancelling an appointment","coursebook_canonical_topic":"Назначение и отмена встречи","coursebook_canonical_focus":"время встречи; телефонный разговор; изменение планов","coursebook_canonical_grammar":"functional phrases","coursebook_canonical_skills":"диалог назначения, переноса или отмены встречи","coursebook_facts":["The functional focus is making and cancelling an appointment."],"coursebook_audit_status":"PASS","verified_can_do":"I can make, change or cancel a simple appointment.","patch":{}},"4f":{"coursebook_source":"Spotlight 6 · p. 43 · Across the Curriculum: Maths · Drawing Numbers","coursebook_canonical_section":"Across the Curriculum: Maths · Drawing Numbers","coursebook_canonical_topic":"Виды диаграмм и опросы","coursebook_canonical_focus":"line graph; bar graph; pie chart; данные; проценты; мини-опрос","coursebook_canonical_grammar":"Present Simple questions; numbers and percentages","coursebook_canonical_skills":"чтение о видах графиков; выбор подходящего типа; короткий опрос; представление данных","coursebook_facts":["The section presents line graph, bar graph and pie chart.","A line graph shows change over time; a bar graph is useful for comparison; a pie chart shows parts of a whole.","The textbook includes a short survey followed by making and presenting a graph."],"coursebook_audit_status":"PASS","verified_can_do":"I can choose a suitable graph, ask a short survey question and explain the results.","patch":{}},"4r":{"coursebook_source":"Spotlight on Russia · p. 6 · My Daily Routine","coursebook_canonical_section":"Spotlight on Russia: My Daily Routine","coursebook_canonical_topic":"Распорядок дня российской школьницы","coursebook_canonical_focus":"школа; уроки; домашнее задание; кружки; семейный вечер; телевидение","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение текста о Марине; сравнение распорядка дня; заметка о своём дне","coursebook_facts":["Marina is 12 and lives in St Petersburg.","School starts at 8:00 and finishes at 2:00; students have 6–7 lessons.","She has guitar lessons on Tuesday and Thursday and spends 2–3 hours on homework.","She has dinner with her family and usually watches TV after dinner."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can describe a Russian student’s daily routine and compare it with mine.","patch":{"section_title":"Spotlight on Russia: My Daily Routine","ktp_topic":"Распорядок дня российской школьницы","focus":"школа; уроки; домашнее задание; кружки; семейный вечер; телевидение","skills":"чтение текста о Марине; сравнение распорядка дня; заметка о своём дне","product":"заметка о своём распорядке дня"}},"5a":{"coursebook_source":"Spotlight 6 · pp. 46–47 · 5a Festive time","coursebook_canonical_section":"Festive time","coursebook_canonical_topic":"Подготовка к празднику","coursebook_canonical_focus":"праздничные приготовления; действия сейчас","coursebook_canonical_grammar":"Present Continuous affirmative","coursebook_canonical_skills":"чтение season’s greetings; описание сцены; приглашение","coursebook_facts":["Making preparations is the vocabulary focus.","Present Continuous affirmative forms are practised.","The writing output is an invitation card."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe preparations happening now and make a party invitation.","patch":{}},"5b":{"coursebook_source":"Spotlight 6 · pp. 48–49 · 5b Let’s celebrate","coursebook_canonical_section":"Let’s celebrate","coursebook_canonical_topic":"Праздники и празднование","coursebook_canonical_focus":"праздничные действия; костюмы; еда; мнение","coursebook_canonical_grammar":"Present Continuous negative/interrogative","coursebook_canonical_skills":"диалог о празднике; вопросы и ответы; описание сцены","coursebook_facts":["Celebrations are the focus.","Present Continuous negative and interrogative forms are practised.","The model dialogue is about a party and the writing output is a scene description."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can ask and answer about a celebration and describe what people are doing.","patch":{}},"5c":{"coursebook_source":"Spotlight 6 · p. 50 · 5c Special days","coursebook_canonical_section":"Special days","coursebook_canonical_topic":"Особые дни и фестивали","coursebook_canonical_focus":"праздничные мероприятия; традиции","coursebook_canonical_grammar":"module language in context","coursebook_canonical_skills":"чтение/аудирование о фестивале; подготовка и произнесение короткой речи","coursebook_facts":["Festival activities are central.","Learners listen for specific information and make a short speech about a festival."],"coursebook_audit_status":"PASS","verified_can_do":"I can give a short talk about a special day or festival.","patch":{}},"5d":{"coursebook_source":"Spotlight 6 · p. 51 · Culture Corner · The Highland Games","coursebook_canonical_section":"Culture Corner: The Highland Games","coursebook_canonical_topic":"Шотландские Highland Games","coursebook_canonical_focus":"соревнования; традиции; события фестиваля","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; представление фактов о фестивале","coursebook_facts":["The Culture Corner is The Highland Games."],"coursebook_audit_status":"PASS","verified_can_do":"I can find key facts about the Highland Games and present them clearly.","patch":{}},"5e":{"coursebook_source":"Spotlight 6 · p. 52 · English in Use · Ordering flowers","coursebook_canonical_section":"English in Use: Ordering flowers","coursebook_canonical_topic":"Заказ цветов","coursebook_canonical_focus":"цветы; повод; адрес; доставка; цена","coursebook_canonical_grammar":"functional phrases for ordering","coursebook_canonical_skills":"телефонный диалог заказа цветов","coursebook_facts":["The functional focus is ordering flowers."],"coursebook_audit_status":"PASS","verified_can_do":"I can order flowers by phone and answer simple questions about my order.","patch":{}},"5f":{"coursebook_source":"Spotlight 6 · p. 53 · Across the Curriculum: Literature · Through the Looking Glass","coursebook_canonical_section":"Across the Curriculum: Literature · Through the Looking Glass","coursebook_canonical_topic":"Льюис Кэрролл. Through the Looking Glass","coursebook_canonical_focus":"литературный персонаж; сцена; действия персонажей","coursebook_canonical_grammar":"Present Continuous in context","coursebook_canonical_skills":"чтение литературного фрагмента; описание сцены/иллюстрации","coursebook_facts":["The extensive reading section is Literature: Through the Looking Glass."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe what is happening in a scene from Through the Looking Glass.","patch":{}},"5r":{"coursebook_source":"Spotlight on Russia · p. 7 · White Nights in St Petersburg","coursebook_canonical_section":"Spotlight on Russia: White Nights in St Petersburg","coursebook_canonical_topic":"Белые ночи в Санкт-Петербурге","coursebook_canonical_focus":"Санкт-Петербург; летний свет; туристы; культурное событие","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение страноведческого текста; обсуждение явления; короткое сообщение","coursebook_facts":["The article is about the White Nights in St Petersburg.","Visitors travel to the city to experience the long light summer nights.","The source presents the phenomenon as a special experience and invites learners to discuss it."],"coursebook_audit_status":"PASS","verified_can_do":"I can explain what the White Nights are and why people visit St Petersburg then.","patch":{}},"6a":{"coursebook_source":"Spotlight 6 · pp. 56–57 · 6a Free time","coursebook_canonical_section":"Free time","coursebook_canonical_topic":"Свободное время и школьные клубы","coursebook_canonical_focus":"увлечения; клубы; free-time activities; compound nouns","coursebook_canonical_grammar":"linking with because; module tense review","coursebook_canonical_skills":"чтение буклета школы; опрос о досуге; абзац о likes/dislikes","coursebook_facts":["The main reading is a leaflet about Bolton Middle School clubs and activities.","Learners carry out a free-time survey and summarise results.","The writing output is a paragraph about likes and dislikes."],"coursebook_audit_status":"PASS","verified_can_do":"I can talk about free-time activities and report what people in my class like.","patch":{}},"6b":{"coursebook_source":"Spotlight 6 · pp. 58–59 · 6b Game on!","coursebook_canonical_section":"Game on!","coursebook_canonical_topic":"Игры и выбор совместного досуга","coursebook_canonical_focus":"настольные игры; предпочтения; предложения; выбор игры","coursebook_canonical_grammar":"Present Simple vs Present Continuous","coursebook_canonical_skills":"диалог о выборе игры; принятие общего решения; плакат о любимых играх","coursebook_facts":["Games are the central vocabulary.","Present Simple and Present Continuous are contrasted.","The functional task is deciding what to do/play together.","A poster about favourite games is a coursebook output."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can discuss games, make suggestions and decide what to play.","patch":{}},"6c":{"coursebook_source":"Spotlight 6 · p. 60 · 6c Pastimes","coursebook_canonical_section":"Pastimes","coursebook_canonical_topic":"Настольная игра Snakes and Ladders","coursebook_canonical_focus":"dice; pawn; board-game vocabulary; instructions","coursebook_canonical_grammar":"module language in context","coursebook_canonical_skills":"чтение инструкции к Snakes and Ladders; получение информации; создание настольной игры","coursebook_facts":["The page uses Snakes and Ladders instructions as the main text.","Board-game vocabulary includes dice and pawn.","The practical output is a board game."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can understand board-game instructions and create simple rules for a game.","patch":{"ktp_topic":"Настольная игра Snakes and Ladders","focus":"dice; pawn; настольная игра; последовательность действий; инструкции","grammar_focus":"лексико-речевое повторение модуля","skills":"чтение инструкции к Snakes and Ladders; извлечение информации; создание настольной игры","product":"настольная игра по образцу"}},"6d":{"coursebook_source":"Spotlight 6 · p. 61 · Culture Corner · Board games","coursebook_canonical_section":"Culture Corner: Board games","coursebook_canonical_topic":"Настольные игры в Великобритании","coursebook_canonical_focus":"названия настольных игр; правила; оборудование","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; объяснение правил игры","coursebook_facts":["The Culture Corner is Board games."],"coursebook_audit_status":"PASS","verified_can_do":"I can explain how a board game is played.","patch":{}},"6e":{"coursebook_source":"Spotlight 6 · p. 62 · English in Use · Buying a present","coursebook_canonical_section":"English in Use: Buying a present","coursebook_canonical_topic":"Покупка подарка","coursebook_canonical_focus":"подарки; цена; предпочтения; выбор","coursebook_canonical_grammar":"functional shopping phrases","coursebook_canonical_skills":"диалог в магазине: выбрать и купить подарок","coursebook_facts":["The functional focus is buying a present."],"coursebook_audit_status":"PASS","verified_can_do":"I can ask about a gift, choose one and complete the purchase.","patch":{}},"6f":{"coursebook_source":"Spotlight 6 · p. 63 · Across the Curriculum: Design & Technology · Puppet show","coursebook_canonical_section":"Across the Curriculum: Design & Technology · Puppet show","coursebook_canonical_topic":"Кукольный театр","coursebook_canonical_focus":"материалы; части куклы; последовательность изготовления","coursebook_canonical_grammar":"imperative","coursebook_canonical_skills":"чтение инструкции; изготовление куклы; объяснение процесса","coursebook_facts":["The extensive reading section is Puppet show in Design & Technology."],"coursebook_audit_status":"PASS","verified_can_do":"I can follow and give simple steps for making a puppet.","patch":{}},"6r":{"coursebook_source":"Spotlight on Russia · p. 8 · Leisure Activities","coursebook_canonical_section":"Spotlight on Russia: Leisure Activities","coursebook_canonical_topic":"Досуг в России","coursebook_canonical_focus":"чтение; кино и театр; зимние виды спорта; активный отдых; командные игры; хобби","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение страноведческого текста; сравнение досуга; короткая заметка","coursebook_facts":["Russians enjoy reading, cinema and theatre.","Skiing, ice-skating and ice hockey are popular winter activities.","Other activities include hiking, mountain climbing, canoeing, football, gymnastics, volleyball and basketball.","The text also mentions chess, stamp collecting and traditional activities of different nationalities."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe popular leisure activities in Russia and say what I like to do.","patch":{}},"7a":{"coursebook_source":"Spotlight 6 · pp. 66–67 · 7a In the past","coursebook_canonical_section":"In the past","coursebook_canonical_topic":"Город в прошлом","coursebook_canonical_focus":"места и здания; прилагательные для описания; прошлое города","coursebook_canonical_grammar":"Past Simple regular verbs","coursebook_canonical_skills":"чтение Mineral Park the ghost town; интервью о городе; описание места","coursebook_facts":["The reading is Mineral Park the ghost town.","Past Simple regular verbs are the target grammar.","Learners interview someone about their town and write a description of a place."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can describe a place in the past using regular Past Simple forms.","patch":{"grammar_focus":"Past Simple: правильные глаголы"}},"7b":{"coursebook_source":"Spotlight 6 · pp. 68–69 · 7b Halloween spirit","coursebook_canonical_section":"Halloween spirit","coursebook_canonical_topic":"Страшная история и события прошлого","coursebook_canonical_focus":"чувства; события; атмосфера","coursebook_canonical_grammar":"Past Simple irregular verbs","coursebook_canonical_skills":"чтение страшной истории; последовательный рассказ; написание истории","coursebook_facts":["The lesson uses a scary story.","Past Simple irregular verbs are the target grammar.","Learners practise telling and writing a story."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can tell a short scary story using common irregular past forms.","patch":{"grammar_focus":"Past Simple: неправильные глаголы"}},"7c":{"coursebook_source":"Spotlight 6 · p. 70 · 7c Famous firsts","coursebook_canonical_section":"Famous firsts","coursebook_canonical_topic":"Известные люди прошлого","coursebook_canonical_focus":"биографические факты; достижения; даты","coursebook_canonical_grammar":"Past Simple in biographical context","coursebook_canonical_skills":"чтение биографии Walt Disney; role play; краткая биография","coursebook_facts":["The main reading is a biography of Walt Disney.","The output is a biography / presentation about a famous person."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can give a short biography of a famous person.","patch":{}},"7d":{"coursebook_source":"Spotlight 6 · p. 71 · Culture Corner · Superman","coursebook_canonical_section":"Culture Corner: Superman","coursebook_canonical_topic":"Супермен","coursebook_canonical_focus":"герой; способности; внешность; происхождение персонажа","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; профиль героя","coursebook_facts":["The Culture Corner is Superman."],"coursebook_audit_status":"PASS","verified_can_do":"I can find key facts about Superman and present a short hero profile.","patch":{}},"7e":{"coursebook_source":"Spotlight 6 · p. 72 · English in Use · Reporting lost property","coursebook_canonical_section":"English in Use: Reporting lost property","coursebook_canonical_topic":"В бюро находок","coursebook_canonical_focus":"потерянные вещи; описание; обстоятельства потери","coursebook_canonical_grammar":"Past Simple questions in context","coursebook_canonical_skills":"диалог сообщения о пропаже; вопросы и ответы","coursebook_facts":["The functional focus is reporting lost property."],"coursebook_audit_status":"PASS","verified_can_do":"I can report a lost item and answer simple questions about what happened.","patch":{}},"7f":{"coursebook_source":"Spotlight 6 · p. 73 · Across the Curriculum: History · Toying with the past","coursebook_canonical_section":"Across the Curriculum: History · Toying with the past","coursebook_canonical_topic":"Игрушки прошлого","coursebook_canonical_focus":"старые игрушки; материалы; исторический контекст","coursebook_canonical_grammar":"Past Simple / topic language in context","coursebook_canonical_skills":"чтение исторического текста; музейная карточка/плакат","coursebook_facts":["The extensive reading topic is Toying with the past in History."],"coursebook_audit_status":"PASS","verified_can_do":"I can read about toys from the past and make a simple museum card.","patch":{}},"7r":{"coursebook_source":"Spotlight on Russia · p. 9 · Alexander Pushkin","coursebook_canonical_section":"Spotlight on Russia: Alexander Pushkin","coursebook_canonical_topic":"Александр Пушкин","coursebook_canonical_focus":"биография; произведения; даты; русская литература","coursebook_canonical_grammar":"Past Simple review","coursebook_canonical_skills":"чтение биографии; хронология; краткая биографическая справка","coursebook_facts":["Pushkin was born in Moscow on 6 June 1799.","He wrote his first poem at 8 and published his first poem at 15.","The text mentions Boris Godunov, Eugeny Onegin, The Bronze Horseman and The Stone Guest.","He died at 37 and is presented as Russia's greatest poet and national pride."],"coursebook_audit_status":"PASS","verified_can_do":"I can give a short biography of Alexander Pushkin using key dates and facts.","patch":{}},"8a":{"coursebook_source":"Spotlight 6 · pp. 76–77 · 8a That’s the rule","coursebook_canonical_section":"That’s the rule","coursebook_canonical_topic":"Виды жилья и правила проживания","coursebook_canonical_focus":"types of dwellings; university halls of residence; правила и запреты","coursebook_canonical_grammar":"must/mustn’t/can’t","coursebook_canonical_skills":"чтение правил общежития; вопросы о правилах; постер с правилами своей комнаты","coursebook_facts":["Types of dwellings are introduced.","The main reading is a leaflet with rules and regulations at university halls of residence.","Must, mustn’t and can’t are the target modal forms.","The writing output is a poster about bedroom rules."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can explain rules in a place and make a poster of room rules.","patch":{"ktp_topic":"Виды жилья и правила проживания","focus":"виды жилья; university halls of residence; правила и запреты","grammar_focus":"must/mustn’t/can’t","skills":"чтение правил общежития; вопросы о правилах; постер с правилами своей комнаты","product":"постер правил комнаты"}},"8b":{"coursebook_source":"Spotlight 6 · pp. 78–79 · 8b Shall we?","coursebook_canonical_section":"Shall we?","coursebook_canonical_topic":"Места в городе, сравнение и предложения","coursebook_canonical_focus":"places in town; характеристики мест; предложения о совместном досуге","coursebook_canonical_grammar":"comparatives/superlatives; as…as / not as…as","coursebook_canonical_skills":"диалог о выборе места; сравнение мест; make/accept/refuse suggestions; warning signs","coursebook_facts":["The vocabulary is places in town.","Comparisons are the target grammar, including comparative/superlative forms and as…as.","The model dialogue is about deciding where to go.","Learners practise making, accepting and refusing suggestions."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can compare places in town and make, accept or refuse a suggestion about where to go.","patch":{"ktp_topic":"Места в городе, сравнение и предложения","focus":"места в городе; характеристики мест; предложения о совместном досуге","grammar_focus":"степени сравнения прилагательных; as…as / not as…as","skills":"диалог о выборе места; сравнение объектов; предложения и ответы"}},"8c":{"coursebook_source":"Spotlight 6 · p. 80 · 8c Rules & Regulations","coursebook_canonical_section":"Rules & Regulations","coursebook_canonical_topic":"Правила проживания и кемпинга","coursebook_canonical_focus":"room for rent; campsite; правила и обязанности","coursebook_canonical_grammar":"have to / don’t have to / needn’t","coursebook_canonical_skills":"диалог о правилах в сдаваемой комнате; обсуждение правил кемпинга; campsite rules","coursebook_facts":["The target grammar is have to / don’t have to / needn’t.","The model dialogue is about rules in a room for rent.","The speaking/writing context is rules at a campsite."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can explain what people have to and don’t have to do at a campsite.","patch":{"section_title":"Rules & Regulations","ktp_topic":"Правила проживания и кемпинга","focus":"room for rent; campsite; правила и обязанности","grammar_focus":"have to / don’t have to / needn’t","skills":"диалог о правилах в сдаваемой комнате; обсуждение правил кемпинга","product":"правила кемпинга"}},"8d":{"coursebook_source":"Spotlight 6 · p. 81 · Culture Corner · Building Big","coursebook_canonical_section":"Culture Corner: Building Big","coursebook_canonical_topic":"Building Big: знаменитые здания","coursebook_canonical_focus":"здания; архитектура; размеры; необычные конструкции","coursebook_canonical_grammar":"comparisons / module language review","coursebook_canonical_skills":"социокультурное чтение; короткий текст о знаменитом здании","coursebook_facts":["The Culture Corner is Building Big, not British rules.","The module writing list includes a short text about a famous building in the learner's country."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can find key facts about a famous building and describe it.","patch":{"section_title":"Culture Corner: Building Big","ktp_topic":"Building Big: знаменитые здания","focus":"здания; архитектура; размеры; необычные конструкции","grammar_focus":"степени сравнения; повторение модуля","skills":"социокультурное чтение; короткий текст о знаменитом здании","product":"короткий текст о знаменитом здании"}},"8e":{"coursebook_source":"Spotlight 6 · p. 82 · English in Use · Booking theatre tickets","coursebook_canonical_section":"English in Use: Booking theatre tickets","coursebook_canonical_topic":"Бронирование театральных билетов","coursebook_canonical_focus":"театр; спектакль; дата; время; цена; количество билетов","coursebook_canonical_grammar":"functional booking phrases","coursebook_canonical_skills":"диалог бронирования билетов; сообщение необходимых деталей","coursebook_facts":["The English in Use section is booking theatre tickets.","The page works with theatre performance details and ticket booking."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can book theatre tickets and give the details needed.","patch":{"section_title":"English in Use: Booking theatre tickets","ktp_topic":"Бронирование театральных билетов","focus":"театр; спектакль; дата; время; цена; количество билетов","grammar_focus":"вежливые клише бронирования","skills":"диалог бронирования билетов; сообщение необходимых деталей","product":"бронирование театральных билетов"}},"8f":{"coursebook_source":"Spotlight 6 · p. 83 · Across the Curriculum: Social Science · Is your neighbourhood neat and tidy?","coursebook_canonical_section":"Across the Curriculum: Social Science · Is your neighbourhood neat and tidy?","coursebook_canonical_topic":"Чисто ли в твоём районе?","coursebook_canonical_focus":"clean/dirty; safe/dangerous; litter; graffiti; bins; playgrounds; bus stops","coursebook_canonical_grammar":"modal/rules language in context","coursebook_canonical_skills":"чтение анкеты; оценка состояния района; создание листовки с правилами","coursebook_facts":["The section is a Social Science questionnaire about whether a neighbourhood is neat and tidy.","It checks issues such as litter, graffiti, broken playground equipment, rubbish bins, road signs and bus stops.","The follow-up project is a leaflet telling people what they must or mustn’t do to keep the neighbourhood tidy."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can check how tidy a neighbourhood is and make a leaflet with useful rules.","patch":{"section_title":"Across the Curriculum: Social Science · Is your neighbourhood neat and tidy?","ktp_topic":"Чисто ли в твоём районе?","focus":"чистота и безопасность района; litter; graffiti; bins; playgrounds; bus stops","grammar_focus":"must/mustn’t; повторение модальных глаголов","skills":"чтение анкеты; оценка района; создание листовки с правилами","product":"листовка для района"}},"8r":{"coursebook_source":"Spotlight on Russia · p. 10 · Moscow Zoo","coursebook_canonical_section":"Spotlight on Russia: Moscow Zoo","coursebook_canonical_topic":"Московский зоопарк","coursebook_canonical_focus":"зоны Московского зоопарка; животные; карта; маршрут посетителя","coursebook_canonical_grammar":"Present Simple; route language in context","coursebook_canonical_skills":"изучающее чтение; извлечение информации; описание маршрута и посещения","coursebook_facts":["Moscow Zoo is in the centre of the Russian capital and has thousands of species.","The text names Animal Island, the Aquarium, the Night World and the Children’s Zoo.","Animal Island includes Amur tigers, a snow leopard, Himalayan bears, Asian lions and an Australian emu.","The source also mentions playgrounds, souvenir shops, cafes and picnic areas and tells visitors to use a map."],"coursebook_audit_status":"PASS","verified_can_do":"I can use a text and map to plan a short route around Moscow Zoo and explain what a visitor can see.","patch":{}},"9a":{"coursebook_source":"Spotlight 6 · pp. 86–87 · 9a Food and drink","coursebook_canonical_section":"Food and drink","coursebook_canonical_topic":"Еда и напитки. Британские пищевые привычки","coursebook_canonical_focus":"types of food/drink; British cuisine; food quantities","coursebook_canonical_grammar":"Countable/Uncountable nouns; quantifiers","coursebook_canonical_skills":"чтение Eating the British way; обсуждение британской кухни; список покупок","coursebook_facts":["Types of food and drink are the vocabulary focus.","Countable/Uncountable nouns and quantifiers are the target grammar.","The reading is Eating the British way.","The writing output is a shopping list."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can talk about food and drink, understand simple information about British eating habits and make a shopping list.","patch":{"ktp_topic":"Еда и напитки. Британские пищевые привычки","focus":"виды еды и напитков; британская кухня; количества продуктов","grammar_focus":"исчисляемые/неисчисляемые существительные; quantifiers","skills":"чтение Eating the British way; обсуждение британской кухни; список покупок","product":"список покупок"}},"9b":{"coursebook_source":"Spotlight 6 · pp. 88–89 · 9b On the menu!","coursebook_canonical_section":"On the menu!","coursebook_canonical_topic":"Меню, блюда и заказ в ресторане","coursebook_canonical_focus":"tastes and dishes; menu; ordering food and drinks","coursebook_canonical_grammar":"Present Simple vs Present Continuous","coursebook_canonical_skills":"чтение меню и диалога; заказ еды/напитков; создание рекламы","coursebook_facts":["Tastes and dishes are central vocabulary.","Present Simple and Present Continuous are contrasted.","The main practical reading is a menu and a restaurant-ordering dialogue.","The writing output is an advertisement."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can order food and drinks and describe dishes on a menu.","patch":{"focus":"вкусы и блюда; меню; заказ еды и напитков","grammar_focus":"Present Simple vs Present Continuous","skills":"чтение меню и диалога; заказ еды/напитков; создание рекламы"}},"9c":{"coursebook_source":"Spotlight 6 · p. 90 · 9c Let’s cook","coursebook_canonical_section":"Let’s cook","coursebook_canonical_topic":"Рецепты и приготовление еды","coursebook_canonical_focus":"cooking verbs; ingredients; containers; recipe steps","coursebook_canonical_grammar":"imperative / quantifiers in context","coursebook_canonical_skills":"чтение рецепта; инструкции по приготовлению; собственный рецепт","coursebook_facts":["Cooking verbs are central vocabulary.","The reading and writing model is a recipe.","Learners practise giving cooking instructions."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can follow and write a simple recipe.","patch":{"grammar_focus":"повелительное наклонение; quantifiers в контексте рецепта"}},"9d":{"coursebook_source":"Spotlight 6 · p. 91 · Culture Corner · Places to eat in the UK","coursebook_canonical_section":"Culture Corner: Places to eat in the UK","coursebook_canonical_topic":"Где поесть в Великобритании","coursebook_canonical_focus":"типы заведений; блюда; британские привычки питания","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; рекомендация/реклама места","coursebook_facts":["The Culture Corner is Places to eat in the UK."],"coursebook_audit_status":"PASS","verified_can_do":"I can describe different places to eat in the UK and recommend one.","patch":{}},"9e":{"coursebook_source":"Spotlight 6 · p. 92 · English in Use · Booking a table at a restaurant","coursebook_canonical_section":"English in Use: Booking a table at a restaurant","coursebook_canonical_topic":"Бронирование столика","coursebook_canonical_focus":"дата; время; число гостей; ресторан","coursebook_canonical_grammar":"functional booking phrases","coursebook_canonical_skills":"диалог бронирования столика","coursebook_facts":["The functional focus is booking a table at a restaurant."],"coursebook_audit_status":"PASS","verified_can_do":"I can book a table at a restaurant and give the details needed.","patch":{}},"9f":{"coursebook_source":"Spotlight 6 · p. 93 · Across the Curriculum: Food Technology · Eat well, feel great, look great!","coursebook_canonical_section":"Across the Curriculum: Food Technology · Eat well, feel great, look great!","coursebook_canonical_topic":"Сбалансированное питание","coursebook_canonical_focus":"nutrients; food groups; healthy eating","coursebook_canonical_grammar":"quantifiers / topic language in context","coursebook_canonical_skills":"чтение о питательных веществах; классификация; практические советы по питанию","coursebook_facts":["The extensive reading topic is healthy eating and food technology.","The title is Eat well, feel great, look great!"],"coursebook_audit_status":"PASS","verified_can_do":"I can use information about food and nutrients to make simple healthy-eating advice.","patch":{}},"9r":{"coursebook_source":"Spotlight on Russia · p. 11 · Mushrooms","coursebook_canonical_section":"Spotlight on Russia: Mushrooms","coursebook_canonical_topic":"Грибы в русской кухне","coursebook_canonical_focus":"сбор грибов; способы приготовления; ингредиенты; рецепт фаршированных грибов","coursebook_canonical_grammar":"imperative / cooking language review","coursebook_canonical_skills":"чтение о традиции сбора грибов; чтение и выполнение рецепта; собственный рецепт","coursebook_facts":["Mushroom hunting from July to October is presented as an old Russian tradition.","The text describes mushrooms being baked, fried, boiled in soups and mixed with other ingredients.","It includes a recipe for Stuffed Mushrooms with ingredients and step-by-step directions.","The magazine invites readers to send a favourite recipe."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can explain why mushrooms are important in Russian cooking and follow a simple mushroom recipe.","patch":{"section_title":"Spotlight on Russia: Mushrooms","ktp_topic":"Грибы в русской кухне","focus":"сбор грибов; способы приготовления; ингредиенты; рецепт фаршированных грибов","grammar_focus":"повелительное наклонение; кулинарная лексика","skills":"чтение о традиции сбора грибов; работа с рецептом; собственный рецепт","product":"грибной рецепт"}},"10a":{"coursebook_source":"Spotlight 6 · pp. 96–97 · 10a Holiday plans","coursebook_canonical_section":"Holiday plans","coursebook_canonical_topic":"Планы на каникулы","coursebook_canonical_focus":"holiday activities; places; transport; travel experiences","coursebook_canonical_grammar":"be going to","coursebook_canonical_skills":"чтение о поездке; обсуждение будущих планов; письмо о будущей поездке","coursebook_facts":["Holiday activities are central vocabulary.","Be going to is the target future form.","Learners talk and write about future holiday plans."],"coursebook_audit_status":"PASS","verified_can_do":"I can talk about my holiday plans using be going to.","patch":{}},"10b":{"coursebook_source":"Spotlight 6 · pp. 98–99 · 10b What’s the weather like?","coursebook_canonical_section":"What’s the weather like?","coursebook_canonical_topic":"Погода, одежда и планы","coursebook_canonical_focus":"weather; clothes; plans; comments on clothes","coursebook_canonical_grammar":"Present Continuous (future meaning); be going to; future forms in context","coursebook_canonical_skills":"диалог о погоде/одежде/планах; различение планов и решений; weather chart","coursebook_facts":["Weather and clothes are the vocabulary focus.","The grammar includes Present Continuous with future meaning and be going to; the module also contrasts future forms in context.","A weather chart is the writing output."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can talk about weather, clothes and near-future plans.","patch":{"grammar_focus":"Present Continuous для договорённостей; be going to; будущие формы в контексте"}},"10c":{"coursebook_source":"Spotlight 6 · p. 100 · 10c Weekend fun","coursebook_canonical_section":"Weekend fun","coursebook_canonical_topic":"Планы на выходные","coursebook_canonical_focus":"weekend activities; errands; plans","coursebook_canonical_grammar":"linkers because / so","coursebook_canonical_skills":"чтение email о выходных; планирование выходных; короткое письмо","coursebook_facts":["Weekend activities are the vocabulary focus.","The language focus is linkers because and so.","The writing output is an email about weekend activities."],"coursebook_audit_status":"CORRECT","verified_can_do":"I can make plans for the weekend and write a short email about them.","patch":{"grammar_focus":"связки because / so","skills":"чтение email о выходных; планирование выходных; короткое письмо"}},"10d":{"coursebook_source":"Spotlight 6 · p. 101 · Culture Corner · The Edinburgh Experience","coursebook_canonical_section":"Culture Corner: The Edinburgh Experience","coursebook_canonical_topic":"Достопримечательности Эдинбурга","coursebook_canonical_focus":"архитектура; достопримечательности; туристические впечатления","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"социокультурное чтение; туристическая программа/статья","coursebook_facts":["The Culture Corner is The Edinburgh Experience.","Learners read about Edinburgh attractions and tourist experiences."],"coursebook_audit_status":"PASS","verified_can_do":"I can find key facts about Edinburgh attractions and make a simple tourist plan.","patch":{}},"10e":{"coursebook_source":"Spotlight 6 · p. 102 · English in Use · Booking a hotel room","coursebook_canonical_section":"English in Use: Booking a hotel room","coursebook_canonical_topic":"Бронирование номера в отеле","coursebook_canonical_focus":"гостиница; тип номера; даты; услуги; цена","coursebook_canonical_grammar":"functional hotel-booking phrases","coursebook_canonical_skills":"диалог бронирования номера","coursebook_facts":["The functional focus is booking a hotel room."],"coursebook_audit_status":"PASS","verified_can_do":"I can book a hotel room and ask for basic information.","patch":{}},"10f":{"coursebook_source":"Spotlight 6 · p. 103 · Across the Curriculum: Geography · Coast to Coast","coursebook_canonical_section":"Across the Curriculum: Geography · Coast to Coast","coursebook_canonical_topic":"Побережья и пляжи","coursebook_canonical_focus":"типы побережий/пляжей; ландшафт; географические особенности","coursebook_canonical_grammar":"cause/effect language in context","coursebook_canonical_skills":"чтение географического текста; сравнение побережий; информационный плакат","coursebook_facts":["The extensive reading title is Coast to Coast in Geography.","The content concerns coasts/beaches and their geographical features."],"coursebook_audit_status":"ADJUST","verified_can_do":"I can compare types of coasts and beaches and explain their main features.","patch":{}},"10r":{"coursebook_source":"Spotlight on Russia · p. 12 · Sochi","coursebook_canonical_section":"Spotlight on Russia: Sochi","coursebook_canonical_topic":"Сочи — курортная столица России","coursebook_canonical_focus":"Black Sea coast; weather; beaches; spas; transport; summer/winter activities","coursebook_canonical_grammar":"module language review","coursebook_canonical_skills":"чтение туристического текста; извлечение фактов; туристическая брошюра","coursebook_facts":["Sochi is presented as a popular resort on the Black Sea coast.","The text mentions warm weather, landscapes, golden beaches and health spas.","Visitors travel by air and sea; Krasnaya Polyana attracts skiers in winter.","The article presents Sochi as a destination for both summer and winter activities."],"coursebook_audit_status":"PASS","verified_can_do":"I can give a tourist simple information about Sochi and activities there.","patch":{}}};

  function repairCoursebookProfiles(){
    for(const l of (window.LESSONS||[])){
      const r=COURSEBOOK_REGISTRY[idOf(l)];
      if(!r)continue;
      l.coursebook_source=r.coursebook_source;
      l.coursebook_canonical_section=r.coursebook_canonical_section;
      l.coursebook_canonical_topic=r.coursebook_canonical_topic;
      l.coursebook_canonical_focus=r.coursebook_canonical_focus;
      l.coursebook_canonical_grammar=r.coursebook_canonical_grammar;
      l.coursebook_canonical_skills=r.coursebook_canonical_skills;
      l.coursebook_facts=[...(r.coursebook_facts||[])];
      l.coursebook_audit_status=r.coursebook_audit_status||'PASS';
      if(r.patch && typeof r.patch==='object')Object.assign(l,r.patch);
    }
  }


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
    const verified=COURSEBOOK_REGISTRY[idOf(l)]?.verified_can_do;
    if(verified)return verified;
    if(idOf(l)==='4f')return`I can choose a suitable graph, ask a short survey question and explain the results.`;
    if(idOf(l)==='8r')return`I can use a text and map to plan a short route around Moscow Zoo and explain what a visitor can see.`;
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
    if(idOf(l)==='4f')return[
      'I can choose a graph that fits the information.',
      'My survey question is clear.',
      'My graph matches the data I collected or received.',
      'My explanation matches the graph and the numbers.'
    ];
    if(idOf(l)==='8r')return[
      'My route uses places that are really in the lesson text or map.',
      'I explain what a visitor can see at each stop.',
      'I use clear route phrases from the lesson.',
      'Another person can follow my mini-guide.'
    ];
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
      if(idOf(l)==='8r')return`Маршрут по Московскому зоопарку`;
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
      if(idOf(l)==='4f'){
        out.example=`I can see a line graph, a bar graph and a pie chart. I think the lesson is about different ways to show numbers.`;
        out.instruction=`Look at the three graph types in the lesson: line graph, bar graph and pie chart. What do they have in common? What may today's lesson be about?`;
      }else if(idOf(l)==='8r'){
        out.example=`I can read "Moscow Zoo" and see a map with different places. I think we will plan a route and talk about what visitors can see.`;
        out.instruction=`Look at the title, pictures and map of Moscow Zoo. Name two details you can really see. What may today's lesson be about?`;
      }else if(isAcross(l)&&category(l)==='survey'){
        out.example=`I can read "surveys leisure habits" and "turns answers into a chart". I think the lesson is about a survey and a chart.`;
      }else if(isCulture(l)){
        out.example=`I think the lesson is about the information in the current Spotlight on Russia text.`;
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
      if(idOf(l)==='4f'){
        out.title='Какая диаграмма для чего?';
        out.teacher='Организует короткое поисковое чтение текущего текста Drawing Numbers. Просит сопоставить line graph, bar graph и pie chart с их назначением, затем выбрать подходящий тип для одного набора данных.';
        out.students='Находят в тексте назначение трёх типов графиков, сопоставляют их с примерами и объясняют один выбор.';
        out.instruction=`Read the short section about line graphs, bar graphs and pie charts. Match each graph with its use. Which graph would you choose for 50% food, 20% clothes and 30% entertainment? Why?`;
        out.example=`I choose a pie chart because the three percentages are parts of one whole.`;
        out.materials='Spotlight 6, p. 43; три изображения/шаблона: line graph, bar graph, pie chart';
        out.support='таблица «graph type → what it shows»; ключевые слова changes over time / compare / parts of a whole';
        out.challenge='Предложить собственный пример данных и выбрать наиболее подходящий тип графика.';
        out.criterion='Ученик различает line/bar/pie chart по функции и обосновывает выбор типом информации.';
      }else if(idOf(l)==='8r'){
        out.title='Что есть в Московском зоопарке?';
        out.teacher='Организует поисковое чтение текста Moscow Zoo. Просит распределить найденные слова по трём группам: places, animals, visitor activities.';
        out.students='Находят названия зон и объектов, животных и действий посетителя; объясняют одно решение по тексту.';
        out.instruction=`Read the Moscow Zoo text. Find words for three groups: places, animals and things visitors can do. Add at least one example to each group from the text.`;
        out.example=`Places: Animal Island, Aquarium. Animals: Amur tiger, emu. Visitors can: visit the Children’s Zoo, use a map.`;
        out.materials='Spotlight on Russia, p. 10; таблица Places / Animals / Visitor actions';
        out.support='готовые заголовки трёх групп; первый пример из текста';
        out.challenge='Связать место и животное/действие одним предложением: You can see… / You can…';
        out.criterion='Каждый пример можно показать в тексте; ученик различает место, животное и действие посетителя.';
      }else{
        out.example=`${w[0]||'Word 1'} and ${w[1]||'word 2'} belong together because they are connected with today's topic.`;
        out.criterion='Слова распределены осмысленно; ученик может объяснить хотя бы один выбор и использовать лексику в понятном контексте.';
      }
    }
    if(code==='P3-02'){
      if(idOf(l)==='4f'){
        out.title='Вопрос для опроса и язык результатов';
        out.instruction=`Write one clear survey question with fixed answer categories. Then use the sample data to write one result sentence that exactly matches the numbers.`;
        out.example=`Question: Which is your favourite school activity? Data: 10 students — sport 5, music 3, art 2. Result: 50 per cent chose sport.`;
        out.criterion='Вопрос даёт фиксируемые ответы; предложение о результате точно соответствует данным.';
      }else if(idOf(l)==='8r'){
        out.title='Язык маршрута по зоопарку';
        out.teacher='Показывает речевые модели маршрута и просит связать две-три реальные точки из текста/карты в понятную последовательность.';
        out.students='Строят короткий маршрут по материалу учебника и объясняют, что можно увидеть на каждой остановке.';
        out.instruction=`Use the text and map. Make a three-stop route with First, visit… / Then go to… / Don’t miss… / You can see….`;
        out.example=`First, visit Animal Island. You can see Amur tigers there. Then go to the Aquarium. Don’t miss the Night World.`;
        out.materials='Spotlight on Russia, p. 10; карта/иллюстрации; карточка речевых начал';
        out.support='First… / Then… / After that… / You can see… / Don’t miss…';
        out.challenge='Добавить причину выбора остановки: … because I want to see…';
        out.criterion='Маршрут последователен; все остановки и объекты подтверждаются текстом/картой.';
      }else if(isAcross(l)&&category(l)==='survey'){
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
      if(idOf(l)==='4f'){
        out.mode='пары/мини-группы → короткий обмен';
        out.teacher='После работы с тремя типами графиков организует мини-опрос из 10 ответов или выдаёт готовые данные. Группа сама выбирает подходящий тип графика из изученных, строит его и готовит короткий комментарий. Длинные фронтальные выступления не требуются.';
        out.students='Формулируют один вопрос, фиксируют 10 ответов, выбирают подходящий line/bar/pie chart по характеру данных, строят график и готовят 3–4 точных предложения.';
        out.instruction=`Ask one clear survey question or use the ready data. Choose the graph type that fits the information best. Make the graph and explain the results. Check that every number in the explanation matches the data.`;
        out.example=`For favourite activities with separate categories, a bar graph is useful for comparison. We asked 10 students: sport 5, music 3, art 2. The bars show 5, 3 and 2. 50 per cent chose sport.`;
        out.materials='Spotlight 6, p. 43; карточка вопроса; tally table на 10 ответов; шаблоны line/bar/pie chart; линейка; при необходимости калькулятор';
        out.support='памятка «line = change over time; bar = compare categories; pie = parts of a whole»; 1 из 10 = 10%';
        out.challenge='Объяснить, почему другой тип графика был бы менее удобен для этих данных.';
        out.criterion='Тип графика выбран осмысленно; данные и график совпадают; проценты, если используются, верны; комментарий не противоречит изображению.';
      }else if(idOf(l)==='8r'){
        out.mode='индивидуально → пары → малые группы';
        out.teacher='Использует только текст и карту Moscow Zoo из текущего Spotlight on Russia. Просит выбрать три-четыре реальные остановки и создать короткий маршрут для посетителя.';
        out.students='Извлекают из текста информацию о зонах и животных, выбирают остановки, строят последовательный маршрут и объясняют его другой паре.';
        out.instruction=`Use the Moscow Zoo text and map. Create a short route with 3–4 stops. At each stop, say what a visitor can see or do. Use only places and facts you can point to in the lesson source.`;
        out.example=`First, visit Animal Island. You can see Amur tigers and an Australian emu there. Then go to the Aquarium to see colourful fish. Don’t miss the Night World. Finish at the Children’s Zoo.`;
        out.materials='Spotlight on Russia, p. 10; карта Moscow Zoo; шаблон Route: stop → what to see/do';
        out.support='First… / Then… / After that… / Finally… / You can see… / Don’t miss…';
        out.challenge='Добавить одну причину выбора остановки и кратко объяснить маршрут без чтения полного текста.';
        out.criterion='Все остановки и факты подтверждаются текстом/картой; маршрут логичен; другой человек может понять порядок посещения.';
      }else if(isAcross(l)&&category(l)==='survey'){
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
      if(idOf(l)==='4f'){
        out.instruction=`Individually study the new data set. Choose a suitable graph type and make a mini-graph or a short report. Do not change the data. Explain why your graph type fits the information.`;
        out.teacher='Выдаёт новый небольшой набор данных. После самостоятельной работы открывает критерии: подходящий тип графика, точность чисел, соответствие текста.';
        out.students='Самостоятельно выбирают line/bar/pie chart по типу данных, создают мини-продукт и сверяют его с исходными числами.';
        out.criterion='Тип графика соответствует данным; числа не изменены; текст/диаграмма согласованы; выбор можно кратко объяснить.';
      }else if(idOf(l)==='8r'){
        out.instruction=`Individually use the Moscow Zoo text and map to make a new two-stop route. For each stop, write what a visitor can see there. Do not use a place or animal unless it is in the source.`;
        out.teacher='Даёт новую точку старта или условие маршрута. После самостоятельного выполнения открывает текст/чек-лист для проверки.';
        out.students='Самостоятельно создают двухостановочный маршрут, затем сверяют каждое место и факт с текстом/картой.';
        out.criterion='Маршрут самостоятельный; обе остановки и факты подтверждены источником; последовательность понятна.';
      }else if(isAcross(l)&&category(l)==='survey'){
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

    if(idOf(l)==='4f'){
      if(out[0]){
        out[0].situation='Используй готовый набор данных: выбери подходящий тип графика, построй его и кратко объясни результат.';
        out[0].steps=['Прочитай данные.','Реши, что лучше подходит: line graph, bar graph или pie chart.','Построй выбранный график.','Если используешь проценты, проверь расчёт.','Напиши 3–4 предложения, которые точно описывают график.'];
        out[0].check=['Тип графика подходит данным','График совпадает с числами','Проценты рассчитаны верно или не используются','Текст совпадает с графиком'];
      }
      if(out[1]){
        out[1].situation='Создай карточку One Data Set — Three Graph Choices: покажи данные и объясни, какой из трёх типов графиков подходит лучше всего.';
        out[1].check=['Есть исходные данные','Рассмотрены line/bar/pie chart','Выбор графика объяснён','Числа и выводы согласованы'];
      }
      if(out[4]){
        out[4].steps=['Сделай шесть разных карточек: выбрать тип графика, прочитать график, проверить tally, найти процент, сравнить категории, найти ошибку.','На каждой карточке дай достаточно данных для однозначного ответа.','На обороте запиши правильный ответ/расчёт.','Проверь математическую и языковую точность.'];
        out[4].check=['Ровно 6 карточек','Есть задания и на типы графиков, и на данные','Все числа и проценты согласованы','Есть правильный ключ'];
      }
    }else if(isAcross(l)&&category(l)==='survey'){
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

    if(idOf(l)==='8r'){
      for(const h of out){
        h.bank='Источник содержания: Spotlight on Russia, p. 10, Moscow Zoo — текст, карта/иллюстрации и собственные записи урока.';
      }
      if(out[0]){
        out[0].situation='Подготовь короткий маршрут по Московскому зоопарку для посетителя.';
        out[0].steps=['Открой текст и карту Moscow Zoo.','Выбери 3 остановки, которые реально есть в источнике.','Для каждой запиши, что там можно увидеть или сделать.','Соедини остановки словами First / Then / Finally.','Проверь каждый факт по тексту.'];
        out[0].check=['Все остановки есть в источнике','У каждой остановки есть понятное описание','Маршрут последовательный','Нет придуманных объектов или животных'];
      }
      if(out[1]){
        out[1].situation='Создай мини-буклет My Moscow Zoo Route: маршрут, 3–4 остановки и маленькие значки/рисунки.';
      }
      if(out[2]){
        out[2].situation='Подготовь 45–60-секундную мини-экскурсию по трём остановкам. На следующем уроке партнёр задаст один вопрос.';
      }
      if(out[3]){
        out[3].situation='Сделай две карточки Moscow Zoo Information Gap: на одной пропущены места, на другой — животные/объекты. Парная работа проходит на следующем уроке.';
      }
      if(out[4]){
        out[4].steps=['Сделай шесть разных карточек по Moscow Zoo.','Используй разные действия: выбрать место, соединить место и животное, закончить маршрут, найти неверный факт, выбрать следующую остановку, ответить Where can you see…?','Используй только факты из текста/карты.','На обороте запиши правильный ответ.'];
        out[4].check=['Ровно 6 карточек','Все факты подтверждены источником','Карточки проверяют разные действия','На каждой есть однозначный ответ'];
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
    if(idOf(l)==='8r')return['T10','F10'];
    if(/^English in Use/i.test(section))return['T05','F06'];
    if(/^Culture Corner/i.test(section)||/^Spotlight on Russia/i.test(section))return['T10','F05'];
    if(/^Across the Curriculum/i.test(section))return['T11','F07'];
    if(/^Literature:/i.test(section))return['T03','F05'];
    return['T01','F01'];
  }

  function installRecommendedDefaults(){
    if(window.__KA_DEFS_2420)return true;
    if(typeof window.defs!=='function')return false;
    window.defs=function(l){return recommendedDefaults(l)};
    window.__KA_DEFS_2420=true;
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
    if(window.__KA_METHOD_2420)return true;
    if(!Array.isArray(window.LESSONS)||typeof window.buildLessonKit!=='function')return false;
    repairCoursebookProfiles();
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
    window.KA_METHOD_V24={version:'24.2.0',productBare,grammarEn,canDo,success,recommendedDefaults};
    window.__KA_METHOD_2420=true;
    installRecommendedDefaults();
    const defaultsTimer=setInterval(()=>{if(installRecommendedDefaults())clearInterval(defaultsTimer)},25);
    try{ if(typeof reset==='function')setTimeout(()=>reset(),0); }catch(_){}
    return true;
  }

  if(!install()){
    const timer=setInterval(()=>{if(install())clearInterval(timer)},25);
  }
})();
