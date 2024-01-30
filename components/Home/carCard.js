import React from 'react'
import Image from 'next/image'

import formatAmount from '@/utils/foramt-price'
import formatTimeDifference from '@/utils/format-date'


const CarCard = (params) => {

  const {
  imgs,
  title,
  price,
  year,
  registraition,
  mileage,
  engine,
  time} = params ;
  
  const newImg = imgs.replace("/media","")
  
  return (
    <div className="dark:bg-primary h-64 max-w-64 rounded-xl overflow-hidden dark:text-white text-nowrap hover:text-wrap">
          <div className="w-full h-1/2  img bg-black">
            <Image className="w-full h-full object-cover  rounded-t-xl" src={`https://images.tixy.pk${newImg}`} width={250} height={150}/>
          </div>
          <div className="h-1/2 w-full px-2 py-2 flex flex-col justify-evenly">
              <h3 className="title text-sm ">
                {title}
              </h3>
              <h2 className="Price text-lg font-bold text-secondary"> 
                <span className="pre font-normal ">PKR </span>
                {formatAmount(price)}
              </h2>
              <p className="city text-xs">{registraition}</p>
              <h2 className="city text-sm font-bold">
                {year} <span className="font-normal"> | </span> {mileage.toLocaleString()} km  <span className="font-normal">|</span> {engine}
              </h2>
              <p className="city text-xs opacity-70">{formatTimeDifference(time)} </p>

          </div>

          
        </div>
  )
}

export default CarCard