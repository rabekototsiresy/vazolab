import { MusicI } from "../MusicI";

export interface PropsItemPlaysitI{
    music: MusicI,
    getMusicPaginate ?:any;
    currentPage?:any;
}