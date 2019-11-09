import { Dispatch } from 'redux';

import { IExampleState, IAction } from './ducks.types';

export const SOME_ACTION = 'SOME_ACTION';

export const someAction = (newField: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SOME_ACTION,
    payload: newField
  });
};

const initialState: IExampleState = {
  field: ''
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SOME_ACTION: {
      return {
        field: action.payload
      };
    }
    default:
      return state;
  }
};
