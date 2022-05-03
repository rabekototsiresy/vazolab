import { MusicI } from '../MusicI';
export interface MusicReduxI{
    musicList: MusicI[],
    playCurentMusic: MusicI;
    countMusicInFiv: number,
    musicPaginate: MusicI[]

}