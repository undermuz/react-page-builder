import { IPrice1Value, IPrice1ValuePrices } from "."

export const DEF_VALUE_PRICES: IPrice1ValuePrices[] = [
    {
        id: 1,
        price: 5000,
        title: "Simple plan",
        is_active: false,
        list: [
            {
                id: 1,
                title: "1Lorem ipsum dolor",
            },
            {
                id: 2,
                title: "Sit amet consectetur adipiscing",
            },
            {
                id: 3,
                title: "Elit sed do eiusmod tempor",
            },
            {
                id: 4,
                title: "Incididunt ut labore",
            },
            {
                id: 5,
                title: "Et dolore magna aliqua incididunt",
            },
        ],
    },
    {
        id: 2,
        price: 7000,
        title: "Professional plan",
        is_active: true,
        list: [
            {
                id: 1,
                title: "Lorem ipsum dolor",
            },
            {
                id: 2,
                title: "Sit amet consectetur adipiscing",
            },
            {
                id: 3,
                title: "Elit sed do eiusmod tempor",
            },
            {
                id: 4,
                title: "Incididunt ut labore",
            },
            {
                id: 5,
                title: "Et dolore magna aliqua incididunt",
            },
        ],
    },
    {
        id: 3,
        price: 12000,
        title: "Enterprise plan",
        is_active: false,
        list: [
            {
                id: 1,
                title: "Lorem ipsum dolor",
            },
            {
                id: 2,
                title: "Sit amet consectetur adipiscing",
            },
            {
                id: 3,
                title: "Elit sed do eiusmod tempor",
            },
            {
                id: 4,
                title: "Incididunt ut labore",
            },
            {
                id: 5,
                title: "Et dolore magna aliqua incididunt",
            },
        ],
    },
]

export const DEF_VALUE: IPrice1Value = {
    title: "Мы лучшие в мирdddе!",
    subtitle: "Закажите сейчас и получите скидку 50%",
    button_text: "Купить",
    prices: DEF_VALUE_PRICES,
}

export default DEF_VALUE
