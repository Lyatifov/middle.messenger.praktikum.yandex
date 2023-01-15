import template from "./InputDataEdit.hbs";
import Input from "../../UI/Input/Input";

export default (edit, data) => {
    const { listData, listPassword } = data;
    let res = "";
    if (edit.passwordEdit) {
        listPassword.map((item) => {
            res += template({
                ...item,
                ...edit,
                Input: Input({ ...item, ...edit }),
            });
        });
        return res;
    }
    listData.map((item) => {
        res += template({
            ...item,
            ...edit,
            Input: Input({ ...item, ...edit }),
        });
    });
    return res;
};
