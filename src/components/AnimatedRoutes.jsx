import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/*" exact Component={Home}/>
             <Route path="/menu" exact Component={Menu}/>
            <Route path="/about" exact Component={About}/>
            <Route path="/contact" exact Component={Contact}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes