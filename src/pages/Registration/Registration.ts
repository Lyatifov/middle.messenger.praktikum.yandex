import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { PageComponent } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";
import Forms from "../../core/Forms/Forms";

const data: Record<string, string> = {
    formId: "registrationForm",
    title: "Регистрация",
};
const inputsList: Record<string, string>[] = [
    {
        id: "email",
        title: "Почта",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "login",
        title: "Логин",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "first_name",
        title: "Имя",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "second_name",
        title: "Фамилия",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "phone",
        title: "Телефон",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "password",
        title: "Пароль",
        type: "password",
        error: "Пароли не совподают",
    },
    {
        id: "passwordRepite",
        title: "Пароль (ещё раз)",
        type: "password",
        error: "Пароли не совподают",
    },
];
const buttonsList: Record<string, string>[] = [
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
];

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
    function initRegistrationForm() {
        Forms(data.formId);
    }
    const domComponents: PageComponent = {
        enter: "root",
        callback: AuthForm,
        data: data,
        events: [initRegistrationForm],
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
