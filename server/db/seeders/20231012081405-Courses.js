/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          name: 'как стать миллионером за минуту',
          desc: 'действенный метод разбогатеть без смс и регистрации',
          url: 'точно не обман',
          companyId: 19,
          categoryId: 1,
          format: 'Online',
          price: 1000000,
          duration: 0,
          freezed: false,
          givesDiplom: true,
          img: 'https://i.pinimg.com/736x/e2/5f/f2/e25ff237663f4c0e1a03faa1e7bfc2c2.jpg',
        },

        {
          name: 'Веб-разработчик',
          desc: 'Идеальная программа для тех, кто хочет стать разработчиком на языке программирования JavaScript за 4 месяца. Актуальная программа: HTML, CSS, TypeScript, JavaScript, Node js, Express, React, Redux, PostgreSQL, Git. Живые лекции и разбор кода ментором. Помощь в трудоустройстве: 40 часов с карьерными коучами.',
          url: 'https://elbrusboot.camp/online-js/',
          companyId: 1,
          categoryId: 1,
          format: 'Offline',
          price: 260000,
          duration: 4,
          freezed: false,
          givesDiplom: true,
          img: 'https://sun9-22.userapi.com/bNXs-s4pVgJjurWTmLQcW30aAwL3Kel5EbTcwA/pA7Jq_-HUro.jpg',
        },
        {
          name: 'Коммерческий иллюстратор',
          desc: 'Освойте навыки в иллюстрации и создайте сильное портфолио за 4 месяца. Без иллюстрации не обойтись в IT-продуктах и медиа, в рекламе, в оформлении сайтов, приложений и брендов. С новыми навыками вы получите свободу выбора: сможете зарабатывать на своём творчестве, решать задачи бизнеса, не изменяя своему стилю, искать и находить заказчиков по всему миру.',
          url: 'https://practicum.yandex.ru/commercial-illustrator/?from=catalog',
          companyId: 2,
          categoryId: 1,
          format: 'Online',
          price: 79000,
          duration: 4,
          freezed: false,
          givesDiplom: true,
          img: 'https://onlinekursbest.ru/wp-content/webp-express/webp-images/uploads/2022/12/22.Kommercheskij-illjustrator-ot-Yandeks.Praktikum.png.webp',
        },
        {
          name: 'Блогер',
          desc: 'Блогинг — не про случайный взлет и богатых спонсоров. Это реальная профессия, доступная каждому. Успешный блог — результат регулярной работы по определенной стратегии. Расскажем, как выстроить эту стратегию и продвинуться на любой платформе: от телеграм-канала до подкаста.',
          url: 'https://online.artforintrovert.ru/blogger',
          companyId: 3,
          categoryId: 1,
          format: 'Online',
          price: 159990,
          duration: 3,
          freezed: false,
          givesDiplom: true,
          img: 'https://static.tildacdn.com/tild6263-3133-4264-a464-623362663330/__2023-05-11__192038.png',
        },
        {
          name: 'Веб-разработчик',
          desc: 'Идеальная программа для тех, кто хочет стать разработчиком на языке программирования JavaScript за 3 месяца. Актуальная программа: HTML, CSS, TypeScript, JavaScript, Node js, Express, React, Redux, PostgreSQL, Git. Живые лекции и разбор кода ментором. Помощь в трудоустройстве: 40 часов с карьерными коучами.',
          url: 'https://elbrusboot.camp/web-development/',
          companyId: 1,
          categoryId: 1,
          format: 'Offline',
          price: 330000,
          duration: 3,
          freezed: false,
          givesDiplom: true,
          img: 'https://elbrusboot.camp/static/4da56fae43b9dcc93f9138ba2d515174/ef587/msk-slide-4.png',
        },
        {
          name: 'Базовый кондитерский курс',
          desc: 'Научись печь торты и десерты для себя или на заказ. Уровень подготовки: начальный. Смотрите уроки и готовьте в удобное время. Доступ к видео-урокам останется после курса навсегда. Шеф-кондитер всегда на связи, чтобы помочь и ответить на любые вопросы. Отработанные рецепты, простые ингредиенты, понятная технология, качественные уроки - залог идеального торта с первого раза.',
          url: 'https://thecake-school.ru/onlajn-kursyi/bazovyij-kurs',
          companyId: 7,
          categoryId: 1,
          format: 'Online',
          price: 3450,
          duration: 2,
          freezed: false,
          givesDiplom: false,
          img: 'https://thecake-school.ru/assets/img/blog/Shlychkova_Olga-cover.jpg',
        },

        {
          name: 'SMM-менеджер',
          desc: 'SMM-менеджер — специалист, который занимается продвижением бизнеса (компаний, брендов и отдельных лиц) в соцсетях. Курс состоит из двух частей: базовой и курсов повышения квалификации. Включает в себя видеоуроки, практику и консультации с практикующими специалистами. Материалы курса постоянно обновляются. Выпускники получают доступ к чату с вакансиями и публикуются на сайте школы. Заказчики могут напрямую написать и предложить работу.',
          url: 'https://smm.school/kurs-smm-manager/?utm_source=sajt',
          companyId: 4,
          categoryId: 1,
          format: 'Online',
          price: 49200,
          duration: 5,
          freezed: false,
          givesDiplom: true,
          img: 'https://static.tildacdn.com/tild3231-3438-4137-b562-393364343465/11.png',
        },
        {
          name: 'Таргетолог с нуля до PRO',
          desc: 'Вы научитесь запускать рекламу в соцсетях. Поймёте, как оптимизировать кампании, работать с парсерами и собирать аналитику по всем каналам. Попрактикуетесь в продвижении реального бизнеса c бюджетом от Skillbox и пополните портфолио рабочими кейсами. Многие таргетологи работают в IT. После курса у вас будет шанс попасть в штат аккредитованной IT-компании.',
          url: 'https://skillbox.ru/course/profession-target-service/',
          companyId: 5,
          categoryId: 1,
          format: 'Online',
          price: 41820,
          duration: 12,
          freezed: false,
          givesDiplom: true,
          img: 'https://248006.selcdn.ru/LandGen/69981/a3166d36e99596e197dafeadf48c049427446704.jpg',
        },
        {
          name: 'Data science',
          desc: 'Погружение в профессию Data Scientist на языке Python. 6 полноценных проектов в портфолио для будущего трудоустройства. Профессии после обучения: Data Scientist, Аналитик данных, Дата‑инженер',
          url: 'https://elbrusboot.camp/datascience/',
          companyId: 1,
          categoryId: 1,
          format: 'Online',
          price: 260000,
          duration: 4,
          freezed: false,
          givesDiplom: true,
          img: 'https://elbrusboot.camp/static/ca6b44d5814b81f56bff5da68243ab6f/b6a7a/spb-slide-3.png',
        },
        {
          name: 'UX/UI-дизайнер',
          desc: 'Получите профессию на стыке аналитики и творчества с нуля и начните карьеру в IT. Под руководством опытных менторов вы научитесь создавать понятный и современный дизайн сайтов и мобильных приложений. И сможете работать удаленно из любой точки мира. UX/UI-дизайнер — одна из 15 наиболее востребованных профессий в мире.',
          url: 'https://contented.ru/edu/ux-ui-designer',
          companyId: 6,
          categoryId: 1,
          format: 'Online',
          price: 41584,
          duration: 8,
          freezed: false,
          givesDiplom: true,
          img: 'https://thumb.tildacdn.com/tild6266-3564-4537-b630-383734333933/-/resize/560x/-/format/webp/Frame_65_3.jpg',
        },
        {
          name: 'Геймдизайнер',
          desc: 'Геймдизайнер придумывает уникальные игровые миры, в которые с удовольствием погружаются геймеры и хотят возвращаться в них снова. Он отвечает за проработку концепции, механик и игрового опыта. Для тех, кто любит игры, это профессия мечты, которую можно освоить без специального опыта. Научитесь создавать игры, от которых будут в восторге тысячи геймеров. Раскройте себя через разработку захватывающих игр, превратите хобби в работу с хорошим доходом, станьте IT-специалистом с востребованным набором навыков.',
          url: 'https://contented.ru/edu/game-designer',
          companyId: 6,
          categoryId: 1,
          format: 'Online',
          price: 53847,
          duration: 9,
          freezed: false,
          givesDiplom: true,
          img: 'https://static.tildacdn.com/tild6432-3935-4930-b362-353035376262/__2023-09-14__161240.png',
        },

        {
          name: 'Подготовка к ЕГЭ по русскому',
          desc: 'Поможем подготовиться к ЕГЭ по русскому языку с любого уровня на нужный балл. И теория. И практика. И пробники. И все нужные материалы.',
          url: 'https://sotkaonline.ru/russkii_yazik',
          companyId: 8,
          categoryId: 2,
          format: 'Online',
          price: 36720,
          duration: 9,
          freezed: false,
          givesDiplom: false,
          img: 'https://sotkaonline.ru/_next/static/media/physics_about_oge.80c3fbe3.webp',
        },
        {
          name: 'Jazz funk',
          desc: 'Джаз-фанк — одно из самых молодых танцевальных направлений в мире. Джаз-фанк объединяет тело и разум. Он может начинаться с лирических, нежных движений, а потом — бум! — вы взрываете танцпол серией ярких, интенсивных прыжков и пируэтов. Вы не просто танцуете, вы рассказываете историю. Джаз-фанк – это не просто стиль или сочетание направлений, это отличная возможность для каждого танцора проявить свою индивидуальность, а также показать всем универсальность, которая так высоко ценится в настоящее время.',
          url: 'https://danco-studio.ru/courses/jazz-funk-course/',
          companyId: 11,
          categoryId: 2,
          format: 'Offline',
          price: 6000,
          duration: 2,
          freezed: false,
          givesDiplom: false,
          img: 'https://danco-studio.ru/wp-content/uploads/group-1-5.jpg',
        },
        {
          name: 'Главное об игристом вине',
          desc: 'Все что нужно знать о шампанском, чтобы перестать теряться среди разнообразных сортов и найти свой. Вместо нудных консультантов, дорогих дегустаций и сомнительных советов из интернета. Расскажем о появление шампанских вин, особенностях производства, а также о культовых шампанских домах!',
          url: 'https://new.artforintrovert.ru/course/64ad843392e8107d12a2b97c/0/0/0',
          companyId: 3,
          categoryId: 3,
          format: 'Online',
          price: 4000,
          duration: 0.1,
          freezed: true,
          givesDiplom: false,
          img: 'https://img.gazeta.ru/files3/594/13700594/Depositphotos_154961612_l-2015-pic4_zoom-1500x1500-33683.jpg',
        },
        {
          name: 'Основной курс подготовки к ЕГЭ',
          desc: '9 месяцев интенсивной подготовки к ЕГЭ с любого уровня до 90+ баллов. Подбираем уровень программы конкретно под твой текущий уровень и цели по баллам. Даем материал на онлайн-занятиях и теоретических интерактивных уроках. Отвечаем на любой вопрос по предмету и домашнему заданию в течение 5 минут. Не только даем домашнее задание, но и объясняем, как его делать, чтобы материал закреплялся.',
          url: 'https://umschool.net/#second',
          companyId: 9,
          categoryId: 2,
          format: 'Online',
          price: 35010,
          duration: 9,
          freezed: false,
          givesDiplom: false,
          img: 'https://img4.teletype.in/files/36/20/36201a8c-6774-4a81-acc9-201e204ce4cd.png',
        },
        {
          name: 'Дело в шляпке! Всё про грибы.',
          desc: 'Мы знакомы с ними с детства — с грибка над песочницей и папиного омлета с лисичками и живем рядом с ними всю жизнь. Но что мы о них вообще знаем? Попробуем за пять встреч разобраться, что это такое — Грибное Царство. Союзник оно нам или недружественное государство? Все проходит онлайн в Zoom, лекция длится 80 минут. Во время лекции вопросы можно задавать в чате, на них будет отвечать куратор курса.',
          url: 'https://stradarium.ru/mushrooms',
          companyId: 13,
          categoryId: 2,
          format: 'Online',
          price: 5970,
          duration: 1,
          freezed: false,
          givesDiplom: false,
          img: 'https://i.pinimg.com/564x/da/64/93/da6493df0f4a76b95e6c7a39c328aaa3.jpg',
        },
        {
          name: 'Английский для IT специалистов',
          desc: 'Курс будет полезен для разработчиков, QA, аналитиков, дизайнеров и менеджеров. Прокачаем карьеру с ментором из IT. Выведем английский на новый уровень.',
          url: 'https://skyeng.ru/programs/anglijskij-po-otraslyam/it_premium/',
          companyId: 10,
          categoryId: 2,
          format: 'Online',
          price: 30999,
          duration: 3,
          freezed: false,
          givesDiplom: true,
          img: 'https://rozetked.me/images/uploads/o5NpKZIdxwdU.jpg',
        },
        {
          name: 'Эстафета креативного огня',
          desc: 'Курс для дизайнеров, арт-директоров, копирайтеров, иллюстраторов и всех тех, кто работает с визуальным контентом и хочет понять, как устроена фаза генерации идей. Курс создан для людей, которые хотят бодро придумывать визуальные идеи, делать это увлеченно и системно. Профессионалам будет полезно отвлечься от основной работы и размять свое воображение. Новички узнают основы придумывания идей, погрузятся в теорию и прокачают свои творческие мышцы.',
          url: 'https://controforma.school/creative_thinking',
          companyId: 18,
          categoryId: 3,
          format: 'Online',
          price: 9900,
          duration: 1,
          freezed: false,
          givesDiplom: false,
          img: 'https://static.tildacdn.com/tild3064-3839-4266-b236-646261336163/form-template.jpg',
        },
        {
          name: 'Курс английского по уровням',
          desc: 'Начните наш многоуровневый курс английского, и вы обретете уверенность в общении, сможете достичь профессионального роста и наслаждаться захватывающими путешествиями.',
          url: 'https://skyeng.ru/obshchie-kursy-po-angliyskomu-yazyku/',
          companyId: 10,
          categoryId: 2,
          format: 'Online',
          price: 32499,
          duration: 3,
          freezed: false,
          givesDiplom: true,
          img: 'https://info-profi.net/wp-content/uploads/2020/10/%D0%A1%D0%BA%D0%B0%D0%B9-735x400.png',
        },
        {
          name: 'Подготовка к ЕГЭ по математике',
          desc: 'Поможем подготовиться к ЕГЭ по математике с любого уровня на нужный балл. И теория. И практика. И пробники. И все нужные материалы.',
          url: 'https://sotkaonline.ru/matematika',
          companyId: 8,
          categoryId: 2,
          format: 'Online',
          price: 36720,
          duration: 9,
          freezed: false,
          givesDiplom: false,
          img: 'https://sotkaonline.ru/blog/wp-content/uploads/2023/03/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D1%82%D1%8C%D1%81%D1%8F-%D0%BA-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B5-%D0%95%D0%93%D0%AD-2024.png',
        },

        {
          name: 'Уроки танцев Гоу Гоу',
          desc: 'Любая желающая, может попробовать в образе танцовщицы. Вас научат слушать музыку, различать ее части и двигаться в ритм. Овладев первичными навыками, можно приступать к разучиванию простых хореографий, постановке рук и корпуса, основам импровизации. Тренировки ведут опытные педагоги, способные привить любовь к дисциплине и научить каждого танцевать. Эти молодые ребята уже реализовали себя в качестве танцоров и поэтому могут поделиться бесценным опытом со своими учениками. К каждому из желающих научится танцевать учителя найдут индивидуальный подход, который поможет раскрыть их творческий потенциал.',
          url: 'https://go-dance.com/studiya-tancev-gou-gou/',
          companyId: 12,
          categoryId: 2,
          format: 'Offline',
          price: 4000,
          duration: 1,
          freezed: false,
          givesDiplom: false,
          img: 'https://go-dance.com/wp-content/themes/yootheme/cache/0c/uroki-tancev-dlya-nachinayushchih-0cca7b32.jpeg',
        },

        {
          name: 'Искусство речи',
          desc: 'Тренинг ораторского мастерства «Искусство речи» разработан для людей разных профессий и уровня подготовки. В основу программы заложены знания автора из трёх сфер — актёрского мастерства, журналистики и практической психологии. Александр Эпштейн, создатель курса, адаптировал базовые элементы знаменитой системы К.С. Станиславского под задачи оратора и дополнил приёмами ведения дискуссии, техниками защиты от манипуляций, упражнениями на развитие голоса и дикции.',
          url: 'https://kultura-rechi.ru/kurs-oratorskogo-masterstva/',
          companyId: 14,
          categoryId: 2,
          format: 'Offline',
          price: 24000,
          duration: 1,
          freezed: false,
          givesDiplom: true,
          img: 'https://treningminsk.by/wp-content/uploads/2020/10/oratorskoe-iskusstvo.jpg',
        },
        {
          name: 'Курс ведения переговоров',
          desc: 'Тренинг делового общения разработан для выпускников курса ораторского мастерства. В теоретической части мы рассмотрим понятие манипуляций и предложим альтернативу — актуализированное поведение. Научимся корректно защищать личные границы и отстаивать свои интересы, отказывать без угрызений совести, критиковать не травмируя, спокойно общаться со вспыльчивым человеком, отвечать на критику и агрессию. В практической части мы рассмотрим поведение в сложных ситуациях общения: споры, конфликты, тяжёлые переговоры. Участники разобьются на группы и по ролям разыграют предложенные ситуации, с которыми не раз сталкивались в жизни.',
          url: 'https://kultura-rechi.ru/psixologiya-obshheniya/',
          companyId: 14,
          categoryId: 2,
          format: 'Offline',
          price: 24000,
          duration: 1,
          freezed: false,
          givesDiplom: true,
          img: 'https://kultura-rechi.ru/images/mini-kurs-1.jpg',
        },
        {
          name: 'Как бороться с агрессией',
          desc: 'Практические советы от психолога по экологичному проживанию негативных эмоций, чтобы научиться отстаивать границы и комфортно проявлять себя. Вместо эмоционального опустошения, обид на близких и подавленных чувств. Выясните, как агрессия влияет на уровень дохода и освоите техники, которые помогут в здоровой форме выражать злость.',
          url: 'https://new.artforintrovert.ru/course/64a6c6d05404c986f54a8f6c/0/0/0',
          companyId: 3,
          categoryId: 3,
          format: 'Online',
          price: 5000,
          duration: 0.1,
          freezed: false,
          givesDiplom: false,
          img: 'https://img.razvitum.ru/images/publications/photos_Andreeva_foto2.jpg',
        },

        {
          name: 'Здоровый сон',
          desc: 'Экспресс-курс Михаила Полуэктова и Максима Кашулинского. Как высыпаться ночью, чтобы днем было много сил и энергии. Узнаете, зачем мы спим и почему сон часто нарушается. Узнаете о самых надежных способах улучшить сон и сможете попробовать их самостоятельно. Познакомитесь с когнитивно-поведенческой терапией бессонницы, которая помогает меньше тревожиться по поводу сна.',
          url: 'https://www.skillcup.ru/courses/poluektov#about',
          companyId: 15,
          categoryId: 3,
          format: 'Online',
          price: 2299,
          duration: 0.1,
          freezed: false,
          givesDiplom: false,
          img: 'https://thumb.tildacdn.com/tild3463-3161-4439-b931-363064343539/-/resize/640x/-/format/webp/2.png',
        },
        {
          name: 'Практический курс по йоге',
          desc: 'Методика обучения индивидуальным и групповым практикам (364ч). Изучите дыхательные и медитационные техники, анатомию, психофизиологию, спортивную медицину и биомеханику мышечной деятельности человека.Также узнаете психофизиологические характеристики силы, быстроты, выносливости, гибкости, ловкости.',
          url: 'https://niidpo.ru/seminar/10331',
          companyId: 16,
          categoryId: 3,
          format: 'Online',
          price: 24500,
          duration: 3,
          freezed: false,
          givesDiplom: true,
          img: 'https://tt-data.tutortop.ru/showcase_courses/XpUVZI2kgUmynVbxCWKhdlI67EBoFQ78EUuUrJOG.jpg',
        },
        {
          name: 'Тайм-менеджмент',
          desc: 'Вы попробуете разные техники тайм-менеджмента и соберёте список инструментов для любых ситуаций. Станете эффективнее и увереннее в работе и личных делах. Поймёте, как найти в своём графике время на отдых, родных, хобби и спорт. Разберётесь, как наладить режим, чтобы было больше сил на работу, учёбу и личную жизнь. Освоите методы расстановки приоритетов во время работы в режиме многозадачности. Улучшите коммуникацию с коллегами, чтобы точнее определять объём задач, дедлайны и нагрузку.',
          url: 'https://netology.ru/programs/tajm-menedzhment-i-upravlenie-resursami#/',
          companyId: 17,
          categoryId: 3,
          format: 'Online',
          price: 6600,
          duration: 1,
          freezed: true,
          givesDiplom: true,
          img: 'https://checkroi.ru/wp-content/uploads/2021/03/kurs-tajm-menedzhment-ot-netologii-768x514.jpg',
        },
        {
          name: 'Лидеры изменений',
          desc: 'МВА-программа развития лидерских качеств и профессиональных компетенций для владельцев бизнесов, топ-менеджеров и руководителей среднего звена.',
          url: 'https://skillbox.ru/business-school/',
          companyId: 5,
          categoryId: 1,
          format: 'Offline',
          price: 1300000,
          duration: 18,
          freezed: true,
          givesDiplom: true,
          img: 'https://s0.rbk.ru/rbcplus_pics/media/img/0/17/296343014253170.png',
        },
        {
          name: 'Навыки аргументации',
          desc: 'Действенные техники аргументации, чтобы быть убедительным в любом споре. Вместо «ой, все», тысячи виртуальных войн в комментариях и истощенной нервной системы.',
          url: 'https://new.artforintrovert.ru/course/65046d974384dcd2f551d551/0/0/0',
          companyId: 3,
          categoryId: 3,
          format: 'Online',
          price: 4500,
          duration: 0.1,
          freezed: true,
          givesDiplom: false,
          img: 'https://igrox.ru/upload/medialibrary/d16/gpkw1wy9rss997fv01rltzvi2p95yy21.jpeg',
        },

        {
          name: 'Эмоциональный интеллект',
          desc: 'Узнаете, как управлять эмоциями: избегать стрессов, конфликтов и манипуляций. Сможете лучше понимать окружающих и строить крепкие отношения на работе и в личной жизни. Усилите свои лидерские качества и повысите уровень доверия к себе.',
          url: 'https://netology.ru/programs/emocionalnyj-intellekt',
          companyId: 17,
          categoryId: 3,
          format: 'Online',
          price: 5900,
          duration: 1,
          freezed: true,
          givesDiplom: true,
          img: 'https://cs62.babysfera.ru/1/0/1/d/006a15592f23f8ba988df28c425d784e19c.jpeg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
