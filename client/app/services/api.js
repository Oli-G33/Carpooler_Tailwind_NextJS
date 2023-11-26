'use client';

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://carpool-dev-mrzj.2.ie-1.fl0.io'
});

export default api;
