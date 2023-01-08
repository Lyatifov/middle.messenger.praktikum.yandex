import template from "./Message.hbs";

export default ({ name, text, time }) => {
    let className = "interlocutor-message";
    if (name === "Me") {
        className = "my-message";
    }
    const res = template({
        class: className,
        text: text,
        time: time,
    });
    return res;
};
