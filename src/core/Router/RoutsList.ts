import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Messenger from "../../pages/Messenger/Messenger";
import Profile from "../../pages/Profile/Profile";
import { PageComponent } from "../../interfaces/interfaces";
import Error from "../../pages/Error/Error";
import Page from "../../index";
import { LoaderComponent } from "../States/State";

class View {
    view;
    options;
    constructor(
        view: (
            options?: Record<string, boolean | string>
        ) => PageComponent | Promise<PageComponent>,
        options?: Record<string, boolean | string> | null
    ) {
        this.view = view;
        this.options = options;
    }
    async renderContent() {
        Page.setProps(LoaderComponent);
        if (this.options) {
            const content = await this.view(this.options);
            Page.setProps(content);
            Page.propsUpdate(this.options);
        } else {
            const content = await this.view();
            Page.setProps(content);
        }
    }
}

export const ProfilePage = new View(Profile, {
    dataEdit: false,
    passwordEdit: false,
});
export const ProfileSettingsDataPage = new View(Profile, {
    dataEdit: true,
    passwordEdit: false,
});
export const ProfileSettingsPasswordPage = new View(Profile, {
    dataEdit: true,
    passwordEdit: true,
});
export const signUpPage = new View(Authorization);
export const registrationPage = new View(Registration);
export const messengerPage = new View(Messenger);
export const errorPage = new View(Error);
