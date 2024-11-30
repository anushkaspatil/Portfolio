import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import {SiMedium} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/anushkaspatil/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/anushkaspatil" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@anushkadspatil" target='_blank' rel="noreferrer"><SiMedium /></a>
        <a href="https://leetcode.com/u/anushkaspatil/" target='_blank' rel="noreferrer"><FaCode/></a>
    </div>
  )
}

export default HeaderSocials