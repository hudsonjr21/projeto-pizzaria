import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333'
  //Enquanto não hospedar, usar o Ip da maquina.
  baseURL: 'http://192.168.254.211:3333' 
})

export { api };
