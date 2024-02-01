import React from 'react'
import Image from 'next/image'

const CarCard = (params) => {
  return (
    <div className="dark:bg-primary-light dark:bg-primary h-40 px-2  flex rounded-xl dark:text-white text-nowrap hover:text-wrap">
          
      <div className='w-1/4 px-2 py-3 h-full flex-shrink-0 flex-grow-0'>
        <Image draggable="false" className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/>
      </div>
      <div className='w-2/4 flex-shrink-0 p-4 flex-grow overflow-hidden'>
        <div className="h-full flex flex-col justify-between">
             
              <h3 className=" text-wrap">
                {params.title}
              </h3>
              
              <p className="city text-sm">{params.registration}</p>
              <h2 className="city text-base font-bold">
                {params.year} <span className="font-normal"> | </span> {params.mileage} km  <span className="font-normal">|</span> {params.engine}
              </h2>
              <p className="city text-sm opacity-70">{params.time} Ago</p>

        </div>  
        {/* <Image className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/> */}
      </div>
      <div className='w-1/4 flex-shrink-0 flex-grow-0 flex flex-col justify-between p-2'>
          <div>

                <h2 className="Price text-xl font-bold text-secondary"> 
                    <span className="pre font-normal ">PKR </span>
                    {params.price} 
                </h2>
                <div className="text-xs py-0.5 bg-secondary my-1 rounded-full text-center text-white">Managed By GP</div>
            </div>
            <div className=""></div>
            <button className="btn block text-white w-full my-1 bg-primary-light dark:bg-primary">Seller Phone</button>

        {/* <Image className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/> */}
      </div>
      
          
    </div>
  )
}

export default CarCard


{/* <div className="h-4/5 w-2/5 m-auto rounded-xl img bg-black">
            <Image className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/>
          </div>
          <div className="h-full  w-full px-4 py-2 flex flex-col justify-evenly">
              <h3 className="title text-base ">
                {params.title}
              </h3>
              <h2 className="Price text-xl font-bold text-secondary"> 
                <span className="pre font-normal ">PKR </span>
                {params.price}
              </h2>
              <p className="city text-sm">{params.registration}</p>
              <h2 className="city text-base font-bold">
                2008 <span className="font-normal"> | </span> {params.mileage} km  <span className="font-normal">|</span> {params.engine}
              </h2>
              <p className="city text-sm opacity-70">{params.time} Ago</p>

          </div>
          <div>
            <button className="btn">
              hello
            </button>
          </div> */}