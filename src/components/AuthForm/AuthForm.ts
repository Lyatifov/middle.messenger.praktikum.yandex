import template from "./AuthForm.hbs";
import Button from "../UI/Button/Button";
import InputBlock from "./InputBlock/InputBlock";

interface Data {
    title: string;
    inputList: Array<object>;
    buttonList: Array<object>;
}
interface InputList {
    id: string;
    title: string;
    type: string;
    error: string;
}
interface ButtonList {
    className: string;
    value: string;
    link: string;
    type: string;
}

export default (data: Data) => {
    const { title, inputList, buttonList } = data;
    let buttons = "",
        inputs = "";
    buttonList.map((item: ButtonList) => (buttons += Button(item)));
    inputList.map((item: InputList) => (inputs += InputBlock(item)));
    const res = template({
        title,
        inputs,
        buttons,
    });
    return res;
};
