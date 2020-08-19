import Home from '../pages/Home';
import App from '../../App';
import { RouteProps } from 'react-router-dom';


interface IRouter extends RouteProps { };
const componentRoutes: IRouter[] = [
    {
        path: '/home',
        component: Home,
        exact: true,
    },{
        path: '/app',
        component: App,
        exact: true
    },
]

export default componentRoutes;