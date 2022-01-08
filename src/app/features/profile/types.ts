export type ProfileStateType = {
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvc: string;
    token?: string;
};

export type ProfileActionsType = {
    type: string;
    payload: { cardName: string; cardNumber: string; expiryDate: string; cvc: string; token?: string };
};
