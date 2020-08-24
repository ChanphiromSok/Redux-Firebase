import { Reducer } from 'redux';
import {IAuthState ,AuthTypes} from '../AuthType';



const initialState : IAuthState = {
    authError: null!,
    isEmty: false,
    isLoad: true,
    isAuth: null!,
    token: null!
}
const authReducer:Reducer<IAuthState> = (state=initialState, action) => {
    switch (action.type) {
        
        case AuthTypes.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case AuthTypes.AUTH_REGISTER_SUCCESS:  
            return {
                ...state,
            }
        case AuthTypes.AUTH_LOGIN_ERROR:
            return {
                ...state,
                authError :"Log ing error"
            }
        case AuthTypes.AUTH_LOG_OUT_SUCCESS:
            return {
                ...state,
                authError: "Log in success",
                isAuth: false
            }
        case AuthTypes.AUTH_LOG_OUT_FAIL:
            return {
                ...state,
                authError :"Log OUT failt"
            }
        default:
            return state;
    }
}

export default authReducer;