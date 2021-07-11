import { lazy } from 'react';

const MainPage = lazy(() =>
  import(
    /* webpackChunkName: "MainPageChunk"*/ '../pages/MainPage/MainPage'
  )
);

const Loadable = {
  MainPage,
}

export default Loadable;
