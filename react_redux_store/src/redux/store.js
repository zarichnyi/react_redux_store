import { combineReducers, createStore } from 'redux';
import itemsReducer from './items';
import usersReducer from './users';

const reducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
});

const store = createStore(reducer);

export default store;
