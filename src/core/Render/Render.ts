import Component from "../Component/Component";

export default (enter: string, component: string, events: (() => void)[]): void => {
    class NewComponent extends Component {
        constructor(enterPoint: string, component: string, events: (() => void)[]) {
            super(enterPoint, component, events);
        }
    }
    const pageComponent = new NewComponent(enter, component, events);
};
