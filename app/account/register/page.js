'use client'
import React from 'react'
import { useState } from 'react'
// import { cookies } from 'next/headers'
import Link from 'next/link'
import urls from '@/static/urls'

const page = () => {const [accType, setAccType] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const register = async (e) => {
    e.preventDefault();
  
    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    const userData = {
      acc_type: accType,
      name,
      phone,
      address: accType ? address : '',
      password,
      password2: confirmPassword,
    };
  
    try {
      const response = await fetch(`${urls.APIURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Assuming the server responds with a JSON object containing a 'token' property
      const { token } = await response.json();
  
      // Store the access token in local storage
      const accessToken = token?.access;
      if (accessToken) {
        localStorage.setItem('jwtAccessToken', accessToken);
      } else {
        throw new Error('Access token not found in the server response');
      }
  
      // Store the refresh token in local storage if needed
      // const refreshToken = token?.refresh;
      // if (refreshToken) {
      //   localStorage.setItem('jwtRefreshToken', refreshToken);
      // }
  
      console.log('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('Registration failed. Please try again.');
    }
  };
  

  return (
    <main className='max-w-6xl mx-auto'>
      <form className='md:w-1/2 mx-auto p-4 bg-primary rounded-xl my-4' onSubmit={register}>
        <h1 className='text-xl md:text-3xl font-semibold py-2'>Register</h1>

        <div className='flex justify-between p-6 bg-primary my-2 rounded-xl'>
          <h2>Are you a Dealer? </h2>
          <input
            type='checkbox'
            className='toggle'
            checked={accType}
            onChange={() => setAccType((prev) => !prev)}
          />
        </div>

        <div>
          <span className='label-text-alt'>Name</span>
          <input
            type='text'
            placeholder='Enter Your Name'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <span className='label-text-alt'>Phone</span>
          <input
            type='text'
            placeholder='Enter Your Phone'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        {accType && (
          <div>
            <span className='label-text-alt'>Address</span>
            <input
              type='text'
              placeholder='Enter Your Address'
              className='input w-full bg-primary-light dark:bg-primary mb-4'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        )}

        <div>
          <span className='label-text-alt'>Password</span>
          <input
            type='password'
            placeholder='Enter Your Password'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <span className='label-text-alt'>Confirm Password</span>
          <input
            type='password'
            placeholder='Confirm Your Password'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <div className='flex justify-end items-end flex-col gap-4'>
          <button type='submit' className='btn w-full bg-secondary'>
            Create Account
          </button>
          <p className='text-sm'>
            Already registered? 
            <span className="text-secondary mx-1">
              <Link href='/account/login'>
                Login
              </Link>
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};

export default page