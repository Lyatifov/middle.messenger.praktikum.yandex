import { check } from "../Validator/Validator";
import ChangeRouter from "../Router/Router";

export default (
    redirect?: string | null
): ((event: {
    preventDefault: () => void;
    composedPath: () => { querySelectorAll: (arg0: string) => any }[];
}) => void) => {
    const func = (event: {
        preventDefault: () => void;
        composedPath: () => { querySelectorAll: (arg0: string) => any }[];
    }) => {
        event.preventDefault();
        const thisForm = event.composedPath()[0];
        const inputList = thisForm.querySelectorAll("input");
        const data: Record<string, string> = {};
        for (let i = 0; i < inputList.length; i++) {
            const key: string | null = inputList[i].getAttribute("name");
            if (key) {
                data[key] = inputList[i].value;
            }
        }
        const result = check(data);
        if (result) {
            console.log(data);
            if (redirect) {
                ChangeRouter(redirect);
            }
        }
    };
    return func;
};
