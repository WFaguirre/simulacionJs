import {routes} from "./routes";

export function Router() {
    const path = window.location.pathname;

    const publicRoutes = routes.public.find(route =>route.path === path);

    if(publicRoute){
        publicRoute.page()
    }
}