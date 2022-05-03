import { useAlert } from 'react-alert';
import {  useNavigate, } from 'react-router-dom'

export const  goToLoginUnAuthorized = (e)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const alert = useAlert();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    
    if(e.response.status === 401){
        alert.success(`Mila connetee azafady`);
        navigate('/login');
      }
      return;
}