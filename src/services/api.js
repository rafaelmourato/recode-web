import axios from 'axios';

const api = axios
  .create({ baseURL: 'https://professor-allocation.herokuapp.com' });

export default api;
