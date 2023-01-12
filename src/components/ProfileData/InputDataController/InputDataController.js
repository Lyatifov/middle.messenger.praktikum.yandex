import template from "./InputDataController.hbs";
import Button from "../../UI/Button/Button";
import PORT from "../../../index";

export default (edit, link) => {
    const links = {
        password: `http://localhost:3000/profile/edit/password`,
        data: `http://localhost:3000/profile/edit/data`,
        exit: `http://localhost:3000/auth`,
    };
    const res = template({
        ...edit,
        ...links,
        button: Button({ value: "Сохранить", link }),
    });
    return res;
};
