import { cardAPI } from 'app/common/utils';
import { startUploadCardData, uploadCardDataSuccess } from 'app/features/profile/store/profileActions';
import { UPLOAD_CARD_DATA_REQUEST } from 'app/features/profile/constants';

//@ts-ignore
const profileMiddleware = (store) => (next) => async (action) => {
    const { type, payload } = action;

    if (type === UPLOAD_CARD_DATA_REQUEST) {
        store.dispatch(startUploadCardData());
        const success = await cardAPI.uploadUserData(payload);
        if (success) store.dispatch(uploadCardDataSuccess());
    } else {
        next(action);
    }
};

export default profileMiddleware;
