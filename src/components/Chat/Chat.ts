import template from "./Chat.hbs";

export default (data: object) => {
    const res = template({
        ...data,
    });
    return res;
};
