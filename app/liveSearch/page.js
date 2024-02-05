'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { search } from './actions';

const Page = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
  const [searchBar, setSearchBar] = useState();

  const getResult = async (value) => {
    setKeyword(value);
    const searchResult = await search(value);
    setResult(searchResult);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions on form submission if needed
  };

  return (
    <main className='max-w-6xl mx-auto'>
      

      {/* Display your search result here using the 'result' state */}

      <div className="header relative bg-primary h-16 py-1 my-1 flex justify-between items-center">
        <Image className='h-full w-auto' src={"/ghost.png"} width={200} height={100}/>
        <div className="flex-grow">
          
        </div>
        <div className="flex gap-4 items-center mx-2">
          <div className="p-2">
            <button onClick={()=> setSearchBar(true)} className="icon hover:scale-110"></button>
          </div>
          <div className="avatar hidden md:inline">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
          <div className="drawer drawer-end z-10 md:hidden">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="">
            {/* Page content here */}
            <label htmlFor="nav-drawer"  className="btn swap swap-rotate">
  
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"  id="nav-drawer"/>
              
              {/* hamburger icon */}
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
              
              {/* close icon */}
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
              
            </label>
            
          </div> 
          <div className="drawer-side">
            <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
              
            </ul>
          </div>
          </div>
        </div>
        {
          searchBar &&
          <div className="absolute w-full h-full bg-base-100 top-0 z-10">
          {/* bacldrop */}
          <div className="fixed bg-base-100 h-full w-full z-0 top-0 left-0 opacity-85"></div>
          <form
              className='flex gap-2 flex-grow'
              onSubmit={handleSubmit}
            >
            <div className="w-full relative">
              <div className="flex">
                <div onClick={()=> setSearchBar(false)} className="p-2 mr-3 hover:scale-110 cursor-pointer">
                  <i className="icon invert dark:invert-0" style={{ backgroundPosition: '-60px -30px' }}></i>
                </div>
                <input
                  type="text"
                  placeholder="Search here"
                  className="input w-full bg-primary-light dark:bg-primary"
                  onChange={(e) => getResult(e.target.value)}
                  value={keyword}
                />
              </div>
              
            </div>
              <button className='z-10 btn bg-primary-light dark:bg-primary mr-2' type="submit">
                Go
              </button>
              <div className="absolute w-full top-14 bg-base-100 rounded-xl my-3 overflow-clip md:max-h-64 overflow-y-scroll">

                {result.length > 0 ? result.map((car) => (
                  <div className='bg-primary p-2 px-4 cursor-pointer ' key={car.id}>
                    <h4 className='text-sm opacity-60'>{car.make}</h4>
                    <h3 >{car.model}</h3>
                    {/* Add more details if needed */}
                  </div>
                )) : <h2 className='text-center p-4'>No Cars Found</h2> }
              </div>
              {/* <span className="loading loading-spinner loading-lg"></span> */}
            </form>
          </div>
        }
        
      </div>
      
    </main>
  );
};

export default Page;
