import template from "./ModalWindow.hbs";
import Button from "../UI/Button/Button";

export default () => {
    const res = template({
        button: Button({ value: "Поменять" }),
    });
    return res;
};
