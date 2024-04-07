import React from 'react';
import { useForm } from 'react-hook-form';
import './aboutus.css'
import {  Bed,Champagne,ForkKnife
} from '@phosphor-icons/react';
const AboutUs = () => {
 
  return (
    <>
  <div className='container-fluid about-us-background'>
  <div className='row h-[80vh] mx-auto align-items-center'>

    <div className='col-md-6 p-md-5 p-3'>
    <h1 className='el-messiri-bold text-brand-600 text-4xl md:text-8xl'>ABOUT</h1>
    <div className='row align-items-center justify-content-between'>
    <div className='col-md-2'>
      <p className='el-messiri-bold text-4xl text-white md:text-8xl'>US</p>
      </div>
    <div className='col-md-9'>
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
  </div>
  
  <div className="flex flex-col w-full 3xlmax-w- mx-auto py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-5">Our <span className='text-brand-600'>History</span></h2>
      <div className='flex flex-wrap align-items-center justify-content-around'>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center">
        <Bed size={32} color="white" />
        </div>
        <div className="flex-grow  pb-2">
          <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2">Text 1</h3>
        </div>
          <p className="text-gray-700">It's the closest planet to the Sun</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center">
        <Champagne size={32} color="white" />
        </div>
        <div className="flex-grow  pb-2">
          <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2">Text 2</h3>
        </div>
          <p className="text-gray-700">Venus has a beautiful name</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center">
        <ForkKnife size={32} color="white" />
        </div>
        <div className="flex-grow  pb-2">
          <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2 ">Text 3</h3>
        </div>
          <p className="text-gray-700">Mars is actually a very cold place</p>
      </div>
      </div>
    </div>
    </>

  );
};

export default AboutUs;
