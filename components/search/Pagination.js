'use client'
import React from 'react'
import {useSearchParams, useRouter } from 'next/navigation';

const Pagination = (props) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const {page = 1} = props

    const goToPage = (page) => {
        const newSearchParams = new URLSearchParams(searchParams);
        
        newSearchParams.delete("page");
        newSearchParams.append("page", page)
      
        router.push(`/search?${newSearchParams.toString()}`);
        
      };
  return (
    <div className="join ">
        <button onClick={() => goToPage(Number(page) - 1)} disabled={page ==1} className="disabled:opacity-15 join-item btn bg-primary-light dark:bg-primary">«</button>
        <button className="join-item btn bg-primary-light dark:bg-primary">{`Page ${page}`}</button>
        <button onClick={() => goToPage(Number(page) + 1)} className="join-item btn bg-primary-light dark:bg-primary">»</button>
    </div>
  )
}

export default Pagination