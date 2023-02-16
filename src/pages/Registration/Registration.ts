import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { EventE, PageComponent } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";
import Forms from "../../core/Forms/Forms";
import { init } from "../../core/Validator/Validator";

const data: Record<string, string> = {
    formId: "registrationForm",
    title: "Регистрация",
};
const inputsList: Record<string, string>[] = [
    {
        id: "email",
        name: "email",
        title: "Почта",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "login",
        name: "login",
        title: "Логин",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "first_name",
        name: "first_name",
        title: "Имя",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "second_name",
        name: "second_name",
        title: "Фамилия",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "phone",
        name: "phone",
        title: "Телефон",
        type: "",
        error: "Пароли не совподают",
    },
    {
        id: "password",
        name: "password",
        title: "Пароль",
        type: "password",
        error: "Пароли не совподают",
    },
    {
        id: "passwordRepite",
        name: "passwordRepite",
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
    const redirectionToAuth = {
        targetId: "redirectionToAuth",
        eventName: "click",
        func: OnButton("/sign-in"),
    };
    const initRegistrationForm = {
        targetId: data.formId,
        eventName: "submit",
        func: Forms("/sign-in"),
    };
    const inputsEvent: EventE[] = inputsList.reduce(
        (arr: EventE[], item: Record<string, string>) => {
            const calidatorInitEvent: any = init();
            Object.keys(calidatorInitEvent).forEach((key) => {
                const newEvent: EventE = {
                    targetId: item.id,
                    eventName: key,
                    func: calidatorInitEvent[key],
                };
                return arr.push(newEvent);
            });
            return arr;
        },
        []
    );
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
                events: inputsEvent,
                children: [],
            },
            {
                enter: "buttonsBlock",
                callback: ButtonsBlock,
                data: buttonsList,
                events: [redirectionToAuth],
                children: [],
            },
        ],
    };
    return domComponents;
};
