import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href = {CV} target='_blank' className='btn'>Check Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA