import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;


// Primeiro passo é instalar o axios

// depois, para ficar mais fácil, cria uma const api com a baseURL

// exporta a api 