'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { search } from '@/app/liveSearch/actions'
import { useRouter } from 'next/navigation'


const SearchBar = (params) => {
    const setSearchBar = params.setSearchBar
    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState([{ "id":"000","model":"Type Something To Get Started"}]);
    const [showResult, setshowResult] = useState(false);
    const [typingTimer, setTypingTimer] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setKeyword(value);

        clearTimeout(typingTimer);

        // Set a timeout to call getResult after 2 seconds of no typing
        const timer = setTimeout(() => {
            getResult(value);
        }, 200); // Adjust the delay as needed (2 seconds in this case)

        setTypingTimer(timer);
    };

    useEffect(() => {
        // Cleanup function to clear the typing timer on unmount
        return () => {
            clearTimeout(typingTimer);
        };
    }, [typingTimer]);


    const router = useRouter()

//   ? user defined
    const getResult = async (value) => {
        setKeyword(value);
        let searchResult;
    
        // Check local storage for models
        const cachedModels = localStorage.getItem('models');
        if (cachedModels) {
            const parsedModels = JSON.parse(cachedModels);
            console.log("client")
            searchResult = parsedModels.filter(model =>
                model.title.toLowerCase().includes(value.toLowerCase())
            );
            setResult(searchResult)
        } else {
            // If models not found in local storage, fetch from server
            searchResult = await search(value);
            console.log(searchResult)
            setResult(searchResult);
        }
    
        console.log(searchResult);
        setResult(searchResult);
    };
    
   
    useEffect(() => {
        window.onload = async () => {
            try {
                const response = await fetch('/makes.json'); // Adjust the path as needed
                const makesData = await response.json();
                console.log(makesData);
                // Store makes in local storage
                localStorage.setItem('makes', JSON.stringify(makesData));
            } catch (error) {
                console.error('Error fetching makes from file:', error);
            }
        };
    }, []);
    

    useEffect(() => {
        window.onload = async () => {
            try {
                const response = await fetch('/cities.json'); // Adjust the path as needed
                const citiesData = await response.json();
                console.log(citiesData);
                // Store cities in local storage
                localStorage.setItem('cities', JSON.stringify(citiesData));
            } catch (error) {
                console.error('Error fetching cities from file:', error);
            }
        };
    }, []);
    

  
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/search?keyword=${keyword}`)
      setSearchBar(false)
      // You can perform additional actions on form submission if needed
    };


  return (
    <form id='search-bar' onSubmit={handleSubmit} className="w-full">
      <div className="relative flex gap-4 flex-grow">
          <input tabIndex={2}
          type="text"
          placeholder="Search here"
          className="input w-full bg-primary-light dark:bg-primary"
          // onChange={(e) => getResult(e.target.value)}
          onChange={handleInputChange}
          value={keyword}
          required
          onFocus={()=> setshowResult(true)}
          onBlur={(e)=> {
              if (!e.relatedTarget || !e.relatedTarget.classList.contains('result-link')) {
                  setshowResult(false);
              }
                  
          }}
          />
          <button className="bg-primary px-2 rounded-xl">
              <i className="icon invert dark:invert-0" style={{backgroundPosition: "-30px -90px"}}/>
          </button>

          {
              showResult &&  result.length > 0 &&
              <div tabIndex={3} className="result-link h-screen w-screen right-0 p-2
              absolute md:w-full   md:h-64 top-full mt-2 bg-black z-10 rounded-xl overflow-y-auto">
              {
                  result.map((car) => (
                  <div tabIndex={4} className='result-link hover:bg-secondary p-2 px-4 cursor-pointer '
                   key={car.id} onClick={()=>{
                          router.push(`/search?make=${car.make}&model=${car.model}`)
                          setshowResult(false)
                          }}
                  >
                      <h4 className='result-link text-sm opacity-60'>{car.make}</h4>
                      <h3 > {car.model} </h3>
                      {/* Add more details if needed */}
                      <hr className="dark:opacity-25" />
                  </div>
                  )) 
              }
              </div>
          }
      </div>
    </form>
  )
}

export default SearchBar