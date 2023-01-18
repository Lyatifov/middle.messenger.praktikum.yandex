import ProfileForm from "../../components/ProfileForm/ProfileForm";
import template from "./Profile.hbs";

interface DataItem {
    id: string;
    value: string;
    title: string;
    type?: string;
}
interface Profile {
    nickName: string;
    img: string;
    listData: Array<DataItem>;
    listPassword: Array<DataItem>;
}
interface Edit {
    dataEdit: boolean;
    passwordEdit: boolean;
}

export default (edit: Edit) => {
    const data: Profile = {
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
                id: "first_name",
                value: "Иван",
                title: "Имя",
            },
            {
                id: "second_name",
                value: "Иван",
                title: "Фамилия",
            },
            {
                id: "display_name",
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
    const rout = `/chats`;
    const res = template({
        rout,
        ...data,
        ProfileForm: ProfileForm(edit, data),
    });
    return res;
};
