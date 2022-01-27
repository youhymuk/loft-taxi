import { createSelector } from 'reselect';
import { MapStateType } from 'app/features/map/types';
import { StoreType } from 'app/store/storeTypes';

const mapSelector = (state: StoreType): MapStateType => state.map;

export const selectIsLoading = createSelector(mapSelector, (map: MapStateType) => map.isLoading);

export const selectCoordinates = createSelector(mapSelector, (map: MapStateType) => map.coordinates);

export const selectAddressList = createSelector(mapSelector, (map: MapStateType) => map.addressList);
