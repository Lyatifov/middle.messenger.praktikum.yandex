import { router } from "../../index";
import apiController from "../API/Controller";

export function OnButton(
    ruter: string,
    additFunc?: () => void
): (targetUrl: string) => void {
    if (additFunc) {
        const func = () => {
            console.log("logout!");
            additFunc();
            router.go(ruter);
        };
        return func;
    } else {
        const func = () => {
            router.go(ruter);
        };
        return func;
    }
}

export function LogOut() {
    const func = () => {
        apiController.logOut();
        router.go("/sign-in");
    };
    return func;
}
