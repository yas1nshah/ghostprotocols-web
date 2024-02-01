'use client'
import React from 'react';
import { pathname,useRouter, useSearchParams } from 'next/navigation';

const ActiveFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let queries = []
  searchParams.forEach((value, key1)=>{
    queries.push({key:key1, value : value})
  })
//   const q = searchParams.getAll()


const removeParam = (paramToRemove) => {
    const newSearchParams = new URLSearchParams(searchParams);
    
    newSearchParams.delete(paramToRemove);
  
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  

  return (
    <>
    {
        queries.map((filter, index)=>(
            <div className="p-2 bg-primary-light dark:bg-primary gap-3 rounded-xl flex" key={index}>
                <p>
                    <span className='text-sm font-light'>{`${filter.key}: `}</span>
                    {filter.value}
                </p>
                <button onClick={() => removeParam(filter.key)} className="px-2 bg-primary-light dark:bg-primary hover:bg-base-100 rounded-full">x</button>
            </div>
        ))
    }
    
    {/* {
        searchParams.forEach((value,key)=>{
            console.log(value)
           return (
        <div className="p-2 bg-primary-light dark:bg-primary gap-3 rounded-xl flex" key={key}>
          <p>
            <span className='text-sm font-light'>{`${key}: `}</span>
            {value}
          </p>
          <button onClick={() => removeParam(key)} className="px-2 bg-primary-light dark:bg-primary hover:bg-base-100 rounded-full">x</button>
        </div>
        
        )})
    } */}
    
      {/* {Object.keys(searchParams).map((key) => (
        <div className="p-2 bg-primary-light dark:bg-primary gap-3 rounded-xl flex" key={key}>
          <p>
            <span className='text-sm font-light'>{`${key}: `}</span>
            {searchParams[key]}
          </p>
          <button onClick={() => removeParam(key)} className="px-2 bg-primary-light dark:bg-primary hover:bg-base-100 rounded-full">x</button>
        </div>
      ))} */}
    </>
  );
};

export default ActiveFilters;
