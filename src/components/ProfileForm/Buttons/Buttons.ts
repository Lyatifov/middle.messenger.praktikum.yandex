import template from "./Buttons.hbs";

export default (_: string, edit: Record<string, boolean | string>): string => {
    if (!edit.dataEdit) {
        const res = template({
            ...edit,
        });
        return res;
    }
    return "";
};
