import { createSlice } from '@reduxjs/toolkit';
import { CardStateType } from 'app/features/payment/types';

const initialState: CardStateType = {
	isLoading: false,
	isUpdatedData: false,
	error: '',
	cardData: {
		cardName: '',
		cardNumber: '',
		expiryDate: '',
		cvc: '',
	},
};

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		startFetchingData(state) {
			state.isLoading = true;
			state.error = '';
		},
		makeCardDataUploadingRequest(state, action) {
			state.isLoading = true;
			state.isUpdatedData = false;
			state.error = '';
		},
		setUploadingSuccess(state) {
			state.isLoading = false;
			state.isUpdatedData = true;
			state.error = '';
		},
		setUploadingError(state, action) {
			state.isLoading = false;
			state.error = action.payload.error;
		},
		getCardData(state, action) {
			state.isLoading = true;
			state.error = '';
		},
		setCardData(state, action) {
			state.isLoading = false;
			state.cardData = { ...action.payload };
			state.error = '';
		},
	},
});

export const {
	startFetchingData,
	makeCardDataUploadingRequest,
	setCardData,
	getCardData,
	setUploadingError,
	setUploadingSuccess,
} = cardSlice.actions;

export default cardSlice.reducer;
