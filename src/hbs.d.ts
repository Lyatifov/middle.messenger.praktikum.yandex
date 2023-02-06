declare module "*.hbs" {
    function Template(object: string | Record<string, boolean | string>): string;
    export default Template;
}
