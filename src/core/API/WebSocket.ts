import chatState from "../States/ChatState";

export default class WSocket {
    user: any;
    socket: any;
    status: string = "close";
    interval: NodeJS.Timer | undefined;
    constructor(user: any) {
        this.user = user;
    }
    init(chat: any, token: string) {
        const url = `wss://ya-praktikum.tech/ws/chats/${this.user.id}/${chat.id}/${token}`;
        this.socket = new WebSocket(url);
        this.socket.onopen = this.onopen;
        this.socket.onclose = this.onclose;
        this.socket.onmessage = this.onmessage;
        this.socket.onerror = this.onerror;
        return;
    }
    onopen() {
        console.log("Соединение установлено");
        const request = {
            content: "0",
            type: "get old",
        };
        this.send(JSON.stringify(request));
        const pingRequest = {
            content: "",
            type: "ping",
        };
        this.interval = setInterval(() => this.send(JSON.stringify(pingRequest)), 5000);
    }
    onclose(event: any) {
        if (event.wasClean) {
            console.log(
                `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
            );
        } else {
            console.log("[close] Соединение прервано");
        }
        clearInterval(this.interval);
    }
    onmessage(event: any) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
        const data = JSON.parse(event.data);
        if (data.type === "message") {
            chatState.addMessage(data);
        } else if (data.length) {
            chatState.setMessages(data);
        }
    }
    send(data: string) {
        const request = {
            content: data,
            type: "message",
        };
        console.log(this.socket);
        this.socket.send(JSON.stringify(request));
    }
    onerror() {
        console.log("Соединение установлено");
    }
    uploadingMessages() {}
    close() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

// const primer = {
//     id: 1,
//     user_id: 479275,
//     chat_id: 4568,
//     type: "message",
//     time: "2023-02-21T13:19:33+00:00",
//     content: "Моё первое сообщение миру!",
//     is_read: false,
//     file: null,
// };
