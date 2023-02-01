import template from "./Inputs.hbs";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

export default (
    data: Record<string, Record<string, string>[]>,
    edit: Record<string, boolean | string>
): string => {
    const { DataList, PasswordList } = data;
    const buttonData = [
        {
            id: "saveEditedData",
            value: "Сохранить",
            type: "submit",
            className: "",
        },
        {
            id: "backToProfile",
            value: "Назад",
            type: "button",
            className: "_bg-wite",
        },
    ];
    let res = "";
    let button = "";
    if (edit.dataEdit) {
        buttonData.forEach((item) => {
            button += Button(item);
        });
    }
    if (edit.passwordEdit) {
        PasswordList.forEach((item) => {
            return (res += template({
                ...item,
                ...edit,
                Input: Input({ ...item, ...edit }),
            }));
        });
    } else {
        DataList.forEach((item) => {
            return (res += template({
                ...item,
                ...edit,
                Input: Input({ ...item, ...edit }),
            }));
        });
    }
    return res + button;
};
