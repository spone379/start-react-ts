import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';


interface IPrivateRouteProps extends RouteProps {
  component: any,
  isAuthenticated: boolean,
  redirectLink: string
}


const PrivateRoute = ({ component: Component, ...props }: IPrivateRouteProps) => (
  <Route
    {...props}
    render={routeProps => (
      props.isAuthenticated
        ? <Component {...routeProps} />
        : <Redirect to={props.redirectLink} />
    )}
  />
)

export default PrivateRoute;