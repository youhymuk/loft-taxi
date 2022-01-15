import { authAPI } from 'app/common/utils';
import { AUTHORIZE } from 'app/features/auth/constants';
import { logInRequest, setLoginSuccess } from 'app/features/auth/store/authActions';

//@ts-ignore
const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHORIZE) {
        store.dispatch(logInRequest());
        const { success, token } = await authAPI.logIn(action.payload);
        if (success) {
            store.dispatch(setLoginSuccess(token));
        }
    } else {
        next(action);
    }
};

export default authMiddleware;
