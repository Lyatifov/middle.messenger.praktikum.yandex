import "./index.scss";
import { Router } from "./core/Router/Router";
import Render from "./core/Render/Render";
import Component from "./core/Component/Component";
import { PageComponent } from "./interfaces/interfaces";
import {
    ProfilePage,
    ProfileSettingsDataPage,
    ProfileSettingsPasswordPage,
    signUpPage,
    registrationPage,
    messengerPage,
    errorPage,
} from "./core/Router/RoutsList";

const callback = (data: string): string => {
    if (typeof data === "string") {
        return data;
    }
    return "";
};

const startData: PageComponent = {
    enter: "root",
    callback: callback,
    data: "loading",
    events: [],
    children: [],
};
const Page: Component = Render([startData])[0];
export default Page;

export const router = new Router(".app");
router.use("/profile", ProfilePage);
router.use("/profile/settings/data", ProfileSettingsDataPage);
router.use("/profile/settings/password", ProfileSettingsPasswordPage);
router.use("/sign-up", signUpPage);
router.use("/registration", registrationPage);
router.use("/messenger", messengerPage);
router.default(errorPage);
router.start();
