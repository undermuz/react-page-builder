import { IPortfolioValue, IPortfolioList } from "./chakra"

const DEF_VALUE_LIST: IPortfolioList[] = [
    {
        title: "Последние кейсы",
        isActive: true,
        list: [
            {
                id: 1,
                title: "Skin.Expert CRM",
                subtitle: "CRM система для клиник эстетической медицины",
                subtitle2: "Были созданы макеты",
                image: "/images/portfolio_skin_crm_1.png",
                imageSize: "cover",
                imagePos: "center",
                description:
                    "Канбан и график записей. Расписание приёмов и график работы сотрудников. Списки и детальные сотрудников. Карточки пациентов. Услуги, оборудование, кабинеты. Создание и редактирование перечисленного",
                tags: [
                    {
                        title: "Дизайн",
                    },
                    {
                        title: "Полный адаптив",
                    },
                    {
                        title: "120+ экранов",
                    },
                ],
            },
            {
                id: 2,
                title: "Royal Enfield",
                subtitle: "Сайт дилера мотоциклов Royal Enfield в Москве",
                subtitle2: "Были созданы макеты",
                image: "/images/portfolio_royal_1.png",
                imageSize: "cover",
                imagePos: "top center",
                description:
                    "Главная, каталог, карточка мотоцикла, история бренда, примеры кастомизации",
                tags: [
                    {
                        title: "Дизайн",
                    },
                    {
                        title: "Сборка на Tilda",
                    },
                    {
                        title: "Адаптив",
                    },
                    {
                        title: "10+ экранов",
                    },
                ],
            },
            {
                id: 2,
                title: "Skin.Expert PRO\nличный кабинет",
                subtitle:
                    "Личный кабинет представителя клиники / специалиста в области эстетической медицины на портале Skin.ExpertPRO ",
                subtitle2: "Были созданы макеты",
                image: "/images/portfolio_skin_pro_qa.png",
                imageSize: "contain",
                imagePos: "top center",
                description:
                    "Чат, мероприятия, приобретенные билеты и детальная мероприятия, вопросы к докторам и создание ответов, лента, создание и детальная поста, дашборд, настройки, авторизация",
                tags: [
                    {
                        title: "Дизайн",
                    },
                    {
                        title: "Полный адаптив",
                    },
                    {
                        title: "120+ экранов",
                    },
                ],
            },
        ],
    },
    {
        title: "Дизайн",
        list: [
            {
                id: 1,
                title: "Кейс 3",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
            {
                id: 2,
                title: "Кейс 4",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
        ],
    },
    {
        title: "Tilda - дизайн и сборка",
        list: [
            {
                id: 1,
                title: "Кейс 5",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
            {
                id: 2,
                title: "Кейс 6",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
        ],
    },
    {
        title: "Другие проекты",
        list: [
            {
                id: 1,
                title: "Кейс 7",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
            {
                id: 2,
                title: "Кейс 8",
                subtitle: "Подзаголовок кейса 1",
                subtitle2: "Подзаголовок кейса 2",
                description: "Описание кейса 1",
                tags: [
                    {
                        title: "Тег 1",
                    },
                    {
                        title: "Тег 2",
                    },
                ],
            },
        ],
    },
]

const DEF_VALUE: IPortfolioValue = {
    title: "Портфолио",
    list: DEF_VALUE_LIST,
}

export default DEF_VALUE
