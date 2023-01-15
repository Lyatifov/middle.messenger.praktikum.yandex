import AuthForm from "../../components/AuthForm/AuthForm";

export default () => {
    const data = {
        title: "Регистрация",
        action: "",
        inputList: [
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
        buttonList: [
            {
                className: "",
                value: "Зарегистрироваться",
                link: `/registration`,
                type: "submit",
            },
            {
                className: "_bg-wite",
                value: "Войти",
                link: `/auth`,
            },
        ],
    };

    const res = AuthForm(data);
    return res;
};
