import { MANAGE_TOKEN, TOGGLE_LOADER, TOGGLE_LOGGED, TOGGLE_MODAL, TOGGLE_PLAY_HOVER } from './globalTypes';
import { Action } from '../../../common/interfaces/redux/ActionI';
import { BiHomeCircle } from 'react-icons/bi';
import {GrLogin } from 'react-icons/gr';
import { MdLibraryMusic, MdOutlineCreateNewFolder } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';


const initialState = {
    showModal: false,
    moduleLink: [
        {
            text: 'FANDRAISANA',
            path: '/',
            icon: <BiHomeCircle size={20} color='#fff'/>,
            needAuth: false
        },
        {
            text: 'HIRA',
            path: '/playlist/musics',
            icon: <MdLibraryMusic color='#fff' />,
            needAuth: true
        },
        {
            text: 'HIDITRA',
            path: '/login',
            icon: <GrLogin size={20} color="#fff"/>  
        },
        {
            text: 'HANOKATRA KAONTY',
            path: '/register',
            icon: <MdOutlineCreateNewFolder size={20} color='#fff'/>  
        },
        {
            text: 'KAONTIKO',
            path: '/profile/account',
            icon: <ImProfile size={20} color='#fff'/>,
            needAuth: true
        }
    ],
    showIconPlay: false,
    loader: false,
    isLogged: false,
    token: ''
}

export const globalReducer = (state = initialState, action: Action)=>{
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            }
        case TOGGLE_PLAY_HOVER: 
            return {
                ...state,
                showIconPlay: !state.showIconPlay

            }
        case TOGGLE_LOADER: 
            return {
                ...state,
                loader: action.payload
            }
        case TOGGLE_LOGGED: 
            return {
                ...state,
                isLogged: action.payload
            }
        case MANAGE_TOKEN: 
            return {
                ...state,
                token: action.payload
            }

    
        default:
            return state;
            
    }
}