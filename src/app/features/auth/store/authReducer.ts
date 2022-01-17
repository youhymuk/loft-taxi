import { AuthActionsType, AuthStateType } from 'app/features/auth/types';
import { LOG_IN_REQUEST, LOG_OUT, LOG_IN_SUCCESS } from 'app/features/auth/constants';

const initialState: AuthStateType = { isAuthorized: false, isLoading: false, token: '' };

const authReducer = (state: AuthStateType = initialState, { type, payload = {} }: AuthActionsType) => {
    switch (type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false,
                token: '',
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isAuthorized: true,
                isLoading: false,
                token: payload.token,
            };
        default:
            return state;
    }
};

export default authReducer;
