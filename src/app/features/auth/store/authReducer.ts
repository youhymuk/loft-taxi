import { AuthActionsType, AuthStateType } from 'app/features/auth/types';
import { LOG_IN, LOG_OUT, SET_AUTH_TOKEN, TOGGLE_IS_LOADING } from 'app/features/auth/constants';

const initialState: AuthStateType = { isAuthorized: false, isLoading: false, token: '' };

const authReducer = (state: AuthStateType = initialState, { type, payload = {} }: AuthActionsType) => {
    switch (type) {
        case LOG_IN:
            return {
                ...state,
                isAuthorized: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false,
            };
        case SET_AUTH_TOKEN:
            return {
                ...state,
                token: payload.token,
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading,
            };
        default:
            return state;
    }
};

export default authReducer;
