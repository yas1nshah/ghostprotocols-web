import React from 'react'
import Link from 'next/link'

const UpgradeAccountPage = () => {
  return (
    <main className="main">
        <div className="m-2">
            <h1 className='text-2xl md:text-4xl font-semibold'>Account</h1>
            <div className="text-xs md:text-sm breadcrumbs">
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/account"}>Account</Link></li>
                <li>Upgrade</li>
            </ul>
            </div>
            <hr className='opacity-30 border-base-content' />
        </div>


        <div className="bg-primary-light dark:bg-primary m-2 rounded-xl p-4 ">
            <div className="bg-primary-light dark:bg-primary m-2 rounded-xl p-4 ">
                <h2 className='md:text-sm text-xs text-secondary'>BASIC</h2>
                <h2 className='md:text-xl text-sm font-semibold mb-2'>Featured Listing</h2>
                <ul className='list-disc list-inside'>
                    <li>Get 1 Car Featured For 30 Days</li>
                </ul>
                <div className="flex justify-between">
                    <h3 className='text-secondary font-bold text-sm md:text-xl p-2'>PKR 500/-</h3>
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default UpgradeAccountPage