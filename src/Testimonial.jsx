import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';


export default function Testimonial() {
  return (
    <div className=''>
      <TestimonialTitle />
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        modules={[Pagination]}
        className="mySwiper pb-12 mb-5 mx-4"
      >
        <SwiperSlide>
        <TestimonialBox
        imgSrc='/images/avatar-anisha.png'
        testimonyName='Anisha Li'
        testimonyPara='  “Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.”'
        />

        </SwiperSlide>

        <SwiperSlide>
        <TestimonialBox
        imgSrc='/images/avatar-ali.png'
        testimonyName='Ali Bravo'
        testimonyPara=' “We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”'
      
        />


        </SwiperSlide>
        <SwiperSlide>
        <TestimonialBox
        imgSrc='/images/avatar-richard.png'
        testimonyName='Richard Watts'
        testimonyPara=' “Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”'
        />
        </SwiperSlide>
        <SwiperSlide>
        <TestimonialBox
        imgSrc='/images/avatar-shanai.png'
        testimonyName='Shanai Gough'
        testimonyPara=' “Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”'
        />
        </SwiperSlide>
     
      </Swiper>
      <div className='flex justify-center mb-44'>
      <button
      className='text-very-light-gray bg-bright-red text-xs font-medium rounded-full py-3 px-6 shadow-lg shadow-${bgColor} drop-shadow-2-xl z-10  mx-auto hover:opacity-50'
    >
      Get Started
    </button>
      </div>
     
    </div>

  )  
}

const TestimonialTitle = () => <h3 className="text-dark-blue text-2xl text-center font-bold mb-10 lg:text-3xl">What they’ve said</h3>;


const TestimonialBox = ({imgSrc, testimonyName, testimonyPara}) => {
  return (
    <div className='py-4'>
       <img src={imgSrc}  width='60' alt={`${testimonyName} icon image`} className='mx-auto translate-y-7'/>
    <div className='flex flex-col items-center gap-7 bg-very-light-gray  pt-16 px-7 pb-11  mx-auto '>
   
    <div className=''>
     
      <h4 className='text-dark-blue font-medium text-center mb-8'>{testimonyName}</h4>
      <p className='text-center text-[13px] leading-6 font-normal text-dark-grayish-blue'>{testimonyPara}</p>
      </div>
      
    </div>
    
    </div>
    
  )
}