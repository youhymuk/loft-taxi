import { Router } from 'express';
import { signIn, signUp } from './controllers/authController';
import { getCard, uploadCard } from './controllers/cardController';
import { getAddressList, getRoute } from './controllers/mapController';

const router = Router();

router.post('/signin', signIn);
router.post('/signup', signUp);

router.post('/card', uploadCard);
router.get('/card', getCard);

router.get('/addressList', getAddressList);
router.get('/route', getRoute);

export default router;
