import template from "./Dummy.hbs";

export default (text: string): string => {
    const res = template({
        text,
    });
    return res;
};
