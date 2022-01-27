export type MapStateType = {
    isLoading: boolean;
    addressList: Array<string> | [];
    coordinates: Array<Array<number>> | [];
    error: string;
};

export type MapActionsType = {
    type: string;
    payload?: {
        from?: string;
        to?: string;
        addressList?: Array<string>;
        coordinates?: Array<Array<number>>;
        error?: string;
    };
};
