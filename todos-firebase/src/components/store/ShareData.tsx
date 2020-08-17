import { ApplicationState } from './store'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
// import { TodosState } from './types';

export const TypedUseTodos: TypedUseSelectorHook<ApplicationState> = useSelector;
export const TypeUseSongs: TypedUseSelectorHook<ApplicationState> = useSelector;
// export const getTodosSelector = TypedUseTodos(state => state.todosReducer.todos);
export const songsSelector = (state: ApplicationState) => state.songsReducer.todos;
export const todosSelector = (state:ApplicationState) => state.todosReducer.todos;
export const loadingSelector = (state: ApplicationState) => state.todosReducer.loading;

//          FILTERING DATA
//get state from todosReducer.tsx
const getKeyword = (state:ApplicationState) => state.todosReducer.search 
export const filterTodosSelector = createSelector([todosSelector,getKeyword],
(todosSelector,keyword)=> todosSelector.filter(filterTodo=> filterTodo.title.includes(keyword)))
// export const getTodosSelector = createSelector([todosSelector],
// (todosSelector)=> todosSelector.filter(todo=> todo.completed === true ))
// Filter data 

// const getKeyword = (state) => state.keyword

// const getVisibleTodosFilteredByKeyword = createSelector(
//   [ getVisibleTodos, getKeyword ],
//   (visibleTodos, keyword) => visibleTodos.filter(
//     todo => todo.text.includes(keyword)
//   )
// )

