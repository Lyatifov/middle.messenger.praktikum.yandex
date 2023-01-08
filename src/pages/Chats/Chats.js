import template from "./Chats.hbs";
import Chat from "../../components/Chat/Chat";
import Message from "../../components/Message/Message";
import targetChat from "../../core/messages/messages";

export default () => {
    const data = {
        chatList: [
            {
                id: "1",
                name: "Андрей",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage: "Изображение",
                countNewMessage: "2",
                time: "10:49",
            },
            {
                id: "2",
                name: "Илья",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
                countNewMessage: "15",
                time: "15:12",
            },
            {
                id: "1",
                name: "Андрей",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage: "Изображение",
                countNewMessage: "2",
                time: "10:49",
            },
            {
                id: "2",
                name: "Илья",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
                countNewMessage: "15",
                time: "15:12",
            },
            {
                id: "1",
                name: "Андрей",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage: "Изображение",
                countNewMessage: "2",
                time: "10:49",
            },
            {
                id: "2",
                name: "Илья",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
                countNewMessage: "15",
                time: "15:12",
            },
            {
                id: "1",
                name: "Андрей",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage: "Изображение",
                countNewMessage: "2",
                time: "10:49",
            },
            {
                id: "2",
                name: "Илья",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
                countNewMessage: "15",
                time: "15:12",
            },
            {
                id: "1",
                name: "Андрей",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage: "Изображение",
                countNewMessage: "2",
                time: "10:49",
            },
            {
                id: "2",
                name: "Илья",
                img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
                lastMessage:
                    "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
                countNewMessage: "15",
                time: "15:12",
            },
        ],
    };
    const res = template({
        ...targetChat,
        ...data,
        chat: Chat,
    });
    return res;
};
