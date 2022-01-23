import {
    START_FETCHING_CARD_DATA,
    UPLOADING_CARD_DATA_REQUEST,
    UPLOADING_CARD_DATA_SUCCESS,
    UPLOADING_CARD_DATA_ERROR,
    GET_CARD_DATA,
} from 'app/features/payment/constants';
import {
    GetCardDataActionsType,
    SetCardUploadingErrorActionsType,
    SetCardUploadingSuccessActionsType,
    UploadCardDataActionsType,
    UploadCardDataType,
} from 'app/features/payment/types';

export const startFetchingData = () => ({
    type: START_FETCHING_CARD_DATA,
});

export const makeCardDataUploadingRequest = (data: UploadCardDataType): UploadCardDataActionsType => ({
    type: UPLOADING_CARD_DATA_REQUEST,
    payload: { ...data },
});

export const setUploadingSuccess = (): SetCardUploadingSuccessActionsType => ({
    type: UPLOADING_CARD_DATA_SUCCESS,
});

export const setUploadingError = (error: string): SetCardUploadingErrorActionsType => ({
    type: UPLOADING_CARD_DATA_ERROR,
    payload: { error },
});

export const getCardData = (token: string): GetCardDataActionsType => ({
    type: GET_CARD_DATA,
    payload: { token },
});
