import fetch from "./Fetch";

describe("check custom fetch", () => {
    test("get request", async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        expect(JSON.parse(data).id).toBe(1);
    });
    test("post request", async () => {
        const body = { title: "123", body: "123" };
        const params = { method: "POST", data: JSON.stringify(body) };
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", params);
        expect(JSON.parse(data).id).toBe(101);
    });
});
