import React from 'react'
import ContactPizza from '../assets/Vegan.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${ContactPizza})` }}>

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name='name' type="text" placeholder='enter full name' />
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder='enter your email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="6" placeholder='write here' required></textarea>
                <button className='contactBtn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact