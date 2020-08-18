import { combineReducers } from 'redux';
import todosReducer from './todosReducers';
import { StateType } from 'typesafe-actions';
const rootReducer = combineReducers({
    todosReducer
})

export default rootReducer;

export type RootReducersState = StateType<typeof rootReducer>
