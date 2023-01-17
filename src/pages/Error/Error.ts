import template from "./Error.hbs";

export default (code: number) => {
    const rout = `/chats`;
    const error500 = {
        title: "500",
        text: "Мы уже фиксим",
        rout,
    };
    const error404 = {
        title: "404",
        text: "Не туда попали",
        rout,
    };
    if (code === 500) {
        const res = template({
            ...error500,
        });
        return res;
    } else {
        const res = template({
            ...error404,
        });
        return res;
    }
};
