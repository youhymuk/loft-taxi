export const saveToLocalStorage = (token: string) => {
    try {
        localStorage.setItem('token', token);
    } catch (e) {
        console.log(e);
    }
};

export const loadFromLocalStorage = () => {
    try {
        return localStorage.getItem('token');
    } catch (e) {
        console.log(e);
    }
};
