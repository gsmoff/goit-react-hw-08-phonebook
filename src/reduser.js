import { combineReducers } from 'redux';
import { authReducer } from './store/auth/slice';


export const rootReducer = combineReducers({
    auth: authReducer,
});
