import template from "./InputDataController.hbs";
import Button from "../../UI/Button/Button";
import PORT from "../../../index";

export default (edit, link) => {
    const links = {
        password: `/profile/edit/password`,
        data: `/profile/edit/data`,
        exit: `/auth`,
    };
    const res = template({
        ...edit,
        ...links,
        button: Button({ value: "Сохранить", link }),
    });
    return res;
};
