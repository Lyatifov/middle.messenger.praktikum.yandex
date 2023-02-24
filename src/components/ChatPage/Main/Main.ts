import Dummy from "../../UI/Dummy/Dummy";
import template from "./Main.hbs";

export default (data: Record<string, string>): string => {
    const res: string = template({
        ...data,
        dummy: Dummy("Выберите чат чтобы отправить сообщение"),
    });
    return res;
};
