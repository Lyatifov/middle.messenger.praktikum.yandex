import { router } from "../../index";

describe("Check router", () => {
    test("Go to the page profile", () => {
        router.go("/profile");
        expect(window.location.pathname).toEqual("/profile");
    });
    test("Go to the page messenger", () => {
        router.go("/messenger");
        expect(window.location.pathname).toEqual("/messenger");
    });
});
