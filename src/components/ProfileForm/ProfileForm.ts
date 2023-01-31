import template from "./ProfileForm.hbs";

export default (data: Record<string, string>): string => {
    const res = template({
        ...data,
    });
    return res;
};
