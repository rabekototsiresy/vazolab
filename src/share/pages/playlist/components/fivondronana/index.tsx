import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import djembe from '../../../../../common/assets/images/djembe.jpeg'
import { useQueryFivGET } from '../../../../../common/hooks/useQueryFiv';
import { FivI } from '../../../../../common/interfaces/FivI';
import { IResponse } from '../../../../../common/interfaces/IResponse';
import { toggleLoader } from '../../../../../core/redux';
import FoulardSM from '../../../../components/svg/foulardSm';

function Fivondronana() {
    const [fivList, setFivList] = useState<FivI[]>([]);
    const dispatch = useDispatch();
    
    const {isLoading,isFetching} = useQueryFivGET((response)=>{
      const result = response.data as IResponse
      setFivList(result.data);
    },(error)=>{
      console.log(error);
    })
    dispatch(toggleLoader(isLoading))  
    return (
    <div className='row mt-2 mb-5 px-2'>
        {
            fivList.map((fiv)=>(
                <div className="row col-md-12 d-flex align-items-center my-2 border">
                    {/* <img src={djembe} alt="Avatar"className="rounded-images"/> */}
                        <div className="col-md-5">
                            <FoulardSM  primaryColor={fiv.primary_color} secondaryColor={fiv.secondary_color} height={130} />

                        </div>
                        <div className='col-md-7'>
                            <ul className='list-style-none'>
                                <li> <b>{fiv.faritra?.diosezy?.name}</b></li>
                                <li className='fw-light'> {fiv.faritra?.name}</li>
                                <li className='fw-light'>Faha {fiv.rang} {fiv.name} </li>
                                <li className='fw-light'>Hira : {fiv.musics.length}</li>
                                {/* <li>
                                    <button className='btn btn-default border'>Hijery</button>
                                </li> */}
                            </ul>
                        </div>
                </div>
            ))
        }
    </div>
  )
}

export default Fivondronana