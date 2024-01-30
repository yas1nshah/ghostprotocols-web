'use client'
import CarCard from "@/components/Home/carCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSwipeable } from 'react-swipeable';

export default function CarSlider(props) {
  const cars = [...props.cars];
  const [current, updateCurrent] = useState(0);

  const handleNext = () => {
    if (current < cars.length - 4) {
      updateCurrent((prev) => prev + 1);
    }
    else{
      updateCurrent(0)
    }
  };

  const handlePrev = () => {
    if (current > 0) {
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
    <div className="relative my-10 max-w-6xl mx-auto">
      <div className="slider overflow-hidden">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-2xl font-semibold text-white">{props.title}</h2>
          <Link className="text-sm" href="/">See More</Link>
        </div>
        <div
          style={{ transform: `translateX(${current * -25}%)` }}
          className={"px-3 flex gap-1 w-full transition-all my-4 ease-in dela"}
        >
          {cars.map((car, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 ">
              <CarCard
                imgs={car.gallery[car.galleryIndex]}
                title={car.title}
                price={car.price}
                year={car.year}
                registraition={car.registraition}
                mileage={car.mileage}
                engine={car.engine}
                time={car.date}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end px-2">

          <button onClick={handlePrev} className="btn m-1 bg-primary p-2 py-1 disabled:opacity-15" disabled={current === 0}>
            <i className="icon m-auto" style={{ backgroundPosition: '-60px -30px' }}></i>
          </button>
          <button onClick={handleNext} className="btn m-1  bg-primary p-2 py-1 disabled:opacity-15" disabled={current === cars.length-4}>
            <i className="icon m-auto" style={{ backgroundPosition: '-90px -30px' }}></i>
          </button>
        </div>
       
       
      </div>
    </div>
  );
}
