import ChatPage from "../../components/ChatPage/ChatPage";
import Сonversations from "../../components/ChatPage/Сonversations/Сonversations";
import Main from "../../components/ChatPage/Main/Main";
import { interlocutor, messages, chats } from "../../core/messages/messages";
import View from "../../core/View/View";
import { PageComponent } from "../../interfaces/interfaces";
import Header from "../../components/ChatPage/Main/Header/Header";
import Messages from "../../components/ChatPage/Main/Messages/Messages";

export default () => {
    const listOfComponents: PageComponent[] = [
        {
            enter: "root",
            callback: ChatPage,
            data: "",
            events: [],
        },
        {
            enter: "conversations",
            callback: Сonversations,
            data: chats,
            events: [],
        },
        {
            enter: "chatMain",
            callback: Main,
            data: interlocutor,
            events: [],
        },
        {
            enter: "chatHeader",
            callback: Header,
            data: interlocutor,
            events: [],
        },
        {
            enter: "messageList",
            callback: Messages,
            data: messages,
            events: [],
        },
    ];
    class ChatsPage extends View {
        constructor(listOfComponents: PageComponent[]) {
            super(listOfComponents);
        }
    }
    const chatPage = new ChatsPage(listOfComponents);
    return chatPage;
};
