import React from 'react'
import Image from 'next/image'

const CarCard = (params) => {
  return (
    <div className="dark:bg-primary h-64 max-w-64 rounded-xl overflow-hidden dark:text-white text-nowrap hover:text-wrap">
          <div className="w-full h-1/2  img bg-black">
            <Image className="w-full h-full object-cover  rounded-t-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/>
          </div>
          <div className="h-1/2 w-full px-2 py-2 flex flex-col justify-evenly">
              <h3 className="title text-sm ">
                {params.title}
              </h3>
              <h2 className="Price text-lg font-bold text-secondary"> 
                <span className="pre font-normal ">PKR </span>
                {params.price}
              </h2>
              <p className="city text-xs">{params.registration}</p>
              <h2 className="city text-sm font-bold">
                2008 <span className="font-normal"> | </span> {params.mileage} km  <span className="font-normal">|</span> {params.engine}
              </h2>
              <p className="city text-xs opacity-70">{params.time} Ago</p>

          </div>

          
        </div>
  )
}

export default CarCard