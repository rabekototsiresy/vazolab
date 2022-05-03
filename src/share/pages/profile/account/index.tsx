import React, { useEffect, useState } from 'react'
import { RiAccountPinBoxLine, RiMapPinUserFill } from 'react-icons/ri';
import { FaMapPin, } from 'react-icons/fa';
import { decodeToken, getToken } from '../../../../common/utils/token';
import { GiFlyingFlag } from 'react-icons/gi';
import {  IoMdMap } from 'react-icons/io';
import { playMusicToggle } from '../../../../core/redux';
import { useDispatch } from 'react-redux';



function Account() {
  const token = getToken('token') || '';
    const [infoProfile, setInfoProfile] = useState(decodeToken(token));
    const { fiv_name,fiv_rang,faritra,diosezy,access_name} = infoProfile.sub;
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(playMusicToggle(null));
    },[])
  return (
    <div className="table-responsive wishlist-table margin-bottom-none">
                    <table className="table">
                        
                        <tbody>
                            <tr>
                                <td>    
                                    <div className="info_account">
                                        <span className="product-thumb">
                                          <RiAccountPinBoxLine size={20} />
                                        </span>
                                        <span className='ms-2'>
                                          Anarana tokana: 
                                        </span>
                                        <div className="text-lg text-medium text-muted ms-2">
                                          {access_name}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>    
                                    <div className="info_account">
                                        <span className="product-thumb">
                                          <FaMapPin size={20} />
                                        </span>
                                        <span className='ms-2'>
                                          Fivondronana: 
                                        </span>
                                        <div className="text-lg text-medium text-muted ms-2">
                                          {fiv_name}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>    
                                    <div className="info_account">
                                        <span className="product-thumb">
                                          <GiFlyingFlag size={20} />
                                        </span>
                                        <span className='ms-2'>
                                          Faha: 
                                        </span>
                                        <div className="text-lg text-medium text-muted ms-2">
                                          {fiv_rang}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>    
                                    <div className="info_account">
                                        <span className="product-thumb">
                                          <IoMdMap size={20} />
                                        </span>
                                        <span className='ms-2'>
                                          Faritra: 
                                        </span>
                                        <div className="text-lg text-medium text-muted ms-2">
                                          {faritra}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>    
                                    <div className="info_account">
                                        <span className="product-thumb">
                                          <RiMapPinUserFill size={20} />
                                        </span>
                                        <span className='ms-2'>
                                          Diosezy: 
                                        </span>
                                        <div className="text-lg text-medium text-muted ms-2">
                                          {diosezy}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            
                            
                          
                        </tbody>
                    </table>
                </div>
  )
}

export default Account