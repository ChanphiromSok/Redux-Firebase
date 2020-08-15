// Action Types
export enum TodoTypes{
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILURE = "FETCH_FAILURE",

    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
    
}
// export type ActionTypes = TodoTypes.FETCH_TODOS | TodoTypes.ADD_TODO | TodoTypes.DELETE_TODO; 
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
    // filtered: Todos[]
}

