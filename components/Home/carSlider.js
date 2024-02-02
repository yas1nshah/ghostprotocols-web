'use client'
import CarCard from "@/components/Home/carCard";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSwipeable } from 'react-swipeable';

export default function CarSlider(props) {
  const cars = [...props.cars];
  const [current, updateCurrent] = useState(0);

  const sliderRef = useRef(null);


  const handleNext = () => {
    const slider = sliderRef.current;
    slider.style.scrollBehavior = 'smooth'
    const itemWidth = slider.querySelector('#car-card').offsetWidth;
  
    if (slider && current < cars.length - 4) {
      slider.scrollLeft += itemWidth;
      updateCurrent((prev) => prev + 1);
    } else {
      slider.scrollLeft = 0;
      updateCurrent(0);
    }
  };
  
  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.style.scrollBehavior = 'smooth'
    const itemWidth = slider.querySelector('#car-card').offsetWidth;

    if (current > 0) {
      slider.scrollLeft -= itemWidth;
      updateCurrent((prev) => prev - 1);
    }
  };

  // Autoplay function
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(autoplayInterval);
  }, [current]);

  return (
    <div id={`cars-slider`} className="relative my-10 max-w-6xl mx-auto">
      <div className="slider overflow-hidden">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-xl md:text-2xl font-semibold ">{props.title}</h2>
          <Link className="text-xs md:text-sm" href="/">See More</Link>
        </div>
        <div
          ref={sliderRef}
          id="slider"
          style={{ scrollSnapType: "x proximity" }}
          className="px-3 flex gap-1 w-full transition-all my-4 ease-in dela overflow-x-scroll"
        >
          {cars.map((car, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4">
              <CarCard
                id={car.stockid}
                imgs={car.gallery[car.galleryIndex]}
                title={car.title}
                price={car.price}
                year={car.year}
                registration={car.registration}
                mileage={car.mileage}
                engine={car.engine}
                time={car.date}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end px-2">
          <button
            onClick={handlePrev}
            className="btn m-1 invert dark:invert-0 bg-primary-light dark:bg-primary p-2 py-1 disabled:opacity-15"
            disabled={current === 0}
          >
            <i className="icon m-auto" style={{ backgroundPosition: '-60px -30px' }}></i>
          </button>
          <button
            onClick={handleNext}
            className="btn m-1 invert dark:invert-0 bg-primary-light dark:bg-primary p-2 py-1 disabled:opacity-15"
            disabled={current === cars.length - 4}
          >
            <i className="icon m-auto" style={{ backgroundPosition: '-90px -30px' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
