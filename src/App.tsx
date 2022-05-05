import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector }  from 'react-redux';

import Home from './share/pages/home';
import Profile from './share/pages/profile';
import Login from './share/pages/auth/login/index';
import Register from './share/pages/auth/register/index';
import Playlist from './share/pages/playlist';
import Sidebar from './share/components/sidebar';
import { StateI } from './common/interfaces/redux/StateI';
import { Private } from './routes/private';
import { Restrict } from './routes/restrict';
import Account from './share/pages/profile/account';
import MusicInAccount from './share/pages/profile/music';
import AddMusic from './share/pages/profile/addmusic';
import { clearLocalStorage } from './common/utils/token';
import PlayerBottom from './share/components/playerBottm';
import Loader from './share/components/loader';
import MusicPlaylist from './share/pages/playlist/components/music';
import Fivondronana from './share/pages/playlist/components/fivondronana';
import { playMusicToggle } from './core/redux';

function App() {
  const navigate = useNavigate();

  const showModal = useSelector((state: StateI)=>state.global.showModal);
  const showLecteur = useSelector((state: StateI)=>state.music.playCurentMusic);
  const isLoading = useSelector((state: StateI)=>state.global.loader);

  const toggleSidebar = (path:string)=>{
     navigate('playlist');
 
  }

  return (
    <div className="app">
      {/* <Loader enabled={isLoading}/> */}
      {showModal && <Sidebar toggleSidebar={toggleSidebar} />}
     <Routes>
       <Route  path='/' element={<Home  toggleSidebar={toggleSidebar} />}></Route>
       
       {/* RESTRICT ROUTE */}
       <Route element={<Restrict />}>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
       </Route>
       {/* END RESTRICT ROUTE */}

       {/* PRIVATE ROUTE*/}
       <Route element={<Private/>}>
        <Route path='/profile'  element={<Profile />}>
          <Route path='account' element={<Account />}></Route>
          <Route path='musics' element={<MusicInAccount />}></Route>
          <Route path='create-music' element={<AddMusic />}></Route>
        </Route>
        <Route path='/playlist' element={<Playlist />}>
          <Route path='musics' element={<MusicPlaylist />}></Route>
          <Route path='fivondronana' element={<Fivondronana />}></Route>
        </Route>
       </Route>
       {/*END PRIVATE ROUTE*/}
       <Route path='*' element={<h1>TSY MISY ILAY PAGE</h1>} />
     </Routes>
    { showLecteur &&  <PlayerBottom />}
        {/* <footer className='bgprimary-color text-white position-fixed bottom-0 w-100 border d-flex justify-content-center p-2'>
          @copyright - 20222 #aldo
        </footer> */}
    </div>
  );
}

export default App;
