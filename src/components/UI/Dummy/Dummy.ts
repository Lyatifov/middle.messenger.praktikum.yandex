import template from "./Dummy.hbs";

export default (text: string): string => {
    let res = template({
        text,
    });
    return res;
};
