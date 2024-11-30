import React from 'react'
import './about.css'
import ME from '../../assets/about-img.jpg'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
            <div className='about_me-image'>
              <img src={ME} alt="About Img" />
            </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Software Developer</h5>
              <small>Web Developer</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
           Hello, I am Anushka Patil, a final-year Computer Engineering student. I am passionate about building innovative solutions, with a keen interest in machine learning and full-stack development. My academic journey and hands-on project experience have provided me with a strong foundation in software engineering. I am ready to make a meaningful contribution and achieve great things.

        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About