import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import formatAmount from '@/utils/foramt-price'
import formatTimeDifference from '@/utils/format-date'


const CarCard = (params) => {

  const {
    id,
    imgs,
    title,
    price,
    year,
    registration,
    mileage,
    engine,
    time
        } = params ;
  
  const link = title.replace(/ /g, "-")
  // const newImg = imgs.replace("/media","")
  
  return (
    <Link href={`/inventory/${link}/${id}`}>
      <div id='car-card' style={{ scrollSnapAlign: "end" }}
          className="bg-primary-light dark:bg-primary cursor-pointer  
          max-w-64 rounded-xl overflow-hidden dark:text-white text-nowrap hover:text-wrap
          h-52 md:h-64">
        <div className="w-full h-1/2  img bg-black">
            <Image className="w-full h-full object-cover  rounded-t-xl" src={`https://images.tixy.pk/${imgs}`} width={250} height={150}/>
        </div>
        
        <div className="h-1/2 w-full px-2 py-2 flex flex-col justify-evenly">
          <h3 className="title text-sm">{title}</h3>
          <h2 className="Price text-base md:text-lg font-bold text-secondary"> 
          <span className="pre font-normal ">PKR </span>{formatAmount(price)}</h2>
          <p className="city text-xs">{registration}</p>
          <h2 className="city text-xs md:text-sm font-bold">
            {year} <span className="font-normal"> | </span> {mileage.toLocaleString()} km  <span className="font-normal">|</span> {engine}
          </h2>
          <p className="city text-xs md:text-xs opacity-70">{formatTimeDifference(time)} </p>

        </div>
      </div>
    </Link>
  )
}

export default CarCard