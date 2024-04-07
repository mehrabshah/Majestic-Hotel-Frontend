import React from 'react';
import { useForm } from 'react-hook-form';
import './aboutus.css'
const AboutUs = () => {
 
  return (
    <>
  <div className='row h-[80vh] mx-auto align-items-center about-us-background'>
    <div className='col-md-6 p-md-5 p-3'>
    <h1 className='el-messiri-bold text-brand-600 text-4xl md:text-8xl'>ABOUT</h1>
    <div className='row align-items-center'>
    <div className='col-md-2'>
      <p className='el-messiri-bold text-4xl text-white md:text-8xl'>US</p>
      </div>
    <div className='col-md-9 ms-5'>
    <div className="border-b border-white  mx-auto"></div>
    </div>
    </div>
    <p className='text-white'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </div>
    <div className='col-md-6 p-md-5 p-3'>
      <img src='assets/345694611.jpg' className='img-fluid'/>
    </div>

  </div>
    </>

  );
};

export default AboutUs;
