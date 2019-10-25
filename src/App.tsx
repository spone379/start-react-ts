import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import Loadable from "./pages/MainPage/components/Loadable";


export const ROUTES = {
  main: "/",
  login: '/login',
  notFound: '/not-found',
  some: '/some',
}

const PrivateRoutes = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={ROUTES.main} component={MainPage} />
      <Route exact path={ROUTES.some} component={Loadable.SomeContainer} />
    </Suspense>
  </>
);


const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.login} component={LoginPage} />

      <PrivateRoute
        path={ROUTES.main}
        component={PrivateRoutes}
        isAuthenticated={true}
        redirectLink={ROUTES.login}
      />

      <Route path={ROUTES.notFound} component={NotFound} />
      <Redirect to={ROUTES.notFound} />
    </Switch>
  );
}

export default App;
