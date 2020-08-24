export enum AuthTypes{
    AUTH_LOG_OUT_FAIL ="AUTH_LOG_OUT_FAIL",
    AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS",
    AUTH_LOGIN_ERROR ="AUTH_LOGIN_ERROR",
    AUTH_LOG_OUT_SUCCESS = "AUTH_LOG_OUT_SUCCESS",
    AUTH_LOG_OUT_ERROR = "AUTH_LOG_OUT_ERROR",
    
    AUTH_REGISTER_SUCCESS = "AUTH_LOGIN_SUCCESS",
    AUTH_REGISTER_FAIL = "AUTH_REGISTER_FAIL"
}
export type ActionAuthType = AuthTypes.AUTH_LOG_OUT_FAIL | AuthTypes.AUTH_LOGIN_SUCCESS | AuthTypes.AUTH_LOG_OUT_SUCCESS|AuthTypes.AUTH_LOG_OUT_ERROR | AuthTypes.AUTH_REGISTER_SUCCESS | AuthTypes.AUTH_REGISTER_FAIL;

export interface IUser {
    username: string
    password : string
}

export interface IAuthState {
    authError: string
    isEmty: boolean
    isLoad: boolean
    isAuth: boolean
    token: any
}