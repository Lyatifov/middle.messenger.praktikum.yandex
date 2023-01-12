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
                link: `http://localhost:3000/chats`,
            },
            {
                className: "_bg-wite",
                value: "Нет аккаунта?",
                link: `http://localhost:3000/registration`,
            },
        ],
    };
    const res = WindowForm(data);
    return res;
};
