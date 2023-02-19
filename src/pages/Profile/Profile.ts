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
import FileReader from "../../core/FileReader/FileReader";

const ProfileFormData: Record<string, string> = {
    formId: "profileDataForm",
};

const PasswordList: Record<string, string>[] = [
    {
        id: "oldPassword",
        name: "oldPassword",
        value: "",
        title: "Старый пароль",
        type: "password",
    },
    {
        id: "newPassword",
        name: "newPassword",
        value: "",
        title: "Новый пароль",
        type: "password",
        error: "Ошибка",
    },
    {
        id: "repitePassword",
        name: "repitePassword",
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
export default (edit: Record<string, boolean | string>) => {
    const data = Store.getData();
    const { DataList, ProfileHeader } = Store.getData();
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
        func: Forms(),
    };
    const initProfileForm = {
        targetId: ProfileFormData.formId,
        eventName: "submit",
        func: Forms(),
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
    const dataEvents: EventE[] = DataList.reduce(
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
                data: ProfileHeader,
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
                another: [FileReader],
            },
        ],
    };
    return domComponents;
};
