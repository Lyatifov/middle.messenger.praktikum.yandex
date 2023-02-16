import { check } from "../Validator/Validator";
import { router } from "../../index";
import apiController from "../API/Controller";

function switchApiForm(data: any) {
    const apiType = window.location.pathname;
    switch (apiType) {
        case "/sign-in":
            return apiController.signin(data);
        case "/sign-up":
            return apiController.signup(data);
        case "/profile/settings/data":
            return apiController.profileUpdate(data);
        case "/profile/settings/password":
            return apiController.passwordUpdate(data);
        default:
            break;
    }
}

function getData(event: any) {
    const thisForm = event.composedPath()[0];
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

export default function formController(redirect?: string | null) {
    const func = async (event: any) => {
        event.preventDefault();
        const data = getData(event);
        const isCheck = check(data);
        if (isCheck) {
            const res = (await switchApiForm(data)) as Promise<any>;
            if ((await res) === "OK" || Object.assign(res).length) {
                if (redirect) {
                    router.go(redirect);
                }
            }
        }
    };
    return func;
}
