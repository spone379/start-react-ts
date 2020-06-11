import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>,
  isAuthenticated: boolean,
  redirectLink: string
}

const PrivateRoute = ({ component: Component, ...props }: IPrivateRouteProps) => {
  if (!Component) return null;

  return <Route
    {...props}
    render={routeProps => (
      props.isAuthenticated
        ? <Component {...routeProps} />
        : <Redirect to={props.redirectLink} />
    )}
  />
}

export default PrivateRoute;