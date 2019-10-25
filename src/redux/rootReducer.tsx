import { combineReducers } from "redux";

import exampleReducer from './ducks/example';


const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;