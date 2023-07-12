import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import BannerImage from '../assets/bg-homepage.jpg'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div className='home' style={{backgroundImage: `url(${BannerImage})` }}
      initial= {{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    
    >
      <div className='headerContainer' >
        <h1>Italian Pizza</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
        <button style={{display:'block'}}>Order Now</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home