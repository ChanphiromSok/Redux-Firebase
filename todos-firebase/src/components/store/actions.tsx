import { action,createAction } from 'typesafe-actions';
import { TodoTypes, Todos } from './types';
import { useDispatch } from 'react-redux';
import Axios from 'axios';



export const fetchRequest = () => action(TodoTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Todos[]) => action(TodoTypes.FETCH_SUCCESS,data);

export const fetchFailure = () => action(TodoTypes.FETCH_FAILURE);

