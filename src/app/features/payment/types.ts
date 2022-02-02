export type CardStateType = {
    isLoading: boolean;
    isUpdatedData: boolean;
    error: string;
    cardData: {
        cardName: string;
        cardNumber: string;
        expiryDate: string;
        cvc: string;
    };
};

export type CardActionsType = {
    type: string;
    payload?: {
        error?: string;
        token?: string;
    };
};

export type UploadCardDataType = {
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvc: string;
    token: string;
};

export type UploadCardDataActionsType = {
    type: string;
    payload: UploadCardDataType;
};

export type GetCardDataActionsType = {
    type: string;
    payload: { token: string };
};

export type SetCardUploadingErrorActionsType = {
    type: string;
    payload: { error: string };
};

export type SetCardUploadingSuccessActionsType = {
    type: string;
};

export type SetCardDataActionsType = {
    type: string;
    payload: GetCardResponseDataType;
};

export type UploadingCardResponseDataType = {
    success: boolean;
    error?: string;
};

export type GetCardResponseDataType = {
    cardName?: string;
    cardNumber: string;
    expiryDate?: string;
    cvc?: string;
    id?: string;
};
