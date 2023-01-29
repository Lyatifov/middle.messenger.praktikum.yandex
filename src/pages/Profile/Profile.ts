import ProfileForm from "../../components/ProfileForm/ProfileForm";
import Header from "../../components/ProfileForm/Header/Header";
import Inputs from "../../components/ProfileForm/Inputs/Inputs";
import Buttons from "../../components/ProfileForm/Buttons/Buttons";
import { PageComponent } from "../../interfaces/interfaces";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import FileReader from "../../core/FileReader/FileReader";
import ModalWindowController from "../../core/ModalWindowController/ModalWindowController";
import { OnButton } from "../../core/Events/OnButton";
import { DataFromModal } from "../../interfaces/interfaces";

const ProfileHeader: Record<string, string>[] = [
    {
        nickName: "Иван",
        img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
    },
];

const data: Record<string, Record<string, string>[]> = {
    DataList: [
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
    PasswordList: [
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
const dataFromModal: DataFromModal = {
    button: {
        value: "Добавить",
    },
    title: "Загрузите файл",
    loadImg: true,
    inputs: [],
};
export default (edit: Record<string, boolean | string>) => {
    function BackButton() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "backToChats",
                redirectTo: "/chats",
            },
        ];
        OnButton(controller);
    }
    function EditButtons() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "saveEditedData",
                redirectTo: "/profile",
            },
            {
                buttonId: "editData",
                redirectTo: "/profile/edit/data",
            },
            {
                buttonId: "editPassword",
                redirectTo: "/profile/edit/password",
            },
            {
                buttonId: "logOut",
                redirectTo: "/auth",
            },
        ];
        OnButton(controller);
    }
    const domComponents: PageComponent = {
        enter: "root",
        callback: ProfileForm,
        data: "",
        events: [BackButton],
        children: [
            {
                enter: "profileHeader",
                callback: Header,
                data: ProfileHeader,
                events: [],
                children: [],
            },
            {
                enter: "profileData",
                callback: Inputs,
                data: data,
                events: [],
                options: edit,
                children: [],
            },
            {
                enter: "profileButtons",
                callback: Buttons,
                data: "",
                events: [EditButtons],
                options: edit,
                children: [],
            },
            {
                enter: "profilePage",
                callback: ModalWindow,
                data: dataFromModal,
                events: [FileReader, ModalWindowController],
                options: edit,
                children: [],
            },
        ],
    };
    return domComponents;
};
