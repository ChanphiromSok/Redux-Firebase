import React,{useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { isLogged } from '../store/AuthSelector';
import componentRoutes from './componentRoutes';
import ProtectedRoute from './PrivateRouter'


const Routes = () => {
    // const [isLogin, setIsLogin] = React.useState<boolean>(false)
    // useEffect(() => {
    //     if (window.localStorage.getItem("Auth")) {
    //         setIsLogin(true)
    //     } else {
    //         setIsLogin(false)
    //     }
    // },[])
    return (
        <>
            
            {Object.keys(componentRoutes).map((keys: any) => {
                const restRoutes = componentRoutes[keys];
                return <ProtectedRoute exact={true}  {...restRoutes} key={keys} />})}
        </>
    )
}

export default Routes;