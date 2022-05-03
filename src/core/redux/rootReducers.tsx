import { combineReducers } from 'redux';
import { musicReducer } from './music/musicReducers';
import { fivReducer } from './fiv/fivReducers';
import { globalReducer } from './global/globalReducers';



export const rootReducer = combineReducers({
    fiv: fivReducer,
    music: musicReducer,
    global: globalReducer
});