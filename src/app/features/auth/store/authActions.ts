import {
    AUTH_REQUEST,
    SIGN_UP,
    AUTH_SUCCESS,
    AUTH_ERROR,
    SIGN_OUT,
    SIGN_IN,
    CLEAR_AUTH_ERROR,
} from 'app/features/auth/constants';
import { AuthActionsType } from 'app/features/auth/types';

export const makeAuthRequest = (): AuthActionsType => ({
    type: AUTH_REQUEST,
});

export const signUp = (email: string, password: string, name: string, surname: string): AuthActionsType => ({
    type: SIGN_UP,
    payload: { email, password, name, surname },
});

export const signIn = (email: string, password: string): AuthActionsType => ({
    type: SIGN_IN,
    payload: { email, password },
});

export const signOut = (): AuthActionsType => ({
    type: SIGN_OUT,
});

export const setAuthToken = (token: string): AuthActionsType => ({
    type: AUTH_SUCCESS,
    payload: { token },
});

export const setAuthError = (error: string): AuthActionsType => ({
    type: AUTH_ERROR,
    payload: { error },
});

export const clearAuthError = (): AuthActionsType => ({
    type: CLEAR_AUTH_ERROR,
});
