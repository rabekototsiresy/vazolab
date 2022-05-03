import jwtDecode from "jwt-decode";
import { IResponseToken } from "../interfaces/IResponseToken";

export const setToken = (token:string)=>{
    localStorage.setItem('token',token);
}

export const getToken = (itemName: string)=>{
    return localStorage.getItem(itemName);
}

export const removeToken = (itemName:string)=>{
    localStorage.removeItem(itemName)
}

export const clearLocalStorage = ()=>{
    localStorage.clear()
}


export const decodeToken = (token: string): IResponseToken=>{
    return jwtDecode(token);
}