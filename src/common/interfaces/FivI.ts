import { IFaritra } from "./IFaritra";
import { MusicI } from "./MusicI";

export interface FivI{
    name: string;
    rang: number;
    faritra?: IFaritra;
    primary_color: string;
    secondary_color: string;
    musics: MusicI[]
}