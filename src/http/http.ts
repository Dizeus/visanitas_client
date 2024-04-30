import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'api/',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;
