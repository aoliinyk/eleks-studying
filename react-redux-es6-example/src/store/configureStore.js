import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function (initialState) {
  return createStore(
    rootReducer,
    initialState
    // applyMiddleware(reduxImmutableStateInvariant) // reduxImmutableStateInvariant should be used only for dev
  );
}
