import React from 'react'
import './header.css'
import CTA from './CTA'
import { Typewriter } from 'react-simple-typewriter';
import ME from '../../assets/me-img2.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className='container header_container'>
          <h3>Hello there, I'm</h3>
          <h1>Anushka Patil</h1>
          <div>
              <div>
                I'm a
                <Typewriter className = "typewriter-container"
                  words={[" Software Developer", " Programmer", " ML Practioner", " GenAI enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
          </div>
          <CTA/>
          <HeaderSocial/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#footer" className='scroll_down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header