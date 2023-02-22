import chatState from "../../../../core/States/ChatState";
import TimeAndDate from "../../../../core/TimeAndDate/TimeAndDate";
import template from "./Messages.hbs";

export default (messageList: Record<string, string>[]): string => {
    let res = "",
        className = "interlocutor-message";
    messageList.map((item: Record<string, string>) => {
        const { time } = item;
        const date = TimeAndDate(time);
        const user = chatState.getUserDataInTargetChat(item.user_id);
        if (user.me) {
            className = "my-message";
        }
        res += template({
            user,
            className,
            ...item,
            ...date,
        });
    });
    return res;
};
