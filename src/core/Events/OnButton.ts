import ChangeRouter from "../Router/Router";

export function OnButton(buttonRouter: Record<string, string>[]): void {
    buttonRouter.forEach((item) => {
        const button = document.getElementById(item.buttonId);
        const func = () => {
            ChangeRouter(item.redirectTo);
        };
        if (button) {
            button.removeEventListener("click", func);
            button.addEventListener("click", func);
        }
    });
}
