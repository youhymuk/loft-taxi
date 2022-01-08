export type AuthStateType = {
    isAuthorized: boolean;
    isLoading: boolean;
    token: string;
};

export type AuthActionsType = {
    type: string;
    payload?: { isLoading?: boolean; email?: string; password?: string; token?: string };
};
