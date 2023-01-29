import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { PageComponent, Data } from "../../interfaces/interfaces";
import View from "../../core/View/View";
import { OnButton } from "../../core/Events/OnButton";

const data: Data = {
    title: "Вход",
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
            id: "enterRegistration",
            className: "",
            value: "Зарегистрироваться",
            type: "submit",
        },
        {
            id: "redirectionToAuth",
            className: "_bg-wite",
            value: "Войти",
        },
    ],
};

export default () => {
    function ClickMe() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "enterRegistration",
                redirectTo: "/auth",
            },
            {
                buttonId: "redirectionToAuth",
                redirectTo: "/auth",
            },
        ];
        OnButton(controller);
    }
    const domComponents: PageComponent = {
        enter: "root",
        callback: AuthForm,
        data: data.title,
        events: [],
        children: [
            {
                enter: "inputsBlock",
                callback: InputsBlock,
                data: data.inputsList,
                events: [],
                children: [],
            },
            {
                enter: "buttonsBlock",
                callback: ButtonsBlock,
                data: data.buttonsList,
                events: [ClickMe],
                children: [],
            },
        ],
    };
    return domComponents;
};
