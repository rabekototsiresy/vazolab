import { ADD_MUSIC, DELETE_MUSIC, GET_COUNT_MUSIC_BY_FIV, GET_MUSIC_PAGINATE, PLAY_MUSIC } from './musicTypes';
import { Action } from '../../../common/interfaces/redux/ActionI';
import { MusicI } from '../../../common/interfaces/MusicI';
const initialState = {
    musicList: [],
    playCurentMusic: null,
    countMusicInFiv: 0,
    musicPaginate: []
}

export const musicReducer = (state = initialState,action: Action)=>{
    switch (action.type) {
        case ADD_MUSIC:
            return {
                ...state,
                musicList: action.payload
            }
            break;
        case PLAY_MUSIC: 
            return {
                ...state,
                playCurentMusic: action.payload
            }
            break;
        case DELETE_MUSIC:
            return {
                ...state,
                musicList: state.musicList.filter((music:MusicI)=>music.id !== action.payload)
            }
            break;
        case GET_COUNT_MUSIC_BY_FIV: 
            return {
                ...state,
                countMusicInFiv: action.payload
            }
            break;
        case GET_MUSIC_PAGINATE:
            return {
                ...state,
                musicPaginate: state.musicList.slice(action.payload?.start,action.payload?.end)
            }

        default:
            return state;
            break;
    }

}