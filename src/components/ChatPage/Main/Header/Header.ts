import template from "./Header.hbs";

export default (data: Record<string, string>): string => {
    const res: string = template({
        ...data,
    });
    return res;
};
