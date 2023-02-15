import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Chats from "../../pages/Chats/Chats";
import Profile from "../../pages/Profile/Profile";
import { PageComponent } from "../../interfaces/interfaces";
import Error from "../../pages/Error/Error";
import Page from "../../index";

class View {
    view;
    options;
    constructor(
        view: (options?: Record<string, boolean | string>) => PageComponent,
        options?: Record<string, boolean | string> | null
    ) {
        this.view = view;
        this.options = options;
    }
    renderContent() {
        if (this.options) {
            const content = this.view(this.options);
            Page.setProps(content);
            Page.propsUpdate(this.options);
        } else {
            const content = this.view();
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
export const messengerPage = new View(Chats);
export const errorPage = new View(Error);
