import { CardActionsType, CardStateType } from 'app/features/payment/types';
import {
    UPLOADING_CARD_DATA_ERROR,
    START_FETCHING_CARD_DATA,
    UPLOADING_CARD_DATA_SUCCESS,
} from 'app/features/payment/constants';

const initialState: CardStateType = {
    isLoading: false,
    isUploaded: false,
    error: '',
};

const cardReducer = (state: CardStateType = initialState, { type, payload }: CardActionsType) => {
    switch (type) {
        case START_FETCHING_CARD_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case UPLOADING_CARD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUploaded: true,
            };
        case UPLOADING_CARD_DATA_ERROR:
            return {
                ...state,
                error: payload?.error,
            };
        default:
            return state;
    }
};

export default cardReducer;
