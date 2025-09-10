import axios from 'axios';

const mainApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

mainApi.interceptors.request.use(function (config) {
  const tokenSaved: string | null = localStorage.getItem('token');
  //   config.headers = {
  //     ...config.headers,
  //     ...(tokenSaved && { Authorization: `Bearer ${tokenSaved}` })
  //   } as CustomAxiosRequestHeaders;
  if (tokenSaved) config.headers.set('Authorization', `Bearer ${tokenSaved}`);
  return config;
});

mainApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // let message = '';

    // if (error.response) {
    //   if (Array.isArray(error.response.data.message)) {
    //     message = error.response.data.message.join(' ');
    //   }

    //   message = error.response.data.message;
    // } else {
    //   message = error.message;
    // }

    const messageError = error.response?.data?.message.toString()
    // message === '' || message === undefined ? 'some-error' : message;

    return Promise.reject(messageError);
  }
);

export default mainApi;