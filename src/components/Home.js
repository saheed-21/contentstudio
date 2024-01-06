import React from 'react'
import MediaCard from './sports'
import Automobiles from './automobile'
import ImgMediaCard from './countries';
import Gaming from './gaming';
import '../assets/css/Home.css'
import Technology from './technology';
import Entertainment from './entertainment';
import Lifestyle from './lifestyle';
import Art from './art';
import Photography from './photography';

function Home(){
  return(
    <div className='home'>
    <><MediaCard /><ImgMediaCard /><Automobiles/><Gaming /><Technology/><Entertainment /><Lifestyle/><Art /><Photography/></><br></br><br></br><br></br>
    
    </div>
  )
}
export default Home;