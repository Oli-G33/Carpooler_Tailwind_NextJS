import api from './api';

export const loginUser = async credentials => {
  console.log(api);
  try {
    const response = await api.post('/auth/login', credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
