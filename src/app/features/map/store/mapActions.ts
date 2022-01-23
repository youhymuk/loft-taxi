import {
    CLEAR_ROUTE,
    GET_ADDRESS_LIST,
    GET_COORDINATES,
    SET_ADDRESS_LIST,
    SET_COORDINATES,
    SET_SERVER_ERROR,
    START_FETCHING_DATA,
} from 'app/features/map/constants';
import { MapActionsType } from 'app/features/map/types';

export const getCoordinatesRequest = (from: string, to: string) => ({
    type: GET_COORDINATES,
    payload: { from, to },
});

export const clearRoute = () => ({
    type: CLEAR_ROUTE,
});

export const getAddressListRequest = () => ({
    type: GET_ADDRESS_LIST,
});

export const startFetchingData = () => ({
    type: START_FETCHING_DATA,
});

export const setServerError = (error: string) => ({
    type: SET_SERVER_ERROR,
    payload: { error },
});

export const setCoordinates = (coordinates: Array<Array<number>>): MapActionsType => ({
    type: SET_COORDINATES,
    payload: { coordinates },
});

export const setAddressList = (addressList: Array<string>): MapActionsType => ({
    type: SET_ADDRESS_LIST,
    payload: { addressList },
});
