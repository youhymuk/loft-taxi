import { MapActionsType, MapStateType } from 'app/features/map/types';
import {
    CLEAR_ROUTE,
    SET_ADDRESS_LIST,
    SET_COORDINATES,
    SET_SERVER_ERROR,
    START_FETCHING_DATA,
} from 'app/features/map/constants';

const initialState: MapStateType = {
    isLoading: false,
    coordinates: [],
    addressList: [],
    error: '',
};

const mapReducer = (state: MapStateType = initialState, { type, payload = {} }: MapActionsType) => {
    switch (type) {
        case START_FETCHING_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case SET_COORDINATES:
            return {
                ...state,
                coordinates: payload?.coordinates || [],
                isLoading: false,
            };
        case CLEAR_ROUTE:
            return {
                ...state,
                coordinates: [],
            };
        case SET_ADDRESS_LIST:
            return {
                ...state,
                addressList: payload?.addressList || [],
                isLoading: false,
            };
        case SET_SERVER_ERROR:
            return {
                ...state,
                error: payload?.error || '',
                isLoading: false,
            };
        default:
            return state;
    }
};

export default mapReducer;
