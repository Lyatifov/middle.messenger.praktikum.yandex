import Loader from "../../components/UI/Loader/Loader";
import Page, { router } from "../../index";
import { PageComponent } from "../../interfaces/interfaces";
import store from "../../Store/Store";
import apiController from "../API/Controller";
import chatState from "./ChatState";

const LoaderComponent: PageComponent = {
    enter: "root",
    callback: Loader,
    data: "loading",
    events: [],
    children: [],
};

async function switchApiForm(data: any, formId: string) {
    const apiType = window.location.pathname;
    switch (apiType) {
        case "/sign-in":
            return apiController.signin(data);
        case "/sign-up":
            return apiController.signup(data);
        case "/profile":
            if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
        case "/profile/settings/data":
            if (formId === "profileDataForm") {
                return apiController.profileUpdate(data);
            } else if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
        case "/profile/settings/password":
            if (formId === "profileDataForm") {
                return apiController.passwordUpdate(data);
            } else if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
        case "/messenger":
            if (formId === "chatModalForm") {
                const targetUser = JSON.parse(await apiController.searchUser(data));
                if (targetUser.length) {
                    const targetId = chatState.getTargetChat();
                    const usersInChat = JSON.parse(
                        await apiController.getListOfUsersInChat(targetId)
                    );
                    const checkUser = usersInChat.filter(
                        (user: any) => user.id === targetUser[0].id
                    );
                    const newData = {
                        users: [targetUser[0].id],
                        chatId: targetId.id,
                    };
                    if (checkUser.length) {
                        return apiController.deleteUserFromChat(newData);
                    }
                    return apiController.addUserToChat(newData);
                }
                console.log("Пользователь не найден");
            }
            if (formId === "modalWFCC") {
                return apiController.createChat(data);
            }
        default:
            break;
    }
}

class State {
    isAuth: boolean | null;
    constructor() {
        this.init();
    }
    async init() {
        const data = await apiController.getUser();
        const url = window.location.pathname;
        if (JSON.parse(data).reason === "Cookie is not valid") {
            this.isAuth = false;
            if (url === "/sign-in" || url === "/sign-up") {
                router.start();
            } else {
                router.go("/sign-in");
            }
        } else if (JSON.parse(data).id) {
            this.isAuth = true;
            store.setData(JSON.parse(data));
            const chats = await apiController.getChats();
            store.setChats(JSON.parse(chats));
            if (url === "/sign-in" || url === "/sign-up") {
                router.go("/messenger");
            } else {
                router.start();
            }
        }
        if (Page.props.data === "loading") {
            router.start();
        }
    }
    async logOut() {
        const result = await apiController.logOut();
        if (result === "OK") {
            localStorage.clear();
            this.isAuth = false;
            router.go("/sign-in");
        }
    }
    Loading() {
        Page.setProps(LoaderComponent);
    }
    async activeForm(data: any, thisForm: any) {
        this.Loading();
        const res = await switchApiForm(data, thisForm.id);
        this.init();
    }
}
const state = new State();
export default state;
