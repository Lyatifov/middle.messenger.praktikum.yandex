import WindowForm from "../../components/WindowForm/WindowForm";
import PORT from "../../index";
import ChangeRouter from "../../core/Router/Router";

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
                link: `http://localhost:${PORT}/registration`,
            },
            {
                className: "_bg-wite",
                value: "Войти",
                link: `http://localhost:${PORT}/auth`,
            },
        ],
    };

    const res = WindowForm(data);
    return res;
};
