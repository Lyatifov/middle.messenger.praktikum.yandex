import Authorization from "../../pages/Authorization/Authorization";
import Registration from "../../pages/Registration/Registration";
import Error from "../../pages/Error/Error";
import Chats from "../../pages/Chats/Chats";
import FileReader from "../FileReader/FileReader";
import Profile from "../../pages/Profile/Profile";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import ModalWindowController from "../ModalWindow/ModalWindow";

const PORT = 3000;
const root = document.getElementById("root");
let activeModalWindow = true,
    oldUrl = "";

export default function ChangeRouter(newUrl) {
    if (newUrl !== oldUrl) {
        const edit = {
            dataEdit: false,
            passwordEdit: false,
        };
        if (newUrl === `http://localhost:${PORT}/auth`) {
            root.innerHTML = Authorization();
        } else if (newUrl === `http://localhost:${PORT}/profile`) {
            root.innerHTML = Profile(edit).concat(
                ModalWindow("Загрузите файл")
            );
            ModalWindowController(activeModalWindow);
            FileReader();
        } else if (newUrl.includes(`http://localhost:${PORT}/profile`)) {
            if (newUrl.includes("/edit/password")) {
                edit.passwordEdit = true;
                edit.dataEdit = true;
            } else if (newUrl.includes("/edit/data")) {
                edit.dataEdit = true;
            } else {
                root.innerHTML = Error();
                return;
            }
            root.innerHTML = Profile(edit).concat(
                ModalWindow("Загрузите файл")
            );
            ModalWindowController(activeModalWindow);
            FileReader();
        } else if (newUrl === `http://localhost:${PORT}/chats`) {
            root.innerHTML = Chats();
        } else if (newUrl === `http://localhost:${PORT}/registration`) {
            root.innerHTML = Registration();
        } else {
            root.innerHTML = Error();
            return;
        }
    }
    oldUrl = newUrl;
    const tail = newUrl.replace(`http://localhost:${PORT}`, "");
    history.pushState(null, null, tail);
}
