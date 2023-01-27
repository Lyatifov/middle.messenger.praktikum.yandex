import template from "./Inputs.hbs";
import Input from "../../UI/Input/Input";

export default (
    data: Record<string, Record<string, string>[]>,
    edit: Record<string, boolean | string>
): string => {
    const { DataList, PasswordList } = data;
    let res = "";
    if (edit.passwordEdit) {
        PasswordList.forEach((item) => {
            return (res += template({
                ...item,
                ...edit,
                Input: Input({ ...item, ...edit }),
            }));
        });
        return res;
    }
    DataList.forEach((item) => {
        return (res += template({
            ...item,
            ...edit,
            Input: Input({ ...item, ...edit }),
        }));
    });
    return res;
};
