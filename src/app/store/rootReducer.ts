import auth from 'app/features/auth/store/authReducer';
import profile from 'app/features/profile/store/profileReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ auth, profile });
