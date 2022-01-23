import { combineReducers } from 'redux';

import auth from 'app/features/auth/store/authReducer';
import card from 'app/features/payment/store/cardReducer';
import map from 'app/features/map/store/mapReducer';

export const rootReducer = combineReducers({ auth, card, map });
