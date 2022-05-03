import { StateFivI } from './StateFivI';
import { SatateMusicI } from './StateMusicI';
import { StateGlobalI } from './StateGlobal';
import { MusicReduxI } from './MusicReduxI';

export interface StateI{
    fiv: StateFivI;
    music: MusicReduxI;
    global: StateGlobalI;
}