import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { TypedUseTodos } from './components/store/ShareData';
import { fetchTodos } from './components/store/actions/TodoAction';
import FilterTodos from './FilterTodos';
import { filterTodosSelector } from './components/store/ShareData';


const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
 },[dispatch])
  const todos = TypedUseTodos(state => state.todosReducer.todos)
  const data = useSelector(filterTodosSelector)

  return (
    <div className="App">
      <FilterTodos />
      {data.map(todo => (<h1 key={todo.id}>{todo.title} {todo.id}</h1>))}
    </div>
  );
}

export default App;

//  *** How to get Data from store can use these style also
// import rootReducer, { RootReducersState } from './components/store/reducers/rootReducers';
// import {ApplicationState} from './components/store/store'

 // const getTodos = ((state: ApplicationState) => state.todosReducer.todos)  Take interface from store

  // const getTodos =((state:RootReducersState)=> state.todosReducer.todos) need to use third party typesafe-actions yarn add typesafe-actions
//   *********rootReducers.tsx
//            import { StateType } from 'typesafe-actions';
//            export type RootReducersState = StateType<typeof rootReducer>;

//    ***can map data***
// const todos = useSelector(getTodos)

  // const rs = TypedUseTodos(getTodosSelector); check it in ShareData.tsx