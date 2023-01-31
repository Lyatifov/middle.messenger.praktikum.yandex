import template from "./ChatPage.hbs";

export default (formId: string): string => {
    const res: string = template({ formId });
    return res;
};
