import { FivI } from "./FivI";

export interface MusicI {
    id: number;
    title: string;
    duration: string;
    lyrics: string;
    type_lyrics: number;
    id_fiv: number;
    audio: string;
    fivondronana? : FivI
}