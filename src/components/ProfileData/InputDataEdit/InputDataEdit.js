import template from "./InputDataEdit.hbs";

export default (edit, data) => {
    const { listData, listPassword } = data;
    let res = "";
    if (edit.passwordEdit) {
        listPassword.map((item) => {
            res += template({
                ...item,
                ...edit,
            });
        });
        return res;
    }
    listData.map((item) => {
        res += template({
            ...item,
            ...edit,
        });
    });
    return res;
};
