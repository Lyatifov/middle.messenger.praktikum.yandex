import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Chats from "../../pages/Chats/Chats";
import FileReader from "../FileReader/FileReader";
import Profile from "../../pages/Profile/Profile";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import ModalWindowController from "../ModalWindowController/ModalWindowController";
import { ViewInterface } from "../View/View";

export interface RoutsInterface {
    url: string;
    page: () => ViewInterface;
}
export default () => {
    const routs: RoutsInterface[] = [
        // {
        //     url: "/profile",
        //     page: Profile({
        //         dataEdit: false,
        //         passwordEdit: false,
        //     }),
        //     additionalElements: [ModalWindow],
        //     utils: [ModalWindowController, FileReader],
        // },
        // {
        //     url: "/profile/edit/password",
        //     page: Profile({
        //         dataEdit: true,
        //         passwordEdit: true,
        //     }),
        //     additionalElements: [ModalWindow],
        //     utils: [ModalWindowController, FileReader],
        // },
        // {
        //     url: "/profile/edit/data",
        //     page: Profile({
        //         dataEdit: true,
        //         passwordEdit: false,
        //     }),
        //     additionalElements: [ModalWindow],
        //     utils: [ModalWindowController, FileReader],
        // },
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
