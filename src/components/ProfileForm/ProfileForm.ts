import template from "./ProfileForm.hbs";

export default (data: string): string => {
    const res = template({
        data,
    });
    return res;
};
