import template from "./Сonversations.hbs";

export default (data: Record<string, string>[]): string => {
    let res = "";
    data.forEach(
        (item) =>
            (res += template({
                ...item,
            }))
    );
    return res;
};
