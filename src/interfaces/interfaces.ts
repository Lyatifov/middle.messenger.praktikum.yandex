export interface DataFromModal {
    button: Record<string, string>;
    title: string;
    loadImg: boolean;
    inputs: Record<string, string>[];
}

export interface DataForMiniModalWindow {
    className: string;
    id: string;
    buttons: Record<string, string>[];
}
export interface PageComponent {
    enter: string;
    callback: (
        data:
            | DataForMiniModalWindow
            | DataFromModal
            | Record<string, string>
            | Record<string, string>[]
            | string
            | Record<string, Record<string, string>[]>
            | Record<string, string | Record<string, string>[]>,
        options?: Record<string, boolean | string>
    ) => string;
    data:
        | DataForMiniModalWindow
        | DataFromModal
        | Record<string, string>
        | Record<string, string>[]
        | Record<string, string | Record<string, string>[]>
        | string
        | Record<string, Record<string, string>[]>;
    events: (() => void)[];
    options?: Record<string, boolean | string>;
    children: PageComponent[];
}
export interface Data {
    [key: string]: Record<string, string>[] | string;
}
