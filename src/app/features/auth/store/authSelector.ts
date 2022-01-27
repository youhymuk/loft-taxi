import { createSelector } from 'reselect';
import { AuthStateType } from 'app/features/auth/types';
import { StoreType } from 'app/store/storeTypes';

const signUpSelector = (state: StoreType): AuthStateType => state.auth;

export const selectIsLoading = createSelector(signUpSelector, (auth: AuthStateType) => auth.isLoading);

export const selectAuthToken = createSelector(signUpSelector, (auth: AuthStateType) => auth.token);

export const selectAuthError = createSelector(signUpSelector, (auth: AuthStateType) => auth.error);
