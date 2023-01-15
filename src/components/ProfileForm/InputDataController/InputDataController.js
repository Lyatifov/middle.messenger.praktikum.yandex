import template from "./InputDataController.hbs";
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
    });
    return res;
};
