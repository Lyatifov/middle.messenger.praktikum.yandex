import chatState from "../../../core/States/ChatState";
import TimeAndDate from "../../../core/TimeAndDate/TimeAndDate";
import Dummy from "../../UI/Dummy/Dummy";
import template from "./ChatList.hbs";

export default (data: Record<string, string>[]): string => {
    const targetId = chatState.getTargetChat();
    let res = "";
    if (data.length) {
        data.forEach((item) => {
            const last_message: any = item.last_message;
            const thisTarget = targetId.id === item.id;
            if (last_message) {
                const date = TimeAndDate(last_message.time);
                res += template({
                    thisTarget,
                    ...item,
                    ...date,
                });
            } else {
                res += template({
                    thisTarget,
                    ...item,
                });
            }
        });
    } else {
        res = Dummy("У Вас нет чатов!");
    }
    return res;
};
