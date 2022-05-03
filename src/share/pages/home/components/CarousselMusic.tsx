import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import { useQueryFivGET } from '../../../../common/hooks/useQueryFiv';
import { FivI } from '../../../../common/interfaces/FivI';
import { IResponse } from '../../../../common/interfaces/IResponse';
import EmptyList from '../../../components/emptyList';
import SpanCustomize from '../../../components/spanCustomize';
import FoulardSM from '../../../components/svg/foulardSm';
import { useDispatch } from 'react-redux';
import { toggleLoader } from '../../../../core/redux';
import { FaMapPin } from 'react-icons/fa';
import { GiFlyingFlag } from 'react-icons/gi';
import { IoMdMap } from 'react-icons/io';
import { RiMapPinUserFill } from 'react-icons/ri';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
function CarousselMusic() {
  const [fivList, setFivList] = useState<FivI[]>([]);
  const dispatch = useDispatch();
  
  const {isLoading} = useQueryFivGET((response)=>{
    const result = response.data as IResponse
    setFivList(result.data);
  },(error)=>{
    console.log(error);
  })
  dispatch(toggleLoader(isLoading))



  return (
    <div className='mt-4'>
        <div className='d-flex align-items-center flex-column'>
            <h3>
                <b className='primary-color'>
                    Ireo fivondronana
                </b>
            </h3>
            <p className='text-center '>
              <SpanCustomize text="Fivondronana samihafa avy amin'ny diosezy maromaro" />
            </p>
        </div>
        <div>
        {
          fivList.length === 0 
          ? 
          <EmptyList text="Tsy misy fivondronana" />
          :
          <Carousel responsive={responsive}>
           {
             fivList && fivList.map((fiv:FivI)=>(
              <div className="d-flex flex-column mx-2 ">
                {/* <img src="https://fakeimg.pl/250x200/"/> */}
                <div className='border text-center'>
                  {/* <Foulard/> */}
                  <FoulardSM primaryColor={fiv.primary_color} secondaryColor={fiv.secondary_color} height={400} />
                </div>  
                <div className="d-flex border px-2">
                  <div className='flex-grow-1 d-flex flex-column' >
                    <span>
                      <RiMapPinUserFill size={20} />
                      <b>Diosezy:</b> 
                      <span className='ps-2'>{fiv.faritra?.diosezy?.name}</span>
                      </span>
                    <span>
                      <IoMdMap size={20} />
                      <b>Faritra:</b> 
                      <span className='ps-2'>{fiv.faritra?.name}</span>
                    </span>
                    <span>
                      <FaMapPin size={20} />
                      <b>Fiv:</b> 
                      <span className='ps-2'>
                        {fiv.name}
                      </span>
                    </span>
                    <span>
                      <GiFlyingFlag size={20} /><b>Faha: </b>
                      <span className='ps-2'>
                        {fiv.rang}
                      </span>
                      </span>
                  </div>
                  <div className='  flex-grow-1 d-flex flex-column align-items-center justify-content-center'>
                    <span className='border text-white rounded-circle px-3 py-2 text-center bgprimary-color'>
                      <h4>HIRA</h4>
                      <h4>{fiv.musics?.length}</h4>
                    </span>
                  </div>
                </div>
              </div>
             ))
           }
           
        </Carousel>
        }
        </div>
    </div>
  )
}

export default CarousselMusic