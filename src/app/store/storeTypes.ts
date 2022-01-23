import { AuthStateType } from 'app/features/auth/types';
import { MapStateType } from 'app/features/map/types';
import { CardStateType } from 'app/features/payment/types';

export type StoreActionTemplateType = {
    type: string;
    payload?: {
        [key: string]: any;
    };
    error?: Error;
};

export type StoreType = {
    auth: AuthStateType;
    card: CardStateType;
    map: MapStateType;
};
