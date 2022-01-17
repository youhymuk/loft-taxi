import axios from 'axios';
import { BASE_URL } from 'app/common/constants';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export const authAPI = {
    async logIn(credentials: { email: string; password: string }) {
        const { data } = await instance.post('auth/', credentials);
        return data;
    },
};

export const cardAPI = {
    async uploadUserData(userData: {
        cardNumber: string;
        expiryDate: string;
        cardName: string;
        cvc: string;
        token: string;
    }) {
        const { data } = await instance.post('card/', userData);
        return data.success;
    },
};
