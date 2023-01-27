import template from "./Main.hbs";

export default (data: Record<string, string>[]): string => {
    const res: string = template({
        ...data[0],
    });
    return res;
};
