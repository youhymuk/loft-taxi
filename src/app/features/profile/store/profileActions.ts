import { SET_USER_DATA, UPLOAD_USER_DATA } from 'app/features/profile/constants';
import { ProfileActionsType, ProfileStateType } from 'app/features/profile/types';

export const setUserData = (data: ProfileStateType): ProfileActionsType => ({
    type: SET_USER_DATA,
    payload: { ...data },
});

export const uploadUserData = (data: ProfileStateType): ProfileActionsType => ({
    type: UPLOAD_USER_DATA,
    payload: { ...data },
});
