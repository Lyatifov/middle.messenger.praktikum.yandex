export interface PageComponent {
    enter: string;
    callback: (
        data:
            | Record<string, string>[]
            | string
            | Record<string, Record<string, string>[]>,
        options?: Record<string, boolean | string>
    ) => string;
    data: Record<string, string>[] | string | Record<string, Record<string, string>[]>;
    events: (() => void)[];
    options?: Record<string, boolean | string>;
}
export interface Data {
    [key: string]: Record<string, string>[] | string;
}
