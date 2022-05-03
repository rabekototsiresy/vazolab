import {  Outlet,Navigate } from 'react-router-dom';
import { getToken } from '../../common/utils/token';
import { useSelector } from 'react-redux';
import { StateI } from '../../common/interfaces/redux/StateI';
export const Private = ()=>{
  const isLogged = useSelector((state:StateI)=>state.global.isLogged);

  const token = getToken('token');
  return (token || isLogged) ? <Outlet /> : <Navigate to='/' />
   
}