import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import BannerImage from '../assets/bg-homepage.jpg'
const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1>Italian Pizza</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
        <button style={{display:'block'}}>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home