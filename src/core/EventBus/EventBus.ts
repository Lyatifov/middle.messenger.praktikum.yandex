type Func = (
    oldProps?: Record<string, string>,
    newProps?: Record<string, string>
) => void;

export default class EventBus {
    listeners: Record<string, Func[]>;
    constructor() {
        this.listeners = {};
    }
    public on(event: string, callback: Func): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
    public off(event: string, callback: () => void): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback
        );
    }
    public emit(event: string, ...args: Record<string, string>[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(function (listener) {
            listener.apply(null, ...args);
        });
    }
}
