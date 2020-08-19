import React from 'react';
import componentRoutes from './componentRoutes';
import {ProtectedRoute} from './PrivateRouter'


const Routes = ():JSX.Element => {
    return (
        <>
            {Object.keys(componentRoutes).map((keys: any) => {
                const restRoutes = componentRoutes[keys];
                return <ProtectedRoute exact={true}  {...restRoutes} key={keys} />})
            }
        </>
    )
}

export default Routes;