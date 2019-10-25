import { lazy } from 'react';


const SomeContainer = lazy(() => import(/* webpackChunkName: "SomeContainerChunk"*/ '../../../containers/SomeContainer/SomeContainer'));

export default {
  SomeContainer,

}