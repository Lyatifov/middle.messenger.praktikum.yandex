import { check } from "../Validator/Validator";
import State from "../State/State";
import store from "../../Store/Store";

function getData(thisForm: any) {
    const inputList = thisForm.querySelectorAll("input");
    const data: Record<string, string> = {};
    for (let i = 0; i < inputList.length; i++) {
        const key: string | null = inputList[i].getAttribute("name");
        if (key) {
            data[key] = inputList[i].value;
        }
    }
    return data;
}

export default function formController() {
    const func = async (event: any) => {
        event.preventDefault();
        const thisForm = event.composedPath()[0];
        if (thisForm.id === "profileModalForm") {
            const img = store.getNewAvatar();
            const formData = new FormData();
            formData.append("avatar", img);
            State.activeForm(formData, thisForm);
        } else {
            const data = getData(thisForm);
            const isCheck = check(data);
            if (isCheck) {
                State.activeForm(data, thisForm);
            }
        }
    };
    return func;
}
