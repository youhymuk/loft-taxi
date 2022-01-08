import { ProfileActionsType, ProfileStateType } from 'app/features/profile/types';
import { SET_USER_DATA } from 'app/features/profile/constants';

const initialState: ProfileStateType = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
};

const profileReducer = (state: ProfileStateType = initialState, { type, payload }: ProfileActionsType) => {
    switch (type) {
        case SET_USER_DATA:
            return {
                ...payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
