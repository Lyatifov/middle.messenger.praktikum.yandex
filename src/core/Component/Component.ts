import {
    DataForMiniModalWindow,
    DataFromModal,
    PageComponent,
} from "../../interfaces/interfaces";
import EventBus from "../EventBus/EventBus";
import Render from "../Render/Render";
type FV = () => void;
export default class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    } as const;
    _element: HTMLElement;
    props: PageComponent;
    eventBus: EventBus;
    childComponent: Component[] = [];
    activeEvents: any[] = [];
    constructor(components: PageComponent) {
        this.eventBus = new EventBus();
        this.props = components;
        this._registerEvents();
        this.eventBus.emit(Component.EVENTS.INIT);
    }
    _registerEvents() {
        this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this) as FV);
        this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this) as FV);
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
        const newElement = document.createElement("div");
        return newElement;
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
            this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
        }
    }
    propsUpdate(options: Record<string, boolean | string>) {
        if (JSON.stringify(options) !== JSON.stringify(this.props.options)) {
            this.props.options = options;
            const isSame = this.checkOptions(options);
            if (!isSame) {
                this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
            }
        }
        this.childUpdate(options);
    }
    get element() {
        return this._element;
    }
    _render() {
        this._removeEvents();
        this._element.innerHTML = this.render(
            this.props.callback,
            this.props.data,
            this.props.options
        );
        this._addEvents();
        this.renderChildern();
    }
    render(
        callback: {
            (
                data:
                    | DataForMiniModalWindow
                    | DataFromModal
                    | Record<string, string>
                    | Record<string, string>[]
                    | Record<string, Record<string, string>[]>
                    | Record<string, string | Record<string, string>[]>
                    | string,
                options?: Record<string, string | boolean> | undefined
            ): string;
        },
        data:
            | DataForMiniModalWindow
            | DataFromModal
            | Record<string, string>
            | Record<string, string>[]
            | Record<string, Record<string, string>[]>
            | Record<string, string | Record<string, string>[]>
            | string,
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
    _addEvents() {
        this.props.events.forEach((event) => {
            const target = this._findDocumentElement(event.targetId);
            target.addEventListener(event.eventName, event.func);
            this.activeEvents.push({
                target,
                eventName: event.eventName,
                func: event.func,
            });
        });
    }
    _removeEvents() {
        this.activeEvents.forEach((event) => {
            event.target.removeEventListener(event.eventName, event.func);
        });
        this.activeEvents = [];
    }
    renderChildern() {
        if (this.props.children.length) {
            this.childComponent = Render(this.props.children);
        }
    }
}
