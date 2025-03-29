import { IStepperValue, IStepperList } from "./chakra"

const DEF_VALUE_LIST: IStepperList[] = [
    {
        title: "Tilda - дизайн и сборка",
        image: "/images/steps.webp",
        list: [
            {
                id: 1,
                image: "/icons/steps_1.svg",
                title: "Знакомство и брифинг",
            },
            {
                id: 5,
                image: "/icons/steps_2.svg",
                title: "Составление ТЗ и подписание договора",
            },
            {
                id: 2,
                image: "/icons/steps_3.svg",
                title: "Анализ целевой аудитории и конкурентов",
            },
            {
                id: 6,
                image: "/icons/steps_4.svg",
                title: "Письменный прототипа",
            },
            {
                id: 3,
                image: "/icons/steps_5.svg",
                title: "Создание пользовательского сценария",
            },
            {
                id: 7,
                image: "/icons/steps_6.svg",
                title: "Создание прототипа",
            },
            {
                id: 4,
                image: "/icons/steps_7.svg",
                title: "Дизайн",
            },
            {
                id: 8,
                image: "/icons/steps_8.svg",
                title: "Адаптив",
            },
        ],
    },
    {
        title: "Дизайн",
        image: "",
        list: [
            {
                id: 1,
                image: "",
                title: "Кейс 3",
            },
            {
                id: 2,
                image: "",
                title: "Кейс 4",
            },
        ],
    },
]

const DEF_VALUE: IStepperValue = {
    title: "Этапы работы",
    list: DEF_VALUE_LIST,
}

export default DEF_VALUE
