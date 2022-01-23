export type AuthStateType = {
    isLoading: boolean;
    token: string;
    error: string;
};

export type AuthActionsType = {
    type: string;
    payload?: { email?: string; password?: string; name?: string; surname?: string; token?: string; error?: string };
};

export type AuthResponseDataType = {
    success: boolean;
    token?: string;
    error?: string;
};
