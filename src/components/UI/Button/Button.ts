import template from "./Button.hbs";

export default (data: Record<string, string>): string => {
    const res = template({
        ...data,
    });
    return res;
};
