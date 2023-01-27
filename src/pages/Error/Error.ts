import template from "./Error.hbs";
import View, { ViewInterface } from "../../core/View/View";
import { PageComponent } from "../../interfaces/interfaces";

export function BuildErrorPage(errorData: Record<string, string>[]): string {
    const res = template({
        ...errorData[0],
    });
    return res;
}
export default (): ViewInterface => {
    const error404: Record<string, string>[] = [
        {
            title: "404",
            text: "Не туда попали",
        },
    ];
    const listOfComponents: PageComponent[] = [
        {
            enter: "root",
            callback: BuildErrorPage,
            data: error404,
            events: [],
        },
    ];
    class ErrorPage extends View {
        constructor(listOfComponents: PageComponent[]) {
            super(listOfComponents);
        }
    }
    const errorPage = new ErrorPage(listOfComponents);
    return errorPage;
};
