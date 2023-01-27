import Button from "../../UI/Button/Button";

export default (data: Record<string, string>[] | string): string => {
    let res = "";
    if (Array.isArray(data))
        data.map((item: Record<string, string>) => (res += Button(item)));
    return res;
};
