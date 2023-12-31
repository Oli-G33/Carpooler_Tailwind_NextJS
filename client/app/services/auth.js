import api from './api';

export const loginUser = async credentials => {
  try {
    const response = await api.post('/auth/login', credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async credentials => {
  try {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
