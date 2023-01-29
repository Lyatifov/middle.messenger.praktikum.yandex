import Error from "../../pages/Error/Error";
import RoutsList from "./RoutsList";
import { RoutsInterface } from "./RoutsList";
import Page from "../../index";
import { PageComponent } from "../../interfaces/interfaces";
// import Render from "../Render/Render";

export const ActiveModalWindow = true;
export default globalThis.ChangeRouter = (targetUrl: string): void => {
    const routs: RoutsInterface[] = RoutsList();
    const isCorrectUrl = routs.filter((rout) => rout.url === targetUrl);
    if (isCorrectUrl.length) {
        const { url, page, options } = isCorrectUrl[0];
        let PageComponents: PageComponent;
        if (options) {
            PageComponents = page(options);
        } else {
            PageComponents = page();
        }
        Page.setProps(PageComponents);
        if (options) {
            Page.propsUpdate(options);
        }
        history.pushState(null, "null", url);
    } else {
        Page.setProps(Error());
    }
};
