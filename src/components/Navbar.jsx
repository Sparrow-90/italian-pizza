import React, {useState} from 'react'
import Logo from '../assets/pizza-logo.svg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {FaBars} from 'react-icons/fa'


function Navbar() {

	const [openLinks, setOpenLinks] = useState(false)
	const toggleNavbar = ()=>{
		setOpenLinks(!openLinks)
	}
  return (
    <nav className='navbar'>
        <section className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt='logo with name of pizza restaurant'/>
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact </Link>
            </div>
        </section>
        <section className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
                <FaBars/>
            </button>
        </section>
    </nav>
  )
}

export default Navbar