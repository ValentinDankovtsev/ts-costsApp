import IRoute from "../interfaces/route.interface";
import SignUpPage from "../pages/auth/SignUpPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import Settings from "../pages/Settings";
import About from "../UI/About";

export type Re = {
    path: string,
    exact: boolean,
    
    component: any,
    name: string,
    protected: boolean
}

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/cart',
        exact: true,
        component: CartPage,
        name: 'Cart Page',
        protected: true
    },
    {
        path: '/auth/signup',
        exact: true,
        component: SignUpPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/about',
        exact: true,
        component: About,
        name: 'About',
        protected: true
    },
    {
        path: '/settings',
        exact: true,
        component: Settings,
        name: 'Settings',
        protected: true
    },

];
export default routes;