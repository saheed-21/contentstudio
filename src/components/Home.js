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
    <p>----X-- ABOUT US --X----</p>
    <p>Your Gateway to Infinite Discoveries! We curate, explore, and celebrate diverse content, delivering enriching experiences for every interest. Discover, share, and embark on a journey of endless fascination with us. Join our vibrant community shaping the future of content discovery!</p>
    </div>
  )
}
export default Home;