import ChatPage from "../../components/ChatPage/ChatPage";
import Main from "../../components/ChatPage/Main/Main";
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
import ChatList from "../../components/ChatPage/ChatList/ChatList";
import Button from "../../components/UI/Button/Button";
import chatState from "../../core/States/ChatState";
import chatStore from "../../Store/ChatsStore";

const dataFromModal: DataFromModal = {
    modalId: "modalAddOrRemoveUser",
    formId: "chatModalForm",
    button: {
        value: "Добавить",
        type: "submit",
    },
    title: "Добавить пользователя",
    loadImg: false,
    inputs: [
        {
            id: "addOrRemoveUser",
            name: "login",
            title: "Логин",
            type: "",
            error: "Пользователь не найден",
        },
    ],
};
const modalWindowForCreatingChat: DataFromModal = {
    modalId: "modalWindowForCreatingChat",
    formId: "modalWFCC",
    button: {
        value: "Создать",
        type: "submit",
    },
    title: "Создание нового чата",
    loadImg: false,
    inputs: [
        {
            id: "addTitle",
            name: "title",
            title: "Название",
            type: "",
            error: "Чат с таким названием уже есть",
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
            id: "addOrRemoveUser",
            icon: "&#128100;",
            title: "Добавить/удалить пользователя",
        },
        {
            id: "removeThisChat",
            icon: "&#10060;",
            title: "Удалить чат",
        },
    ],
};

export default async () => {
    const chats = await chatStore.getAllChat();
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
        targetId: "addOrRemoveUser",
        eventName: "click",
        func: ModalWindowController("modalAddOrRemoveUser"),
    };
    const removeThisChat = {
        targetId: "removeThisChat",
        eventName: "click",
        func: () => chatState.removeThisChat(),
    };
    const closeModalWindow = {
        targetId: "modalAddOrRemoveUser-background",
        eventName: "click",
        func: ModalWindowController("modalAddOrRemoveUser"),
    };
    const callModalWFCC = {
        targetId: "buttonCreaterNewChat",
        eventName: "click",
        func: ModalWindowController("modalWindowForCreatingChat"),
    };
    const closeModalWFCC = {
        targetId: "modalWindowForCreatingChat-background",
        eventName: "click",
        func: ModalWindowController("modalWindowForCreatingChat"),
    };
    const initModalWFCC = {
        targetId: "modalWFCC",
        eventName: "submit",
        func: Forms(),
    };
    const initMessageForm = {
        targetId: "messageForm",
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
    const chatEvents = () => {
        const events: { targetId: any; eventName: string; func: (e: any) => void }[] = [];
        chats.forEach((item: any) => {
            const func = () => {
                chatState.setTargetChat(item.id);
            };
            const obj = {
                targetId: item.id,
                eventName: "click",
                func: func,
            };
            events.push(obj);
        });
        return events;
    };
    const domComponents: PageComponent = {
        enter: "root",
        callback: ChatPage,
        data: "searchForm",
        events: [redirectionToProfile, initSearchForm],
        children: [
            {
                enter: "conversations",
                callback: ChatList,
                data: chats,
                events: chatEvents(),
                children: [],
            },
            {
                enter: "chatMain",
                callback: Main,
                data: chatState.getTargetChat(),
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
                        data: chatState.getTargetChat(),
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
                        data: chatState.getMessages(),
                        events: [],
                        children: [],
                        another: [],
                    },
                ],
            },
            {
                enter: "modalWrapper",
                callback: ModalWindow,
                data: dataFromModal,
                events: [
                    callModalWindow1,
                    removeThisChat,
                    closeModalWindow,
                    initChatModalForm,
                ],
                children: [],
            },
            {
                enter: "buttonsAndPopup",
                callback: Button,
                data: {
                    id: "buttonCreaterNewChat",
                    value: "+",
                    className: "button-creater-new-chat",
                },
                events: [],
                children: [],
            },
            {
                enter: "createModalWrapper",
                callback: ModalWindow,
                data: modalWindowForCreatingChat,
                events: [callModalWFCC, closeModalWFCC, initModalWFCC],
                children: [],
            },
        ],
    };
    return domComponents;
};
