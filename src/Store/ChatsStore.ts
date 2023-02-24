import apiController from "../core/API/Controller";

class Chat {
    users: any = [];
    chat: any = {};
    messages: Record<string, string>[] = [];
    token: string;
    constructor(chat: any) {
        this.chat = chat;
        this.init();
    }
    async init() {
        this.token = await this.loadToken();
        this.users = await this.loadUsers();
    }
    async loadToken() {
        const obj = JSON.parse(await apiController.getChatToken(this.chat.id));
        return obj.token;
    }
    async loadUsers() {
        return JSON.parse(await apiController.getListOfUsersInChat(this.chat));
    }
    getToken() {
        return this.token;
    }
    getUsers() {
        return this.users;
    }
    getUser(id: any) {
        const user = this.users.filter((user: any) => user.id === id);
        return user[0];
    }
    setMessages(messages: Record<string, string>[]) {
        this.messages = messages;
    }
    addMessage(message: Record<string, string>) {
        this.messages.unshift(message);
    }
    getMessages() {
        return this.messages;
    }
}

class Chats {
    chats: any = [];
    chatList = [];
    loading: boolean = false;
    constructor() {}
    async init() {
        this.chats = [];
        const chats = JSON.parse(await apiController.getChats());
        if (chats.length) {
            this.chatList = chats;
            chats.forEach((chat: any) => {
                this.addChat(chat);
            });
        }
        this.loading = true;
    }
    async addChat(chat: any) {
        const newChat = await new Chat(chat);
        this.chats.push(newChat);
    }
    getChat(id: number) {
        const chat = this.chats.find((chat: Chat) => chat.chat.id === id);
        return chat;
    }
    async getAllChat() {
        if (!this.chatList.length && !this.loading) {
            await this.init();
        }
        return this.chatList;
    }
    logOut() {
        this.chats = [];
        this.chatList = [];
        this.loading = false;
    }
}

const chatStore = new Chats();
export default chatStore;
