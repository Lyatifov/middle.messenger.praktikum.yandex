import template from "./Button.hbs";

export default (data: object) => {
    const res = template({
        ...data,
    });
    return res;
};
