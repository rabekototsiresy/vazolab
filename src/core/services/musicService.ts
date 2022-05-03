import { MusicI } from "../../common/interfaces/MusicI";
import { http } from "./http"

export const getMusicByFiv = (query)=>{
    const id_fiv = query.queryKey[1];
    return http.get(`hira/fiv/${id_fiv}`);
}


export const addMusic = (music: MusicI)=>{
    return http.post('hira',music);
}

export const getAllMusic = ()=>{
    return http.get('hira');
}

export const getAllMusicLimit = (query)=>{
    const limit = query.queryKey[1];
    return http.get(`hira/limit/${limit}`);
}

export const deleteMusic = (id:number)=>{
    return http.delete(`hira/${id}`);
}

export const getAllMusicBySearch = (searchTerm: string)=>{
    return http.get(`hira/search/${searchTerm}`);
}