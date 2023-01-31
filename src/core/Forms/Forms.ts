import Validator from "../Validator/Validator";

export default (id: string): void => {
    const form: HTMLElement | null = document.getElementById(id);
    if (form) {
        new Validator(form);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(form);
        });
    }
};
