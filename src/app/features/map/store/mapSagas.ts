import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_ADDRESS_LIST, GET_COORDINATES } from 'app/features/map/constants';
import { setAddressList, setCoordinates, setServerError, startFetchingData } from 'app/features/map/store/mapActions';
import { mapAPI } from 'app/common/utils';
import { MapActionsType } from 'app/features/map/types';

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
    yield takeEvery(GET_ADDRESS_LIST, addressListSagaWorker);
    yield takeEvery(GET_COORDINATES, coordinatesSagaWorker);
}
