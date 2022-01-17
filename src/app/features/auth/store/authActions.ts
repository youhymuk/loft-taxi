import { LOG_IN_REQUEST, LOG_OUT, AUTHORIZE, LOG_IN_SUCCESS } from 'app/features/auth/constants';
import { AuthActionsType } from 'app/features/auth/types';

export const logInRequest = (): AuthActionsType => ({
    type: LOG_IN_REQUEST,
});

export const logOut = (): AuthActionsType => ({
    type: LOG_OUT,
});

export const authorize = (email: string, password: string): AuthActionsType => ({
    type: AUTHORIZE,
    payload: { email, password },
});

export const setLoginSuccess = (token: string): AuthActionsType => ({
    type: LOG_IN_SUCCESS,
    payload: { token },
});
