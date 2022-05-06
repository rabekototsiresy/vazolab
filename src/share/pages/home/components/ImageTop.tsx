import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import imageTopStyle from '../home.module.css'

import { getToken } from '../../../../common/utils/token';

function ImageTop() {
  const [token, setToken] = useState<string|null>('')
  useEffect(() => {
    setToken(getToken('token'));
  },[token])

  
  return (
    <div className={`container-fluid ${imageTopStyle.imageTop}`}>
      {(!token) &&<div className='position-absolute end-0   d-flex justify-content-end'>
        <span className='px-5 py-3 cursor-pointer text-white '>
           <NavLink to='/register' className={imageTopStyle.listyLinkNone}>
            HANOKATRA KAONTY
          </NavLink>
        </span>
        <span className='px-5 py-3 text-white cursor-pointer'>
          <NavLink to='/login' className={imageTopStyle.listyLinkNone}>
            HIDITRA
          </NavLink>
        </span>
      </div>}
      <div className="row d-flex h-100 align-items-center justify-content-center">
      <div className='col-md-6 d-flex flex-column justify-content-center'>
        <h3 className='text-center primary-color '>
          <b className='p-4 text-white'>Hira skoto</b>
        </h3>
        <p className='text-center text-primary '>
          <span className='bg-green p-2 text-white '>
            Sambatra ny manome nohon'ny mandray
          </span>
        </p>
        
        {/* <form className={imageTopStyle.formSearch}>
          <input className={`${imageTopStyle.inputSearch} py-2 px-2`} placeholder='Lohateny ...'/>
          <button className={imageTopStyle.buttonSearch}>HITADY</button>
        </form> */}
      </div>
      </div>
    </div> 
  )
}

export default ImageTop