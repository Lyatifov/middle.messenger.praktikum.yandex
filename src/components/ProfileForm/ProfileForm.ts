import template from "./ProfileForm.hbs";
import InputDataEdit from "./InputDataEdit/InputDataEdit";
import InputDataController from "./InputDataController/InputDataController";
import Button from "../UI/Button/Button";

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
    const link = `/profile`;
    const res = template({
        InputDataEdit: InputDataEdit(edit, data),
        ...edit,
        Button: Button({ value: "Сохранить", link }),
        InputDataController: InputDataController(edit),
    });
    return res;
};
