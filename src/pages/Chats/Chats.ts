import ChatPage from "../../components/ChatPage/ChatPage";
import Сonversations from "../../components/ChatPage/Сonversations/Сonversations";
import Main from "../../components/ChatPage/Main/Main";
import { interlocutor, messages, chats } from "../../core/messages/messages";
import { PageComponent } from "../../interfaces/interfaces";
import Header from "../../components/ChatPage/Main/Header/Header";
import Messages from "../../components/ChatPage/Main/Messages/Messages";
import { OnButton } from "../../core/Events/OnButton";
import MiniModalWindowFunction from "../../core/MiniModalWindow/MiniModalWindow";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { DataFromModal } from "../../interfaces/interfaces";
import MiniModalWindow from "../../components/ChatPage/Main/MiniModalWindow/MiniModalWindow";
import { DataForMiniModalWindow } from "../../interfaces/interfaces";
import Forms from "../../core/Forms/Forms";
import ModalWindowController from "../../core/ModalWindowController/ModalWindowController";

const dataFromModal: DataFromModal = {
    formId: "chatModalForm",
    button: {
        value: "Добавить",
        type: "submit",
    },
    title: "Добавить пользователя",
    loadImg: false,
    inputs: [
        {
            id: "addUser",
            name: "login",
            title: "Логин",
            type: "",
            error: "Пользователь не найден",
        },
    ],
};

const dataForFooterMiniModalWindow: DataForMiniModalWindow = {
    className: "",
    id: "footerMiniModal",
    buttons: [
        {
            id: "",
            icon: "&#128247;",
            title: "Фото или Видео",
        },
        {
            id: "",
            icon: "&#128190;",
            title: "Файл",
        },
    ],
};

const dataForHeaderMiniModalWindow: DataForMiniModalWindow = {
    className: "",
    id: "headerMiniModal",
    buttons: [
        {
            id: "addUser",
            icon: "&#128100;",
            title: "Добавить пользователя",
        },
        {
            id: "removeUser",
            icon: "&#10060;",
            title: "Удалить пользователя",
        },
    ],
};

export default () => {
    const redirectionToProfile = {
        targetId: "redirectionToProfile",
        eventName: "click",
        func: OnButton("/profile"),
    };
    const callMiniModelFromHeader = {
        targetId: "headerOption",
        eventName: "click",
        func: MiniModalWindowFunction("headerMiniModal"),
    };
    const callMiniModelFromFooter = {
        targetId: "footerOption",
        eventName: "click",
        func: MiniModalWindowFunction("footerMiniModal"),
    };
    const callModalWindow1 = {
        targetId: "addUser",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };
    const callModalWindow2 = {
        targetId: "removeUser",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };
    const closeModalWindow = {
        targetId: "background",
        eventName: "click",
        func: ModalWindowController("modalWindow"),
    };

    const initMessageForm = {
        targetId: interlocutor[1].formId,
        eventName: "submit",
        func: Forms(),
    };
    const initSearchForm = {
        targetId: "searchForm",
        eventName: "submit",
        func: Forms(),
    };
    const initChatModalForm = {
        targetId: dataFromModal.formId,
        eventName: "submit",
        func: Forms(),
    };
    const domComponents: PageComponent = {
        enter: "root",
        callback: ChatPage,
        data: "searchForm",
        events: [redirectionToProfile, initSearchForm],
        children: [
            {
                enter: "conversations",
                callback: Сonversations,
                data: chats,
                events: [],
                children: [],
            },
            {
                enter: "chatMain",
                callback: Main,
                data: interlocutor,
                events: [],
                children: [
                    {
                        enter: "footerModalWrapper",
                        callback: MiniModalWindow,
                        data: dataForFooterMiniModalWindow,
                        events: [callMiniModelFromFooter, initMessageForm],
                        children: [],
                    },
                    {
                        enter: "chatHeader",
                        callback: Header,
                        data: interlocutor,
                        events: [],
                        children: [
                            {
                                enter: "headerModalWrapper",
                                callback: MiniModalWindow,
                                data: dataForHeaderMiniModalWindow,
                                events: [callMiniModelFromHeader],
                                children: [],
                            },
                        ],
                    },
                    {
                        enter: "messageList",
                        callback: Messages,
                        data: messages,
                        events: [],
                        children: [],
                    },
                ],
            },
            {
                enter: "modalWrapper",
                callback: ModalWindow,
                data: dataFromModal,
                events: [
                    callModalWindow1,
                    callModalWindow2,
                    closeModalWindow,
                    initChatModalForm,
                ],
                children: [],
            },
        ],
    };
    return domComponents;
};
