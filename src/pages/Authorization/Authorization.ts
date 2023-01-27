import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import View from "../../core/View/View";
import { PageComponent, Data } from "../../interfaces/interfaces";

const data: Data = {
    title: "Вход",
    inputsList: [
        {
            id: "login",
            title: "Логин",
            type: "",
            error: "Неверный логин",
        },
        {
            id: "password",
            title: "Пароль",
            type: "password",
            error: "",
        },
    ],
    buttonsList: [
        {
            className: "",
            value: "Авторизоваться",
            type: "submit",
        },
        {
            className: "_bg-wite",
            value: "Нет аккаунта?",
        },
    ],
};

export default () => {
    function ClickMe() {
        const button = document.getElementsByClassName("button");
        console.log(button);
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
    class Authorization extends View {
        constructor(listOfComponents: PageComponent[]) {
            super(listOfComponents);
        }
    }
    const authorization = new Authorization(listOfComponents);
    return authorization;
};
