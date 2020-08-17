import { Dispatch } from 'redux';
import firebase from '../../../firebase';
import axios from 'axios';
import { Todos, TodoTypes } from '../types';


export const filterTodosAction = (text: string) => ({
    type: TodoTypes.FILTER_TODOS,
    payload: text
})
interface IFetchTodosJSON {
    type: TodoTypes.FETCH_REQUEST
    payload: Todos[]
}
interface IFetchTodos{
    type: TodoTypes.FETCH_REQUEST,
    payload: firebase.firestore.DocumentData[];
}
interface IAddTodo{
    type: TodoTypes.ADD_TODO
}
export const fetchTodos = () => { // this func is for testing only
    const url = "https://jsonplaceholder.typicode.com/todos";
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Todos[]>(url);
        try {
            dispatch<IFetchTodosJSON>({
                type: TodoTypes.FETCH_REQUEST,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: TodoTypes.FETCH_FAILURE,
                payloadL: error
            })
            console.log(error.message)
        }
    }
} // NOT FIREBASE

const db = firebase.firestore();

export const fetchFirebase = () => {
    return async (dispatch: Dispatch) =>{
        db.collection('todos').onSnapshot(snapShot => {
        const getTodos = snapShot.docs.map((doc) => doc.data())
        dispatch<IFetchTodos>({
            type: TodoTypes.FETCH_REQUEST,
            payload: getTodos
        })
    });
}
}
export const addTodo = (todo: Todos) => {
    return async (dispatch: Dispatch) => {
        db.collection('todos').doc().set(todo)
        dispatch<IAddTodo>({
            type: TodoTypes.ADD_TODO
        })
    }
}

export const deleteTodo = (id: string) => {
    return async (dispatch: Dispatch) => {
        db.collection('todos').doc(id).delete();
    }
}
   

    
