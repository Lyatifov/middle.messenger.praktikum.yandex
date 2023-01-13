import "./index.scss";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Error from "./pages/Error/Error";
import Chats from "./pages/Chats/Chats";
import targetChat from "./core/messages/messages";
import FileReader from "./core/FileReader/FileReader";
import Message from "./components/Message/Message";
import Profile from "./pages/Profile/Profile";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import ModalWindowController from "./core/ModalWindow/ModalWindow";

const root = document.getElementById("root");
let activeModalWindow = true;

window.ChangeRouter = (url) => {
    console.log(url);
    const edit = {
        dataEdit: false,
        passwordEdit: false,
    };
    if (url === `/auth`) {
        root.innerHTML = Authorization();
    } else if (url === `/profile`) {
        root.innerHTML = Profile(edit).concat(ModalWindow("Загрузите файл"));
        ModalWindowController(activeModalWindow);
        FileReader();
    } else if (url.includes(`/profile`)) {
        if (url.includes("/edit/password")) {
            edit.passwordEdit = true;
            edit.dataEdit = true;
        } else if (url.includes("/edit/data")) {
            edit.dataEdit = true;
        } else {
            root.innerHTML = Error();
            return;
        }
        root.innerHTML = Profile(edit).concat(ModalWindow("Загрузите файл"));
        ModalWindowController(activeModalWindow);
        FileReader();
    } else if (url === `/chats`) {
        root.innerHTML = Chats();
    } else if (url === `/registration`) {
        root.innerHTML = Registration();
    } else {
        root.innerHTML = Error();
        return;
    }
    if (document.getElementById("backToChat")) {
        const buttonBackToChat = document.getElementById("backToChat");
        buttonBackToChat.onclick = () => {
            location.href = `/chats`;
        };
    }
    history.pushState(null, null, url);
};

ChangeRouter(window.location.pathname);

if (window.performance) {
    console.info("window.performance works fine on this browser");
}
