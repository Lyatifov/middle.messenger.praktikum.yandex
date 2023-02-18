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
import Loader from "./components/UI/Loader/Loader";

const startData: PageComponent = {
    enter: "root",
    callback: Loader,
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
router.use("/sign-in", signUpPage);
router.use("/sign-up", registrationPage);
router.use("/messenger", messengerPage);
router.default(errorPage);
