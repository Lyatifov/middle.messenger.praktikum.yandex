import template from "./InputDataController.hbs";
import Button from "../../UI/Button/Button";
import PORT from "../../../index";

export default (edit, link) => {
    const links = {
        password: `http://localhost:${PORT}/profile/edit/password`,
        data: `http://localhost:${PORT}/profile/edit/data`,
        exit: `http://localhost:${PORT}/auth`,
    };
    const res = template({
        ...edit,
        ...links,
        button: Button({ value: "Сохранить", link }),
    });
    return res;
};
