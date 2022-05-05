import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import '../a.css'
import djembe from '../../../../common/assets/images/djembe.jpg';
import { IoIosPlayCircle } from 'react-icons/io';
import { MdPauseCircle, MdRemoveCircle} from 'react-icons/md';

import Lyrics from '../../../components/lyrics';
import { deleteMusicRedux, playMusicToggle, toggleLoader,getCountMusicInFiv } from '../../../../core/redux';
import { StateI } from '../../../../common/interfaces/redux/StateI';
import { PropsItemPlaysitI } from '../../../../common/interfaces/props/PropsItemPlaysitI';
import playlistStyle from '../playlist.module.css';
import { MusicI } from '../../../../common/interfaces/MusicI';
import ReactTooltip from 'react-tooltip';
import { deleteMusic } from '../../../../core/services/musicService';
import swal from 'sweetalert';
import { IResponse } from '../../../../common/interfaces/IResponse';
import { useLocation } from 'react-router-dom';
import { SwalOptions } from 'sweetalert/typings/modules/options';
import { BiTimeFive } from 'react-icons/bi';
import { FaMapPin } from 'react-icons/fa';



function ItemPlaylist(props: PropsItemPlaysitI) {
    const {title,duration,lyrics,id,type_lyrics ,fivondronana} = props.music;
    const dispatch = useDispatch();
    const isPlaying = useSelector((state: StateI)=>state.music.playCurentMusic);
    const musics = useSelector((state: StateI)=>state.music.musicList);
    const location = useLocation();
    const currentLocation:any = location.pathname.split("/");
    dispatch(getCountMusicInFiv(musics.length))
    const playMusic = (music:MusicI)=>{
        dispatch(playMusicToggle(music));
    }
    const remove = (id:number)=>{
                swal({
                    title: "Tena ho fafaina ve ? ",
                    text: "Raha vao fafana ity hira ity dia tsy ho hita anaty lisitra instsony!",
                    icon: "warning",
                    buttons: ['Tsia','Eny'],
                    dangerMode: true,
                    
                  } as SwalOptions)
                  .then((willDelete) => {
                      if(willDelete){
                        dispatch(toggleLoader(true))
                        dispatch(deleteMusicRedux(id));
                        deleteMusic(id).then((res)=>{
                            const result = res.data as IResponse;
                            if(result.success){
                              dispatch(props.getMusicPaginate((props?.currentPage*6)-6,(props?.currentPage*6)))
                              dispatch(toggleLoader(false))
                              // queryClient.invalidateQueries("musics-api")
                              swal(result.message, {
                                  icon: "success",
                                });
                            }                       
                          }).catch(e=>{
                              dispatch(toggleLoader(false))
                              swal(e.message, {
                                  icon: "error",
                                });
                          });
                      }
                      return

                                
                  });
                  
    }

    const hiddenRemoveIcon = ()=>{
        if(currentLocation[1] === 'playlist' || currentLocation[1] === ''){
            return true
        }
        return false
    }
    const hiddenFaritra = ()=>{
        if(currentLocation[1] === 'musics' || localStorage.getItem('root')){
            return true
        }
        return false;
    }

    const getTitle = (title:string) =>{

        const titleSplited = title.split(" ");
        if(titleSplited.length>=2){
            return titleSplited[0]+"...";
        }

        return title
    }
  return (
    <div key={id} className={` ps-3 pe-0 my-1 border-bottom ${playlistStyle.item}`}>
        <div className={playlistStyle.itemPlay}>
            {
            (isPlaying && isPlaying.id === id) 
            ?
            <MdPauseCircle  size={35} className='d-bloc   '/>
            :
            <IoIosPlayCircle  size={35} className='d-bloc' onClick={()=>playMusic(props.music)}/>
            }
           
        </div>
        <div className={` d-none d-sm-block d-md-block px-2 py-1 ${playlistStyle.contentImageMusic}`}>
            <img src={djembe} alt="..." className=" img-fluid radius50" width={50} />
        </div>
        <div className={`px-2 ${playlistStyle.itemTitle}`}>
            <span className='d-block d-md-none d-sm-none'>
            {
                getTitle(title).length <= 10 ? getTitle(title) : `${(getTitle(title) as unknown as string).substring(0,10)}...`
            }
            </span>
            <span className='d-none d-sm-block d-md-block'>
                {title}
            </span>
        </div>
        <div hidden={hiddenFaritra()} className={`${playlistStyle.itemFiv} d-none d-md-block d-sm-block`}>
             { 
             fivondronana?.rang && fivondronana.rang 
             && 
             <><FaMapPin size={20} />{fivondronana?.rang}<sup>eme</sup>{fivondronana?.name}</>
             }
        </div>
        <div className={`${playlistStyle.itemDuration} d-flex align-items-center justify-content-center`}>
           <BiTimeFive size={20} className="d-none d-sm-block d-md-block" /> <span className='text-white px-1 d-none d-sm-block d-md-block'> |</span> {duration}
        </div>
        <div className='px-2'>
            <Lyrics lyrics={lyrics} title={title} type_lyrics={type_lyrics}/>
        </div>
        <div hidden={hiddenRemoveIcon()} className='px-2 cursor-pointer' data-tip="Hamafa" onClick={()=>remove(id)}>
            <MdRemoveCircle size={40} color="red"/>
            <ReactTooltip />
        </div>
    </div>
  )
}

export default ItemPlaylist;