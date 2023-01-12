import WindowForm from "../../components/WindowForm/WindowForm";

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
                link: `/chats`,
            },
            {
                className: "_bg-wite",
                value: "Нет аккаунта?",
                link: `/registration`,
            },
        ],
    };
    const res = WindowForm(data);
    return res;
};
