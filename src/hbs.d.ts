declare module "*.hbs" {
    function Template(object: Record<string, boolean | string>): string;
    export default Template;
}
