import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
  timeout: 30000,
});

export const api = instance;
