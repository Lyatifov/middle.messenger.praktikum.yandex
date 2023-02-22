import fetch from "./Fetch";

class Controller {
    host: string;
    constructor(host: string) {
        this.host = host;
    }
    signup(data: any): Promise<any> {
        return fetch(`${this.host}/auth/signup`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
                "Access-Control-Allow-Headers": "content-type",
            },
            data: JSON.stringify(data),
        });
    }
    signin(data: any): Promise<any> {
        return fetch(`${this.host}/auth/signin`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
                "Access-Control-Allow-Headers": "content-type",
            },
            data: JSON.stringify(data),
        });
    }
    getUser(): Promise<any> {
        return fetch(`${this.host}/auth/user`, {
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
        });
    }
    logOut() {
        return fetch(`${this.host}/auth/logout`, {
            method: "POST",
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
        });
    }
    // auth
    avatarUpdate(data: any): Promise<any> {
        return fetch(`${this.host}/user/profile/avatar`, {
            method: "PUT",
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {},
            data: data,
        });
    }
    profileUpdate(data: any): Promise<any> {
        return fetch(`${this.host}/user/profile`, {
            method: "PUT",
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
            data: JSON.stringify(data),
        });
    }
    passwordUpdate(data: any): Promise<any> {
        return fetch(`${this.host}/user/password`, {
            method: "PUT",
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
            data: JSON.stringify(data),
        });
    }
    // profile
    getChats(): Promise<any> {
        return fetch(`${this.host}/chats`, {
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
        });
    }
    createChat(data: any): Promise<any> {
        return fetch(`${this.host}/chats`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
    deleteChat(data: any): Promise<any> {
        return fetch(`${this.host}/chats`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
    addUserToChat(data: any): Promise<any> {
        return fetch(`${this.host}/chats/users`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
    searchUser(data: any): Promise<any> {
        return fetch(`${this.host}/user/search`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
    getListOfUsersInChat(data: any): Promise<any> {
        return fetch(`${this.host}/chats/${data.id}/users`, {
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
        });
    }
    deleteUserFromChat(data: any): Promise<any> {
        return fetch(`${this.host}/chats/users`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
    getChatToken(chatId: string): Promise<any> {
        return fetch(`${this.host}/chats/token/${chatId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
        });
    }
    removeChat(chatId: string): Promise<any> {
        return fetch(`${this.host}/chats`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            data: JSON.stringify({ chatId }),
        });
    }
}
const host = "https://ya-praktikum.tech/api/v2";
const apiController = new Controller(host);
export default apiController;
