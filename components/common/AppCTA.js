import React from 'react'
import Image from 'next/image'

const AppCTA = () => {
  return (
    
    <div className=' max-w-6xl mx-auto  my-36  '>
    <div className='bg-primary m-2 p-4 md:p-8 md:py-12 rounded-xl'>
    <div className="flex justify-between items-center relative ">
      <div className="flex-grow w-2/3">
        <h2 className="text-lg md:text-2xl font-semibold ">Get Ghost Protocols App Now</h2>
        <p className='text-xs md:text-sm'>Buy & Sell Cars, Bikes and Auto Parts faster and better using our App.</p>
        {/* Stores */}
        
        {/* Stores */}
      </div>
    <div className="flex-shrink flex items-end w-1/2 md:absolute right-0">
        <Image className="w-full h-auto bottom-0" width={400} height={500} src={"/app-prev.webp"}/>
      </div>
    </div>
    <div className="flex justify-start gap-3 -mt-2 md:mt-5">
          <a href="" className="bg-primary p-2 rounded-xl flex gap-4 t">
            <i className="icon invert dark:invert-0" style={{backgroundPosition: '-30px -30px'}}></i>
            <div>
              <p className="text-xs"> Download on the</p>
              <h6 className="text-base font-semibold">App Store</h6>
            </div>
          </a>
          <a href="" className="bg-primary p-2 rounded-xl flex gap-4 t">
            <i className="icon" style={{backgroundPosition: '0 -30px'}}></i>
            <div>
              <p className="text-xs"> Get it on</p>
              <h6 className="text-base font-semibold">Play Store</h6>
            </div>
          </a>
        </div>
        </div>
        </div>
    
  )
}

export default AppCTA