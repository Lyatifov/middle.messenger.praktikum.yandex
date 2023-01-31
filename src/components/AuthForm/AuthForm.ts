import template from "./AuthForm.hbs";

export default (data: Record<string, string>): string => {
    const res: string = template({
        ...data,
    });
    return res;
};
