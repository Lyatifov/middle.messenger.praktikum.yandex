import template from "./ModalWindow.hbs";
import Button from "../UI/Button/Button";
import InputsBlock from "../AuthForm/InputsBlock/InputsBlock";
import { DataFromModal } from "../../interfaces/interfaces";

export default (data: DataFromModal): string => {
    const { button, title, loadImg, inputs } = data;
    const inputList: string = InputsBlock(inputs);
    const res = template({
        loadImg,
        title,
        inputs: inputList,
        button: Button(button),
    });
    return res;
};
