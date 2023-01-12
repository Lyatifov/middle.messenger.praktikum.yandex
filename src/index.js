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

const PORT = 3000;
const root = document.getElementById("root");
let activeModalWindow = true;

function ChangeRouter(url) {
    const edit = {
        dataEdit: false,
        passwordEdit: false,
    };
    if (url === `http://localhost:${PORT}/auth`) {
        root.innerHTML = Authorization();
    } else if (url === `http://localhost:${PORT}/profile`) {
        root.innerHTML = Profile(edit).concat(ModalWindow("Загрузите файл"));
        ModalWindowController(activeModalWindow);
        FileReader();
    } else if (url.includes(`http://localhost:${PORT}/profile`)) {
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
    } else if (url === `http://localhost:${PORT}/chats`) {
        root.innerHTML = Chats();
    } else if (url === `http://localhost:${PORT}/registration`) {
        root.innerHTML = Registration();
    } else {
        root.innerHTML = Error();
        return;
    }
    if (document.getElementById("backToChat")) {
        const buttonBackToChat = document.getElementById("backToChat");
        buttonBackToChat.onclick = () => {
            window.location.href = `http://localhost:${PORT}/chats`;
        };
    }
}

window.onload = ChangeRouter(document.location.href);
