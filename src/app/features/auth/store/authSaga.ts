import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGN_UP, SIGN_IN } from 'app/features/auth/constants';
import { makeAuthRequest, setAuthError, setAuthToken } from 'app/features/auth/store/authActions';
import { authAPI, saveToLocalStorage } from 'app/common/utils';
import { AuthActionsType, AuthResponseDataType } from 'app/features/auth/types';

function* signUpSagaWorker({ payload }: AuthActionsType) {
    try {
        yield put(makeAuthRequest());
        const { token, error }: AuthResponseDataType = yield call<any>(authAPI.signUp, payload);

        if (token) {
            yield put(setAuthToken(token));
            saveToLocalStorage(token);
        } else {
            yield put(setAuthError(error ?? ''));
        }
    } catch (error: any) {
        yield put(setAuthError(error.message));
    }
}

function* signInSagaWorker({ payload }: AuthActionsType) {
    try {
        yield put(makeAuthRequest());
        const { token, error }: AuthResponseDataType = yield call<any>(authAPI.signIn, payload);

        if (token) {
            yield put(setAuthToken(token));
            saveToLocalStorage(token);
        } else {
            yield put(setAuthError(error ?? ''));
        }
    } catch (error: any) {
        yield put(setAuthError(error.message));
    }
}

export function* authSagaWatcher() {
    yield takeEvery(SIGN_UP, signUpSagaWorker);
    yield takeEvery(SIGN_IN, signInSagaWorker);
}
