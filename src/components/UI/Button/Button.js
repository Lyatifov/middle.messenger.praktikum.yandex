import template from "./Button.hbs";

export default (data) => {
    const res = template({
        ...data,
    });
    return res;
};
