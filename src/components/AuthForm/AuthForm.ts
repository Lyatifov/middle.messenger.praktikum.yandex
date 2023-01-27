import template from "./AuthForm.hbs";

export default (title: string): string => {
    const res: string = template({
        title,
    });
    return res;
};
