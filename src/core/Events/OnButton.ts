import ChangeRouter from "../Router/Router";

export function OnButton(buttonRouter: Record<string, string>[]): void {
    buttonRouter.forEach((item) => {
        const button = document.getElementById(item.buttonId);
        if (button) {
            button.addEventListener("click", () => {
                ChangeRouter(item.redirectTo);
            });
        }
    });
}
