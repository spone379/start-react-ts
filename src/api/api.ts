import axiosInstance from '../services/axiosInstance';

const getExample = () => axiosInstance.get('api/some-api');

const API = {
  getExample,
};

export default API;