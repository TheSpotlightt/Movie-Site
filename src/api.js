import axios from 'axios';

export default axios.create({
    baseURL: 'https://movie-site-api.herokuapp.com',
});