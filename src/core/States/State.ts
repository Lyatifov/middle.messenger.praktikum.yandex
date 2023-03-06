import Loader from "../../components/UI/Loader/Loader";
import Page, { router } from "../../index";
import { PageComponent } from "../../interfaces/interfaces";
import chatStore from "../../Store/ChatsStore";
import store from "../../Store/Store";
import apiController from "../API/Controller";
import chatState from "./ChatState";

export const LoaderComponent: PageComponent = {
    enter: "root",
    callback: Loader,
    data: "loading",
    events: [],
    children: [],
};

function singResult(res: any) {
    if (res === "OK") {
        state.init();
    } else {
        console.log(res);
    }
}

async function checkIsAuth() {
    const res = JSON.parse(await apiController.getUser());
    if (res.id) {
        return true;
    }
    return false;
}

async function switchApiForm(data: any, formId: string) {
    const pathname = window.location.pathname;
    switch (pathname) {
        case "/sign-in":
            // eslint-disable-next-line no-case-declarations
            const resIn = await apiController.signin(data);
            singResult(resIn);
            return;
            break;
        case "/sign-up":
            // eslint-disable-next-line no-case-declarations
            const resUp = await apiController.signup(data);
            singResult(resUp);
            return;
        case "/profile":
            if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
            break;
        case "/profile/settings/data":
            if (formId === "profileDataForm") {
                return apiController.profileUpdate(data);
            } else if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
            break;
        case "/profile/settings/password":
            if (formId === "profileDataForm") {
                return apiController.passwordUpdate(data);
            } else if (formId === "profileModalForm") {
                return apiController.avatarUpdate(data);
            }
            break;
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
            if (formId === "messageForm") {
                chatState.sendMessage(data);
            }
            if (formId === "modalWFCC") {
                const res = await apiController.createChat(data);
                await chatStore.init();
                return res;
            }
    }
}

class State {
    isAuth: boolean;
    constructor() {
        this.init();
    }
    redirect() {
        const url = window.location.pathname;
        if (this.isAuth) {
            if (url === "/sign-in" || url === "/sign-up") {
                router.go("/messenger");
            } else {
                router.start();
            }
        } else {
            if (url === "/sign-in" || url === "/sign-up") {
                router.start();
            } else {
                router.go("/sign-in");
            }
        }
    }
    async init() {
        this.isAuth = await checkIsAuth();
        if (this.isAuth) {
            await this.loadData();
        }
        this.redirect();
        if (Page.props.data === "loading") {
            router.start();
        }
    }
    async loadData() {
        const data = JSON.parse(await apiController.getUser());
        store.setData(data);
        chatStore.init();
        chatState.init();
        return;
    }
    async logOut() {
        const result = await apiController.logOut();
        if (result === "OK") {
            store.logOut();
            chatStore.logOut();
            chatState.logOut();
            router.go("/sign-in");
        }
    }
    Loading() {
        Page.setProps(LoaderComponent);
    }
    async activeForm(data: any, thisForm: any) {
        await switchApiForm(data, thisForm.id);
        this.init();
    }
}
const state = new State();
export default state;
