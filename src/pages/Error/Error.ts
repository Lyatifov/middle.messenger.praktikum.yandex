import template from "./Error.hbs";
import { PageComponent } from "../../interfaces/interfaces";
import { OnButton } from "../../core/Events/OnButton";

export function BuildErrorPage(errorData: Record<string, string>[]): string {
    const res = template({
        ...errorData[0],
    });
    return res;
}
export default (): PageComponent => {
    function ClickMe() {
        const controller: Record<string, string>[] = [
            {
                buttonId: "backToChats",
                redirectTo: "/chats",
            },
        ];
        OnButton(controller);
    }
    const error404: Record<string, string>[] = [
        {
            title: "404",
            text: "Не туда попали",
        },
    ];
    const domComponents: PageComponent = {
        enter: "root",
        callback: BuildErrorPage,
        data: error404,
        events: [ClickMe],
        children: [],
    };

    return domComponents;
};
