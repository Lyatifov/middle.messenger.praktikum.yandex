import fetch from "./Fetch";

class Controller {
    host: string;
    constructor(host: string) {
        this.host = host;
    }
    signup(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/auth/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Methods": "GET, POST, PUT",
                    "Access-Control-Allow-Headers": "content-type",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    signin(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/auth/signin`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Methods": "GET, POST, PUT",
                    "Access-Control-Allow-Headers": "content-type",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    getUser(): Promise<any> | void {
        try {
            return fetch(`${this.host}/auth/user`, {
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    logOut() {
        try {
            return fetch(`${this.host}/auth/logout`, {
                method: "POST",
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    // auth
    avatarUpdate(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/user/profile/avatar`, {
                method: "PUT",
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {},
                data: data,
            });
        } catch (error) {
            console.error(error);
        }
    }
    profileUpdate(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/user/profile`, {
                method: "PUT",
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    passwordUpdate(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/user/password`, {
                method: "PUT",
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    // profile
    getChats(): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats`, {
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    createChat(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    deleteChat(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    addUserToChat(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats/users`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    searchUser(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/user/search`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    getListOfUsersInChat(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats/${data.id}/users`, {
                credentials: "include", // Нужно подставлять куки
                mode: "cors", // Работаем с CORS
                headers: {
                    "content-type": "application/json", // Данные отправляем в формате JSON
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    deleteUserFromChat(data: Record<string, unknown>): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats/users`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    }
    getChatToken(chatId: string): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats/token/${chatId}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
    removeChat(chatId: string): Promise<any> | void {
        try {
            return fetch(`${this.host}/chats`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                data: JSON.stringify({ chatId }),
            });
        } catch (error) {
            console.error(error);
        }
    }
}
const host = "https://ya-praktikum.tech/api/v2";
const apiController = new Controller(host);
export default apiController;
