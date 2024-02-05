'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { search } from '@/app/liveSearch/actions'
import menu from '@/static/menu'
import SearchBar from './searchBar'

const Navbar = () => {
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
    <div className="header">
    <div className="head h-16 max-w-6xl py-2 px-2 mx-auto flex justify-between items-center">
        <Link href={"/"}>
            <Image className='h-full w-auto invert dark:invert-0'  height={100} width={120} src={"/ghost.png"}/>
        </Link>
      
           
      
        <div className='flex gap-5'>
            <button onClick={()=> setSearchBar(true)} className="icon hover:scale-110"></button>
            
            <label className="swap swap-rotate">
  
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="light" onChange={()=>{
                    const root = document.querySelector("body")
                    root.classList.contains("dark") ? root.classList.remove("dark") : root.classList.add("dark")
                }} />
                
                {/* sun icon */}
                <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                {/* moon icon */}
                <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
            </label>
            {/* <p className='text-base'>Login</p> */}
            <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>

    </div>
    {
          searchBar &&
          <div className="absolute w-full h-full bg-base-100 top-0 z-10">
          {/* bacldrop */}
          <div className="fixed bg-base-100 h-full w-full z-0 top-0 left-0 opacity-85"></div>
          <form
              className='flex gap-2 flex-grow max-w-6xl mx-auto'
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
              <div id='search-result' className="absolute w-full max-w-6xl mx-auto top-14 bg-base-100 rounded-xl my-3 overflow-clip md:max-h-64 overflow-y-scroll">

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
    
    {/* Botttom Nav */}
    <nav className='py-1 px-2 bg-secondary '>
        <ul className='flex justify-center gap-5 max-w-6xl mx-auto'>
            {menu.map((item, index) => (
                <li key={index} className='text-base font-semibold text-base-100 hover:text-base-content transition ease-in'>
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))} 
        </ul>
    </nav>
    </div>
  )
}

export default Navbar


