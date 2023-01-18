import AuthForm from "../../components/AuthForm/AuthForm";

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
                link: "/chats",
                type: "submit",
            },
            {
                className: "_bg-wite",
                value: "Нет аккаунта?",
                link: `/registration`,
            },
        ],
    };
    const res: string = AuthForm(data);
    return res;
};
