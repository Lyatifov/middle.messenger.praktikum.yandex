import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Chats from "../../pages/Chats/Chats";
import FileReader from "../FileReader/FileReader";
import Profile from "../../pages/Profile/Profile";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import ModalWindowController from "../ModalWindowController/ModalWindowController";

type additFunc = () => string;
type utilFunc = () => void;
interface Rout {
    url: string;
    page: string;
    additionalElements: Array<additFunc | null>;
    utils: Array<utilFunc | null>;
}
export default () => {
    const routs: Array<Rout> = [
        {
            url: "/profile",
            page: Profile({
                dataEdit: false,
                passwordEdit: false,
            }),
            additionalElements: [ModalWindow],
            utils: [ModalWindowController, FileReader],
        },
        {
            url: "/profile/edit/password",
            page: Profile({
                dataEdit: true,
                passwordEdit: true,
            }),
            additionalElements: [ModalWindow],
            utils: [ModalWindowController, FileReader],
        },
        {
            url: "/profile/edit/data",
            page: Profile({
                dataEdit: true,
                passwordEdit: false,
            }),
            additionalElements: [ModalWindow],
            utils: [ModalWindowController, FileReader],
        },
        {
            url: "/auth",
            page: Authorization(),
            additionalElements: [],
            utils: [],
        },
        {
            url: "/registration",
            page: Registration(),
            additionalElements: [],
            utils: [],
        },
        {
            url: "/chats",
            page: Chats(),
            additionalElements: [],
            utils: [],
        },
    ];
    return routs;
};