// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your backend server URL
});

export default api;
