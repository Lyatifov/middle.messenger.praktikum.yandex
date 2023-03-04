import { PageComponent } from "../../interfaces/interfaces";

export interface ViewInterface {
    pageComponents: PageComponent[];
}
export default class View implements ViewInterface {
    pageComponents;
    constructor(pageComponents: PageComponent[]) {
        this.pageComponents = pageComponents;
    }
}
