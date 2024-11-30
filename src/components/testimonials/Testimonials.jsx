import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/image1.webp'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    name: "Computer Engineering at PVG's COET Pune",
    review: "Final year Computer Engineering at Pune Vidyarthi Griha's College of Engineering and Technology. The cummulative SGPA till now is 9.09. Actively participated in co-curricular activities like GDSC and Vlabs IIT Bombay and extra curricular activities like volunteered for decoration in SAMSARA- annual cultural event and in participated in flashmobs." 
  },
  {
    image: IMG2,
    name: 'HSC at SP College Pune',
    review: "Completed my highschool (11th & 12th) - HSC from Sir Parashurambhau College Pune. Scored 96.7 percentile in MHT-CET, and qualified JEE mains. In HSC boards, aggregate percentage was 90.67. Was also a part of SPC's Art Circle."
  },
  {
    image: IMG3,
    name: 'CBSE at SSDPS Pune',
    review: 'Complete my secondary school from Sinhagad Spring Dale Public School Vadgaon with 89.2 percentage in 10th CBSE. While in school, partcipated and won various debate completitions, poem recitation competitions and one of my favorite was street plays.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Swipe left</h5>
      <h2>Education</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        
        {
          data.map(({ image, name, review }, index) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="image">
                  <img src={image} alt='img' />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials