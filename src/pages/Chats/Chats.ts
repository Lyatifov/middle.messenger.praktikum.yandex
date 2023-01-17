import template from "./Chats.hbs";
import Chat from "../../components/Chat/Chat";
import Message from "../../components/Message/Message";
import { messages, chats } from "../../core/messages/messages";

export default () => {
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
};
