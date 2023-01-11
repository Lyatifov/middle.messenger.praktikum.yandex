import template from "./ProfileData.hbs";
import InputDataEdit from "./InputDataEdit/InputDataEdit";
import InputDataController from "./InputDataController/InputDataController";
import Button from "../UI/Button/Button";
import PORT from "../../index";

export default (edit, data) => {
    const link = `http://localhost:${PORT}/profile`;
    const res = template({
        InputDataEdit: InputDataEdit(edit, data),
        InputDataController: InputDataController(edit, link),
    });
    return res;
};
