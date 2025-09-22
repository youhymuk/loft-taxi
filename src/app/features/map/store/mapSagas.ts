import { call, put, takeEvery } from 'redux-saga/effects';

import { mapAPI } from 'app/common/utils';
import { MapActionsType } from 'app/features/map/types';
import {
	getAddressList,
	getCoordinates,
	setAddressList,
	setCoordinates,
	setServerError,
	startFetchingData,
} from './mapSlice';

function* addressListSagaWorker() {
	try {
		yield put(startFetchingData());
		const { addresses } = yield call<any>(mapAPI.getAddressList);
		yield put(setAddressList(addresses));
	} catch (error: any) {
		yield put(setServerError(error.message));
	}
}

function* coordinatesSagaWorker({ payload }: MapActionsType): Generator<any> {
	const { from, to }: any = payload;
	try {
		yield put(startFetchingData());
		const coordinates: any = yield call(mapAPI.getCoordinates, from, to);
		if (coordinates) yield put(setCoordinates(coordinates));
	} catch (error: any) {
		yield put(setServerError(error.message));
	}
}

export function* mapSagaWatcher() {
	yield takeEvery(getAddressList, addressListSagaWorker);
	yield takeEvery(getCoordinates, coordinatesSagaWorker);
}
