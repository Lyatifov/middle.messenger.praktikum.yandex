import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import View from "../../core/View/View";
import { PageComponent, Data } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";

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
            id: "enterAuth",
            className: "",
            value: "Авторизоваться",
            type: "submit",
        },
        {
            id: "redirectionToRegistration",
            className: "_bg-wite",
            value: "Нет аккаунта?",
        },
    ],
};

export default () => {
    function ClickMe() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "enterAuth",
                redirectTo: "/chats",
            },
            {
                buttonId: "redirectionToRegistration",
                redirectTo: "/registration",
            },
        ];
        OnButton(controller);
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
    console.log(authorization);

    return authorization;
};
