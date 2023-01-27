import { PageComponent } from "../../interfaces/interfaces";
import Render from "../Render/Render";

export interface ViewInterface {
    listOfComponents: PageComponent[];
    render: () => void;
}

export default class View implements ViewInterface {
    listOfComponents;
    constructor(listOfComponents: PageComponent[]) {
        this.listOfComponents = listOfComponents;
    }
    render() {
        this.listOfComponents.forEach(({ enter, callback, data, events = [] }) => {
            const component: string = callback(data);
            Render(enter, component, events);
        });
    }
}
