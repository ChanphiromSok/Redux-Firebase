import { ApplicationState } from './store'
import { TypedUseSelectorHook,useSelector } from 'react-redux';
export const TypedUseTodos: TypedUseSelectorHook<ApplicationState> = useSelector;
export const TypeUseSongs: TypedUseSelectorHook<ApplicationState> = useSelector;