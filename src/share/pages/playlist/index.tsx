import React,{ useState  } from 'react'
import NAvbar from '../../components/navbar'
import ImageTop from '../home/components/ImageTop'
import SearchPlaylist from './components/searchPlaylist'
import SideBarPlaylist from '../../components/sideBarPlaylist'

import { Outlet } from 'react-router-dom';



function Playlist() {


  return (
    <div>
        <NAvbar toggleSidebar={()=>{}}/>
        <SearchPlaylist />
        <div className="container" >
          <div className="row mb-2">
          <SideBarPlaylist />
          <div className='col-md-10 mt-2'>
            <Outlet  />
          </div>
          </div>
        </div>
        <footer className='bgprimary-color text-white position-fixed bottom-0 w-100 border d-flex justify-content-center p-2'>
          @copyright - 20222 #aldo
        </footer>
    </div>
  )
}

export default Playlist