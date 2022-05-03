import React,{useEffect,useState} from 'react'
import { BiLogInCircle } from 'react-icons/bi';
import logo from '../../../common/assets/images/fleur_de_lys.jpeg';

import { NavLink, useNavigate } from 'react-router-dom';
import sidebarStyle from './sidebar.module.css';
import { PropsSidebarI } from '../../../common/interfaces/props/PropsSidebarI';
import { useDispatch,useSelector } from 'react-redux';
import { manageToken, toggleLogged, toggleModal } from '../../../core/redux';
import { StateI } from '../../../common/interfaces/redux/StateI';
import { ModuleLinkI } from '../../../common/interfaces/ModuleLinkI';
import { getToken, removeToken } from '../../../common/utils/token';
import swal from 'sweetalert'



function Sibebar(props: PropsSidebarI) {
  const dispatch = useDispatch();
  const moduleLink = useSelector((state: StateI)=>state.global.moduleLink);
  const isLogged = useSelector((state:StateI)=>state.global.isLogged);

  const [token, setToken] = useState<string|null>('')
  useEffect(() => {
    setToken(getToken('token'));

},[token])
  const navigate = useNavigate();
  const logOut = ()=>{
    swal({
        title: "Tena hiala ve ? ",
        text: "",
        icon: "warning",
        buttons: ['Hiverina','Eny'],
        dangerMode: true,
      })
      .then((willDelete) => {
          if(willDelete){
            dispatch(toggleLogged(false));
            removeToken('token');
            dispatch(manageToken(''));
            navigate('/login');
          }
          return             
      });
}


  return (
    <div className={sidebarStyle.sidebar}  onClick={()=>dispatch(toggleModal())}>
      <div className='d-flex flex-column align-items-center'>
        <img src={logo} alt="" width={100} />
        <span className={sidebarStyle.bottomBorder}></span>
      </div>
          <ul className="nav mt-3 d-flex flex-column px-3">
         

{
                // eslint-disable-next-line array-callback-return
                moduleLink.map((link: ModuleLinkI)=>{
                    if(link.needAuth && (token || isLogged)){
                        return <li className="nav-item text-white   d-flex align-items-center cursor-pointer"  onClick={()=>navigate(link.path)}>  
                                  {link.icon}
                                <span className='nav-link text-white '>{link.text}</span>
                                </li>
                       
                    }else if(link.path === '/'){
                      return <li className="nav-item  text-white d-flex align-items-center cursor-pointer"  onClick={()=>navigate(link.path)}>  
                                {link.icon}
                              <span className='nav-link tewt-white'>{link.text}</span>
                              </li>
                    }else if(((link.path === '/login') || (link.path === '/register')) && !(token || isLogged)){
                      return <li className="nav-item   d-flex align-items-center cursor-pointer"  onClick={()=>navigate(link.path)}>  
                              {link.icon}
                            <span className='nav-link text-white'>{link.text}</span>
                            </li>
                    }
                })
            }
           { (isLogged || token)  && 
          <li className="nav-item   d-flex align-items-center cursor-pointer" onClick={logOut}>   
                <BiLogInCircle size={20} color={'#fff'}/>  
              <span className='nav-link text-white'>HIALA</span>
          </li>}
         
      </ul>
      
    </div>
  )
}

export default Sibebar