import axios from 'axios';

const api = axios.create({
  baseURL:"https://phones--melhorcom.repl.co"
})

api.interceptors.request.use(
  async (options) => {
    options.headers["cpf"] = 61487619553;
    return options;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;