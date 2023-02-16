import fetch from "./Fetch";

// function ApiController() {
//     fetch(`${host}/api/v2/auth/signup`, {
//         method: "POST",
//         // credentials: "include", // Нужно подставлять куки
//         // mode: "cors", // Работаем с CORS
//         headers: {
//             "content-type": "application/json", // Данные отправляем в формате JSON
//         },
//         data: JSON.stringify({
//             first_name: "Dassdasd",
//             second_name: "Fdassdas",
//             login: `asmorsgan`,
//             email: `asmosrgan@rdr2.com`,
//             phone: "+75236567890",
//             password: "sps@ssw0rd", // Грустный и слабый пароль, можно вот так: oPKzos*1X$uKz$ta
//         }),
//     }).then((response) => {
//         console.log(JSON.parse(response));
//     }); // Можно вытащить через .json()
//     // .then((data) => {
//     //     fetch(`${host}/api/v2/auth/user`, {
//     //         // Получаем подробную информацию о пользователе и проверяем, что куки проставились
//     //         method: "GET",
//     //         // mode: "cors",
//     //         // credentials: "include",
//     //     }).then((data) => {
//     //         console.log(JSON.parse(data));
//     //     });
//     // });
// }

class Controller {
    host: string;
    constructor(host: string) {
        this.host = host;
    }
    signup(data: any): Promise<any> {
        return fetch(`${this.host}/auth/signup`, {
            method: "POST",
            // credentials: "include", // Нужно подставлять куки
            // mode: "cors", // Работаем с CORS
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
            // credentials: "include", // Нужно подставлять куки
            // mode: "cors", // Работаем с CORS
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
        fetch(`${this.host}/auth/logout`, {
            method: "POST",
            credentials: "include", // Нужно подставлять куки
            mode: "cors", // Работаем с CORS
            headers: {
                "content-type": "application/json", // Данные отправляем в формате JSON
            },
        });
    }
    // auth
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
}
const host = "https://ya-praktikum.tech/api/v2";
const apiController = new Controller(host);
export default apiController;
