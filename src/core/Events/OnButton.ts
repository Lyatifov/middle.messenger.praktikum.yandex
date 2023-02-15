import { router } from "../../index";

export function OnButton(ruter: string): (targetUrl: string) => void {
    const func = () => {
        router.go(ruter);
    };
    return func;
}
