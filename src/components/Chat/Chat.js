import template from "./Chat.hbs";

export default (data) => {
    const res = template({
        ...data,
    });
    return res;
};
