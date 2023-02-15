import AuthForm from "../../components/AuthForm/AuthForm";
import InputsBlock from "../../components/AuthForm/InputsBlock/InputsBlock";
import ButtonsBlock from "../../components/AuthForm/ButtonsBlock/ButtonsBlock";
import { EventE, PageComponent } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";
import Forms from "../../core/Forms/Forms";
import { init } from "../../core/Validator/Validator";

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
    const redirectionToRegistration = {
        targetId: "redirectionToRegistration",
        eventName: "click",
        func: OnButton("/registration"),
    };
    const initAuthForm = {
        targetId: data.formId,
        eventName: "submit",
        func: Forms("/messenger"),
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
        events: [initAuthForm],
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
                events: [redirectionToRegistration],
                children: [],
            },
        ],
    };
    return domComponents;
};
