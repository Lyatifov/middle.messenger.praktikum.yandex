type Funct = <Type1, Type2>(prop1: Type1, prop2: Type2) => boolean | void;
interface Listener {
    [key: string | number]: Array<Funct>;
}
export default class EventBus {
    listeners: Listener;
    constructor() {
        this.listeners = {};
    }
    public on(event: string, callback: Funct): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
    public off(event: string, callback: Funct): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback
        );
    }
    public emit(event: string, ...args: undefined[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(function (listener) {
            listener.apply(null, ...args);
        });
    }
}
