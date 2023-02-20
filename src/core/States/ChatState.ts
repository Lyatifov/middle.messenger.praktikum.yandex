import Page, { router } from "../../index";
import store from "../../Store/Store";
import apiController from "../API/Controller";
import state from "./State";

class State {
    targetChat: Record<string, string> = {};
    constructor() {}
    setTargetChat(targetId: number) {
        const chats = store.getChats();
        const targetChat = chats.filter((chat: any) => chat.id === targetId);
        this.targetChat = targetChat[0];
        router.start()
    }
    getTargetChat() {
        return this.targetChat;
    }
}
const chatState = new State();
export default chatState;
