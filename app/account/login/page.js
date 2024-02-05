'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import urls from '@/static/urls';

import { useRouter } from 'next/navigation';

const Page = () => {
  const [jwtTokenValue, setJwtTokenValue] = useState(null);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const register = async (e) => {
    e.preventDefault();
    setLoading(true)


  
  
    const userData = {
      phone,
      password,
    };
  
    try {
      const response = await fetch(`${urls.APIURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setMessage(response.message)
      // Assuming the server responds with a JSON object containing a 'token' property
      const { token } = await response.json();
  
      // Store the access token in local storage
      const accessToken = token?.access;
      const refreshToken = token?.refresh;
      if (accessToken) {
        localStorage.setItem('jwtAccessToken', accessToken);
        localStorage.setItem('jwtRefreshToken',refreshToken);
        localStorage.setItem('authenticated',true);
      } else {
        throw new Error('Access token not found in the server response');
      }
      setMessage("Redirecting...")
      
      // Store the refresh token in local storage if needed
      // const refreshToken = token?.refresh;
      // if (refreshToken) {
      //   localStorage.setItem('jwtRefreshToken', refreshToken);
      // }
  
      setTimeout(5000)
      console.log('Registration successful');
      router.push("/account")
    } catch (error) {
      console.error('Error during registration:', error.message);
      setMessage(error.message);
      setLoading(false)
    }

  };
  


  useEffect(() => {
    // Fetch the JWT token value from local storage when the component mounts
    const storedToken = localStorage.getItem('jwtAccessToken');
    setJwtTokenValue(storedToken);
  }, []);

  return (
    <main className='max-w-6xl mx-auto'>
        {
            message && <div className="toast">
  <div className="alert alert-success">
    <span>{message}</span>
  </div>
</div>
        }
      <form className='md:w-1/2 mx-auto p-4 bg-primary rounded-xl my-4' onSubmit={register}>
        <h1 className='text-xl md:text-3xl font-semibold py-2'>Login</h1>

        <div>
          <span className='label-text-alt'>Phone</span>
          <input
            type='text'
            placeholder='Enter Your Phone'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>

        

        <div>
          <span className='label-text-alt'>Password</span>
          <input
            type='password'
            placeholder='Enter Your Password'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>


        {/* {error && <p className='text-red-500 mb-4'>{error}</p>} */}

        <div className='flex justify-end items-end flex-col gap-4'>
          {loading ? <span className="loading loading-spinner loading-md"></span> :
            <button type='submit' className='btn w-full bg-secondary'>
            Login
          </button>}
          <p className='text-sm'>
           Not registered? 
            <span className="text-secondary mx-1">
              <Link href='/account/register'>
                Register
              </Link>
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Page;
