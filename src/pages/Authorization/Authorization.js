import template from "./Authorization.hbs"
import Button from "../../components/UI/Button/Button"
import InputBlock from "../../components/InputBlock/InputBlock"
import WindowForm from "../../components/WindowForm/WindowForm"

export default () => {
    const data = {
        title: "Вход",
        action: "",
        inputList: [
            {
                id: "login",
                title: "Логин",
                type: "",
                error: "Неверный логин"
            },
            {
                id: "password",
                title: "Пароль",
                type: "password",
                error: ""
            },
        ],
        buttonList: [
            {
                class: "",
                value: "Авторизоваться"
            },
            {
                class: "_bg-wite",
                value: "Нет аккаунта?"
            },
        ]
    }
    const res = template({
        ...data,
        WindowForm: WindowForm,
    })
    return res
}