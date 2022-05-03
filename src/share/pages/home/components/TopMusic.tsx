import React,{useState} from 'react'
import { IoIosNavigate,IoIosPlayCircle } from 'react-icons/io';
import homeStyles from '../home.module.css';
import imageFiv from '../../../../common/assets/images/camp.jpg';
import { Ifiv } from '../../../../common/utils/IFiv';
import SpanCustomize from '../../../components/spanCustomize';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQueryMusicLimitGET } from '../../../../common/hooks/useQueryMusic';
import { IResponse } from '../../../../common/interfaces/IResponse';
import { toggleLoader } from '../../../../core/redux';
import EmptyList from '../../../components/emptyList';
import { MusicI } from '../../../../common/interfaces/MusicI';
import ItemPlaylist from '../../playlist/components/ItemPlaylist';
function TopMusic() {
    const [musics, setMusics] = useState([])
    const dispatch = useDispatch();
    
    const {isLoading,isFetching} = useQueryMusicLimitGET((response)=>{
      setMusics(response.data.data);
    },(error)=>{
      console.log(error);
    })
//    dispatch(toggleLoader(isLoading))
  

  return (
    <div className='row mt-5 d-flex flex-column align-items-center '>
        
        {/* LISTE DES TOP MUSIC */}
            
            <div className="col-md-8  mt-sm-0 mt-md-0 mt-5 flex-column align-items-center">
                <div className='d-flex align-items-center flex-column'>
                    <h3>
                        <b className='primary-color'>
                            Santionany hoan'ireo hira
                        </b>
                    </h3>
                    <p>
                        <SpanCustomize text="Hira maro isan-karazany" />
                    </p>
                </div>
                <div className='d-flex flex-column '>
                {
                    musics.length === 0 
                    ?
                    <EmptyList text="Tsy mbola misy hira" />
                    :  
                    musics.map((music:MusicI)=><ItemPlaylist music={music}  />)
                  }

                    {
                        // test.map((v,i)=>(
                        //     <div key={i} className='d-flex justify-content-between align-items-center my-2 border-bottom'>
                        //         <div className='d-flex align-items-center'>
                        //             <div>
                        //                 <img  src={imageFiv} alt="" width={100} />
                        //             </div>
                        //             <div className='d-flex flex-column px-2'>
                        //                 <span>Lohateny: Nivo</span>
                        //                 <span>12:36</span>
                        //             </div>
                        //         </div>
                        //         <div>
                                   
                        //         </div>
                        //         <div>
                        //             <IoIosPlayCircle  size={35}/>
                        //         </div>
                        //     </div>
                        // ))
                    }
                    
                </div>
            </div>
        
    </div>
  )
}

export default TopMusic