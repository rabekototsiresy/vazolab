import React from 'react';
import { http } from "./http"
import { ICredential } from "../../common/interfaces/ICredential"
import { IRegister } from "../../common/interfaces/IRegister"
import { manageToken, toggleLogged } from "../redux"
import { removeToken } from "../../common/utils/token"
import { useDispatch } from "react-redux"

export  const login = (loginPayload:ICredential)=>{
    return http.post('auth/login',loginPayload)
}

export const register = (registerPayload:IRegister)=>{
    return http.post('auth/register',registerPayload)
}

export const LogOut = ()=>{
    const dispatch = useDispatch();
    dispatch(toggleLogged(false));
    removeToken('token');
    dispatch(manageToken(''));
}

