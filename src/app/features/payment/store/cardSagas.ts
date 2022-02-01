import { call, put, takeEvery } from 'redux-saga/effects';

import { cardAPI } from 'app/common/utils';
import {
    startFetchingData,
    setUploadingSuccess,
    setUploadingError,
    setCardData,
} from 'app/features/payment/store/cardActions';
import { GET_CARD_DATA, UPLOADING_CARD_DATA_REQUEST } from 'app/features/payment/constants';
import { CardActionsType, UploadingCardResponseDataType } from 'app/features/payment/types';

function* uploadCardDataSaga({ payload }: CardActionsType) {
    try {
        yield put(startFetchingData());
        const { success, error }: UploadingCardResponseDataType = yield call<any>(cardAPI.uploadCardData, payload);
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
        const { cardNumber }: GetCardResponseDataType = yield call<any>(cardAPI.getCardData, token);
        if (cardNumber) yield put(setCardData({ cardNumber }));
    } catch (error: any) {
        console.log(error.message);
    }
}

export function* paymentSagaWatcher() {
    yield takeEvery(UPLOADING_CARD_DATA_REQUEST, uploadCardDataSaga);
    yield takeEvery(GET_CARD_DATA, getCardDataSaga);
}
