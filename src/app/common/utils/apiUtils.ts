import axios from 'axios';
import { BASE_URL } from 'app/common/constants';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export const authAPI = {
    async signIn(credentials: { email: string; password: string }) {
        const { data } = await instance.post('auth/', credentials);
        return data;
    },
    async signUp(credentials: { email: string; password: string; name: string }) {
        const { data } = await instance.post('register/', credentials);
        return data;
    },
};

export const cardAPI = {
    async uploadCardData(userData: {
        cardNumber: string;
        expiryDate: string;
        cardName: string;
        cvc: string;
        token: string;
    }) {
        const { data } = await instance.post('card/', userData);
        return data;
    },
    async getCardData(token: string) {
        const { data } = await instance.get(`card/?token=${token}`);
        return data;
    },
};

export const mapAPI = {
    async getAddressList() {
        const { data } = await instance.get('addressList');
        return data;
    },
    async getCoordinates(from: string, to: string) {
        const { data } = await instance.get(`route?address1=${from}&address2=${to}`);
        return data;
    },
};
