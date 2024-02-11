import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CarCard = (params) => {
  const link = params.title.replace(/ /g, "-")
  return (
    <Link key={params.key2}  href={`/inventory/${link}/${params.id}`} className={`dark:bg-primary ${params.featured && "border-2 border-secondary"} bg-primary h-32 md:h-40 md:px-2  flex rounded-xl dark:text-white text-nowrap hover:text-wrap`}>
          
      <div className='w-1/4 md:px-2 md:py-3 h-full flex-shrink-0 flex-grow-0'>
        <Image draggable="false" className="w-full h-full object-cover  rounded-xl" src={`${params.img}`} width={250} height={150}/>
      </div>
      <div className='w-2/4 flex-shrink-0 p-4 flex-grow overflow-hidden'>
        <div className="h-full flex flex-col justify-between">
             
              <h3 className=" text-wrap text-sm md:text-base">
                {params.title}
              </h3>
              
              <p className="city text-xs md:text-sm">{params.registration}</p>

              <h2 className="city text-sm md:text-base font-bold">
                {params.year} <span className="font-normal"> | </span> {params.mileage} km  <span className="font-normal">|</span> {params.engine}
              </h2>
              <p className="city text-xs md:text-sm opacity-70">{params.time} Ago</p>

        </div>  
        {/* <Image className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/> */}
      </div>
      <div className='w-1/4 flex-shrink-0 flex-grow-0 flex flex-col justify-between p-2'>
          <div>

                <h2 className="Price text-base md:text-xl font-bold text-secondary"> 
                    <span className="pre font-normal ">PKR </span>
                    {params.price} 
                </h2>
                {
                  params.featured &&
                  <div className="text-xs px-1 md:py-0.5 bg-secondary my-1 rounded-full text-center ">GP Featured</div>
                }
                {
                  params.gpcar &&
                  <div className="text-xs px-1 md:py-0.5 bg-secondary my-1 rounded-full text-center ">GP Personal</div>
                }
                {
                  !params.gpcar && !params.featured &&
                  <div className="text-xs px-1 md:py-0.5 bg-primary my-1 rounded-full text-center ">Free Listing</div>
                }
            </div>
            <div className=""></div>
            <button className="btn block  w-full my-1 bg-primary-light dark:bg-primary text-xs md:text-base p-0">Seller Phone</button>

        {/* <Image className="w-full h-full object-cover  rounded-xl" src={"https://images.tixy.pk/images/Toyota_Camry_G_LIMITED_EDITION_2016-16-1.jpg"} width={250} height={150}/> */}
      </div>
      
          
    </Link>
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