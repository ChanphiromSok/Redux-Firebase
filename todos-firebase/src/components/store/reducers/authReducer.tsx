import { Reducer } from 'redux';
import {IAuthState ,AuthTypes} from '../AuthType';



const initialState : IAuthState = {
    isAuthentication: null!,
    isLoading: false,
    isEmty: true,
    auth: localStorage.getItem('Auth'),
    user: null,
    error: null,
}
const authReducer:Reducer<IAuthState> = (state=initialState, action) => {
    switch (action.type) {
        case AuthTypes.AUTH_LOGIN_SUCCESS:
        case AuthTypes.AUTH_REGISTER_SUCCESS:  
            
            return {
                ...state,
                ...action.payload,
                isAuthentication: true,
                loading: false,
                user: action.payload
            }
        case AuthTypes.AUTH_LOGIN_ERROR:
        case AuthTypes.AUTH_LOG_OUT_SUCCESS:
        case AuthTypes.AUTH_LOG_OUT_FAIL:
            localStorage.removeItem('Auth')
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                auth:localStorage.removeItem('Auth'),
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;