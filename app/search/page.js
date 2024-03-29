import React from 'react';
import Link from 'next/link';
import SideBarContent from '@/components/search/sideBar';
import CarResult from '@/components/search/carResult';

import ActiveFilters from '@/components/search/ActiveFilters';
import Pagination from '@/components/search/Pagination';

// export const metadata = {
//   title: "Buy & Sell Cars in Pakistan - Get Your Ride Now.",
//   description: "Proudly providing unusual Car Needs in Pakistan. Buy & Sell Cars. List Your Car Now and let the Ghosts Work.",

// };
export async function generateMetadata(
  { params, searchParams }
) {

  const {make, model , keyword} = searchParams;
  let title
  let desc
  
  if(make && model)
  {
     title = `${make} ${model} for Sale in Pakistan`
     desc = `Find the best ${make} ${model} for Sale in Pakistan. Ghost Protocols offers best car Listings for ${make} ${model}. Post your Car for FREE at Ghostprotocols Now.`
  }
  else{
     title = `${keyword} for Sale in Pakistan`
     desc = `Find the best ${keyword}for Sale in Pakistan. Ghost Protocols offers best car Listings for ${keyword}. Post your Car for FREE at Ghostprotocols Now.`

  }
 
  return {
    title: title,
    description: desc
    
  }
}

const SearchPage = async ({ params, searchParams }) => {
  const {make, model , keyword, yearFrom, yearTo, priceFrom, priceTo, color, transmission, bodyType, adType, page  } = searchParams;

  return (
    <main className="relative max-w-6xl mx-auto 
     before:fixed before:h-[300px] before:opacity-15 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
     after:fixed after:top-2/4 after:w-96 my-3 after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-25">
      
      <div className="text-xs breadcrumbs p-2 ">
        <ul>
          <li><Link href={"/"}>Home</Link></li> 
          <li><Link href={"/inventory"}>Inventory</Link></li> 
          <li>Search</li>
          <li>{make}</li>
        </ul>
      </div>

      
      <div className="flex flex-wrap md:flex-nowrap">
        <section className="sidebar md:w-1/4 flex-grow md:flex-grow-0 flex-shrink-0 m-2">
          <SideBarContent
            keyword = {keyword} yearFrom = {yearFrom} yearTo={yearTo}
            priceFrom = {priceFrom} priceTo={priceTo} color={color}
            transmission={transmission} bodyType={bodyType} adType={adType}
            makeP={make} modelP={model} 
          />
            
        </section>

        <section className="content flex-grow md:w-3/4">
        <p className='px-2 text-sm md:text-base'>Active Filters:</p>
          <div id='active-filters' className="filters flex gap-2 p-2 overflow-x-scroll">
            <ActiveFilters/> 
          </div>
          <div className="overflow-hidden grid gap-4 grid-cols-1 flex-grow  md:bg-primary-light md:dark:bg-primary m-2 py-4 px-0 md:px-4 rounded-xl">
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
