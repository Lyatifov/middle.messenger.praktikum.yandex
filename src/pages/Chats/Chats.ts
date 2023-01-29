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

const dataFromModal: DataFromModal = {
    button: {
        value: "Добавить",
    },
    title: "Добавить пользователя",
    loadImg: false,
    inputs: [
        {
            id: "addUser",
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
    function ClickMe() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "redirectionToProfile",
                redirectTo: "/profile",
            },
        ];
        OnButton(controller);
    }
    function addMiniModalForHeader() {
        const id = "headerMiniModal";
        const button = "headerOption";
        MiniModalWindowFunction(button, id);
    }
    function addMiniModalForFooter() {
        const id = "footerMiniModal";
        const button = "footerOption";
        MiniModalWindowFunction(button, id);
    }
    function controllerModalWindow() {
        const modalWindow = document.getElementById("modalWindow");
        const addUserButton = document.getElementById("addUser");
        const removeUserButton = document.getElementById("removeUser");
        const background = document.getElementById("background");
        if (modalWindow && addUserButton && removeUserButton && background) {
            const callModalWindow = () => {
                modalWindow.className = "modal-window_active";
            };
            background.addEventListener("click", () => {
                modalWindow.className = "modal-window";
            });
            addUserButton.removeEventListener("click", callModalWindow);
            addUserButton.addEventListener("click", callModalWindow);
            removeUserButton.removeEventListener("click", callModalWindow);
            removeUserButton.addEventListener("click", callModalWindow);
        }
    }

    const domComponents: PageComponent = {
        enter: "root",
        callback: ChatPage,
        data: "",
        events: [ClickMe],
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
                        events: [addMiniModalForFooter],
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
                                events: [addMiniModalForHeader],
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
                events: [controllerModalWindow],
                children: [],
            },
        ],
    };
    return domComponents;
};
