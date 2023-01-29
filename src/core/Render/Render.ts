import { PageComponent } from "../../interfaces/interfaces";
import Component from "../Component/Component";

export default (components: PageComponent[]): Component[] => {
    const ComponentList: Component[] = [];
    if (components.length) {
        components.forEach((component: PageComponent) => {
            const newContent = new Component(component);
            ComponentList.push(newContent);
        });
    }
    // console.log(ComponentList);

    return ComponentList;
};
