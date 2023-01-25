import Component from "../Component/Component";
import { RenderPage } from "../Router/Router";

export interface WrapperComponent {
    tagName: string;
    className: string;
}
export default (Page: RenderPage) => {
    class NewComponent extends Component {
        constructor(wrapper: WrapperComponent, props: RenderPage) {
            super(wrapper, props);
        }
    }
    function render(query: string, component: Component) {
        const root: HTMLElement | null = document.querySelector(query);
        if (root) {
            root.innerHTML = "";
            root.appendChild(component.getContent());
            return root;
        }
    }
    const wrapper: WrapperComponent = {
        tagName: "div",
        className: "root",
    };
    const pageComponent = new NewComponent(wrapper, Page);
    render("body", pageComponent);
};
