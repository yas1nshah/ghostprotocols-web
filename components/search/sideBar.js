'use client'
import React from 'react'
import { useState } from 'react'


const SideBarContent = () => {

const handleSubmit = () => {

}


  return (
    <form onSubmit={handleSubmit}>
       <h2 className="text-xl p-2">Filters</h2>
       {/* Keyword */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Keyword
            </div>
            <div className="collapse-content text-right"> 
                <input
                    type="text"
                    placeholder="Search here"
                    className="input w-full bg-base-100"
                    // onChange={(e) => setKeyword(e.target.value)}
                    // value={keyword}
                />
                <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                    Go
                </button>
            </div>
        </div>
       {/* Year */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Year
            </div>
            <div className="collapse-content text-right"> 
                <div className="flex gap-2">

                <input
                    type="text"
                    placeholder="From"
                    className="input w-full bg-base-100"
                    // onChange={(e) => setKeyword(e.target.value)}
                    // value={keyword}
                />
                <input
                    type="text"
                    placeholder="To"
                    className="input w-full bg-base-100"
                    // onChange={(e) => setKeyword(e.target.value)}
                    // value={keyword}
                />
                </div>
                <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                    Go
                </button>
            </div>
        </div>
       {/* Price */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Price
            </div>
            <div className="collapse-content text-right"> 
                <div className="flex gap-2">

                <input
                    type="text"
                    placeholder="From"
                    className="input w-full bg-base-100"
                    // onChange={(e) => setKeyword(e.target.value)}
                    // value={keyword}
                />
                <input
                    type="text"
                    placeholder="To"
                    className="input w-full bg-base-100"
                    // onChange={(e) => setKeyword(e.target.value)}
                    // value={keyword}
                />
                </div>
                <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                    Go
                </button>
            </div>
        </div>
       {/* Color */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Color
            </div>
            <div className="collapse-content "> 
                <div>
                    <label className="label cursor-pointer">
                        <span className="label-text">Red </span> 
                        <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Blue </span> 
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                    </label>
                </div>
            </div>
        </div>
       {/* Body Type */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Body Type
            </div>
            <div className="collapse-content"> 
                <div>
                    <label className="label cursor-pointer">
                        <span className="label-text">SUV </span> 
                        <input type="radio" name="bodyType" className="radio checked:bg-red-500" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Sedan </span> 
                        <input type="radio" name="bodyType" className="radio checked:bg-blue-500" />
                    </label>
                </div>
            </div>
        </div>
       {/* Ad Type */}
       <div  className="collapse bg-primary collapse-plus my-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-base font-medium">
                Ad Type
            </div>
            <div className="collapse-content"> 
                <div>
                    <label className="label cursor-pointer">
                        <span className="label-text">Featured </span> 
                        <input type="radio" name="adType" className="radio checked:bg-red-500" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Free Listing </span> 
                        <input type="radio" name="adType" className="radio checked:bg-blue-500" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Ghost Yard's </span> 
                        <input type="radio" name="adType" className="radio checked:bg-blue-500" />
                    </label>
                </div>
            </div>
        </div>
       
    </form>
  )
}

export default SideBarContent