import { CardActionsType, CardStateType } from 'app/features/payment/types';
import {
    UPLOADING_CARD_DATA_ERROR,
    START_FETCHING_CARD_DATA,
    UPLOADING_CARD_DATA_SUCCESS,
    SET_CARD_DATA,
} from 'app/features/payment/constants';

const initialState: CardStateType = {
    isLoading: false,
    isUpdatedData: false,
    error: '',
    cardData: {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    },
};

const cardReducer = (state: CardStateType = initialState, { type, payload = {} }: CardActionsType) => {
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
                isUpdatedData: true,
            };
        case SET_CARD_DATA:
            return {
                ...state,
                isLoading: false,
                cardData: { ...state.cardData, ...(payload as any) },
                isUpdatedData: false,
            };
        case UPLOADING_CARD_DATA_ERROR:
            return {
                ...state,
                error: payload?.error || '',
            };
        default:
            return state;
    }
};

export default cardReducer;
