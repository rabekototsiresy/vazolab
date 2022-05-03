import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { BiLogInCircle }from 'react-icons/bi';
import { CgMenuRound }from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './navbar.css';
import { PropsSidebarI } from '../../../common/interfaces/props/PropsSidebarI';
import { manageToken, toggleModal } from '../../../core/redux';
import { StateI } from '../../../common/interfaces/redux/StateI';
import { ModuleLinkI } from '../../../common/interfaces/ModuleLinkI';
import { toggleLogged } from '../../../core/redux';
import { getToken, removeToken } from '../../../common/utils/token';
import ReactTooltip from 'react-tooltip';
import swal from 'sweetalert';

function NAvbar(props: PropsSidebarI) {
    const moduleLink = useSelector((state:StateI)=>state.global.moduleLink);
    const dispatch = useDispatch();
    const isLogged = useSelector((state:StateI)=>state.global.isLogged);
    const [token, setToken] = useState<string|null>('');
    const navigate = useNavigate();
    useEffect(() => {
        setToken(getToken('token'));
    
    },[token])

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
    <nav className='d-flex justify-content-end px-sm-0 px-md-0 d-sm-block d-md-block py-3 py-sm-0 py-md-0 pe-3'>
        <ul className="nav d-none d-sm-flex d-md-flex justify-content-sm-center justify-content-md-center border px-2">
    
        <span className='flex-grow-1 d-flex'>
            {
                // eslint-disable-next-line array-callback-return
                moduleLink.map((link: ModuleLinkI)=>{
                    if(link.needAuth && (token || isLogged)){
                        return <li className="nav-item" key={link.path}>
                                    <NavLink to={link.path} className='nav-link '>{link.text}</NavLink>
                                </li>
                    }else if(link.path ==='/'){
                        return <li className="nav-item" key={link.path}>
                                    <NavLink to={link.path} className='nav-link '>{link.text}</NavLink>
                                </li>
                    }else if(((link.path === '/login') || (link.path === '/register')) && !(token || isLogged)){
                        return <li className="nav-item" key={link.path}>
                                    <NavLink to={link.path} className='nav-link '>{link.text}</NavLink>
                                </li>
                    }
                })
            }
        </span>
        {
            (isLogged || token) && <span className='cursor-pointer' data-tip='Hiala' onClick={logOut}>
            <BiLogInCircle size={30} />
            <ReactTooltip />

        </span>
        }
        
     
    </ul>
    <span className='cursor-pointer d-flex justify-content-between d-sm-none d-md-none  w-100 px-2 px-sm-0 px-md-0'>
        <CgMenuRound size={30} onClick={()=>dispatch(toggleModal())} />
        {(isLogged || token) && <BiLogInCircle  onClick={logOut} size={30}/>}

    </span>
    
    </nav>
  )
}

export default NAvbar