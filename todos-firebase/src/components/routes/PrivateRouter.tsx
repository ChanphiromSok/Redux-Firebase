import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { isLogged } from '../store/AuthSelector';

//  get Current user from firebase then verify if loggined let it render component else reidrect

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
    return (
      <>
           <Route
    {...rest}
    render={props => {
      if (isLogged && window.localStorage.getItem('Auth') ) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        );
      }
    }}
  />
    </>
    )
};
  
export default ProtectedRoute;






// return (
//   <Route
//     {...rest}
//     render={props => {
      
//       if (isLogged && window.localStorage.getItem('Auth') ) {
//         return <Component {...props} />;
//       } else {
//         return (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: {
//                 from: props.location
//               }
//             }}
//           />
//         );
//       }
//     }}
//   />
// );