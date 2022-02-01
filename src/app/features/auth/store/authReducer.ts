import { AuthActionsType, AuthStateType } from 'app/features/auth/types';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, SIGN_OUT, CLEAR_AUTH_ERROR } from 'app/features/auth/constants';

const initialState: AuthStateType = { isLoading: false, token: '', error: '' };

const authReducer = (state: AuthStateType = initialState, { type, payload = {} }: AuthActionsType) => {
    switch (type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                token: '',
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                token: payload.token,
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: payload.error,
                isLoading: false,
            };
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: '',
            };
        default:
            return state;
    }
};

export default authReducer;
