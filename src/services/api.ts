import axios from "axios";
import { getUserLocalStorage } from "../context/authProvider/util";

export const Api = axios.create({
    baseURL: "https://reqres.in/api/"
});

Api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });