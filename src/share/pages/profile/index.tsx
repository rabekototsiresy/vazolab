import React, { Fragment, useEffect } from 'react';
import NAvbar from '../../components/navbar';
import {Link, Outlet,useLocation } from 'react-router-dom';
import './profile.css';
import { getToken,decodeToken } from '../../../common/utils/token';
import { useQueryMusicByFivGET } from '../../../common/hooks/useQueryMusic';
import Loader from '../../components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../common/interfaces/redux/StateI';
import { addMusic, getCountMusicInFiv, playMusicToggle } from '../../../core/redux';
import avatar from '../../../common/assets/images/profile.png'

function Profile() {
    const tokenFromRedux = useSelector((state: StateI)=>state.global.token)
    const token = getToken('token') || tokenFromRedux|| '';
    const infoProfile = decodeToken(token);
    const { fiv_name,fiv_rang,faritra,id_fiv} = infoProfile.sub;
    const location:any = useLocation();
    const isLoading = useSelector((state: StateI)=>state.global.loader);
    const musics = useSelector((state: StateI)=>state.music.musicList);
    const countMusic = useSelector((state: StateI)=>state.music.countMusicInFiv);

    const dispatch = useDispatch();

    useQueryMusicByFivGET(id_fiv,(response)=>{
        dispatch(addMusic(response))
        dispatch(getCountMusicInFiv(response.length))
    },
    (e)=>{
    }
    ,
    (response)=>{
        return response.data.data.musics;
    }
    )


    const getTitle = ()=>{
        
        const link = location.pathname.split("/")
        if(!link[2]){
            return 'Momba ny kaontiko'
        }
        switch (link[2]) {
            case 'account':
                return 'Kaontiko'
            case 'create-music':
                return 'Hampiditra hira'
                
            case 'musics':
                return 'Hira'
            default:
                break;
        }
    }
    useEffect(()=>{
        dispatch(playMusicToggle(null));
    },[])
  return (
    <Fragment>
        {/* <Loader enabled={isLoading}/> */}
      <NAvbar  toggleSidebar={()=>{}} />
      <div className="container padding-bottom-3x mb-2 my-5 pb-5">
        <div className="row">
            <div className="col-lg-4">
                <aside className="user-info-wrapper">
                    <div className="user-cover" style={{backgroundImage:"url(https://bootdey.com/img/Content/bg1.jpg);"}}>
                    </div>
                    <div className="user-info">
                        <div className="user-avatar">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="user-data">
                            <h4>{`${fiv_rang}`}<sup>eme</sup></h4>
                            <h4>{`${fiv_name}`}</h4>
                            <span>{faritra}</span>
                        </div>
                    </div>
                </aside>
                <nav className="list-group">
                    <Link className="list-group-item with-badge" to='/profile/account'>
                        <i className=" fa fa-th"></i>Kaonty
                    </Link>
                    <Link className="list-group-item with-badge" to='/profile/musics'>
                        <i className="fa fa-user"></i>Hira<span className="badge badge-primary badge-pill">{countMusic}</span>
                    </Link>
                    <Link className="list-group-item" to='/profile/create-music'>
                        <i className="fa fa-map"></i>Hampiditra hira
                    </Link>
                </nav>
            </div>
            <div className="col-lg-8 mb-5 mb-sm-0 mb-md-0 mb-lg-0">
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
               <div>
                    <h2>{getTitle()}</h2>
               </div>
                <hr className="mb-4" />
                <div>
                    <Outlet context={musics}  />
                </div> 
            </div>
        </div>
    </div>
    <footer className=' bgprimary-color text-white position-fixed bottom-0 w-100 border d-flex justify-content-center p-2'>
        @copyright - 20222 #aldo
    </footer>
    </Fragment>

  )
}

export default Profile;