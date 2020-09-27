import { lazy } from 'react';

const MainPage = lazy(() =>
  import(
    /* webpackChunkName: "MainPageChunk"*/ '../pages/MainPage/MainPage'
  )
);

export default {
  MainPage,
};
