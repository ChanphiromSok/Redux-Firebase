import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {fetchFirebase } from './components/store/actions/TodoAction';
import FilterTodos from './FilterTodos';
import {loadingSelector,filterTodosSelector } from './components/store/ShareData';
import FormTodo from './components/form/FormTodo';
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFirebase());
    
 },[dispatch])
  const datas = useSelector(filterTodosSelector)
  const loading = useSelector(loadingSelector);
  return (
    <div className="App">
      <FormTodo />
      <FilterTodos />
      {loading ? (<h1>No Data</h1>) :
      datas.map(todo => (<h1 key={todo.id}>{todo.title}</h1>))}
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

// 11  import { TypedUseTodos } from './components/store/ShareData';
// 11  const rs = TypedUseTodos(getTodosSelector); check it in ShareData.tsx
// 11  const todos = TypedUseTodos(state => state.todosReducer.todos)