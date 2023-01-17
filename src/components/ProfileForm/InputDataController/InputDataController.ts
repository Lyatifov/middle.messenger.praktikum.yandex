import template from "./InputDataController.hbs";

export default (edit: object) => {
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
