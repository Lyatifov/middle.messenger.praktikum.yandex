import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { PageComponent } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";
import Forms from "../../core/Forms/Forms";

const data: Record<string, string> = {
    formId: "authForm",
    title: "Вход",
};
const inputsList: Record<string, string>[] = [
    {
        id: "login",
        name: "login",
        title: "Логин",
        type: "",
        error: "Неверный логин",
    },
    {
        id: "password",
        name: "password",
        title: "Пароль",
        type: "password",
        error: "Неверный логин",
    },
];
const buttonsList: Record<string, string>[] = [
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
];

export default () => {
    function ClickMe() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "redirectionToRegistration",
                redirectTo: "/registration",
            },
        ];
        OnButton(controller);
    }
    function initAuthForm() {
        Forms(data.formId, "/chats");
    }
    const domComponents: PageComponent = {
        enter: "root",
        callback: AuthForm,
        data: data,
        events: [initAuthForm],
        children: [
            {
                enter: "inputsBlock",
                callback: InputsBlock,
                data: inputsList,
                events: [],
                children: [],
            },
            {
                enter: "buttonsBlock",
                callback: ButtonsBlock,
                data: buttonsList,
                events: [ClickMe],
                children: [],
            },
        ],
    };
    return domComponents;
};
