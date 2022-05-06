import axios from "axios";
import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import { getToken } from '../../../common/utils/token';
export const http = axios.create({
    baseURL: 'http://localhost:9090/api/v1',
    // baseURL: 'https://apiskoto.kajy-lab.com/api/v1',
  });


http.interceptors.request.use(function (config:any) {
  const token = getToken('token');
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }
 // config.headers.Content-Type ='application/json'

    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    const navigate = useNavigate();
    const messageSplited = error.message.split(" ") as string[];
    const isIn = messageSplited.includes('401')
    if(isIn){
      navigate("/login")
    }
    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
