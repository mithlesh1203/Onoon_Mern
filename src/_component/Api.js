import axios from 'axios';
// require('dotenv').config();


 const api = axios.create({
  baseURL: `https://onoonbackend.onrender.com`
});
export {api};