import { useMutation } from 'react-query';
import { addMusic, deleteMusic, getAllMusicBySearch } from '../../core/services/musicService';

export const useMutationMusicAddPOST = (onSuccess,onError)=>{
    return useMutation(addMusic,{onSuccess,onError})
}

export const useMutationMusicDELETE = ()=>{
    return useMutation(deleteMusic)
}

export const useMutationMusicSearchGET = (query,onSuccess:any,onError)=>{
    return useMutation(getAllMusicBySearch,{onSuccess,onError});
}