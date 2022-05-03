import React from 'react';
import ReactDOM  from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import ItemPlay from '../../pages/playlist/components/itemPlay';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch, useSelector} from 'react-redux';


import './player.css'
import { StateI } from '../../../common/interfaces/redux/StateI';
import { playMusicToggle } from '../../../core/redux';

function PlayerBottom() {
  const api_url = process.env.REACT_APP_API_URL_HOST || 'https://apiskoto.kajy-lab.com';
  // const api_url = process.env.REACT_APP_API_URL_HOST_DEV;
  const element:any=   document.getElementById('dom-player')
  const music = useSelector((state:StateI)=>state.music.playCurentMusic);
  const audio = `${api_url}/audio/${music.audio}`;
  const dispatch = useDispatch();
  const hiddenPlayer = ()=>{
    dispatch(playMusicToggle(null))
  }
  return ReactDOM.createPortal(
    <div className='player-bottom'>
      <AudioPlayer
        autoPlay
        src={audio}
        header={music.title}
        onEnded={hiddenPlayer}
    // other props here
  />
    </div>,
  element
  )
}

export default PlayerBottom