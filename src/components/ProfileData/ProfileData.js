import template from "./ProfileData.hbs";
import InputDataEdit from "./InputDataEdit/InputDataEdit";
import InputDataController from "./InputDataController/InputDataController";
import Button from "../UI/Button/Button";

export default (edit, data) => {
    const link = `/profile`;
    const res = template({
        InputDataEdit: InputDataEdit(edit, data),
        ...edit,
        Button: Button({ value: "Сохранить", link }),
        InputDataController: InputDataController(edit),
    });
    return res;
};
