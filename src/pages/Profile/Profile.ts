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
import Forms from "../../core/Forms/Forms";

const ProfileFormData: Record<string, string> = {
    formId: "profileDataForm",
};
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
            name: "email",
            value: "pochta@yandex.ru",
            title: "Почта",
            error: "Ошибка",
        },
        {
            id: "login",
            name: "login",
            value: "ivanivanov",
            title: "Логин",
            error: "Ошибка",
        },
        {
            id: "first_name",
            name: "first_name",
            value: "Иван",
            title: "Имя",
            error: "Ошибка",
        },
        {
            id: "second_name",
            name: "second_name",
            value: "Иван",
            title: "Фамилия",
            error: "Ошибка",
        },
        {
            id: "display_name",
            name: "display_name",
            value: "Иванов",
            title: "Имя в чате",
            error: "Ошибка",
        },
        {
            id: "phone",
            name: "phone",
            value: "+7 (909) 967 30 30",
            title: "Телефон",
            error: "Ошибка",
        },
    ],
    PasswordList: [
        {
            id: "oldPassword",
            name: "password",
            value: "?????????????",
            title: "Старый пароль",
            type: "password",
        },
        {
            id: "password",
            name: "password",
            value: "?????????????",
            title: "Новый пароль",
            type: "password",
            error: "Ошибка",
        },
        {
            id: "passwordRepite",
            name: "passwordRepite",
            value: "?????????????",
            title: "Повторите новый пароль",
            type: "password",
            error: "Ошибка",
        },
    ],
};
const dataFromModal: DataFromModal = {
    button: {
        value: "Добавить",
        type: "submit",
    },
    title: "Загрузите файл",
    loadImg: true,
    inputs: [],
    formId: "profileModalForm",
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
            // {
            //     buttonId: "saveEditedData",
            //     redirectTo: "/profile",
            // },
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
    function EditFormButtons() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "backToProfile",
                redirectTo: "/profile",
            },
        ];
        OnButton(controller);
    }
    function initModalForm() {
        Forms(dataFromModal.formId);
    }
    function initProfileForm() {
        Forms(ProfileFormData.formId, "/profile");
    }
    const domComponents: PageComponent = {
        enter: "root",
        callback: ProfileForm,
        data: ProfileFormData,
        events: [BackButton, initProfileForm],
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
                events: [EditFormButtons],
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
                events: [FileReader, ModalWindowController, initModalForm],
                options: edit,
                children: [],
            },
        ],
    };
    return domComponents;
};
