import React from 'react'
import Navbar from '../components/Navbar';
import Brief from '../components/Brief';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const Home = () => {

  // document.querySelector('video').playbackRate = 3.0;
  return (
    <div>

    <Navbar />
    <Brief />
    <Skills />
    {/* <div className="videos" style={{
      borderTop:"3px solid white",
      paddingTop:"20px"
    }} >

    <video autoplay loop muted
    style={{
      height:"200px",
      borderRadius:"10px",
    }}  >
      <source src='schoolrec.mp4' />
    </video>
      </div> */}
    <Footer />
    </div>
  )
}

export default Home