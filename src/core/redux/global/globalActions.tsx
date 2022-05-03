import { MANAGE_TOKEN, TOGGLE_LOADER, TOGGLE_LOGGED, TOGGLE_MODAL, TOGGLE_PLAY_HOVER } from './globalTypes';
import { Action } from '../../../common/interfaces/redux/ActionI';

export const toggleModal = (): Action =>{
    return {
        type: TOGGLE_MODAL
    }
}

export const togglePlayHover = (): Action =>{
    return {
        type: TOGGLE_PLAY_HOVER
    }
}

export const toggleLoader = (state: boolean): Action =>{
    return {
        type: TOGGLE_LOADER,
        payload: state
    }
}

export const toggleLogged = (state: boolean): Action =>{
    return {
        type: TOGGLE_LOGGED,
        payload: state
    }
}

export const manageToken = (token)=>{
    return {
        type: MANAGE_TOKEN,
        payload: token
    }
}