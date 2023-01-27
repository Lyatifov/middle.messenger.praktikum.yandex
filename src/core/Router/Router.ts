import Error from "../../pages/Error/Error";
import RoutsList from "./RoutsList";
import { ViewInterface } from "../View/View";
import { RoutsInterface } from "./RoutsList";

export const ActiveModalWindow = true;
export default globalThis.ChangeRouter = (targetUrl: string): void => {
    const routs: RoutsInterface[] = RoutsList();
    const isCorrectUrl = routs.filter((rout) => rout.url === targetUrl);
    if (isCorrectUrl.length) {
        const { url, page } = isCorrectUrl[0];
        const PageClass: ViewInterface = page();
        PageClass.render();
        history.pushState(null, "null", url);
    } else {
        const ErrorClass: ViewInterface = Error();
        ErrorClass.render();
    }
};
