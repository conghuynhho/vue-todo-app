import axios from "axios";

const instance =  axios.create({
  baseURL: 'https://6019134d971d850017a409ea.mockapi.io/todos/',
  timeout: 5000,
});

export default instance;