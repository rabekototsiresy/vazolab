import { ModuleLinkI } from '../ModuleLinkI';
import { GlobalReduxI } from './GlobalReduxI';

export interface StateGlobalI{
    showModal: GlobalReduxI
    moduleLink: ModuleLinkI[];
    showIconPlay: boolean;
    loader: boolean;
    isLogged: boolean;
    token: string;


}