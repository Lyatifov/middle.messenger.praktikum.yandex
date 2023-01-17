import template from "./InputDataEdit.hbs";
import Input from "../../UI/Input/Input";

interface DataItem {
    id: string;
    value: string;
    title: string;
    type?: string;
}
interface Profile {
    nickName: string;
    img: string;
    listData: Array<DataItem>;
    listPassword: Array<DataItem>;
}
interface Edit {
    dataEdit: boolean;
    passwordEdit: boolean;
}

export default (edit: Edit, data: Profile) => {
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
