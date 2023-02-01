import template from "./Messages.hbs";

export default (messageList: Record<string, string>[]): string => {
    let res = "",
        className = "interlocutor-message";
    messageList.map((item: Record<string, string>) => {
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
