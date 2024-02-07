'use client'
import React from 'react'
import { useState , useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { cookies } from 'next/headers'
import Link from 'next/link'
import urls from '@/static/urls'

const page = () => {const [accType, setAccType] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const [message, setMessage] = useState({'message':"", "type":""});
  const [loading, setLoading] = useState(false)

  const notify = (message, type)=> {
    setMessage({"message":message, "type":type})
    // setTimeout(() => setMessage({ message: '', type: '' }), 5000);
  }

  const register = async (e) => {
    e.preventDefault();
  
    // Validate password and confirm password
    if (password.length < 8) {
      notify('Password is too short', 'alert-error');
      return;
    }
    if (password !== confirmPassword) {
      notify('Passwords do not match', 'alert-error');
      return;
    }
    if (phone.length !== 11) {
      notify('Enter a valid phone number', 'alert-error');
      return;
    }
  
    setLoading(true);
  
    const userData = {
      acc_type: accType,
      "f_name":name,
      phone,
      address: accType ? address : 'N/A',
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
  
      const { token } = await response.json();
  
      const accessToken = token?.access;
      const refreshToken = token?.refresh;
  
      if (accessToken) {
        notify('Registration successful', 'alert-success');
        localStorage.setItem('jwtAccessToken', accessToken);
        localStorage.setItem('jwtRefreshToken', refreshToken);
        localStorage.setItem('authenticated', true);
        setLoading(false);
        
        notify("Redirecting..", "")
        // Redirect after successful registration
        setTimeout(() => {
          router.push('/account');
        }, 2000);
      } else {
        throw new Error('Access token not found in the server response');
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      notify('Registration failed. Please try again.', 'alert-error');
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('authenticated');
  //   if (isAuthenticated === 'true') {
  //     // If authenticated is true, navigate to the authenticated page
  //     router.replace("/account");
  //   }
  // }, []);
  

  return (
    <main className='main'>

      <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>Register</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/account`}>Account</Link></li> 
                <li>Register</li>
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
        <Image className='m-2 order-2 md:order-1 h-auto w-1/2 md:w-auto md:flex-grow' src={"/media/services/register.png"} width={400} height={400} alt='Login Image'/>
       
        <form className='order-1 md:order-2 md:w-2/5 mx-auto p-10 bg-primary rounded-xl my-4 overflow-hidden' onSubmit={register}>
        <h2 className='text-xl md:text-3xl font-semibold py-2'>Join Ghosts 👻</h2>

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

        <div className='flex justify-end items-end flex-col gap-4'>
            {loading ? <span className="loading loading-spinner loading-md"></span> :
              <button type='submit' className='btn w-full bg-secondary'>
              Create Account
            </button>}
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
         
      </div>
      
    </main>
  );
};

export default page

 