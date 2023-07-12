import React from 'react'
import { MenuList } from '../helpers/Menu.lst'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
// import BannerImage from '../assets/bg-homepage.jpg'
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.div className='menu'
    initial= {{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key)=>{
                return <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}
                />
            })}
        </div>

    </motion.div>
  )
}

export default Menu