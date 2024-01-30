'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import categories from '@/static/categories'
import Gallery from "@/components/Home/gallery";
import Link from 'next/link'


function Hero() {

    const images = [
        "/cover.jpg",
        "/cover.jpg",
    ]
  const [menu, setMenu] = useState()

  return (
  
    <div>
      <div className='flex dark:text-white'>
        <div className="bg-primary m-2 p-4 w-1/4 flex-shrink-0 rounded-xl">
            <div className="h-10 flex justify-between  items-center px-2 text-lg font-semibold rounded-xl flex-shrink-0">
              <h3 >Browse By</h3>
            </div>
        {
          categories.map((category, index) =>
            (
            <div key={index}
            onClick={() => {
                if(index === menu-1){
                    setMenu(null)
                }
                else
                {
                setMenu(index+1)
                }
                }}
                className={  `cursor-pointer h-10 flex justify-between items-center px-2 rounded-xl ${
            menu-1 === index ? 'bg-primary' : 'hover:bg-primary'
            }`}>
              <h3 >{category.name}</h3>
              <p>{"->"}</p>
            </div>
            )
            
          )
        }

        
      

        </div>
        <div className="relative flex-grow  rounded-xl bg-primary m-2  max-h-80 overflow-y-scroll">
          <div className='grid grid-cols-4  '>
            {/* CHECK */}
            {
              menu && 
              
              categories[menu-1].subcategories.map(
              (subCat, index1) => (
              <div key={index1} className=" bg-primary hover:bg-gradient-to-br hover:to-transparent hover:from-secondary  flex flex-col justify-center items-center py-3 rounded-lg m-2" >
              
              {subCat.image &&
              <Image src={"/next.svg"} width={100} height={100}/>}
                <Link href={subCat.link}>{subCat.name}</Link>
                </div>
                )
              ) 
            }
            
          </div>
            {
                !menu && 
                <Gallery images={images} />  
            }

        </div>
      </div>

      <div className="bg-primary py-2 px-4 m-2 flex justify-between  rounded-xl">
            <p>Cute</p>
      </div>
    </div>        
  )
}

export default Hero