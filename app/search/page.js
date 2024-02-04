// 'use client'
import React from 'react';
import { NextRequest } from 'next/server';
import Link from 'next/link';
import SideBarContent from '@/components/search/sideBar';
import CarCard from '@/components/search/carCard';
import urls from '@/static/urls';
import formatAmount from '@/utils/foramt-price';
import formatTimeDifference from '@/utils/format-date';
import CarResult from '@/components/search/carResult';

import ActiveFilters from '@/components/search/ActiveFilters';
import Pagination from '@/components/search/Pagination';
// async function getData(keyword) {
//   const res = await fetch(`${urls.APIURL}/inventory?keyword=${keyword}`,{ next: { revalidate: 5 } })

 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
  
//   // console.log(res.json.toString())
//   return res.json()
// }

const SearchPage = async ({ params, searchParams }) => {
  const { keyword, yearFrom, yearTo, priceFrom, priceTo, color, transmission, bodyType, adType, page, make, model  } = searchParams;
  

  // const cars  = await getData(keyword)

  return (
    <main className="relative max-w-6xl mx-auto
     before:fixed before:h-[300px] before:opacity-15 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
     after:fixed after:top-2/4 after:w-96 my-3 after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-25">
      
      <div className="text-xs breadcrumbs p-2 ">
        <ul>
          <li><Link href={"/"}>Home</Link></li> 
          <li><Link href={"/inventory"}>Inventory</Link></li> 
          <li>Search</li>
        </ul>
      </div>

      
      <div className="flex">
        <section className="sidebar w-1/4 flex-shrink-0 bg-primary-light dark:bg-primary m-2 p-4 rounded-xl">
          <SideBarContent
            keyword = {keyword} yearFrom = {yearFrom} yearTo={yearTo}
            priceFrom = {priceFrom} priceTo={priceTo} color={color}
            transmission={transmission} bodyType={bodyType} adType={adType} 
          />
            
        </section>

        <section className="content w-full">
        <p className='px-2'>Active Filters:</p>
          <div className="filters flex gap-2 p-2">
            <ActiveFilters/>
            {/* {Object.keys(searchParams).map((key) => (
              <div className="p-2 bg-primary-light dark:bg-primary gap-3 rounded-xl flex" key={key}>
                  <p><span className='text-sm font-light'>{`${key}: `}</span>{searchParams[key]}</p>
                  <button  onClick={() => removeParam(key)} className="px-2 bg-primary-light dark:bg-primary hover:bg-base-100  rounded-full">x</button>
              </div>
            ))} */}
          </div>
          <div className="overflow-hidden grid gap-4 grid-cols-1 flex-grow bg-primary-light dark:bg-primary m-2 py-4 px-4 rounded-xl">
              <CarResult keyword = {keyword} yearFrom = {yearFrom} yearTo={yearTo}
            priceFrom = {priceFrom} priceTo={priceTo} color={color}
            transmission={transmission} bodyType={bodyType} adType={adType} page={page} 
            make={make} model={model} props={searchParams}/>
              
              {/* <CarCard
                img=""
                title="Toyota Camry G Limited Edition 2016 jkhsd fj"
                price={1}
                year="2008"
                registration="Lahore"
                mileage="16,000"
                engine="Petrol"
                time="2 Days"
              /> */}
              {/* <CarCard
                img=""
                title="Toyota Camry G Limited Edition 2016 jkhsd fj"
                price={1}
                year="2008"
                registration="Lahore"
                mileage="16,000"
                engine="Petrol"
                time="2 Days"
              />
              <CarCard
                img=""
                title="Toyota Camry G Limited Edition 2016 jkhsd fj"
                price={1}
                year="2008"
                registration="Lahore"
                mileage="16,000"
                engine="Petrol"
                time="2 Days"
              />
              <CarCard
                img=""
                title="Toyota Camry G Limited Edition 2016 jkhsd fj"
                price={1}
                year="2008"
                registration="Lahore"
                mileage="16,000"
                engine="Petrol"
                time="2 Days"
              /> */}
          </div>
        </section>
      </div>
       
        <div className="flex justify-end p-2 ">
              <Pagination page={page}/>
       
      </div>
    </main>
  );
};

export default SearchPage;
