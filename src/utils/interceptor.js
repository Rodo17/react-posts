import axios from 'axios';

const axiosInstance = axios.create({
  credentials: 'include',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    return Promise.reject(error);
  }
);

export default axiosInstance;
