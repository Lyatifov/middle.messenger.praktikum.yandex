import template from "./Error.hbs";

export default (code) => {
    const error500 = {
        title: "500",
        text: "Мы уже фиксим",
    };
    const error404 = {
        title: "404",
        text: "Не туда попали",
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
