import "./index.scss";
import ChangeRouter from "./core/Router/Router";
import Render from "./core/Render/Render";
import Component from "./core/Component/Component";
import { PageComponent } from "./interfaces/interfaces";

const callback = (data: string): string => data;

const startData: PageComponent = {
    enter: "root",
    callback: callback,
    data: "loading",
    events: [],
    children: [],
};
const Page: Component = Render([startData])[0];
export default Page;
ChangeRouter(window.location.pathname);
