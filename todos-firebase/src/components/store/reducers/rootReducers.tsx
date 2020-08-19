import { combineReducers } from 'redux';
import todosReducer from './todosReducers';
import authReducers from './authReducer';
import { StateType } from 'typesafe-actions';
const rootReducer = combineReducers({
    todosReducer,
    authReducers
})

export default rootReducer;

export type RootReducersState = StateType<typeof rootReducer>;