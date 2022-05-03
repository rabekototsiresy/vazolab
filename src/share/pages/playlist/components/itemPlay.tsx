import React, { Fragment,useState } from 'react';
import { IoIosPlayCircle } from 'react-icons/io';
import djembe from '../../../../common/assets/images/djembe.jpg';
import ReactAudioPlayer from 'react-audio-player';
import playlistStyle from '../playlist.module.css';
import Lyrics from '../../../components/lyrics';
import { Button } from 'react-bootstrap';
import { MusicI } from '../../../../common/interfaces/MusicI';
const audioFile = require('../../../../common/assets/mp3/drill.mp3');
type PropsItem = {
  music: MusicI
}

function ItemPlay(props: PropsItem) {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='row -bottom py-2 '>
      <div className="col-1 col-md-1 m-sm-2 m-md-2 m-lg-2 m-0 d-flex justify-content-center d-sm-block d-sm-block d-none">
        <img src={djembe} alt="..." className="img-thumbnail img-fluid" width={100} />
      </div>
      <div className=" col-1 col-md-1  d-sm-flex d-md-flex justify-content-md-center align-items-md-center d-sm-inline-flex justify-content-sm-center align-items-sm-center d-none">
        <IoIosPlayCircle  size={50}/>
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-12">
            <ReactAudioPlayer
            src={audioFile}
            controls
            className={playlistStyle.audio}
          />
          </div>
          <div className="col-md-12  d-flex justify-content-between px-3 mt-1 ">
            <p className='text-white'>HIra skoto: ngoma ngoma</p>
            <Lyrics title={props.music.title} lyrics={props.music.lyrics} type_lyrics={props.music.type_lyrics }/>
      
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemPlay