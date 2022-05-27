import Axios from 'axios'

const api = Axios.create({
  baseURL: 'http://localhost:3000',
})

// api.interceptors.request.use(async config => {
//   const token = await AsyncStorage.getItem('token');
//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       Authorization: `Bearer ${token}`,
//     },
//   };
// });

export { api }
