'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import menu from '@/static-files/menu'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'



const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [authenticated, setAuthenticated] = useState(false)

    const router = useRouter()

    // ! Authentication Status
    useEffect( ()=>{
        const status =  localStorage.getItem("authenticated")
        if (status === "true")
        {
         setAuthenticated(true)
        }
        else{
         setAuthenticated(false)
        }
     }, authenticated)



  return (
    <div className="header">

        <div className="max-w-6xl mx-auto px-2">
            {
                !searchBar ?
                <div className="h-16 flex justify-between items-center">
                    <Link className='h-2/3 w-auto' href={'/'}>
                        <Image className='h-full w-auto invert dark:invert-0' src={"/ghost.png"} height={100} width={200}/>
                    </Link>

                {/* Memu */}
                <div className="flex gap-4 items-center">
                    
                    <button className="btn text-lg bg-primary-light " onClick={()=>setSearchBar(true)}>
                        <span className="hidden md:inlibe">Search</span>  <i className="icon invert dark:invert-0 -translate-y-1" style={{backgroundPosition: "-30px -90px"}}></i>
                    </button>

                    

                    <div className="dropdown dropdown-end hidden md:inline">
                        <div tabIndex={0} role="button" className="btn m-1">
                            <div className="avatar w-8 h-8 hidden md:inline">
                                <div className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src="/profile.png" />
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-black rounded-box w-52">
                            <li><Link href={'/account'}>My Account</Link></li>
                            {!authenticated &&
                                <li><Link href={'/account/login'}>Login / Register</Link></li>}
                            {
                                authenticated &&
                                <li><a onClick={()=> {localStorage.setItem("authenticated", false);
                                    setAuthenticated(false);
                                    router.refresh()
                                 }}>Log Out</a></li>
                            }
                        </ul>
                    </div>
                    

                    <div className="drawer drawer-end z-10 md:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label type='select' className="icon drawer-button" style={{backgroundPosition:" -60px -90px"}} htmlFor="my-drawer-4"/>
                        
                        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                    </div> 
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        

                            <nav className="menu p-4 w-80 min-h-full bg-base-200 flex-col">
                            {/* Sidebar content here */}
                            {
                                menu.map((item, index) => (
                                <li key={index} className='text-xl font-semibold text-base-content transition ease-in'>
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))}
                            <div className="flex-grow"></div>

                            <div className="flex gap-6 justify-end">
                            

                                <div className="dropdown dropdown-end dropdown-top">
                                    <div tabIndex={0} role="button" className="btn m-1">
                                        <div className="avatar w-8 h-8 inline md:hidden">
                                            <div className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                                <img src="/profile.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-black rounded-box w-52">
                                        <li><Link href={'/account'}>My Account</Link></li>
                                        {!authenticated &&
                                            <li><Link href={'/account/login'}>Login / Register</Link></li>}
                                        {
                                            authenticated &&
                                            <li><a onClick={()=> {localStorage.setItem("authenticated", false); setAuthenticated(false)}}>Log Out</a></li>
                                        }
                                    </ul>
                                </div>


                            </div>     
                            </nav>
   
                    </div>
                    </div>


                </div>            
            

                </div>
                : 
                <div  id='search-bar' className="h-16 flex justify-between items-center gap-4">
                <div className="px-2 py-1 bg-primary rounded-xl cursor-pointer" onClick={()=> setSearchBar(false)}>

                    <i className="icon invert dark:invert-0" style={{backgroundPosition: "-60px -30px"}} />
                </div>
                <SearchBar setSearchBar={setSearchBar}/>
            </div>
            }
        </div>


        {
            <nav className='hidden md:block px-2 bg-secondary '>
                <ul className='flex justify-center gap-6 max-w-6xl mx-auto'>
                    {menu.map((item, index) => (
                        <li key={index} className='text-base font-semibold text-base-100 hover:text-base-content transition ease-in'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))} 
                </ul>
            </nav>
        }
    </div>
  )
}

export default Navbar