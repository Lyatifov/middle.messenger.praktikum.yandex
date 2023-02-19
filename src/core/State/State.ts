import Loader from "../../components/UI/Loader/Loader";
import Page, { router } from "../../index";
import { PageComponent } from "../../interfaces/interfaces";
import store from "../../Store/Store";
import apiController from "../API/Controller";

const LoaderComponent: PageComponent = {
    enter: "root",
    callback: Loader,
    data: "loading",
    events: [],
    children: [],
};

function switchApiForm(data: any, formId: string) {
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
        if (JSON.parse(data).reason === "Cookie is not valid") {
            this.isAuth = false;
            const url = window.location.pathname;
            if (url === "/sign-in" || url === "/sign-up") {
                router.start();
            } else {
                router.go("/sign-in");
            }
        } else if (JSON.parse(data).id) {
            this.isAuth = true;
            store.setData(JSON.parse(data));
            const url = window.location.pathname;
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
