import template from "./Registration.hbs";
import Button from "../../components/UI/Button/Button";
import InputBlock from "../../components/InputBlock/InputBlock";
import WindowForm from "../../components/WindowForm/WindowForm";

export default () => {
    const data = {
        title: "Регистрация",
        action: "",
        inputList: [
            {
                id: "email",
                title: "Почта",
                type: "",
            },
            {
                id: "login",
                title: "Логин",
                type: "",
            },
            {
                id: "firstName",
                title: "Имя",
                type: "",
            },
            {
                id: "lastName",
                title: "Фамилия",
                type: "",
            },
            {
                id: "phone",
                title: "Телефон",
                type: "",
            },
            {
                id: "password",
                title: "Пароль",
                type: "password",
            },
            {
                id: "repetitePassword",
                title: "Пароль (ещё раз)",
                type: "password",
                error: "Пароли не совподают",
            },
        ],
        buttonList: [
            {
                class: "",
                value: "Зарегистрироваться",
            },
            {
                class: "_bg-wite",
                value: "Войти",
            },
        ],
    };

    const res = template({
        ...data,
        WindowForm: WindowForm,
    });
    return res;
};
