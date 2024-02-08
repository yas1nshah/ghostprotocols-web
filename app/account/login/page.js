'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import urls from '@/static-files/urls';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Page = () => {
  const [jwtTokenValue, setJwtTokenValue] = useState(null);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({'message':"", "type":""});
  const [loading, setLoading] = useState(false)

  const notify = (message, type)=> {
    setMessage({"message":message, "type":type})
    // setTimeout(() => setMessage({ message: '', type: '' }), 5000);
  }

  const router = useRouter()

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    notify("Logging in...", "");

    const userData = { phone, password };

    try {
        const response = await fetch(`${urls.APIURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            
           notify("Network response was not ok..", "alert-error");
           setLoading(false);
            throw new Error('Network response was not ok');
        }

        const { token } = await response.json();

        const accessToken = token?.access;
        const refreshToken = token?.refresh;

        if (accessToken) {
            notify("Logged in", "alert-success");
            localStorage.setItem('jwtAccessToken', accessToken);
            localStorage.setItem('jwtRefreshToken', refreshToken);
            localStorage.setItem('authenticated', true);
            setLoading(false);
        } else {
            notify("Details are not Correct", "alert-error");
            throw new Error('Details are not Correct');
        }

        setMessage({ message: 'Redirecting...', type: '' });
        // Redirect after 2 seconds
        setTimeout(() => {
            router.push("/account");
        }, 1000);
    } catch (error) {
      
        console.error('Error during Logging in:', error.message);
        notify("Unable to Login Check Your Credentials", "alert-error");
        setLoading(false);
    }
};

  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      // If authenticated is true, navigate to the authenticated page
      router.replace("/account");
    }
  }, []);
  
  return (
    <main className='main'>

      <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>Login</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/account`}>Account</Link></li> 
                <li>Login</li>
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
      </div>

      { message.message &&
        <div className="m-2">
        <div role="alert" className={`alert ${message.type}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{message.message}</span>
        </div>
      </div>
      }
      
  
      <div className="flex gap-4 bg-primary md:p-10  m-2 rounded-xl overflow-hidden flex-wrap md:flex-nowrap items-end justify-end">
        <Image className='m-2 order-2 md:order-1 h-auto w-1/2 md:w-auto md:flex-grow' src={"/media/services/login.png"} width={400} height={400} alt='Login Image'/>

          <form className='order-1 md:order-2 md:w-2/5 mx-auto p-10 bg-primary rounded-xl my-4 overflow-hidden' onSubmit={login}>
          <h1 className='text-xl md:text-3xl font-semibold py-2'>Welcome Back🏴‍☠️</h1>

          <div>
            <span className='label-text-alt'>Phone</span>
            <input
              type='text'
              placeholder='Enter Your Phone'
              className='input w-full bg-primary-light dark:bg-primary mb-4 '
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
      </div>
      
    </main>
  );
};

export default Page;
