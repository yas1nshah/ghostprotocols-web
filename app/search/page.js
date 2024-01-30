
import React from 'react';
import { NextRequest } from 'next/server';
import Link from 'next/link';
import SideBarContent from '@/components/search/sideBar';
import CarCard from '@/components/search/carCard';


const SearchPage = ({ params, searchParams }) => {
  const { keyword } = searchParams;

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
        <section className="sidebar w-1/4 flex-shrink-0 bg-primary m-2 p-4 rounded-xl">
          <SideBarContent/>
            
        </section>
        <section className="content ">
        <p className='px-2'>Active Filters:</p>
          <div className="filters flex gap-2 p-2">
            
            {Object.keys(searchParams).map((key) => (
              <div className="p-2 bg-primary gap-3 rounded-xl flex" key={key}>
                  <p>{searchParams[key]}</p>
                  <button className="px-2 bg-primary hover:bg-base-100  rounded-full">x</button>
              </div>
            ))}
          </div>
          <div className="overflow-hidden grid gap-4 grid-cols-1 flex-grow bg-primary m-2 py-4 px-4 rounded-xl">

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
              />
          </div>
        </section>
      </div>

      <div className="flex justify-end p-2">

        <div className="join">
          <button className="join-item btn bg-primary">«</button>
          <button className="join-item btn bg-primary">Page 22</button>
          <button className="join-item btn bg-primary">»</button>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
