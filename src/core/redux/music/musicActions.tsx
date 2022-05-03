import { ADD_MUSIC, DELETE_MUSIC, GET_COUNT_MUSIC_BY_FIV, GET_MUSIC_PAGINATE, PLAY_MUSIC } from './musicTypes';
import { MusicI } from '../../../common/interfaces/MusicI';
import { Action } from '../../../common/interfaces/redux/ActionI';

export const addMusic = (music: MusicI[]): Action =>{
    return {
        type: ADD_MUSIC,
        payload: music
    }
}

export const playMusicToggle = (music: MusicI | null): Action =>{
    return {
        type: PLAY_MUSIC,
        payload: music
    }
}
export const deleteMusicRedux = (id: number):Action =>{
    return {
        type: DELETE_MUSIC,
        payload: id
    }
}

export const getCountMusicInFiv = (count: number):Action =>{
    return {
        type: GET_COUNT_MUSIC_BY_FIV,
        payload: count
    }
}

export const getMusicPaginate = (start:number,end: number):Action =>{
    return {
        type: GET_MUSIC_PAGINATE,
        payload: {
            start,
            end
        } as {start: number,end: number}
    }
}

