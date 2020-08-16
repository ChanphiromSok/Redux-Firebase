import { Reducer } from 'redux';
// import { StateType } from 'typesafe-actions';
// import {ActionTypes} from '../types'

import { TodosState ,TodoTypes} from '../types';
const initialState: TodosState = {
    todos: [
        { id: 1, title: 'wash the dish', completed: false }],
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
        case TodoTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case TodoTypes.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
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
