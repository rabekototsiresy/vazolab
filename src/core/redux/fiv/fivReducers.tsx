import { ADD_FIV } from './fivTypes';
import { FivI } from '../../../common/interfaces/FivI';
import { Action } from '../../../common/interfaces/redux/ActionI';
import { MusicI } from '../../../common/interfaces/MusicI';

const initialState = {
    fivList: [],
    test: true
};

export const fivReducer = (state = initialState,action: Action)=>{
    switch (action.type) {
        case ADD_FIV:
            return {
                ...state,
                fivList: [{name: 'TEST'}]
            }
            
            break;
    
        default:
            return state;
            break;
    }
}