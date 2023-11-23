/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          name: "Эльбрус буткемп",
          desc: "Буткемп - это интенсивный формат обучения программированию (ежедневно, с утра до вечера, на протяжении трех месяцев в кампусе и четырех при формате онлайн) на реальных проектах с трудоустройством после обучения ",
          address: "Россия, г. Москва, ул. Орджоникидзе, 11 стр. 10",
          contacts: "8 (499) 938-68-24",
          img: "https://elbrusboot.camp/static/42294740dd5c8e8569225c128cbeda1f/ada94/faq.png",
          url: "https://elbrusboot.camp/#top",
          userId: 2,
        },
        {
          name: "Яндекс Практикум",
          desc: "Практикум влюбляет в IT — и это у нас от Яндекса. Не душно, а по душе: в технологиях есть простор, чтобы работать и жить так, как хочется. С джуна всё только начинается, а предела совершенству нет. В IT все разные — и в этом разница. Пробуйте, ошибайтесь и пробуйте снова: так создают продукты, которые меняют мир",
          address: "г. Москва, ул. Тимура Фрунзе, д. 11, корпус 2",
          contacts: "8 (800) 700-93-29, 8 (495) 739-70-00",
          img: "https://storage.yandexcloud.net/yandexpro-prod/storage/images/originals/rbbV040khvDPdom4n002jNPoZACSCTIuE4XAkxsM.png",
          url: "https://practicum.yandex.ru/",
          userId: 3,
        },
        {
          name: "Art For Introvert",
          desc: "Образовательные курсы. 30+ направлений. Программы профессиональной переподготовки для тех, кто настроен серьезно. Времени на чтение и саморазвитие постоянно не хватает. Мы укорачиваем путь к знаниям: выжимаем и структурируем все самое важное в 20-минутные саммари, чтобы вы узнавали новое о себе и мире, не жертвуя свободным временем.",
          address: "г. Санкт-Петербург, Владимирский пр., 17 (корпус 3)",
          contacts: "",
          img: "https://spb.hh.ru/employer-logo/5682277.png",
          url: "https://online.artforintrovert.ru/",
          userId: 4,
        },
        {
          name: "SMM.school",
          desc: "Школа продвижения в социальных сетях от создателей сервиса SMMplanner. Онлайн курсы, интенсивы и мастер-классы сфокусированы на решении конкретных задач по продвижению в социальных сетях, мы создали максимально прикладные уроки, по которым вы можете начать применять знания прямо во время обучения. Первый курс школы был проведен 23 июля 2017 года и за все время у нас прошли обучение более 50 тысяч студентов. Наши курсы сфокусированы на решении конкретных задач по продвижению, которые стоят перед специалистами или конкретным бизнесом. Преподаватели - практики в своей сфере.",
          address: "",
          contacts: "8 (495) 148-62-24",
          img: "https://edushka.ru/media/company/image_1629.jpeg",
          url: "https://smm.school/",
          userId: 5,
        },
        {
          name: "Skillbox",
          desc: "Миссия Skillbox — дать возможность каждому быть актуальным и востребованным специалистом прямо сейчас. Вне зависимости от возраста и географии. Мы предлагаем большой выбор курсов для профессионального и личностного развития. 9000+ человек достигли карьерных изменений благодаря Skillbox. Мы проводим консультации для пользователей платформы: помогаем составить резюме, пройти собеседование и достичь карьерной цели. Организуем конференции и проводим более 70 вебинаров ежегодно.",
          address: "г. Москва, Ленинский проспект, дом 6, строение 20",
          contacts: "8 (800) 500-05-22",
          img: "https://static.tildacdn.com/tild6663-3461-4439-b432-656365316262/Facebook_post_-_2.png",
          url: "https://skillbox.ru/",
          userId: 6,
        },
        {
          name: "Contented",
          desc: "Крупнейшая профильная школа дизайна. Здесь не просто учат, а помогают развивать знания и навыки, которые нужны в профессии. Помогаем сделать творчество профессией, даем именно тот опыт, который пригодится в работе. Обучение онлайн из любой точки мира выбирайте свой темп и уровень поддержки. Авторы курсов — арт-директора, владельцы агентств, топовые специалисты IT-компаний и студий",
          address:
            "г. Москва, Ленинский проспект, дом 6, строение 20 (этаж 3, офис 21)",
          contacts: "8 (969) 777-28-95, 8 (495) 291-32-01",
          img: "https://static.tildacdn.com/tild3464-3838-4538-a239-646432663436/__2023-03-29_163805.png",
          url: "https://contented.ru/",
          userId: 7,
        },
        {
          name: "Кондитерская онлайн школа",
          desc: "Учим готовить вкусные торты и десерты, учим красиво украшать торты, учим зарабатывать на выпечке, обучили более 5000 человек. Вы можете учиться кондитерскому делу онлайн. Это удобно, выгодно и эффективно. Выберите подходящий курс, чтобы изучить программу и организационные моменты.",
          address:
            "Прикубанский округ, г. Краснодар, 350901, улица 1 мая дом 91",
          contacts: "8 (919) 146-12-45",
          img: "https://thecake-school.ru/assets/img/tilda/tild3462-3338-4637-a534-333336373166__big.jpg",
          url: "https://thecake-school.ru/",
          userId: 8,
        },
        {
          name: "Сотка - онлайн школа егэ и огэ",
          desc: "Подготовим к ЕГЭ и ОГЭ с любого уровня на нужный балл за 8 месяцев. Все, что тебе нужно для подготовки, — на одной платформе. Преподаватели, с которыми тебе будет интересно. Ты всегда сможешь вернуть деньги за оставшуюся часть программы. Для этого не нужно ничего доказывать.",
          address: "г. Казань, ул. Волкова, 60/12, этаж 3, помещ. 4",
          contacts: "8 (800) 333-00-56",
          img: "https://static.tildacdn.com/tild3065-3739-4662-a339-303566393338/sotkaonline-logo-2.png",
          url: "https://sotkaonline.ru/",
          userId: 9,
        },
        {
          name: "Умскул",
          desc: "Онлайн-школа подготовки к ЕГЭ и ОГЭ. Подготовься на 240+ баллов или оценку 5 за 7 месяцев на основном курсе. Собираем все необходимое для подготовки к экзаменам на одной платформе. Подбираем уровень программы конкретно под твой текущий уровень и цели по баллам. Не только даем домашнее задание, но и объясняем, как его делать, чтобы материал закреплялся. Отвечаем на любой вопрос по предмету и домашнему заданию в течение 5 минут.",
          address: "г. Казань, ул. Гоголя, д.3А, этаж 3, помещ.1019",
          contacts: "8 (800) 300 63 24",
          img: "https://s.rbk.ru/v1_companies_s3/resized/960xH/media/trademarks/c6d4f98c-2c41-4ab0-a9c2-95b6d00e7cd4.jpg",
          url: "https://umschool.net/",
          userId: 10,
        },
        {
          name: "skyeng",
          desc: "Школа английского языка. Научим говорить на любые темы, читать книги и смотреть видео без перевода и уверенно общаться за границей. Сделайте первый шаг для выхода на новый языковой уровень. Первые успехи уже через месяц - на уроках и в реальной жизни. Все необходимое для занятий мы уже собрали на интерактивной платформе. Вам нужно будет только приготовить веб-камеру, микрофон, стабильный интернет и устройство, на которым вы будете заниматься. Подойдут компьютер, смартфон или планшет.",
          address:
            "г. Москва, ул.А.Солженицына, д.23А, стр.4,этаж/помещ.1,ком.1",
          contacts: "",
          img: "https://incrussia.ru/wp-content/uploads/2018/02/skyeng-front-1.jpg",
          url: "https://skyeng.ru/",
          userId: 11,
        },
        {
          name: "danco",
          desc: "Школа танцев и фитнеса.  Работаем с 2012 года. Научим танцевать с «0» в любом возрасте, просто запишись на бесплатный пробный урок. Научили танцевать более 8000 человек. Более 35 направлений.",
          address: "г. Москва, проспект Мира, д.101, стр.2",
          contacts: "8 (495) 190 79 05",
          img: "https://avatars.mds.yandex.net/get-altay/9663145/2a0000018991d4c64b4e6b512e09a5414470/L_height",
          url: "https://danco-studio.ru/",
          userId: 12,
        },
        {
          name: "GO Danco",
          desc: "Школа танца GO Dance – это не только возможность научиться красиво и непринужденно танцевать, это новый круг общения, новые друзья, это интересное времяпрепровождение, это самый приятный способ заняться своим здоровьем, преобразить фигуру, укрепить свои мышцы. Большой выбор танцевальных направлений, профессиональные преподаватели, индивидуальный подход к каждому, удобный график занятий – мы предлагаем отличный условия для каждого. Оценить их несложно, достаточно записаться.",
          address: "г. Москва, Кутузовский пр-т д.9 к.1",
          contacts: "8 (968) 328-13-28",
          img: "https://godancemoscow.ru/wp-content/uploads/2022/10/vidbg.jpg",
          url: "https://go-dance.com/",
          userId: 13,
        },
        {
          name: "Страдариум",
          desc: "Страдариум — онлайн-курсы по гуманитарным наукам от медиа-проекта «Страдающее Средневековье». Это наш новый проект с курсами по разным гуманитарным наукам. Мы приглашаем ученых и экспертов, которые лучше всех разбираются в конкретных сферах гуманитарного знания и придумываем с ними курсы, от которых вы получите удовольствие. И немного страданий, конечно же. Мы ответственно относимся к делу и любим фан. Все наши курсы сделаны ярко и стильно.",
          address: "г. Москва, ул. Ольховская 15, кв. 61",
          contacts: "",
          img: "https://static.tildacdn.com/tild3261-3839-4435-b933-303462326339/photo.png",
          url: "https://stradarium.ru/",
          userId: 14,
        },
        {
          name: "Культура речи",
          desc: "Курсы ораторского мастерства Александра Эпштейна. Творческое объединение «Культура речи» основано в 2006 году в Москве. Мы учим создавать убедительные речи и презентации, уверенно импровизировать и отвечать на острые вопросы, побеждать в дискуссиях и добиваться результата на переговорах. За 17 лет по нашим программам обучились более 5 000 человек и 70 компаний. Мы формируем интеллектуальное сообщество и создаём для наших выпускников новые возможности для саморазвития. Сегодня в компании работают четыре преподавателя: два психолога, театральный режиссёр и диктор телевидения.",
          address: "г. Москва, Сретенский бульвар, 6/1 стр. 2",
          contacts: "8 (495) 506-81-13",
          img: "https://kultura-rechi.ru/manager/templates/kultura-rechi/images/slide1.jpg",
          url: "https://kultura-rechi.ru/",
          userId: 15,
        },
        {
          name: "Skill Cup",
          desc: "Платформа для быстрого онлайн-обучения ваших сотрудников. Запуск за один день без дизайнеров и программистов. Работает на всех устройствах, нужен только интернет. Удобно сделано и похоже на соцсеть. Можно учиться между делами. 300+ единиц контента доступно в библиотеке.",
          address: "г. Москва, 3-я Ямского поля, 2/26",
          contacts: "8 (499) 553-03-70",
          img: "https://static.tildacdn.com/tild3735-6632-4766-b931-303437373161/photo.jpg",
          url: "https://www.skillcup.ru/b2b",
          userId: 16,
        },
        {
          name: "НИИДПО",
          desc: "Национальный исследовательский институт дополнительного образования и профессионального обучения (АНО «НИИДПО») г. Москвы. С 2015 года мы помогаем специалистам из разных сфер деятельности получить новую профессию или повысить квалификацию и приобрести новые навыки. Полностью дистанционное обучение дает возможность людям из разных регионов и стран получить необходимые знания, а также документы Московского института. Обучаем самым востребованным профессиям по 20 направлениям. 780+ программ от профпереподготовки до профессионального обучения.",
          address:
            "г. Москва, Черноморский бульвар, дом 4, корп. 3, помещение V, офис 1",
          contacts: "8 (495) 150-17-11",
          img: "https://rb.ru/kursy/images/school/3gl6xmXeWMsq_MrT.jpg",
          url: "https://niidpo.ru/",
          userId: 17,
        },
        {
          name: "Нетология",
          desc: "Источник знаний для роста в профессии. В каждом есть сила и талант, чтобы добиваться больших целей. Мы помогаем найти путь развития и реализовать себя через профессию — так, как вам этого хочется. Над нашими курсами работает большая команда: авторы, методисты, продюсеры, преподаватели, маркетологи, редакторы. Каждый следит за трендами на рынке, чтобы запустить качественную программу. Мы создаём продукт, которым пользуемся сами. Мы помогаем сформулировать ожидания от курсов и выбрать подходящую траекторию обучения. Студент попадает в комфортную образовательную среду: быстро вовлекается в учебный процесс, получает обратную связь от экспертов и обменивается опытом с единомышленниками.",
          address:
            "г. Москва, Варшавское шоссе, д. 1, стр. 6, 1 этаж, офис 105А",
          contacts: "8 (495) 152-55-28",
          img: "https://info-profi.net/wp-content/uploads/2020/09/%D0%BD%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F.jpg",
          url: "https://netology.ru/",
          userId: 18,
        },
        {
          name: "Controforma",
          desc: "Controforma — школа для людей с горящими глазами. Выездные кампусы и online курсы для дизайнеров и не только. Мы обучаем и помогаем развиваться вашим сотрудникам и проводим курсы для команд от 10-ти человек. Преподаватели и кураторы Controforma — практикующие специалисты с большим опытом, которые хотят и могут им делиться.",
          address: "",
          contacts: "",
          img: "https://info-hit.ru/upload/iblock/84d/shkola_dizayna_controforma.jpg",
          url: "https://controforma.school/",
          userId: 19,
        },
        {
          name: "трушная не скам копмания",
          desc: "обещаю",
          address: "Россия, г. Москва, ул. Орджоникидзе, 11 стр. 10",
          contacts: "8 (499) 938-68-24",
          img: "https://i.pinimg.com/736x/e2/5f/f2/e25ff237663f4c0e1a03faa1e7bfc2c2.jpg",
          url: "https://i.pinimg.com/736x/e2/5f/f2/e25ff237663f4c0e1a03faa1e7bfc2c2.jpg",
          userId: 1,
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
