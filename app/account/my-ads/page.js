'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import urls from '@/static/urls';

async function getData(apikey) {
  const url = `${urls.APIURL}/my-cars`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apikey}`,
      },
    });

    if (response.ok) {
        console.log(await response.json())
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
        <h1 className='text-2xl md:text-4xl font-semibold'>My Ads</h1>
        <div className="text-xs md:text-sm breadcrumbs">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/account"}>Account</Link></li>
            <li>My Ads</li>
          </ul>
        </div>
        <hr className='opacity-30 border-base-content' />
      </div>

      
    </main>
  );
}

export default Page;
