export interface PageComponent {
    enter: string;
    callback: (obj: Record<string, string>[] | string) => string;
    data: Record<string, string>[] | string;
    events: (() => void)[];
}
export interface Data {
    [key: string]: Record<string, string>[] | string;
}
