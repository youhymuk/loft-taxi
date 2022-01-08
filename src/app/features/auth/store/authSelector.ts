import { createSelector } from 'reselect';
import { AuthStateType } from 'app/features/auth/types';
import { StoreType } from 'app/store/storeTypes';

const authSelector = (state: StoreType): AuthStateType => state.auth;

export const selectIsAuthorized = createSelector(authSelector, (auth: AuthStateType) => auth.isAuthorized);

export const selectIsLoading = createSelector(authSelector, (auth: AuthStateType) => auth.isLoading);

export const selectAuthToken = createSelector(authSelector, (auth: AuthStateType) => auth.token);
