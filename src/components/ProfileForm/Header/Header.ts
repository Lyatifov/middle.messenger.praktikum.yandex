import template from "./Header.hbs";

export default (data: Record<string, string>[]): string => {
    const res = template({
        ...data[0],
    });
    return res;
};
