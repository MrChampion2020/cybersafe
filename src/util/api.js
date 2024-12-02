// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// console.log('API_BASE_URL:', API_BASE_URL);

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   withCredentials: true,
//   timeout: 5000, // Add timeout
//   // Add retry logic
//   retry: 3,
//   retryDelay: (retryCount) => {
//     return retryCount * 1000;
//   }
// });

// // Add retry interceptor
// api.interceptors.response.use(undefined, async (err) => {
//   const { config } = err;
//   if (!config || !config.retry) {
//     return Promise.reject(err);
//   }
//   config.retryCount = config.retryCount || 0;
//   if (config.retryCount >= config.retry) {
//     return Promise.reject(err);
//   }
//   config.retryCount += 1;
//   const backoff = new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, config.retryDelay(config.retryCount));
//   });
//   await backoff;
//   return api(config);
// });

// // Existing request interceptor
// api.interceptors.request.use(function (config) {
//   console.log('Making request to:', config.url);
//   return config;
// }, function (error) {
//   console.error('Request error:', error);
//   return Promise.reject(error);
// });

// // Existing response interceptor
// api.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   console.error('Response error:', error);
//   if (error.code === 'ERR_NETWORK') {
//     console.error('Network error. Is the backend server running?');
//     console.error('Backend URL:', API_BASE_URL);
//     console.error('Frontend URL:', window.location.origin);
//   }
//   return Promise.reject(error);
// });

// // Modified health check with retry handling
// const checkHealth = async () => {
//   try {
//     const response = await api.get('/api/health-check');
//     console.log('Backend connection successful:', response.data);
//     return true;
//   } catch (error) {
//     console.error('Error connecting to backend:', error.message);
//     return false;
//   }
// };

// // Initialize health check
// checkHealth();

// export default api;

