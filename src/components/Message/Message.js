import template from "./Message.hbs";

export default (messageList) => {
    let res = "",
        className = "interlocutor-message";
    messageList.map((item) => {
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
