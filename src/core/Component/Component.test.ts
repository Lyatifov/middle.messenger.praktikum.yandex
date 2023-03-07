import { PageComponent } from "../../interfaces/interfaces";
import Component from "./Component";

const testCallback = (str: any): string => {
    return str;
};

const testData1: PageComponent = {
    enter: "root",
    callback: testCallback,
    data: "<h1>Say hello to the world</h1>",
    events: [],
    children: [],
};
const testData2: PageComponent = {
    enter: "root",
    callback: testCallback,
    data: "<h1>And he will greet you in return</h1>",
    events: [],
    children: [],
};

describe("Check Component", () => {
    const Page: Component = new Component(testData1);
    test("Check testData1", () => {
        const div = document.getElementById("root") as HTMLElement;
        expect(div.innerHTML).toEqual("<h1>Say hello to the world</h1>");
    });
    test("Check testData1", () => {
        Page.setProps(testData2);
        const div = document.getElementById("root") as HTMLElement;
        expect(div.innerHTML).toEqual("<h1>And he will greet you in return</h1>");
    });
});
