import { useReducer, Reducer, Dispatch, useCallback, useEffect, useRef } from 'react'

import { IAction } from '../interfaces/interfaces';

export type AsyncAction<A> = (dispatch: Dispatch<A>) => void;
export type ThunkDispatch<A> = (action: A | AsyncAction<A>) => Promise<void>;

export default (reducer: Reducer<any, IAction>, initialState: any, reducerName?: string):
  [
    any,
    ThunkDispatch<IAction>
  ] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const prevState = useRef(state);

  useEffect(() => {
    const { action, state: previousState }: any = prevState.current;

    if (action && reducerName) {
      console.group(`${action.type}`)
      console.log(`%c Previous "${reducerName}" State`, "font-weight: 700; color: #9E9E9E", previousState);
      console.log("%c Action", "font-weight: 700; color: #6592fc", action)
      console.log(`%c Next "${reducerName}" State`, "font-weight: 700; color: #47B04B", state);
      console.groupEnd();
    }

    prevState.current = { ...prevState.current, state }
  }, [state])

  const thunkDispatch = useCallback<any>(
    (action: any) => {
      if (typeof action === 'function') {
        return action(thunkDispatch);
      } else {
        prevState.current = { ...prevState.current, action }
        return dispatch(action);
      }
    }, []);

  return [state, thunkDispatch];
};