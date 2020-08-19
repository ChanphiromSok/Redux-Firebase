import { ApplicationState } from './store';
// import { TypedUseSelectorHook, useSelector } from 'react-redux';
// import { createSelector } from 'reselect';


// export const TypedUseAuth: TypedUseSelectorHook<ApplicationState> = useSelector;

// export const isAuthentication = TypedUseAuth(state => state.authReducers.isAuthentication);
export const auth = ((state: ApplicationState) => state.authReducers.auth);
export const displayName = ((state: ApplicationState) => state.authReducers.user?.username);