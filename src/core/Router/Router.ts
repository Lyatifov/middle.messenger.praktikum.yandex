import Error from "../../pages/Error/Error";
import RoutsList from "./RoutsList";

const root: HTMLElement | null = document.getElementById("root");
export const ActiveModalWindow = true;
type additFunc = () => string;
type utilFunc = () => void;
interface Rout {
    url: string;
    page: string;
    additionalElements: Array<additFunc | null>;
    utils: Array<utilFunc | null>;
}
export default globalThis.ChangeRouter = (targetUrl: string): void => {
    const routs: Array<Rout> = RoutsList();
    let correctUrl = false;
    routs.map((rout: Rout) => {
        const { url, page, additionalElements, utils } = rout;
        if (targetUrl === url && root) {
            root.innerHTML = page;
        } else {
            return;
        }
        if (additionalElements.length) {
            additionalElements.map((additEl: additFunc) => {
                root.innerHTML += additEl();
            });
        }
        if (utils.length) {
            utils.map((utilEl: utilFunc) => {
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
