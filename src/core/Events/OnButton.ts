import { router } from "../../index";
import state from "../State/State";

export function OnButton(
    ruter: string,
    additFunc?: () => void
): (targetUrl: string) => void {
    if (additFunc) {
        const func = () => {
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
        state.logOut();
    };
    return func;
}
