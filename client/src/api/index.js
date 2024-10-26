import axios from 'axios';

const url = 'http://localhost:5000'

//account routes
export const signup  = (form) => axios.post(`${url}/auth/signup`, form);
export const login = (form) => axios.post(`${url}/auth/login`, form)