import React,{ useEffect, useState  } from 'react'
import { MdInfo } from 'react-icons/md';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-responsive-pagination';
import { useMutationMusicDELETE } from '../../../../../common/hooks/useMutationMusic';
import { useQueryMusicAllGET } from '../../../../../common/hooks/useQueryMusic';
import { IResponse } from '../../../../../common/interfaces/IResponse';
import { MusicI } from '../../../../../common/interfaces/MusicI';
import { StateI } from '../../../../../common/interfaces/redux/StateI';
import { addMusic, getMusicPaginate, playMusicToggle, toggleLoader } from '../../../../../core/redux';
import ItemPlaylist from '../ItemPlaylist';
import playlisstStyle from '../../playlist.module.css'
function MusicPlaylist() {
      // const [musics, setmusics] = useState([]);
  const { mutate } = useMutationMusicDELETE();
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const musics = useSelector((state: StateI)=>state.music.musicPaginate);
  const totalMusicCount = useSelector((state:StateI)=>state.music.countMusicInFiv)
  const totalPages = Math.ceil(totalMusicCount/6)

  const dispatch = useDispatch();
  const {isLoading} = useQueryMusicAllGET((data:any)=>{
    const result = data?.data as IResponse
    dispatch(addMusic(result.data))
    dispatch(getMusicPaginate(0,6));
  },(e)=>{
    console.log(e);
    dispatch(toggleLoader(false))

  })

  dispatch(toggleLoader(isLoading))

  const goToPage = (cp)=>{
    setCurrentPage(cp)
    dispatch(getMusicPaginate((cp*6)-6,(cp*6)));
    
  }
  useEffect(()=>{
    dispatch(playMusicToggle(null))
  },[])
  return (
    <div className={`mb-5 ps-2 col-md-12 ${playlisstStyle.contentPlaylist} px-3 px-sm-0 px-md-0 pb-5 mb-3`}>
              
    {
      musics.length === 0 
      ?
      <div className='d-flex flex-column align-items-center mt-3'>
        <MdInfo  size={35}/>
        <h2 className='text-center'>Tsy misy hira</h2> 
      </div>
      :  
      musics.map((music:MusicI)=><ItemPlaylist music={music}  />)
    }

  {
  totalMusicCount>6 
  ? 
  <Pagination
    current={currentPage}
    total={totalPages}
    onPageChange={goToPage}
  />  : null
  }
  </div>
  )
}

export default MusicPlaylist