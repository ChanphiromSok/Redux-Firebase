import { Reducer } from 'redux';
// import { StateType } from 'typesafe-actions';

import { TodosState ,TodoTypes} from '../types';
const initialState: TodosState = {
    todos: [
        { id: 1, title: '123', completed: false }
    ],
    loading: false,
    error: false,
    // filtered:false
}

const todosReducers: Reducer<TodosState> = (state = initialState, action) => {
    switch (action.type) {
        case TodoTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TodoTypes.FETCH_SUCCESS:
            return {
                ...state,
                // loading: false,
                error: false,
                todos: action.payload.data
            }
        case TodoTypes.FETCH_FAILURE:
            return {
                ...state, loading: false,
                error: true
            }
        default:
            return state;
    }
}
export default todosReducers;
