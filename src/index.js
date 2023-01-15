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
import ModalWindowController from "./core/ModalWindowController/ModalWindowController";

window.ChangeRouter(window.location.pathname);
