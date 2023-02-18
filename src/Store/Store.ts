function body(newData: Record<string, string>) {
    const data: Record<string, string>[] = [
        {
            id: "email",
            name: "email",
            value: "pochta@yandex.ru",
            title: "Почта",
            error: "Ошибка",
        },
        {
            id: "login",
            name: "login",
            value: "ivanivanov",
            title: "Логин",
            error: "Ошибка",
        },
        {
            id: "first_name",
            name: "first_name",
            value: "Иван",
            title: "Имя",
            error: "Ошибка",
        },
        {
            id: "second_name",
            name: "second_name",
            value: "Иван",
            title: "Фамилия",
            error: "Ошибка",
        },
        {
            id: "display_name",
            name: "display_name",
            value: "Иванов",
            title: "Имя в чате",
            error: "Ошибка",
        },
        {
            id: "phone",
            name: "phone",
            value: "+7 (909) 967 30 30",
            title: "Телефон",
            error: "Ошибка",
        },
    ];
    Object.keys(newData).forEach((key) => {
        data.forEach((item) => {
            if (item.name === key) {
                item.value = newData[key];
            }
        });
    });
    return data;
}
function head(newData: Record<string, string>) {
    const data: Record<string, string> = {
        display_name: "Ваше имя в чате",
        avatar: "https://w7.pngwing.com/pngs/52/368/png-transparent-user-profile-computer-icons-avatar-avatar-heroes-monochrome-desktop-wallpaper.png",
    };
    if (newData.display_name) {
        data.display_name = newData.display_name;
    }
    if (newData.avatar) {
        data.avatar = "https://ya-praktikum.tech/api/v2/resources/" + newData.avatar;
    }
    return [data];
}

class Store {
    data: any = {};
    body: any = [];
    head: any = [];
    newAvatar: any = {};
    constructor() {}
    setData(data: any) {
        this.data = data;
        this.body = body(this.data);
        this.head = head(this.data);
    }
    getData() {
        return { DataList: this.body, ProfileHeader: this.head };
    }
    setNewAvatar(newAvatar: any) {
        this.newAvatar = newAvatar;
        console.log(this.newAvatar);
    }
    getNewAvatar() {
        return this.newAvatar;
    }
}

const store = new Store();
export default store;
