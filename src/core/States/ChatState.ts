import { router } from "../../index";
import chatStore from "../../Store/ChatsStore";
import store from "../../Store/Store";
import apiController from "../API/Controller";
import WSocket from "../API/WebSocket";
import state from "./State";

class State {
    targetChat: Record<string, string> = {};
    chatClass: any = {};
    user: any = null;
    wSocket: WSocket;
    constructor() {}
    init() {
        if (!this.user) {
            this.user = store.getUser();
            this.wSocket = new WSocket(this.user);
        }
    }
    async setTargetChat(id: number) {
        const chatClass = chatStore.getChat(id);
        this.chatClass = chatClass;
        const { chat } = chatClass;
        this.targetChat = chat;
        this.closeSession();
        this.openSession();
        this.wSocket.uploadingMessages();
        router.start();
    }
    clearTargetChat() {
        this.closeSession();
        this.targetChat = {};
    }
    closeSession() {
        this.wSocket.close();
    }
    openSession() {
        if (this.targetChat.id) {
            const { chat, token } = this.chatClass;
            this.wSocket.init(chat, token);
        }
    }
    sendMessage(data: Record<string, string>) {
        const message = data.message;
        this.wSocket.send(message);
    }
    getTargetChat() {
        return this.targetChat;
    }
    setMessages(messages: Record<string, string>[]) {
        this.chatClass.setMessages(messages);
        router.start();
    }
    addMessage(message: Record<string, string>) {
        this.chatClass.addMessage(message);
        router.start();
    }
    getMessages() {
        if (this.chatClass.messages) {
            return this.chatClass.getMessages();
        } else {
            return [];
        }
    }
    getUserDataInTargetChat(id: any) {
        const user = store.getUser();
        if (user.id === id) {
            return {
                ...user,
                me: true,
            };
        } else {
            const anotherUser = this.chatClass.getUser(id);
            return anotherUser;
        }
    }
    async removeThisChat() {
        await apiController.removeChat(this.targetChat.id);
        this.clearTargetChat();
        chatStore.init();
        state.init();
    }
}
const chatState = new State();
export default chatState;
