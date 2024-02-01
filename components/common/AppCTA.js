import React from 'react'
import Image from 'next/image'

const AppCTA = () => {
  return (
    
  
    <div className="bg-primary max-w-6xl mx-auto p-4 xl:p-6 my-36 rounded-xl flex justify-between items-center relative h-60">
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold ">Get Ghost Protocols App Now</h2>
        <p>Buy & Sell Cars, Bikes and Auto Parts faster and better using our App.</p>
        {/* Stores */}
        <div className="flex justify-start gap-3 my-5">
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
        {/* Stores */}
      </div>
    <div className="flex-shrink flex items-end">
        <Image className="w-full h-auto bottom-0" width={400} height={500} src={"/app-prev.webp"}/>
      </div>
    </div>
   
    
  )
}

export default AppCTA