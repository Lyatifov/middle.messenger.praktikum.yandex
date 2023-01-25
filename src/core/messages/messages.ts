interface Messages {
    name: string;
    img: string;
    messageList: Array<MessageList>;
}
interface MessageList {
    id: number;
    date: string;
    time: string;
    name: string;
    text: string;
}

export const messages: Messages = {
    name: "Андрей",
    img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
    messageList: [
        {
            id: 1,
            date: "19.06.2022",
            time: "11:56",
            name: "Илья",
            text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        },
        {
            id: 2,
            date: "19.06.2022",
            time: "12:00",
            name: "Me",
            text: "Круто!",
        },
        {
            id: 3,
            date: "19.06.2022",
            time: "12:00",
            name: "Me",
            text: "Круто!",
        },
        {
            id: 1,
            date: "19.06.2022",
            time: "11:56",
            name: "Илья",
            text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        },
        {
            id: 4,
            date: "19.06.2022",
            time: "12:00",
            name: "Me",
            text: "Круто!",
        },
        {
            id: 1,
            date: "19.06.2022",
            time: "11:56",
            name: "Илья",
            text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        },
        {
            id: 5,
            date: "19.06.2022",
            time: "12:00",
            name: "Me",
            text: "Круто!",
        },
        {
            id: 6,
            date: "19.06.2022",
            time: "12:00",
            name: "Me",
            text: "Круто!",
        },
    ],
};

interface Chats {
    chatList: Array<ChatList>;
}

interface ChatList {
    id: number;
    name: string;
    img: string;
    lastMessage: string;
    countNewMessage: string;
    time: string;
}
export const chats: Chats = {
    chatList: [
        {
            id: 1,
            name: "Андрей",
            img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
            lastMessage: "Изображение",
            countNewMessage: "2",
            time: "10:49",
        },
        {
            id: 2,
            name: "Илья",
            img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
            lastMessage:
                "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
            countNewMessage: "15",
            time: "15:12",
        },
        {
            id: 3,
            name: "Андрей",
            img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
            lastMessage: "Изображение",
            countNewMessage: "2",
            time: "10:49",
        },
        {
            id: 4,
            name: "Илья",
            img: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
            lastMessage:
                "Друзья, у меня для вас особенный выпуск новостей! Бла бла бла бла бла бла бал бал бал бал бла!",
            countNewMessage: "15",
            time: "15:12",
        },
    ],
};