import template from "./ModalWindow.hbs";
import Button from "../UI/Button/Button";

export default (title: string) => {
    const res = template({
        title,
        button: Button({ value: "Поменять" }),
    });
    return res;
};
