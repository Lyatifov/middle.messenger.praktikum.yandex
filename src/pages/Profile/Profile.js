import template from "./Profile.hbs";
import ProfileData from "./../../components/ProfileData/ProfileData";
import PORT from "../../index";
import ChangeRouter from "../../core/Router/Router";

export default (edit) => {
    const data = {
        nickName: "Иван",
        img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
        listData: [
            {
                id: "email",
                value: "pochta@yandex.ru",
                title: "Почта",
            },
            {
                id: "login",
                value: "ivanivanov",
                title: "Логин",
            },
            {
                id: "firstName",
                value: "Иван",
                title: "Имя",
            },
            {
                id: "lastName",
                value: "Иван",
                title: "Фамилия",
            },
            {
                id: "nickname",
                value: "Иванов",
                title: "Имя в чате",
            },
            {
                id: "phone",
                value: "+7 (909) 967 30 30",
                title: "Телефон",
            },
        ],
        listPassword: [
            {
                id: "oldPassword",
                value: "?????????????",
                title: "Старый пароль",
                type: "password",
            },
            {
                id: "newPassword",
                value: "?????????????",
                title: "Новый пароль",
                type: "password",
            },
            {
                id: "repeatNewPassword",
                value: "?????????????",
                title: "Повторите новый пароль",
                type: "password",
            },
        ],
    };
    const rout = `http://localhost:${PORT}/chats`;
    const res = template({
        rout,
        ...data,
        ProfileData: ProfileData(edit, data),
    });
    return res;
};
