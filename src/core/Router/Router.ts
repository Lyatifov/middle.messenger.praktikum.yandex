import state from "../State/State";
import { check } from "../Validator/Validator";

class Route {
    private _pathname: any;
    view: any;
    private _props: any;
    constructor(pathname: string, view: any, props: { rootQuery: any }) {
        this._pathname = pathname;
        this.view = view;
        this._props = props;
    }
    isEqual(lhs: string, rhs: string) {
        return lhs === rhs;
    }
    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            return true;
        }
        return false;
    }
    match(pathname: string) {
        return this.isEqual(pathname, this._pathname);
    }
    render() {
        this.view.renderContent();
    }
}
const privateURLs = [
    "/profile",
    "/profile/settings/data",
    "/profile/settings/password",
    "/messenger",
];
function checkURL(pathname: string) {
    const isPrivateURL = !!privateURLs.find((url) => url === pathname);
    return isPrivateURL;
}
export class Router {
    routes: Route[];
    history: History;
    private _currentRoute: any;
    private _rootQuery: any;
    defaultView: any;
    static __instance: Router;
    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        this.defaultView = null;
        Router.__instance = this;
    }
    use(pathname: string, view: any) {
        const route = new Route(pathname, view, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = ((event: {
            currentTarget: { location: { pathname: any } };
        }) => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            this.error();
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this.error();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        const isPrivateURL = checkURL(pathname);
        if ((isPrivateURL && state.isAuth) || !isPrivateURL) {
            this._onRoute(pathname);
        } else {
            state.init();
        }
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
    error() {
        this.defaultView.renderContent();
    }
    default(defaultView: any) {
        this.defaultView = defaultView;
    }
}
