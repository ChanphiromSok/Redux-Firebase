import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { useDispatch ,useSelector} from 'react-redux';
import {fetchFirebase } from './components/store/actions/TodoAction';
import FilterTodos from './components/todos/FilterTodos';
import { filterTodosSelector } from './components/store/ShareData';
import FormTodo from './components/form/FormTodo';

// const TodoList = React.lazy<any>(() => import('./components/todo'));   can use
type DynamicImportType = () => Promise<{ default: React.ComponentType<any>; }>; //test
type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>; //test
const TodoList: DynamicImportType = () => import('./components/todos/todo'); //test
const LazyComponent: LazyComponentType = React.lazy(TodoList); //test



const App = ():JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFirebase());
 },[dispatch])
  const datas = useSelector(filterTodosSelector)
      

  return (
    <>
      <FormTodo />
      <FilterTodos />
      <React.Suspense fallback={<Spin></Spin>}> 
      {datas.map((todo) => (<LazyComponent key={todo.id} data={todo} />))}
      </React.Suspense>
    </>
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