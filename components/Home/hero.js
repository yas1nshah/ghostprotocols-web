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
  
    <div id='hero' className='mx-2'>
        
      <div id='hero-container' className='flex flex-wrap md:flex-nowrap gap-2'>
        <div id='categories-filter' className="collapse  bg-primary-light dark:bg-primary collapse-plus my-2 flex-shrink-0
                        order-2  w-full
                        md:collapse-open md:order-1 md:w-1/4">
            <input type="checkbox" /> 
            <h3 className="collapse-title font-semibold">
                Browse By
            </h3>
            <div className="collapse-content"> 
              {
                categories.map((category, index) =>
                  (
                    <div key={index}
                      onClick={() => {
                        if(index === menu-1){setMenu(null)}
                        else{setMenu(index+1)}}}
                        className={`cursor-pointer h-10 flex justify-between items-center px-2 rounded-xl 
                                  ${menu-1 === index ? ' dark:bg-primary bg-primary-light' : 'dark:hover:bg-primary hover:bg-primary-light'}`}>
                      <h3 >{category.name}</h3>
                      <p>{"->"}</p>
                    </div>
                  ))
              }
            </div>
        </div>
       
        <div id='hero-gallery' className="relative flex-grow rounded-xl bg-primary-light dark:bg-primary my-2 overflow-y-scroll transition-all
                      order-1 max-h-40
                      md:order-2 md:max-h-80">
          <div className='grid
                          grid-cols-3
                          md:grid-cols-4'>
            {/* CHECK */}
            {
              menu &&              
              categories[menu-1].subcategories.map(
              (subCat, index1) => (
              <div key={index1} className="bg-primary-light dark:bg-primary
               hover:bg-gradient-to-br hover:to-transparent hover:from-secondary  
               flex flex-col justify-center items-center py-3 rounded-lg m-2" >
              
              {subCat.image &&
              <Image src={"/next.svg"} width={100} height={100}/>}
                <Link href={subCat.link}>{subCat.name}</Link>
                </div>
                )
              ) 
            }
            
          </div>
            {/* Displaying Gallery when Category is not Selected */}
            {              
              !menu && 
              <Gallery images={images} />  
            }

        </div>
      </div>

      <div className="bg-primary-light dark:bg-primary py-2 px-4 m-2 md:flex justify-between rounded-xl
                      hidden">
          <p>Premium Picks</p>
          <p>💀</p>
          <p >Spectral Savings</p>
          <p >🔥</p>
          <p >Ethereal Rides</p>
          <p >🔥</p>
          <p >Phantom Deals</p>
          <p >💀</p>
          <p>Ghostly Grace</p>
      </div>

    </div>        
  )
}

export default Hero


