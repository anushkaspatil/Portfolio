import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {FaRegUser, FaRegHandshake, FaBriefcase, FaGraduationCap} from 'react-icons/fa'
import {LuBookMinus} from 'react-icons/lu'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LuBookMinus /></a>
      <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake /></a>
      <a href="#portfolio" onClick={() => setactiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaBriefcase /></a>
      <a href="#testimonials" onClick={() => setactiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><FaGraduationCap /></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav