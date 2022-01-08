import { authAPI } from 'app/common/utils';
import { logIn, toggleIsLoading } from 'app/features/auth/store/authActions';
import { UPLOAD_USER_DATA } from 'app/features/profile/constants';

//@ts-ignore
const profileMiddleware = (store) => (next) => async (action) => {
    if (action.type === UPLOAD_USER_DATA) {
        store.dispatch(toggleIsLoading(true));
        const success = await authAPI.uploadUserData(action.payload);
        if (success) store.dispatch(toggleIsLoading(false));
    } else {
        next(action);
    }
};

export default profileMiddleware;
