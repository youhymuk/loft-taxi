import { ProfileActionsType, ProfileStateType } from 'app/features/profile/types';
import { SET_CARD_DATA, UPLOAD_CARD_DATA_REQUEST, UPLOAD_CARD_DATA_SUCCESS } from 'app/features/profile/constants';

const initialState: ProfileStateType = {
    isLoading: false,
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
};

const profileReducer = (state: ProfileStateType = initialState, { type, payload }: ProfileActionsType) => {
    debugger;
    switch (type) {
        case SET_CARD_DATA:
            return {
                ...payload,
            };
        case UPLOAD_CARD_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UPLOAD_CARD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default profileReducer;
