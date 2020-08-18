import { ApplicationState } from './store'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createSelector } from 'reselect';


export const TypedUseTodos: TypedUseSelectorHook<ApplicationState> = useSelector;
export const TypeUseSongs: TypedUseSelectorHook<ApplicationState> = useSelector;


// export const getTodosSelector = TypedUseTodos(state => state.todosReducer.todos); //entrie state


export const todosSelector = (state:ApplicationState) => state.todosReducer.todos;
export const loadingSelector = (state: ApplicationState) => state.todosReducer.loading;
export const current = (state: ApplicationState) => state.todosReducer.current;

//FILTERING DATAstate from todosReducer.tsx
const getKeyword = (state: ApplicationState) => state.todosReducer.search;
 
export const filterTodosSelector = createSelector([todosSelector, getKeyword],
    (todosSelector, keyword) => todosSelector.filter(filterTodo => filterTodo.title.includes(keyword)));
    
//state with filter data

