import { Dispatch } from 'redux';
import firebase from '../../../firebase';
import axios from 'axios';
import { ITodos, TodoTypes } from '../types';


interface IFetchTodosJSON {
    type: TodoTypes.FETCH_REQUEST
    payload: ITodos[]
}
interface IFetchTodos{
    type: TodoTypes.FETCH_REQUEST,
    payload: firebase.firestore.DocumentData[];
}
interface IAddTodo{
    type: TodoTypes.ADD_TODO
}

interface IDeleteTodo{
    type: TodoTypes.DELETE_TODO
}
interface ISetCurrent{
    type: TodoTypes.SET_CURRENT
    payload: ITodos
}
interface IClearCurrent{
    type: TodoTypes.CLEAR_CURRENT
    payload: null
}
interface IUpdateTodo{
    type: TodoTypes.UPDATE_TODO
}
export const fetchTodos = () => { // this func is for testing only
    const url = "https://jsonplaceholder.typicode.com/todos";
    return async (dispatch: Dispatch) => {
        const res = await axios.get<ITodos[]>(url);
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
export const filterTodosAction = (text: string) => ({
    type: TodoTypes.FILTER_TODOS,
    payload: text
});

interface IFetchFailure{
    type: TodoTypes.FETCH_FAILURE
    payload: Array<[]>
}
export const fetchFirebase = () => {
    return async (dispatch: Dispatch) => {
        // check if user loggin let it fetching data from firebae else not
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                db.collection('todos').onSnapshot(snapShot => {
                    const getTodos = snapShot.docs.map((doc) => doc.data());
                    dispatch<IFetchTodos>({
                        type: TodoTypes.FETCH_REQUEST,
                        payload: getTodos
                    })
                });
            } else {
                dispatch<IFetchFailure>({
                    type: TodoTypes.FETCH_FAILURE,
                    payload: []
                })
           }
       })
    }
};

export const addTodo = (todo: ITodos) => {
    return async (dispatch: Dispatch) => {
        db.collection('todos').doc().set(todo)
        
        dispatch<IAddTodo>({
            type: TodoTypes.ADD_TODO
        })
    }
};

export const deleteTodo = (_id: number) => {
    return async (dispatch: Dispatch) => {
        const docId= db.collection('todos').where('id', '==', _id);
        docId.get().then(querySnap => {
            querySnap.forEach(doc => {
                doc.ref.delete();
            })
        })
        dispatch<IDeleteTodo>({
            type: TodoTypes.DELETE_TODO
        })
    }
};

export const setCurrent = (todo: ITodos) => {
    return (dispatch: Dispatch) => {
        dispatch<ISetCurrent>({
            type: TodoTypes.SET_CURRENT,
            payload: todo
        })
    }
}

export const clearCurrent = () => {
    return (dispatch: Dispatch) => {
        dispatch<IClearCurrent>({
            type: TodoTypes.CLEAR_CURRENT,
            payload: null
        })
    }
}
    
export const updateTodo = (todo:ITodos) => {
    return async (dispatch: Dispatch) => {
        const docId = db.collection('todos').where('id', '==', todo.id);
        docId.get().then(querySnap => {
            querySnap.forEach(doc => {
                doc.ref.update({id:todo.id,title:todo.title,completed:todo.completed})
            })
        })
        dispatch<IUpdateTodo>({
            type: TodoTypes.UPDATE_TODO,
        })
    }
}

    
