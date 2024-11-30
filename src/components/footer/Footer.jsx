import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {SiMedium} from 'react-icons/si'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>ANUSHKA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/anushkaspatil/"><FaLinkedin /></a>
        <a href="https://github.com/anushkaspatil"><FaGithub /></a>
        <a href="https://medium.com/@anushkadspatil"><SiMedium /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Anushka Patil. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer