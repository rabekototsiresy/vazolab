import React,{useEffect, useState} from 'react'
import { MdInfo } from 'react-icons/md';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useQueryMusicByFivGET } from '../../../../common/hooks/useQueryMusic';
import { MusicI } from '../../../../common/interfaces/MusicI';
import { StateI } from '../../../../common/interfaces/redux/StateI';
import { goToLoginUnAuthorized } from '../../../../common/utils/goToLoginUnAuthorized';
import { decodeToken, getToken } from '../../../../common/utils/token';
import { addMusic, getMusicPaginate, toggleLoader } from '../../../../core/redux';
import ItemPlaylist from '../../playlist/components/ItemPlaylist';
import Pagination from 'react-responsive-pagination';
import { useIsFetching } from 'react-query';


function MusicInAccount() {
    const tokenFromRedux = useSelector((state: StateI)=>state.global.token)
    // const totalP = useSelector((state: StateI)=>state.music.countMusicInFiv)
    const [currentPage, setCurrentPage] = useState(1);

    const token = getToken('token') || tokenFromRedux|| '';
    const infoProfile = decodeToken(token);

    const totalMusicCount = useSelector((state:StateI)=>state.music.countMusicInFiv)
    const totalPages = Math.ceil(totalMusicCount/6)

    const {id_fiv} = infoProfile.sub;   
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(6)
    // const musics:any = useOutletContext()
    // const musics = useSelector((state: StateI)=>state.music.musicList).slice(begin,end);
    const musics = useSelector((state: StateI)=>state.music.musicPaginate);

    const dispatch = useDispatch();
    const {isLoading,isFetching } = useQueryMusicByFivGET(id_fiv,(response)=>{
      dispatch(addMusic(response))
    dispatch(getMusicPaginate(0,6));
      // setMusics(response);
      // setMusicCount(response.length)
    },
    (e)=>{
        // goToLoginUnAuthorized(e)
    }
    ,
    (response)=>{
        return response.data.data.musics;
    }
    )
    
    const goToPage = (cp)=>{

      setCurrentPage(cp)
      dispatch(getMusicPaginate((cp*6)-6,(cp*6)));
      
    }

    dispatch(toggleLoader(isLoading||isFetching))

  return (
    <div>
        <div className="table-responsive wishlist-table margin-bottom-none">
                  {
                   musics.length === 0 
                   ?
                   <div className='d-flex flex-column align-items-center mt-3'>
                      <MdInfo  size={35}/>
                      <h2 className='text-center'>Tsy misy hira</h2> 
                    </div> 
                   :
                   musics.map((music:MusicI)=><ItemPlaylist music={music} getMusicPaginate={getMusicPaginate} currentPage={currentPage} />)
                  }
                  {
                    totalMusicCount > 6 
                    ? 
                   <Pagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={goToPage}
                    
                  /> 
                  :
                   null}

        </div>
    </div>
  )
}

export default MusicInAccount