// Action Types
export enum TodoTypes{
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILURE = "FETCH_FAILURE",

    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    FILTER_TODOS = "FILTER_TODOS"
    
}
export type ActionTypes = TodoTypes.FETCH_REQUEST | TodoTypes.FETCH_SUCCESS | TodoTypes.FETCH_FAILURE | TodoTypes.FILTER_TODOS; 
// Data Type
export interface Todos{
    id: number
    title: string
    completed: boolean
}
// State Type
export interface TodosState{
    todos: Todos[]
    loading: boolean
    error: boolean
    filtered: string 
    search: string
}

