// import Authorization from "../../pages/Authorization/Authorization";
// import Registration from "../../pages/Registration/Registration";
import Error from "../../pages/Error/Error";
// import Chats from "../../pages/Chats/Chats";
// import FileReader from "../FileReader/FileReader";
// import Profile from "../../pages/Profile/Profile";
// import ModalWindow from "../../components/ModalWindow/ModalWindow";
// import ModalWindowController from "../ModalWindowController/ModalWindowController";
import RoutsList from "./RoutsList";

const root = document.getElementById("root");

export let ActiveModalWindow = true;

window.ChangeRouter = (url) => {
    let correctUrl = false;
    const routs = RoutsList();
    routs.map((rout) => {
        if (url === rout.url) {
            root.innerHTML = rout.page;
        } else {
            return;
        }
        if (rout.additionalElements.length) {
            rout.additionalElements.map((additEl) => {
                root.innerHTML += additEl();
            });
        }
        if (rout.utils.length) {
            rout.utils.map((utilEl) => {
                utilEl();
            });
        }
        history.pushState(null, null, url);
        correctUrl = true;
    });
    if (!correctUrl) {
        root.innerHTML = Error();
    }
};
