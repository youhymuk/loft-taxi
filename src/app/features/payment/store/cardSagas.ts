import { call, put, takeEvery } from 'redux-saga/effects';

import { cardAPI } from 'app/common/utils';
import {
	CardActionsType,
	UploadingCardResponseDataType,
} from 'app/features/payment/types';
import {
	getCardData,
	makeCardDataUploadingRequest,
	setCardData,
	setUploadingError,
	setUploadingSuccess,
	startFetchingData,
} from './cardSlice';

function* uploadCardDataSaga({ payload }: CardActionsType) {
	try {
		yield put(startFetchingData());
		const { success, error }: UploadingCardResponseDataType = yield call<any>(
			cardAPI.uploadCardData,
			payload
		);
		if (success) {
			yield put(setUploadingSuccess());
		} else if (error) {
			yield put(setUploadingError(error));
		}
	} catch (error: any) {
		yield put(setUploadingError(error.message));
	}
}

function* getCardDataSaga({ payload }: CardActionsType) {
	const { token }: any = payload;

	try {
		yield put(startFetchingData());
		// @ts-ignore
		const { cardNumber }: GetCardResponseDataType = yield call<any>(
			cardAPI.getCardData,
			token
		);
		if (cardNumber) yield put(setCardData({ cardNumber }));
	} catch (error: any) {
		console.log(error.message);
	}
}

export function* paymentSagaWatcher() {
	yield takeEvery(makeCardDataUploadingRequest.type, uploadCardDataSaga);
	yield takeEvery(getCardData.type, getCardDataSaga);
}
