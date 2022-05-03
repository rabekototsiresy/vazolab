import { useQuery } from 'react-query';
import { getAllfivondronana } from '../../core/services/fivondronanaService';

export const useQueryFivGET = (onSuccess,onError)=>{
    return useQuery('fivondronana-api',getAllfivondronana,{
        onSuccess,
        onError
    })
}
export const useQueryFivPOST = ()=>{
    return useQuery('')
}
export const useQueryFivGETBYID = ()=>{
    return useQuery('')
}