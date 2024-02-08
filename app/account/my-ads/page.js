'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import urls from '@/static/urls';
import CarCard from './carCard.cmp';
import formatAmount from '@/utils/foramt-price';
import formatTimeDifference from '@/utils/format-date';

async function getData(apikey = localStorage.getItem("jwtAccessToken")) {
  const url = `${urls.APIURL}/my-cars`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apikey}`,
      },
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON data
      return data.mycars; // Return the array of cars
    } else {
      console.error(`Failed to fetch data`);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(`Error while fetching data:`, error.toString());
    throw error;
  }
}

const Page = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myCars = await getData();
        setCars(myCars);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main">
      <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>My Ads</h1>
        <div className="text-xs md:text-sm breadcrumbs">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/account"}>Account</Link></li>
            <li>My Ads</li>
          </ul>
        </div>
        <hr className='opacity-30 border-base-content' />
      </div>

      <div className="m-2">
        {cars.length > 0 &&
          cars.map((car, index) => (
            <CarCard
              key={index} // Ensure each item in the list has a unique key
              img=""
              id={car.stockid}
              title={car.title}
              price={formatAmount(car.price)}
              year={car.year}
              registration={car.registration}
              mileage={car.mileage.toLocaleString()}
              engine={car.engine}
              featured={car.featured}
              gpcar={car.gpcar}
              time={formatTimeDifference(car.date)}
            />
          ))}
      </div>
    </main>
  );
}

export default Page;
