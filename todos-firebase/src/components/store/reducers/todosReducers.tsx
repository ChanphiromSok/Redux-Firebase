import { Reducer } from 'redux';
// import { StateType } from 'typesafe-actions';
// import {ActionTypes} from '../types'

import { TodosState ,TodoTypes} from '../types';
const initialState: TodosState = {
    todos: [],
    loading: false,
    error: false,
    filtered: '',  
    search: ''
};

const todosReducers: Reducer<TodosState> = (state = initialState, action) => {
    switch (action.type) {
        case TodoTypes.FETCH_REQUEST:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case TodoTypes.FILTER_TODOS:
            return {
                ...state,
                search:action.payload ,
                loading: false,
                error: false
            }
        default:
            return state;
    }
}
export default todosReducers;
