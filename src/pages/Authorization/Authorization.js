import WindowForm from "../../components/WindowForm/WindowForm";
import PORT from "../../index";
import ChangeRouter from "../../core/Router/Router";

export default () => {
    const data = {
        title: "Вход",
        inputList: [
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
        buttonList: [
            {
                className: "",
                value: "Авторизоваться",
                link: `http://localhost:${PORT}/chats`,
            },
            {
                className: "_bg-wite",
                value: "Нет аккаунта?",
                link: `http://localhost:${PORT}/registration`,
            },
        ],
    };
    const res = WindowForm(data);
    return res;
};
