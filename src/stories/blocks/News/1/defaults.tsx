import { IBlog1Value, IBlog1ValueListItem } from "."

export const DEF_VALUE_LIST: IBlog1ValueListItem[] = [
    {
        id: 1,
        description:
            "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
        title: "Simple plan",
        is_active: true,
        date: "15 Aug 2022",
    },
    {
        id: 2,
        description:
            "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
        title: "Simfdg  gan",
        is_active: false,
        date: "16 Aug 2022",
    },
    {
        id: 2,
        description:
            "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
        title: "Simfdg  gan",
        is_active: false,
        date: "16 Aug 2022",
    },
]

export const DEF_VALUE: IBlog1Value = {
    title: "Мы лучшие в мирdddе!",
    subtitle: "Закажите сейчас и получите скидку 50%",
    list: DEF_VALUE_LIST,
}

export default DEF_VALUE
