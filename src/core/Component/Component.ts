import EventBus from "../EventBus/EventBus";
type FV = () => void;
type FPV = (oldProps?: Record<string, string>, newProps?: Record<string, string>) => void;
export default class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };
    _element: HTMLElement;
    enterPoint: string;
    props: Record<string, string>;
    eventBus: EventBus;
    events: FV[];
    constructor(enterPoint: string, component: string, events: FV[]) {
        this.enterPoint = enterPoint;
        this.eventBus = new EventBus();
        this.events = events;
        this.props = this._makePropsProxy({ component });
        this._registerEvents();
        this.eventBus.emit(Component.EVENTS.INIT);
    }
    _registerEvents() {
        this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this) as FV);
        // this.eventBus.on(
        //     Component.EVENTS.FLOW_CDM,
        //     this._componentDidMount.bind(this) as Func
        // );
        this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this) as FV);
        this.eventBus.on(
            Component.EVENTS.FLOW_CDU,
            this._componentDidUpdate.bind(this) as FPV
        );
    }
    init() {
        this._element = this._findDocumentElement(this.enterPoint);
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
    _findDocumentElement(id: string) {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            return element;
        }
        const newElement: HTMLElement = document.createElement("div");
        return newElement;
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
    _componentDidUpdate(
        oldProps: Record<string, string>,
        newProps: Record<string, string>
    ) {
        const isReRender = this.componentDidUpdate(oldProps, newProps);
        console.log(isReRender);
        if (isReRender) {
            this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
        }
    }
    componentDidUpdate(
        oldProps: Record<string, string>,
        newProps: Record<string, string>
    ) {
        if (JSON.stringify(oldProps) === JSON.stringify(newProps)) {
            return true;
        } else {
            return false;
        }
    }
    setProps = (nextProps: Record<string, string>) => {
        console.log(this.props);
        if (!nextProps) {
            return;
        }
        const props = nextProps;
        if (Object.values(props).length) {
            Object.assign(this.props, props);
        }
        this._clear();
    };
    // addProps = (nextProps: Record<string, string>) => {
    //     console.log(this.props);
    //     if (!nextProps) {
    //         return;
    //     }
    //     const props = nextProps;
    //     if (Object.values(props).length) {
    //         Object.assign(this.props, props);
    //     }
    //     this._clear();
    // };
    get element() {
        return this._element;
    }
    _clear() {
        this._element.innerHTML = "";
    }
    _render() {
        this._element.innerHTML += this.render();
        setTimeout(() => this.addEvents(), 1);
    }
    render() {
        return `${this.props.component}`;
    }
    addEvents() {
        const events: FV[] = this.events;
        if (events.length) {
            events.forEach((event: () => void) => {
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
        return this.props.component;
    }
    _makePropsProxy(props: Record<string, string>) {
        return new Proxy(props, {
            get(target: Record<string, string>, prop: string) {
                const value: string = target[prop];
                return value;
            },
            set: (target: Record<string, string>, prop: string, value: string) => {
                const oldValue: Record<string, string> = {
                    ...target,
                };
                console.log(oldValue);
                target[prop] = value;
                this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, target);
                return true;
            },
            // get(target: RenderPage, prop: string) {
            //     const value: string | utilFunc[] = target[prop];
            //     console.log("target:", target, "prop", prop, "value", value);
            //     if (typeof value === "function") {
            //         return value.bind(target) as Func;
            //     } else {
            //         return value;
            //     }
            // },
            // set: (target: RenderPage, prop: string, value: RenderPage) => {
            //     console.log(target, prop, value);
            //     const oldValue: RenderPage = {
            //         ...target,
            //     };
            //     target[prop] = value;
            //     this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, target);
            //     return true;
            // },
            deleteProperty() {
                throw new Error("Нет доступа");
            },
        });
    }
    // show() {
    //     this.getContent().style.display = "Component";
    // }
    // hide() {
    //     this.getContent().style.display = "none";
    // }
}
