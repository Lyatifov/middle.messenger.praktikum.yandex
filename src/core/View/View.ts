import { PageComponent } from "../../interfaces/interfaces";
// import Render from "../Render/Render";

export interface ViewInterface {
    pageComponents: PageComponent[];
    // render: () => void;
}

export default class View implements ViewInterface {
    pageComponents;
    constructor(pageComponents: PageComponent[]) {
        this.pageComponents = pageComponents;
    }
    // render() {
    //     this.listOfComponents.forEach(
    //         ({ enter, callback, data, events = [], options }) => {
    //             const component: string = callback(data, options);
    //             Render(enter, component, events);
    //         }
    //     );
    // }
}
