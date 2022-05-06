import React,{useEffect, useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Link, useNavigate } from 'react-router-dom'
import { DefaultEditor } from 'react-simple-wysiwyg';
import lys from '../../../../common/assets/images/djembe.jpeg';
import { useAlert } from 'react-alert';
import { getBase64 } from '../../../../common/utils/base64';
import { MusicI } from '../../../../common/interfaces/MusicI';
import { secondsToTime } from '../../../../common/utils/time';
import { decodeToken, getToken } from '../../../../common/utils/token';
import { playMusicToggle, toggleLoader } from '../../../../core/redux';
import { useDispatch, useSelector } from 'react-redux';
import { http } from '../../../../core/services/http';
import { useQueryClient } from 'react-query';
import { StateI } from '../../../../common/interfaces/redux/StateI';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { GiMusicalScore } from 'react-icons/gi';
import Loader from '../../../components/loader';


function AddMusic() {
  const [htmlLyrics, setHtml] = React.useState('Tononkira');
  const [file, setFile] = useState('');
  const [audioFile, setAudioFile] = useState<any>('');
  const [typeLyrics, setTypeLyrics] = useState(0);
  const [checked, setChecked] = useState<boolean|any>(true)
  const [imageLyrics, setImageLyrics] = useState<any>('');
  const [audioPlaying, setAudioPlaying] = useState('')
  const loader = useSelector((state:StateI)=>state.global.loader);
  const [isoading, setIsoading] = useState(false);

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(playMusicToggle(null));
  }, [])
  const token = getToken('token') || '';
  const infoProfile = decodeToken(token);
  const queryClient = useQueryClient();
  const { id_fiv} = infoProfile.sub;

  const handleChange = (e) =>{
    setHtml(e.target.value);
  }
  const [title, setTitle] = useState('');
 
  const handleAudioChange = e => {
    setAudioFile(e.target.files[0]);
    const fileType = e.target.files[0].type.split('/')[0];
    if(fileType === "audio"){
      setFile(e.target.files[0]);
      getBase64(e.target.files[0])
      .then((result:any) => {
        setAudioPlaying(result)
        //file["base64"] = result;
        setFile(file)
      })
      .catch(err => {
        console.log(err);
      });
    setFile(e.target.files[0]);
    }else{
      alert.error("Hira audio tompoko no azo ahiditra");
      e.target.value = null;
      setAudioPlaying('')
      return ;
    }
  };
  const handleImageLyrics = (e)=>{
      const fileType = e.target.files[0].type.split('/')[0];
    if(fileType === "image"){
      setFile(e.target.files[0]);
      getBase64(e.target.files[0])
      .then(result => {
        setImageLyrics(result);
        file["base64"] = result;
        setFile(file)
      })
      .catch(err => {
        console.log(err);
      });
    setFile(e.target.files[0]);
    }else{
      alert.error("Hira sary tompoko no azo ahiditra");
      return ;
    }
  }

  const handleTypeLyrics = (e)=>{
    if(e.target.id === "text"){
      setChecked(null);
    }
    setTypeLyrics(Number(e.target.value));
  }

  const submitMusic = (e)=>{
    e.preventDefault();
    setIsoading(true);
    const formData:any = new FormData();
    formData.append('file',audioFile);
    
    const audio:any = document.getElementById('audio');
    const duration = audio.duration;
    if(typeLyrics === 0){
      /** for text */
      const data: MusicI | any = {
        title: title,
        duration: secondsToTime(duration),
        lyrics: htmlLyrics,
        id_fiv: id_fiv,
        type_lyrics: typeLyrics,

      }
      formData.append('data',formData.append('data',JSON.stringify(data)));
    }else{
      /**for image */
      const data: MusicI|any = {
        title: title,
        duration: secondsToTime(duration),
        lyrics: imageLyrics,
        id_fiv: id_fiv,
        type_lyrics: typeLyrics,
      }
      formData.append('data',formData.append('data',JSON.stringify(data)));
    }

    dispatch(toggleLoader(true))
    http.post('/hira',formData).then((res)=>{
      dispatch(toggleLoader(false))
      setIsoading(false);
      alert.success(`Tafiditra soamatsara ny hira: ${title}`)
      queryClient.invalidateQueries(['musicbyfiv-api',id_fiv])
      navigate('/profile/musics')
    })
      .catch((e)=>{
        console.log(e)
        dispatch(toggleLoader(false));
        setIsoading(false);
      }) 
  }
  useEffect(()=>{
    dispatch(playMusicToggle(null))
  },[])
  return (
    <div className=" ">
      <Loader enabled={loader || isoading}/>
    <div className="card mt-3 d-flex p-3">
        
      <div className='d-flex align-items-center justify-content-center'>
        <MdOutlineLibraryMusic size={40} />
        <img id="profile-img" className="profile-img-card rounded mx-2" width={100} src={lys} alt="profile"/>
        <GiMusicalScore size={40} />
      </div>
        <hr />
        <p id="profile-name" className="profile-name-card"></p>
        <form className="form-signin" onSubmit={submitMusic}>
          <div className="row">
            <div className="mb-3 col-md-12">
              <label htmlFor="title" className="form-label">Lohateny(*):</label>
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                aria-describedby="title" 
                onChange={(e)=>setTitle(e.target.value)}
                required
              />
              <div  className="form-text">Lohaten'ny hira.</div>
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-12">
              <div className="form-group">
                <label htmlFor="title" className="form-label">Hira:(.m4a/.flac/.mp3/.wav/.wma/.aac)</label>
                <input 
                  type="file"   
                  className="form-control" 
                  name="file" 
                  onChange={handleAudioChange} required
                />
              </div>
            </div>
            <div className="mb-3 col-md-12">
              {audioPlaying && <ReactAudioPlayer
                src={audioPlaying}
                controls
                className="w-100"
                id='audio'
              />}
            </div>
          </div>
          <div className='row'>
          <label htmlFor="numero" className="form-label">Tononkira</label>

            <div className="mb-3 col-md-12 d-flex">
            <div className="form-check">
                <input className="form-check-input"  checked={checked} onChange={handleTypeLyrics} name="lyrics" type="radio" value="0" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lahatsoratra
                </label>
              </div>
              <div className="form-check  ms-3">
                <input className="form-check-input" id="text" onChange={handleTypeLyrics} name="lyrics"type="radio" value="1"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Sary
                </label>
              </div>
             
            </div>
            <div className="mb-3 col-md-12">
              {
                typeLyrics === 0 
                ?

                <DefaultEditor value={htmlLyrics} onChange={handleChange} />
                :
                <input width="50%" type="file" className="form-control" name="file" onChange={handleImageLyrics} />
              }
              {(imageLyrics && typeLyrics === 1) && <img src={imageLyrics} alt="" className='w-50 mt-2' />}

              <div  className="form-text">Tonon-kira</div>
            </div>
          </div>
          
          <div className='d-flex justify-content-between align-items-center'>
              <button className="btn btn-primary btn-block btn-signin" type="submit">HAMPIDITRA HIRA</button>

          </div>
        </form>
        
    </div>
</div>
  )
}

export default AddMusic