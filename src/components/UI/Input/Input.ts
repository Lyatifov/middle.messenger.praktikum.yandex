import template from "./Input.hbs";

export default (data: object) => {
    const res = template({
        ...data,
    });
    return res;
};
