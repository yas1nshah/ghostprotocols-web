'use client'


import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const Gallery = (props) => {
  const [currentImgIndex, updateImgIndex] = useState(1);

  const handleNext = () => {
    updateImgIndex((prev) => (prev + 1) % props.images.length);
  };

  const handlePrev = () => {
    updateImgIndex((prev) => (prev - 1 + props.images.length) % props.images.length);
  };

  const handlers = useSwipeable({
    onSwipedRight: handlePrev,
    onSwipedLeft: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Autoplay function
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(autoplayInterval);
  }, [currentImgIndex]);

  return (
    
      
      <div className="w-full h-full gallery relative overflow-hidden aspect-video rounded-xl bg-primary-light dark:bg-primary">
        <div {...handlers} className="images flex w-full h-full overflow-hidden">
          {props.images.map((img, index) => (
            <Image
            draggable="false"
              key={index}
              className="w-full h-full object-cover flex-shrink-0 flex-grow-0 transition-all ease-out duration-500"
              style={{ transform: `translateX(${currentImgIndex * -100}%)` }}
              src={img}
              width={800}
              height={800}
              alt="Car Image"
            />
          ))}
        </div>
        <div onClick={handlePrev} className='hover:bg-black hover:bg-opacity-50 transition-all ease-in flex items-center p-3 absolute left-0 top-0 h-full'>
          <i className="icon" style={{ backgroundPosition: '-60px -30px' }}></i>
        </div>
        <div onClick={handleNext} className='hover:bg-black hover:bg-opacity-50 transition-all ease-in flex items-center p-3 absolute right-0 top-0 h-full'>
          <i className="icon" style={{ backgroundPosition: '-90px -30px' }}></i>
        </div>
      </div>
   
  );
};

export default Gallery;