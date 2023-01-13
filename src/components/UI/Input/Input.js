import template from "./Input.hbs";

export default (data) => {
    const res = template({
        ...data,
    });
    return res;
};
