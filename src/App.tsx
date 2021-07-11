import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { ROUTES } from './config/constants';

import NotFound from './pages/NotFound/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Loadable from './components/Loadable';
import GlobalPreloader from './components/GlobalPreloader/GlobalPreloader';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loadable.MainPage />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
};

const App = () => {
  return (
    <Suspense fallback={<GlobalPreloader />} >
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />

        <Route path="/">
          <Navigate to={ROUTES.main} />
        </Route>

        <PrivateRoute
          path={'app/*'}
          component={PrivateRoutes}
          redirectLink={ROUTES.login}
          isAuthenticated={true}
        />

        <Route path={ROUTES.notFound} element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
};

export default App;
