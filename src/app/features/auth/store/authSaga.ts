import { call, put, takeEvery } from 'redux-saga/effects';

import { authAPI, saveToLocalStorage } from 'app/common/utils';
import { AuthActionsType, AuthResponseDataType } from 'app/features/auth/types';
import {
	authFailed,
	authStarted,
	authSucceeded,
	signIn,
	signUp,
} from './authSlice';

function* signUpSagaWorker({ payload }: AuthActionsType) {
	try {
		yield put(authStarted());
		const { token, error }: AuthResponseDataType = yield call<any>(
			authAPI.signUp,
			payload
		);

		if (token) {
			yield put(authSucceeded(token));
			saveToLocalStorage(token);
		} else {
			yield put(authFailed(error ?? ''));
		}
	} catch (error: any) {
		yield put(authFailed(error.message));
	}
}

function* signInSagaWorker({ payload }: AuthActionsType) {
	try {
		yield put(authStarted());
		const { token, error }: AuthResponseDataType = yield call<any>(
			authAPI.signIn,
			payload
		);

		if (token) {
			yield put(authSucceeded(token));
			saveToLocalStorage(token);
		} else {
			yield put(authFailed(error ?? ''));
		}
	} catch (error: any) {
		yield put(authFailed(error.message));
	}
}

export function* authSagaWatcher() {
	yield takeEvery(signUp.type, signUpSagaWorker);
	yield takeEvery(signIn.type, signInSagaWorker);
}
