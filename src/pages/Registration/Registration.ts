import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { PageComponent, Data } from "../../interfaces/interfaces";
import View from "../../core/View/View";

const data: Data = {
    title: "Регистрация",
    inputsList: [
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
            id: "first_name",
            title: "Имя",
            type: "",
        },
        {
            id: "second_name",
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
    buttonsList: [
        {
            className: "",
            value: "Зарегистрироваться",
            type: "submit",
        },
        {
            className: "_bg-wite",
            value: "Войти",
        },
    ],
};

export default () => {
    function ClickMe() {
        // const button = document.getElementsByClassName("button");
    }
    const listOfComponents: PageComponent[] = [
        {
            enter: "root",
            callback: AuthForm,
            data: data.title,
            events: [],
        },
        {
            enter: "inputsBlock",
            callback: InputsBlock,
            data: data.inputsList,
            events: [],
        },
        {
            enter: "buttonsBlock",
            callback: ButtonsBlock,
            data: data.buttonsList,
            events: [ClickMe],
        },
    ];
    class Registration extends View {
        constructor(listOfComponents: PageComponent[]) {
            super(listOfComponents);
        }
    }
    const registration = new Registration(listOfComponents);
    return registration;
};
