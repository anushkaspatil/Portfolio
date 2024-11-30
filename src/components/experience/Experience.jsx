import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>Technical Expertise</h2>

      <div className="container experience_container">
          <div className="experience_web">
            <h3>Technical</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>HTML, CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
            </div>
          </div>
          <div>
          <h3>Libraries & Frameworks</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Langchain</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Tensorflow</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience