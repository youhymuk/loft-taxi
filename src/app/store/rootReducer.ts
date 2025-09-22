import { combineReducers } from 'redux';

import auth from 'app/features/auth/store/authSlice';
import map from 'app/features/map/store/mapSlice';
import card from 'app/features/payment/store/cardSlice';

export const rootReducer = combineReducers({ auth, card, map });
