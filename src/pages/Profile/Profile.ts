import ProfileForm from "../../components/ProfileForm/ProfileForm";
import Header from "../../components/ProfileForm/Header/Header";
import Inputs from "../../components/ProfileForm/Inputs/Inputs";
import Buttons from "../../components/ProfileForm/Buttons/Buttons";
import { EventE, PageComponent } from "../../interfaces/interfaces";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import ModalWindowController from "../../core/ModalWindowController/ModalWindowController";
import { OnButton, LogOut } from "../../core/Events/OnButton";
import { DataFromModal } from "../../interfaces/interfaces";
import Forms from "../../core/Forms/Forms";
import { init } from "../../core/Validator/Validator";
import Store from "../../Store/Store";

const ProfileFormData: Record<string, string> = {
    formId: "profileDataForm",
};

// const DataList: Record<string, string>[] = [
//     {
//         id: "email",
//         name: "email",
//         value: "pochta@yandex.ru",
//         title: "Почта",
//         error: "Ошибка",
//     },
//     {
//         id: "login",
//         name: "login",
//         value: "ivanivanov",
//         title: "Логин",
//         error: "Ошибка",
//     },
//     {
//         id: "first_name",
//         name: "first_name",
//         value: "Иван",
//         title: "Имя",
//         error: "Ошибка",
//     },
//     {
//         id: "second_name",
//         name: "second_name",
//         value: "Иван",
//         title: "Фамилия",
//         error: "Ошибка",
//     },
//     {
//         id: "display_name",
//         name: "display_name",
//         value: "Иванов",
//         title: "Имя в чате",
//         error: "Ошибка",
//     },
//     {
//         id: "phone",
//         name: "phone",
//         value: "+7 (909) 967 30 30",
//         title: "Телефон",
//         error: "Ошибка",
//     },
// ];
const PasswordList: Record<string, string>[] = [
    {
        id: "oldPassword",
        name: "password",
        value: "",
        title: "Старый пароль",
        type: "password",
    },
    {
        id: "password",
        name: "password",
        value: "",
        title: "Новый пароль",
        type: "password",
        error: "Ошибка",
    },
    {
        id: "passwordRepite",
        name: "passwordRepite",
        value: "",
        title: "Повторите новый пароль",
        type: "password",
        error: "Ошибка",
    },
];

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
export default async (edit: Record<string, boolean | string>) => {
    const data = await Store.loadProfileData();
    const redirectionToChats = {
        targetId: "backToChats",
        eventName: "click",
        func: OnButton("/messenger"),
    };
    const editData = {
        targetId: "editData",
        eventName: "click",
        func: OnButton("/profile/settings/data"),
    };
    const editPassword = {
        targetId: "editPassword",
        eventName: "click",
        func: OnButton("/profile/settings/password"),
    };
    const logOut = {
        targetId: "logOut",
        eventName: "click",
        func: LogOut(),
    };
    const redirectionToProfile = {
        targetId: "backToProfile",
        eventName: "click",
        func: OnButton("/profile"),
    };
    const initModalForm = {
        targetId: dataFromModal.formId,
        eventName: "submit",
        func: Forms("modal"),
    };
    const initProfileForm = {
        targetId: ProfileFormData.formId,
        eventName: "submit",
        func: Forms("/profile"),
    };
    const callModalWindow1 = {
        targetId: "profileImgLabel",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };
    const callModalWindow2 = {
        targetId: "profileImgEditor",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };
    const closeModalWindow = {
        targetId: "background",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };
    const dataEvents: EventE[] = data.DataList.reduce(
        (arr: EventE[], item: Record<string, string>) => {
            const calidatorInitEvent: any = init();
            Object.keys(calidatorInitEvent).forEach((key) => {
                const newEvent: EventE = {
                    targetId: item.id,
                    eventName: key,
                    func: calidatorInitEvent[key],
                };
                return arr.push(newEvent);
            });
            return arr;
        },
        []
    );
    const passwordEvents: EventE[] = PasswordList.reduce(
        (arr: EventE[], item: Record<string, string>) => {
            const calidatorInitEvent: any = init();
            Object.keys(calidatorInitEvent).forEach((key) => {
                const newEvent: EventE = {
                    targetId: item.id,
                    eventName: key,
                    func: calidatorInitEvent[key],
                };
                return arr.push(newEvent);
            });
            return arr;
        },
        []
    );
    const domComponents: PageComponent = {
        enter: "root",
        callback: ProfileForm,
        data: ProfileFormData,
        events: [redirectionToChats, initProfileForm],
        children: [
            {
                enter: "profileHeader",
                callback: Header,
                data: data.ProfileHeader,
                events: [],
                children: [],
            },
            {
                enter: "profileData",
                callback: Inputs,
                data: { ...data, PasswordList },
                events: [redirectionToProfile, ...passwordEvents, ...dataEvents],
                options: edit,
                children: [],
            },
            {
                enter: "profileButtons",
                callback: Buttons,
                data: "",
                events: [editData, editPassword, logOut],
                options: edit,
                children: [],
            },
            {
                enter: "profilePage",
                callback: ModalWindow,
                data: dataFromModal,
                events: [
                    callModalWindow1,
                    callModalWindow2,
                    closeModalWindow,
                    initModalForm,
                ],
                options: edit,
                children: [],
            },
        ],
    };
    return domComponents;
};
