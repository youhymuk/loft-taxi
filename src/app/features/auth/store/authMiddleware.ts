import { authAPI } from 'app/common/utils';
import { AUTHORIZE } from 'app/features/auth/constants';
import { logIn, setAuthToken, toggleIsLoading } from 'app/features/auth/store/authActions';

//@ts-ignore
const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHORIZE) {
        store.dispatch(toggleIsLoading(true));
        const { success, token } = await authAPI.logIn(action.payload);
        if (success) {
            store.dispatch(logIn());
            store.dispatch(setAuthToken(token));
        }
        store.dispatch(toggleIsLoading(false));
    } else {
        next(action);
    }
};

export default authMiddleware;
