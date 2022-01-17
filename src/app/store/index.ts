import { loadFromLocalStorage, saveToLocalStorage } from 'app/common/utils';
import authMiddleware from 'app/features/auth/store/authMiddleware';
import profileMiddleware from 'app/features/profile/store/profileMiddleware';
import { applyMiddleware, compose, createStore, Store, Dispatch } from 'redux';
import { rootReducer } from './rootReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<any, any> & { dispatch: Dispatch<any> } = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(authMiddleware, profileMiddleware)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));
