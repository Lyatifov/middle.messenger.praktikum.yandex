import template from "./Chats.hbs";
import Chat from "../../components/Chat/Chat";
import Message from "../../components/Message/Message";
import { messages, chats } from "../../core/messages/messages";
import PORT from "../../index";
import ChangeRouter from "../../core/Router/Router";

export default (Router) => {
    const rout = `http://localhost:${PORT}/profile`;
    let chatList = "";
    chats.chatList.map((item) => {
        chatList += Chat(item);
    });
    const res = template({
        Message: Message(messages.messageList),
        ...messages,
        rout,
        chatList: chatList,
    });
    return res;
};
