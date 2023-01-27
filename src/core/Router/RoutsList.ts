import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Chats from "../../pages/Chats/Chats";
import Profile from "../../pages/Profile/Profile";

import { ViewInterface } from "../View/View";

export interface RoutsInterface {
    url: string;
    page: (options?: Record<string, boolean | string>) => ViewInterface;
    options?: Record<string, boolean | string>;
}
export default () => {
    const routs: RoutsInterface[] = [
        {
            url: "/profile",
            page: Profile,
            options: {
                dataEdit: false,
                passwordEdit: false,
            },
        },
        {
            url: "/profile/edit/password",
            page: Profile,
            options: {
                dataEdit: true,
                passwordEdit: true,
            },
        },
        {
            url: "/profile/edit/data",
            page: Profile,
            options: {
                dataEdit: true,
                passwordEdit: false,
            },
        },
        {
            url: "/auth",
            page: Authorization,
        },
        {
            url: "/registration",
            page: Registration,
        },
        {
            url: "/chats",
            page: Chats,
        },
    ];
    return routs;
};
