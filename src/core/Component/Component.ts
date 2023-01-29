import { PageComponent } from "../../interfaces/interfaces";
import EventBus from "../EventBus/EventBus";
import Render from "../Render/Render";
type FV = () => void;
// type FPV = (oldProps?: Record<string, string>, newProps?: Record<string, string>) => void;
// type cb = (
//     data: Record<string, string>[] | string | Record<string, Record<string, string>[]>,
//     options?: Record<string, boolean | string>
// ) => string;
export default class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };
    _element: HTMLElement;
    props: PageComponent;
    eventBus: EventBus;
    childComponent: Component[] = [];
    constructor(components: PageComponent) {
        this.eventBus = new EventBus();
        this.props = components;
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
        // this.eventBus.on(
        //     Component.EVENTS.FLOW_CDU,
        //     this._componentDidUpdate.bind(this) as FPV
        // );
    }
    init() {
        this._element = this._findDocumentElement(this.props.enter);
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
    _findDocumentElement(id: string) {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            return element;
        }
        throw new Error(`element: ${id} not found!`);
    }
    check(newContent: PageComponent) {
        if (JSON.stringify(newContent) === JSON.stringify(this.props)) {
            return true;
        }
        if (
            this.render(newContent.callback, newContent.data, newContent.options) ===
            this.render(this.props.callback, this.props.data, this.props.options)
        ) {
            return true;
        }
        return false;
    }
    checkOptions(options: Record<string, boolean | string>) {
        if (
            this.render(this.props.callback, this.props.data, options) ===
            this.render(this.props.callback, this.props.data, this.props.options)
        ) {
            return true;
        }
        return false;
    }
    setProps(newProps: PageComponent) {
        const isSame: boolean = this.check(newProps);
        if (isSame) {
            this.forwardChildren(newProps);
        } else {
            this.props = {
                ...newProps,
            };
            this._render();
        }
    }
    propsUpdate(options: Record<string, boolean | string>) {
        if (JSON.stringify(options) !== JSON.stringify(this.props.options)) {
            this.props.options = options;
            const isSame = this.checkOptions(options);
            if (!isSame) {
                this._render();
            }
        }
        this.childUpdate(options);
    }
    get element() {
        return this._element;
    }
    _render() {
        this._element.innerHTML = this.render(
            this.props.callback,
            this.props.data,
            this.props.options
        );
        this.addEvents();
        this.renderChildern();
    }
    render(
        callback: {
            (
                data:
                    | string
                    | Record<string, string>[]
                    | Record<string, Record<string, string>[]>,
                options?: Record<string, string | boolean> | undefined
            ): string;
        },
        data:
            | string
            | Record<string, string>[]
            | Record<string, Record<string, string>[]>,
        options?: Record<string, string | boolean> | undefined
    ): string {
        if (options) {
            return callback(data, options);
        }
        return callback(data);
    }
    childUpdate(props: Record<string, boolean | string>) {
        if (this.childComponent.length) {
            this.childComponent.forEach((component) => {
                component.propsUpdate(props);
            });
        }
    }
    forwardChildren(newProps: PageComponent) {
        const { children } = newProps;
        if (children.forEach.length)
            children.forEach((child) => {
                this.childComponent.forEach((component) => {
                    if (child.enter === component.props.enter) {
                        component.setProps(child);
                    }
                });
                this.childComponent.push(...Render([child]));
            });
    }
    addEvents() {
        const events: FV[] = this.props.events;
        if (events.length) {
            events.forEach((event: () => void) => {
                event();
            });
        }
    }
    renderChildern() {
        if (this.props.children.length) {
            this.childComponent = Render(this.props.children);
        }
    }
    // getContent() {
    //     return this.props.component;
    // }
    // _makePropsProxy(props: PageComponent) {
    //     return new Proxy(props, {
    //         get(target: PageComponent, prop: string) {
    //             const value: PageComponent = target[prop];
    //             return value;
    //         },
    //         set: () => {
    //             return true;
    //         },
    //         deleteProperty() {
    //             throw new Error("Нет доступа");
    //         },
    //     });
    // }
    // show() {
    //     this.getContent().style.display = "Component";
    // }
    // hide() {
    //     this.getContent().style.display = "none";
    // }
}
