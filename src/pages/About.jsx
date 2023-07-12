import React from 'react'
import AboutPizza from '../assets/pizza-about.jpg'
import '../styles/About.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className='about'
    initial= {{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='aboutTop' style={{backgroundImage: `url(${AboutPizza})` }}>

        </div>
        <div className='aboutBottom'>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum dolores aliquid quos libero enim alias, quo animi non id voluptas esse dolor, tempore assumenda. Laboriosam modi, minima illum minus magnam sed, ab at animi voluptatem asperiores quibusdam? Possimus corporis dolorem dolore libero quasi corrupti, mollitia incidunt ratione adipisci nostrum obcaecati eaque tenetur amet voluptate ea. Veniam, libero iusto. Voluptates deserunt beatae iure qui debitis. Enim architecto eos repudiandae iusto a quos, alias vitae laborum dolorem consequatur laudantium ex fuga aperiam harum asperiores esse error eligendi est obcaecati recusandae autem ducimus, excepturi inventore dolorum! Veniam quidem tenetur officia maxime necessitatibus.</p>
        </div>
    </motion.div>
  )
}

export default About