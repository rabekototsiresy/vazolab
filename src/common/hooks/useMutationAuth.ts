import { useMutation } from 'react-query';
import { login, register } from '../../core/services/authService';

export const useMutationAuthLoginPOST = ()=>{
    return useMutation(login)
}

export const useMutationAuthRegisterPOST = ()=>{
    return useMutation(register)
}