import { applyMiddleware, compose, createStore, Store, Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'app/store/rootReducer';
import rootSaga from 'app/store/rootSaga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store: Store<any, any> & { dispatch: Dispatch<any> } = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
