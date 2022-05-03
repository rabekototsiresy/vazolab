import React, { Fragment, useState } from 'react';
import {useAlert} from 'react-alert';
import {useNavigate } from 'react-router-dom';
import { useMutationAuthLoginPOST } from '../../../../common/hooks/useMutationAuth';
import { IResponse } from '../../../../common/interfaces/IResponse';
import Loader from '../../../components/loader';
import NAvbar from '../../../components/navbar';
import { manageToken, toggleLogged } from '../../../../core/redux'
import {setToken} from '../../../../common/utils/token';
import { useDispatch,useSelector } from 'react-redux';
import './login.css'
import { setTimeNow } from '../../../../common/utils/time';



function Login() {
    const [access_name, setAccess_name] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState<boolean>(false)
    const { mutate } = useMutationAuthLoginPOST();
    const navigate = useNavigate();
    const alert = useAlert()
    const dispatch = useDispatch();
    const loginSubmit = (e: any): void=>{
      e.preventDefault();
      setLoader(true)
      mutate({access_name,password},{
        onSuccess: (data)=>{
          const loginResult = data.data as IResponse;
          if(loginResult.success){
            const token = loginResult.data.access_token;
            alert.success(loginResult.message);
            setToken(token);
            setTimeNow();
            dispatch(manageToken(token));
            dispatch(toggleLogged(true))
            navigate('/playlist/musics');
          }else{
            alert.error(loginResult.message);
          }
          setLoader(false)
        }
      })
    }

 
  return (

    <Fragment>
        <Loader enabled={loader} />
        <div className='position-absolute w-100'>
            <NAvbar toggleSidebar={()=>{}} />
        </div>
        <div className="container d-flex justify-content-center align-items-center main-login">
        <div className="row ">
          <form className="border p-3 rounded" onSubmit={(e)=>loginSubmit(e)}>
                  <h1>Hiditra</h1>
                  <p className="text-muted">Hiditra amin'ny kaonty</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                    <input  
                      type="text" 
                      className="form-control" 
                      placeholder="Anarana tokana" 
                      aria-label="Teny miafina" 
                      aria-describedby="basic-addon1" 
                      onChange={(e)=>setAccess_name(e.target.value)}
                      required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Teny miafina" 
                      aria-label="Teny miafina"
                      ria-describedby="basic-addon1" 
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                    />
                </div>
                  
                  <div className="row">
                    <div className="col-6">
                      <button type="submit" className="btn btn-primary px-4">Hiditra</button>
                    </div>
                    {/* <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
                    </div> */}
                  </div>
                
              
           
          </form>
        </div>
      </div>
    </Fragment>
    
  )
}

export default Login