import { useQuery } from 'react-query';
import { getAllMusic } from '../../core/services/fivondronanaService';
import { getAllMusicBySearch, getAllMusicLimit, getMusicByFiv } from '../../core/services/musicService';

export const useQueryMusicByFivGET = (id_fiv:number,onSuccess:any,onError,select)=>{
    return useQuery(['musicbyfiv-api',id_fiv],getMusicByFiv,{
        onSuccess,
        onError,
        select,
        refetchOnWindowFocus: false,
        refetchOnMount: true
    })
}

export const useQueryMusicAllGET = (onSuccess:any,onError,enabled?: boolean )=>{
    return useQuery('musics-api',getAllMusic,{onSuccess,onError,refetchOnWindowFocus: false,enabled: enabled ? enabled : true});
}

export const useQueryMusicLimitGET = (onSuccess:any,onError)=>{
    return useQuery(['musics-limit-api',3],getAllMusicLimit,{onSuccess,onError,refetchOnWindowFocus: false});
}



