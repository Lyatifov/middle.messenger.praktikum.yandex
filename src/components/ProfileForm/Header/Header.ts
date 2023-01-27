import template from "./Header.hbs";

export default (data: Record<string, string>[]): string => {
    console.log(data);

    const res = template({
        ...data[0],
    });
    return res;
};
