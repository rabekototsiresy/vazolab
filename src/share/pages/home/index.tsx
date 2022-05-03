import React,{useEffect} from 'react'
import Footer from '../../components/footer';
import NAvbar from '../../components/navbar';
import CarousselMusic from './components/CarousselMusic';
import ImageTop from './components/ImageTop';
import TopMusic from './components/TopMusic';
import { PropsSidebarI } from '../../../common/interfaces/props/PropsSidebarI';
import Loader from '../../components/loader';
import { getAllfivondronana } from '../../../core/services/fivondronanaService';
import { playMusicToggle } from '../../../core/redux';
import { useDispatch } from 'react-redux';

function Home(props: PropsSidebarI) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(playMusicToggle(null))
  },[])
  

 
  return ( 
    <div >
      {/* <Loader enabled={true}/> */}
      <ImageTop />
      <NAvbar toggleSidebar={props.toggleSidebar} />
      <div className="container">
        <CarousselMusic />
        <TopMusic />
      </div>
      <Footer />
    </div>
  )
}

export default Home