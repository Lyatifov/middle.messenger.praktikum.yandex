import template from "./AuthForm.hbs";
import ChangeRouter from "../../core/Router/Router";
import Button from "../UI/Button/Button";
import InputBlock from "./InputBlock/InputBlock";
import Input from "../UI/Input/Input";

export default ({ title, inputList, buttonList }) => {
    let buttons = "",
        inputs = "";
    buttonList.map((item) => (buttons += Button(item)));
    inputList.map((item) => (inputs += InputBlock(item)));
    const res = template({
        title,
        inputs,
        buttons,
    });
    return res;
};
