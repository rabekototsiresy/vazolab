import React from 'react'
import { GiTrumpetFlag } from 'react-icons/gi'
import { MdLibraryMusic } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

function SideBarPlaylist() {
  return (
    <div className="col-md-2 ps-3 d-flex flex-column border p-lg-0 p-md-0 p-sm-0 p-xl-0  border-top-0 border-bottom border-start-1 border">
      <NavLink to={'musics'} className="nav-link p-2 text-decoration-none d-flex align-items-center">
        <span>
          <MdLibraryMusic />
        </span>
        <span className='ms-2 '>
          Hira
        </span>
        
      </NavLink>
      <NavLink to={'fivondronana'} className="nav-link p-2 text-decoration-none d-flex align-items-center">
        <span>
          <GiTrumpetFlag />
        </span>
        <span className='ms-2'>
          Fivondronana
        </span>
      </NavLink>

      
    </div>
  )
}

export default SideBarPlaylist