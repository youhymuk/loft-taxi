import { fork } from 'redux-saga/effects';
import { authSagaWatcher } from 'app/features/auth/store/authSaga';
import { paymentSagaWatcher } from 'app/features/payment/store/cardSagas';
import { mapSagaWatcher } from 'app/features/map/store/mapSagas';

export default function* rootSaga() {
    yield fork(authSagaWatcher);
    yield fork(paymentSagaWatcher);
    yield fork(mapSagaWatcher);
}
