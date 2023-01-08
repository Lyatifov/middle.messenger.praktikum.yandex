import template from "./Profile.hbs";
import InputForm from "./../../components/InputProfile/InputProfile";

export default () => {
    const data = {
        nickName: "Иван",
        img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
        list: [
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
    };

    let edit = true;
    const res = template({
        ...data,
        edit
    });
    return res;
};
