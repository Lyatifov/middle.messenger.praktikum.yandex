import template from "./Input.hbs";

export default (data: Record<string, string>): string => {
    const res = template({
        ...data,
    });
    return res;
};
