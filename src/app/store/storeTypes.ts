import { AuthStateType } from 'app/features/auth/types';

export type StoreActionTemplateType = {
    type: string;
    payload?: {
        [key: string]: any;
    };
    error?: Error;
};

export type StoreType = {
    auth: AuthStateType;
};
