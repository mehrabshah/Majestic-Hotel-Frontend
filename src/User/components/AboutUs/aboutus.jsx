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
  
  <div className="flex flex-col w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Our History</h2>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
          <img src="path/to/mercury.svg" alt="Mercury Logo" className="w-6 h-6" />
        </div>
        <div className="flex-grow border-b border-gray-300 pb-2">
          <h3 className="text-lg font-bold">2012</h3>
          <p className="text-gray-700">It's the closest planet to the Sun</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
          <img src="path/to/venus.svg" alt="Venus Logo" className="w-6 h-6" />
        </div>
        <div className="flex-grow border-b border-gray-300 pb-2">
          <h3 className="text-lg font-bold">2014</h3>
          <p className="text-gray-700">Venus has a beautiful name</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
          <img src="path/to/mars.svg" alt="Mars Logo" className="w-6 h-6" />
        </div>
        <div className="flex-grow border-b border-gray-300 pb-2">
          <h3 className="text-lg font-bold">2016</h3>
          <p className="text-gray-700">Mars is actually a very cold place</p>
        </div>
      </div>
    </div>
    </>

  );
};

export default AboutUs;
