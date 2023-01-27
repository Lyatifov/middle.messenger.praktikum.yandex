import template from "./Chats.hbs";
import Chat from "../../components/Chat/Chat";
import Message from "../../components/Message/Message";
import { messages, chats } from "../../core/messages/messages";

import View from "../../core/View/View";
import { PageComponent } from "../../interfaces/interfaces";

export function BuildChatPage(errorData: Record<string, string>[]): string {
    const rout = `/profile`;
    let List = "";
    chats.chatList.map((item: object) => {
        return (List += Chat(item));
    });
    const res = template({
        Message: Message(messages.messageList),
        ...messages,
        rout,
        chatList: List,
    });
    return res;
}

export default () => {
    const listOfComponents: PageComponent[] = [
        {
            enter: "root",
            callback: BuildChatPage,
            data: "",
            events: [],
        },
    ];
    class ChatPage extends View {
        constructor(listOfComponents: PageComponent[]) {
            super(listOfComponents);
        }
    }
    const chatPage = new ChatPage(listOfComponents);
    return chatPage;
};
