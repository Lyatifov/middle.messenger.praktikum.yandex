import template from "./InputBlock.hbs";
import Input from "../../UI/Input/Input";

export default (data: object) => {
    const res = template({
        input: Input(data),
        ...data,
    });
    return res;
};
