import { LOG_IN, LOG_OUT, AUTHORIZE, TOGGLE_IS_LOADING, SET_AUTH_TOKEN } from 'app/features/auth/constants';
import { AuthActionsType } from 'app/features/auth/types';

export const logIn = (): AuthActionsType => ({
    type: LOG_IN,
});

export const logOut = (): AuthActionsType => ({
    type: LOG_OUT,
});

export const authorize = (email: string, password: string): AuthActionsType => ({
    type: AUTHORIZE,
    payload: { email, password },
});

export const setAuthToken = (token: string): AuthActionsType => ({
    type: SET_AUTH_TOKEN,
    payload: { token },
});

export const toggleIsLoading = (isLoading: boolean): AuthActionsType => ({
    type: TOGGLE_IS_LOADING,
    payload: { isLoading },
});
