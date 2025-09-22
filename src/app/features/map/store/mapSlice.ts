import { createSlice } from '@reduxjs/toolkit';

import { MapStateType } from 'app/features/map/types';

const initialState: MapStateType = {
	isLoading: false,
	coordinates: [],
	addressList: [],
	error: '',
};

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		getCoordinates: (state, payload) => {},
		clearRoute: (state) => {
			state.coordinates = [];
			state.error = '';
		},
		getAddressList: (state) => {},
		startFetchingData: (state) => {
			state.isLoading = true;
			state.error = '';
		},
		setServerError: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		},
		setCoordinates: (state, { payload }) => {
			state.isLoading = false;
			state.coordinates = payload.coordinates;
			state.error = '';
		},
		setAddressList: (state, { payload }) => {
			state.isLoading = false;
			state.addressList = payload.addressList;
			state.error = '';
		},
	},
});

export const {
	getCoordinates,
	clearRoute,
	getAddressList,
	startFetchingData,
	setServerError,
	setAddressList,
	setCoordinates,
} = mapSlice.actions;

export default mapSlice.reducer;
