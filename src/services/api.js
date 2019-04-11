import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketseat-node-marcio.herokuapp.com'
});

export default api;