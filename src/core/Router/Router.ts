import Error from "../../pages/Error/Error";
import RoutsList from "./RoutsList";
import Render from "../Render/Render";

export const ActiveModalWindow = true;
type additFunc = () => string;
type utilFunc = () => void;
interface Rout {
    url: string;
    page: string;
    additionalElements: Array<additFunc | null>;
    utils: Array<utilFunc | null>;
}
export interface RenderPage {
    page: string;
    events: Array<utilFunc | null>;
}
export default globalThis.ChangeRouter = (targetUrl: string): void => {
    const routs: Array<Rout> = RoutsList();
    let correctUrl = false;
    const renderPage: RenderPage = {
        page: "",
        events: [],
    };
    routs.map((rout: Rout) => {
        const { url, page, additionalElements, utils } = rout;
        if (targetUrl === url) {
            renderPage.page += page;
        } else {
            return;
        }
        if (additionalElements.length) {
            additionalElements.map((additEl: additFunc) => {
                renderPage.page += additEl();
            });
        }
        if (utils.length) {
            renderPage.events = utils;
        }
        history.pushState(null, "null", url);
        correctUrl = true;
    });
    if (!correctUrl) {
        renderPage.page = Error(404);
    }
    Render(renderPage);
};
