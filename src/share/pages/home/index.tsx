import React,{useEffect} from 'react'
import Footer from '../../components/footer';
import NAvbar from '../../components/navbar';
import CarousselMusic from './components/CarousselMusic';
import ImageTop from './components/ImageTop';
import TopMusic from './components/TopMusic';
import { PropsSidebarI } from '../../../common/interfaces/props/PropsSidebarI';
import Loader from '../../components/loader';
import { getAllfivondronana } from '../../../core/services/fivondronanaService';

function Home(props: PropsSidebarI) {
  
  

 
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