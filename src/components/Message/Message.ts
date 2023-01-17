import template from "./Message.hbs";

interface MessageList {
    id: number;
    date: string;
    time: string;
    name: string;
    text: string;
}
export default (messageList: Array<MessageList>) => {
    let res = "",
        className = "interlocutor-message";
    messageList.map((item: MessageList) => {
        const { name, text, time } = item;
        if (name === "Me") {
            className = "my-message";
        }
        res += template({
            class: className,
            text: text,
            time: time,
        });
    });
    return res;
};
