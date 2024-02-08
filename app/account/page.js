'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import urls from '@/static-files/urls';
import formatTimeDifference from '@/utils/format-date';

const getPlan = (limit)=>{
  if(limit < 2)
  {
    return "Free"
  }
  else if(limit < 10)
  {
    return "Bronze"
  }
  else if (limit < 15)
  {
    return "Silver"
  }
  else if (limit < 20)
  {
    return "Gold"
  }
}
async function getData(apikey) {
  const url = `${urls.APIURL}/profile`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apikey}`,
      },
    });

    if (response.ok) {
      return await response.json(); // Return the JSON data directly
    } else {
      // Handle error
      console.error(`Failed to fetch data`);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    // Handle network or other errors
    console.error(`Error while fetching data:`, error.toString());
    throw error; // Rethrow the error to propagate it further
  }
}

const Page = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const apikey = localStorage.getItem('jwtAccessToken');
    if (apikey) {
      getData(apikey)
        .then(data => {
          setUser(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, []); // Depend on apikey

  return (
    <main className="main">
      <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>Account</h1>
        <div className="text-xs md:text-sm breadcrumbs">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li>Account</li>
          </ul>
        </div>
        <hr className='opacity-30 border-base-content' />
      </div>

      <div className="m-2 p-4 bg-primary-light dark:bg primary rounded-xl flex justify-between">
        <div className="">

          <h3>Greetings 🏴‍☠️,</h3>
          <h2 className='text-xl md:text-2xl font-semibold'>{user.f_name}</h2>
          <button className="btn btn-sm my-4"><Link href={"/account/edit-profile"}>Edit Profile</Link></button>
        </div>
        
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

      </div>

      <div className="m-2 my-10">
        <div className="stats md:stats-horizontal shadow bg-primary-light dark:bg-primary w-full ">
  
          <div className="stat">
            <div className="stat-title">Plan</div>
            <div className="stat-value">{getPlan(user.ad_limit)}</div>
            <div className="stat-desc">Upgrade Now</div>
          </div>
          
          <div className="stat">
            <div className="stat-title">Ad Limit</div>
            <div className="stat-value">{user.ad_limit}</div>
            <div className="stat-desc">Post {user.ad_limit} Ads</div>
          </div>
          <div className="stat">
            <div className="stat-title">Type</div>
            <div className="stat-value">{user.acc_type ? "Dealer" : "Individual"}</div>       
          </div>
          <div className="stat">
            <div className="stat-title">Ghost Since</div>
            <div className="stat-value">{formatTimeDifference(user.date_joined)}</div>       
            <div className="stat-desc">GP Fam 💖</div>
          </div>
          


        </div>
      </div>
      
      <div className="m-2 md: my-10 grid grid-cols-2 gap-4">
                <Link href={"/account/my-ads"}  className="bg-primary-light dark:bg-primary hover:bg-secondary hover:bg-opacity-25 dark:hover:bg-secondary dark:hover:bg-opacity-10 transition-all cursor-pointer 
                            flex justify-between p-4 rounded-xl
                            flex-col items-center
                            md:flex-row h-32">
                  <div className="text-wrap order-2  w-full md:order-1">
                    <h3 className="text-secondary text-xs hidden md:inline">YOUR LISTINGS</h3>
                    <h2 className="font-medium text-base md:text-lg self-start">My Ads</h2>
                    <p className=" text-sm hidden md:inline">Manage Your Ads</p>
                  </div>
                  <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={`/media/services/my-ads.png`} />
                </Link>
                <Link href={"/services"}  className="bg-primary-light dark:bg-primary hover:bg-secondary hover:bg-opacity-25 dark:hover:bg-secondary dark:hover:bg-opacity-10 transition-all cursor-pointer 
                            flex justify-between p-4 rounded-xl
                            flex-col items-center
                            md:flex-row h-32">
                  <div className="text-wrap order-2  w-full md:order-1">
                    <h3 className="text-secondary text-xs hidden md:inline">GET THEM NOW</h3>
                    <h2 className="font-medium text-base md:text-lg self-start">GP Services</h2>
                    <p className=" text-sm hidden md:inline">Check GP Services</p>
                  </div>
                  <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={`/media/services/services.webp`} />
                </Link>
        </div>
    </main>
  );
}

export default Page;
