import api from '../../api';

export const isAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return true;
    } else {
        return false
    }
}