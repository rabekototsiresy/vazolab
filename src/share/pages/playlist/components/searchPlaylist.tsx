import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMutationMusicSearchGET } from '../../../../common/hooks/useMutationMusic';
import { useQueryMusicAllGET } from '../../../../common/hooks/useQueryMusic';
import { IResponse } from '../../../../common/interfaces/IResponse';
import { addMusic, getMusicPaginate, toggleLoader } from '../../../../core/redux';
import Loader from '../../../components/loader';
import SpanCustomize from '../../../components/spanCustomize';
import imageTopStyle from '../playlist.module.css';


function SearchPlaylist() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const { mutate ,isLoading: searching} = useMutationMusicSearchGET('',(data)=>{
    const result = data?.data as IResponse
    dispatch(addMusic(result.data))
    dispatch(getMusicPaginate(0,6));
  },
  (e)=>console.log(e))
  const {isLoading,refetch,isFetching} = useQueryMusicAllGET((data:any)=>{
    const result = data?.data as IResponse
    dispatch(addMusic(result.data))
    dispatch(getMusicPaginate(0,6));
  },(e)=>{
    console.log(e);
  },false)

  const search = (e)=>{
    e.preventDefault();
    dispatch(toggleLoader(true));
    if(searchTerm){
      mutate(searchTerm,{
        onSuccess: (res)=>{
          dispatch(toggleLoader(false));
        },
        onSettled: ()=>{
          dispatch(toggleLoader(false));
        }
      })
    }else{
      refetch();
    }
  }

  const location = useLocation();
  const showBarSearch = ()=>{
    const inMusic = location.pathname.split("/")[2];
    if(inMusic === 'musics')return true
    return false

  }
  return (
    <div>
      <Loader enabled={searching} />
    <div className={` container-fluid ${imageTopStyle.imageTopPlaylist}`}>
      <div className="row d-flex h-100 align-items-center justify-content-center">
      <div className='col-md-6 d-flex flex-column justify-content-center'>
        <h3 className='text-center my-3'>
          <b className={`px-5 py- primary-color ${imageTopStyle.ptext}`}>Hira skoto</b>
        </h3>
        <p className='text-center'>
          <SpanCustomize text="Sambatra ny manome nohon'ny mandray"/>
        </p>
        
        <form className={imageTopStyle.formSearch} onSubmit={search} hidden={!showBarSearch()}>
          <input onChange={(e)=>setSearchTerm(e.target.value)} className={imageTopStyle.inputSearch} />
          <button  className={imageTopStyle.buttonSearch} type="submit">HITADY</button>
        </form>
      </div>
      </div>
    </div> 
    </div>
  )
}

export default SearchPlaylist