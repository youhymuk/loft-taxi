import { applyMiddleware, compose, createStore, Store, Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'app/store/rootReducer';
import rootSaga from 'app/store/rootSaga';
import { loadFromLocalStorage, saveToLocalStorage } from 'app/common/utils';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store: Store<any, any> & { dispatch: Dispatch<any> } = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

sagaMiddleware.run(rootSaga);
