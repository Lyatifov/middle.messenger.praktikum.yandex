import ChangeRouter from "../Router/Router";

export function OnButton(ruter: string): (targetUrl: string) => void {
    const func = () => {
        ChangeRouter(ruter);
    };
    return func;
}
