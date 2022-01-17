import { createSelector } from 'reselect';
import { ProfileStateType } from 'app/features/profile/types';
import { StoreType } from 'app/store/storeTypes';

const profileSelector = (state: StoreType): ProfileStateType => state.profile;

export const selectIsLoading = createSelector(profileSelector, (auth: ProfileStateType) => auth.isLoading);
