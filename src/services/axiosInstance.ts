import axios from 'axios';

const protocol = 'https://';
const currentHostname = window && window.location && window.location.hostname;

let backendHostname;

if (currentHostname === 'localhost') {
  backendHostname = 'some-hostname';
}
else if (process.env.REACT_APP_BACKEND_HOST) {
  backendHostname = process.env.REACT_APP_BACKEND_HOST;
}
else if (currentHostname && currentHostname !== 'chromewebdata') {
  backendHostname = currentHostname;
}
else {
  backendHostname = 'error-hostname';
}

export const API_ROOT = protocol + backendHostname + '';

const axiosInstance = axios.create({ baseURL: API_ROOT });

// if (process.env.NODE_ENV === 'development') {
//   console.log('add axios credentials conf');
//   axios.defaults.withCredentials = true;
// }

axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return Promise.resolve(response);
  },
  err => {
    // Do something with response err
    if (err.response) {
      console.log('API ERROR:) - ', err.response.data);
    }
    else {
      console.log('API ERROR:) - ', err.message);
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
