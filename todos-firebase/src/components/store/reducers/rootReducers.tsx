import { combineReducers } from 'redux';
import todosReducer from './todosReducers';
import { StateType } from 'typesafe-actions';
import songsReducer from './todosReducers';
const rootReducer = combineReducers({
    todosReducer,
    songsReducer
})

export default rootReducer;

export type RootReducersState = StateType<typeof rootReducer>
