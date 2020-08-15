import React from 'react';
import { TypedUseTodos } from './components/store/ShareData'
import rootReducer, { RootReducersState } from './components/store/reducers/rootReducers';
// import {ApplicationState} from './components/store/store'


const App:React.FC = () => {
 
  const todos=TypedUseTodos(state=>state.todosReducer.todos)
  
  return (
    <div className="App">
      {todos.map(todo => (<h1>{todo.title} {todo.id}</h1>))}
    </div>
  );
}

export default App;

//  *** How to get Data from store can use these style also

 // const getTodos = ((state: ApplicationState) => state.todosReducer.todos)  Take interface from store

  // const getTodos =((state:RootReducersState)=> state.todosReducer.todos) need to use third party typesafe-actions yarn add typesafe-actions
//   *********rootReducers.tsx
//            import { StateType } from 'typesafe-actions';
//            export type RootReducersState = StateType<typeof rootReducer>;

//    ***can map data***
// const todos = useSelector(getTodos)