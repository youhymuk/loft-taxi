import {
    SET_CARD_DATA,
    START_UPLOAD_CARD_DATA,
    UPLOAD_CARD_DATA_REQUEST,
    UPLOAD_CARD_DATA_SUCCESS,
} from 'app/features/profile/constants';
import { ProfileActionsType, ProfileStateType } from 'app/features/profile/types';

export const setUserData = (data: ProfileStateType): ProfileActionsType => ({
    type: SET_CARD_DATA,
    payload: { ...data },
});

export const startUploadCardData = (): ProfileActionsType => ({
    type: START_UPLOAD_CARD_DATA,
});

export const uploadCardDataRequest = (data: ProfileStateType): ProfileActionsType => ({
    type: UPLOAD_CARD_DATA_REQUEST,
    payload: { ...data },
});

export const uploadCardDataSuccess = (): ProfileActionsType => ({
    type: UPLOAD_CARD_DATA_SUCCESS,
});
