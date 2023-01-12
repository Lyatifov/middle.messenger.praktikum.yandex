import WindowForm from "../../components/WindowForm/WindowForm";

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
                id: "firstName",
                title: "Имя",
                type: "",
            },
            {
                id: "lastName",
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
            },
            {
                className: "_bg-wite",
                value: "Войти",
                link: `/auth`,
            },
        ],
    };

    const res = WindowForm(data);
    return res;
};
