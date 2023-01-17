import Error from "../../pages/Error/Error";
import RoutsList from "./RoutsList";

const root: HTMLElement | null = document.getElementById("root");
export let ActiveModalWindow: boolean = true;
interface Rout {
    url: string;
    page: string;
    additionalElements: Array<Function | null>;
    utils: Array<Function | null>;
}

export default globalThis.ChangeRouter = (targetUrl: string): void => {
    const routs: Array<Rout> = RoutsList();
    let correctUrl: boolean = false;
    routs.map((rout: Rout) => {
        const { url, page, additionalElements, utils } = rout;
        if (targetUrl === url && root) {
            root.innerHTML = page;
        } else {
            return;
        }
        if (additionalElements.length) {
            additionalElements.map((additEl: Function) => {
                root.innerHTML += additEl();
            });
        }
        if (utils.length) {
            utils.map((utilEl: Function) => {
                utilEl();
            });
        }
        history.pushState(null, "null", url);
        correctUrl = true;
    });
    if (!correctUrl && root) {
        root.innerHTML = Error(404);
    }
};
