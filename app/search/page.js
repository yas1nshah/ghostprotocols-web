import React from 'react';
import { NextRequest } from 'next/server';
import Link from 'next/link';

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

      {console.log(keyword)}
      <div className="flex">
        <section className="sidebar w-1/4 flex-shrink-0 bg-primary m-2 p-4 rounded-xl">
          f
        </section>
        <section className="contect flex-shrink-0 flex-grow bg-primary m-2 p-4 rounded-xl">
          f
        </section>
      </div>
    </main>
  );
};

export default SearchPage;
