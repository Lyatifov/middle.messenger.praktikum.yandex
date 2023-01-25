import EventBus from "../EventBus/EventBus";
import { RenderPage } from "../Router/Router";

type Func = <T, X>(x: T) => X;
type utilFunc = () => void;
export default class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };
    _element: HTMLElement;
    tagName: string;
    className: string;
    props: RenderPage = {
        page: "",
        events: [],
    };
    eventBus: EventBus;
    children: RenderPage;
    constructor(
        { tagName = "div", className = "" },
        propsAndChilds: RenderPage
    ) {
        // const { children, props } = this.getChildren(propsAndChilds);
        this.eventBus = new EventBus();
        this.tagName = tagName;
        this.className = className;
        // this.children = children;
        // this.props = this._makePropsProxy({ ...props });
        this.props = propsAndChilds;
        this._registerEvents();
        this.eventBus.emit(Component.EVENTS.INIT);
    }
    _registerEvents() {
        this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this) as Func);
        // this.eventBus.on(
        //     Component.EVENTS.FLOW_CDM,
        //     this._componentDidMount.bind(this) as Func
        // );
        this.eventBus.on(
            Component.EVENTS.FLOW_RENDER,
            this._render.bind(this) as Func
        );
        this.eventBus.on(
            Component.EVENTS.FLOW_CDU,
            this._componentDidUpdate.bind(this) as Func
        );
    }
    init() {
        this._element = this._createDocumentElement(this.tagName);
        if (this.className) {
            this._element.className = this.className;
        }
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
    _createDocumentElement(tag: string) {
        const element: HTMLElement = document.createElement(tag);
        return element;
    }
    // _componentDidMount() {
    //     // this.componentDidMount();
    //     Object.values(this.children).forEach((child) => {
    //         console.log(this.children);
    //         child.dispatchComponentDidMoun();
    //     });
    // }
    // // componentDidMount(oldProps: undefined) {}
    // dispatchComponentDidMoun() {
    //     this.eventBus.emit(Component.EVENTS.FLOW_CDM);
    //     if (Object.keys(this.children).length) {
    //         this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    //     }
    // }
    _componentDidUpdate(oldProps: RenderPage, newProps: RenderPage) {
        const isReRender = this.componentDidUpdate(oldProps, newProps);
        if (isReRender) {
            this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
        }
    }
    componentDidUpdate(oldProps: RenderPage, newProps: RenderPage) {
        if (JSON.stringify(oldProps) === JSON.stringify(newProps)) {
            return false;
        } else {
            return true;
        }
    }
    setProps = (nextProps: RenderPage) => {
        if (!nextProps) {
            return;
        }
        // const { children, props } = this.getChildren(nextProps);
        // if (Object.values(children).length) {
        //     Object.assign(this.children, children);
        // }
        const props = nextProps;
        if (Object.values(props).length) {
            Object.assign(this.props, props);
        }
    };
    get element() {
        return this._element;
    }
    _render() {
        const Component: string = this.render();
        this._element.remove();
        // this.removeEvents();
        this._element.innerHTML = Component;
        setTimeout(() => this.addEvents(), 1);
        // this.addAttribute();
        return true;
    }
    render() {
        return `${this.props.page}`;
    }
    addEvents() {
        const events: (utilFunc | null)[] | undefined = this.props.events;
        if (events) {
            events.forEach((event: utilFunc) => {
                event();
            });
        }
    }
    // removeEvents() {
    //     this.props.events.forEach((event: () => void, eventName: number) => {
    //         this._element.removeEventListener(`event${eventName}`, event);
    //     });
    // }
    // getChildren(propsAndChilds: RenderPage) {
    //     const children: RenderPage = {};
    //     const props: RenderPage = {};
    //     Object.keys(propsAndChilds).forEach((key) => {
    //         if (propsAndChilds[key] instanceof Component) {
    //             children[key] = propsAndChilds[key];
    //         } else {
    //             props[key] = propsAndChilds[key];
    //         }
    //     });
    //     console.log(props, children, propsAndChilds);
    //     return { children, props };
    // }
    getContent() {
        return this.element;
    }
    // _makePropsProxy(props: RenderPage) {
    //     return new Proxy(props, {
    //         get(target: RenderPage, prop: string) {
    //             const value: string | utilFunc[] = target[prop];
    //             console.log("target:", target, "prop", prop, "value", value);
    //             if (typeof value === "function") {
    //                 return value.bind(target) as Func;
    //             } else {
    //                 return value;
    //             }
    //         },
    //         set: (target: RenderPage, prop: string, value: RenderPage) => {
    //             console.log(target, prop, value);
    //             const oldValue: RenderPage = {
    //                 ...target,
    //             };
    //             target[prop] = value;
    //             this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, target);
    //             return true;
    //         },
    //         deleteProperty() {
    //             throw new Error("Нет доступа");
    //         },
    //     });
    // }
    show() {
        this.getContent().style.display = "Component";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
