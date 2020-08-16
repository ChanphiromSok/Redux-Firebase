import { Dispatch } from 'redux';
// import { fetchRequest } from '../actions';
import axios from 'axios';
import { Todos,TodoTypes } from '../types';

// export const fetchTodos = () => ({
//     type: "FETCH_SUCCESS",
//     payload: {id:1,title:'aasdf',completed:false}
// })
interface jsonTodo{
    type: TodoTypes.FETCH_REQUEST
    payload: Todos[]
}
export const fetchTodos = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    return async (dispatch:Dispatch) => {
        const res = await axios.get<Todos[]>(url);
        try {
            dispatch<jsonTodo>({
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
}

export const filterTodosAction = (text: string) => ({
    type: TodoTypes.FILTER_TODOS,
    payload : text
})