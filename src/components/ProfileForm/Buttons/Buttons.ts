import template from "./Buttons.hbs";
import Button from "../../UI/Button/Button";

export default (_: string, edit: Record<string, boolean | string>): string => {
    const button = {
        value: "Сохранить",
        type: "submit",
    };
    if (edit.dataEdit) {
        return Button(button);
    }
    const res = template({
        ...edit,
    });
    return res;
};
