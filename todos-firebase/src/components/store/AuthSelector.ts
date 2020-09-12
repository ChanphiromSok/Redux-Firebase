import { ApplicationState } from './store';
import firebase from '../../firebase';
export const auth = ((state: ApplicationState) => state.authReducers.isAuth);
export const isLoad = ((state: ApplicationState) => state.authReducers.isLoad);
export const token = ((state: ApplicationState) => state.authReducers.token);
export const isLogged = { user: firebase.auth().currentUser }