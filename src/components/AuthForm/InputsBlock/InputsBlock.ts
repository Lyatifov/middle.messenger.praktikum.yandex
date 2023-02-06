import template from "./InputsBlock.hbs";
import Input from "../../UI/Input/Input";

export default (data: Record<string, string>[] | string): string => {
    let res = "";
    if (Array.isArray(data)) {
        data.map(
            (item: Record<string, string>) =>
                (res += template({
                    input: Input(item),
                    ...item,
                }))
        );
    }
    return res;
};
