import { ADD_FIV } from './fivTypes';
import { FivI } from '../../../common/interfaces/FivI';
import { Action } from '../../../common/interfaces/redux/ActionI';

export const addFiv = (fiv: FivI ): Action=>{
    return {
        type: ADD_FIV,
        payload: fiv
    }
}