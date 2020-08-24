import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';


interface IRouter extends RouteProps { };
const componentRoutes: IRouter[] = [
    {
        path: '/home',
        component: lazy(()=> import('../pages/Home')),
        exact: true,
    },{
        path: '/',
        component: lazy(()=> import('../../App')),
        exact: true
    },
]

export default componentRoutes;