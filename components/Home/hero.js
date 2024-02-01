'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import categories from '@/static/categories'
import Gallery from "@/components/Home/gallery";
import Link from 'next/link'


function Hero() {

    const images = [
        "/cover.png",
        "/cover.png",
    ]
  const [menu, setMenu] = useState()

  return (
  
    <div>
      <div className='flex flex-wrap xl:flex-nowrap dark:text-white'>
        <div className="bg-primary-light dark:bg-primary m-2 p-4 xl:w-1/4 w-full flex-shrink-0 rounded-xl">
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
            menu-1 === index ? ' dark:bg-primary bg-primary-light' : 'dark:hover:bg-primary hover:bg-primary-light'
            }`}>
              <h3 >{category.name}</h3>
              <p>{"->"}</p>
            </div>
            )
            
          )
        }

        
      

        </div>
        <div className="relative flex-grow  rounded-xl bg-primary-light dark:bg-primary m-2  max-h-80 overflow-y-scroll">
          <div className='grid grid-cols-4  '>
            {/* CHECK */}
            {
              menu && 
              
              categories[menu-1].subcategories.map(
              (subCat, index1) => (
              <div key={index1} className=" bg-primary-light dark:bg-primary hover:bg-gradient-to-br hover:to-transparent hover:from-secondary  flex flex-col justify-center items-center py-3 rounded-lg m-2" >
              
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

      <div className="bg-primary-light dark:bg-primary py-2 px-4 m-2 flex justify-between  rounded-xl">
            <p>Reliable</p>
            <p>💀</p>
            <p>Magical</p>
            <p>💀</p>
            <p>Visionary</p>
            <p>💀</p>
            <p>Effortless</p>
            <p>💀</p>
            <p>Ghostful</p>
      </div>
    </div>        
  )
}

export default Hero