// Action Types
export enum TodoTypes{
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILURE = "FETCH_FAILURE",

    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    FILTER_TODOS = "FILTER_TODOS",
    UPDATE_TODO = "UPDATE_TODO",

    SET_CURRENT = "SET_CURRENT",
    CLEAR_CURRENT = "CLEAR_CURRENT",
}
export type ActionTypes = TodoTypes.FETCH_REQUEST | TodoTypes.FETCH_SUCCESS | TodoTypes.FETCH_FAILURE | TodoTypes.FILTER_TODOS |TodoTypes.ADD_TODO; 
// Data Type
export interface ITodos{
    id: number
    title: string
    completed: boolean
}
// State Type
export interface ITodosState{
    todos: ITodos[]
    current: ITodos | null
    loading: boolean
    error: boolean
    filtered: string 
    search: string
}

