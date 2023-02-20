import chatState from "../../../core/States/ChatState";
import Dummy from "../../UI/Dummy/Dummy";
import template from "./ChatList.hbs";

export default (data: Record<string, string>[]): string => {
    const targetId = chatState.getTargetChat();
    let res = "";
    if (data.length) {
        data.forEach((item) => {
            const thisTarget = targetId.id === item.id;
            res += template({
                thisTarget,
                ...item,
            });
        });
    } else {
        res = Dummy("У Вас нет чатов!");
    }
    return res;
};
