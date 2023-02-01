import Validator from "../Validator/Validator";
import ChangeRouter from "../Router/Router";

export default (id: string, redirect?: string | null): void => {
    const form: HTMLElement | null = document.getElementById(id);
    if (form) {
        const validator: Validator = new Validator(form);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputList = form.querySelectorAll("input");
            const data: Record<string, string> = {};
            for (let i = 0; i < inputList.length; i++) {
                const key: string | null = inputList[i].getAttribute("name");
                if (key) {
                    data[key] = inputList[i].value;
                }
            }
            const result = validator.check(data);
            if (result) {
                console.log(data);
                if (redirect) {
                    ChangeRouter(redirect);
                }
            }
        });
    }
};
