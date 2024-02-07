'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const SideBarContent = (params) => {

const router = useRouter()
const {keyword, yearFrom, yearTo, priceFrom, priceTo, color, transmission, bodyType, adType, page, makeP, modelP  } = params;
const [keywordS, setKeywordS] = useState(keyword)
const [yearFromS, setYearFromS] = useState(yearFrom)
const [yearToS, setYearToS] = useState(yearTo)
const [priceFromS, setPriceFromS] = useState(priceFrom)
const [priceToS, setPriceToS] = useState(priceTo)
const [colorS, setColorS] = useState(color)
const [transmissionS, setTransmissionS] = useState(transmission)
const [bodyTypeS, setBodyTypeS] = useState(bodyType)
const [adTypeS, setAdTypeS] = useState(adType)
const [makeS, setMakeS] = useState(makeP)
const [modelS, setModelS] = useState(modelP)



const colors = ["Red", "Blue", "White", "Black"]
const transmissions = ["Automatic", "Manual"]
const bodyTypes = ["SUV", "Sedan", "Hatchback"]
const adTypes = [{"name":"Ghost Yard's", "value":"ghost-yard"},
                {"name":"Free Listing", "value":"free-listing"},
                {"name":"Featured", "value":"featured"},
                ]

const handleSubmit = (e) => {
    e.preventDefault();
  
    // Build the dynamic search URL
    const searchParams = new URLSearchParams();
  
    if (keywordS) searchParams.append('keyword', encodeURIComponent(keywordS));
    if (yearFromS) searchParams.append('yearFrom', yearFromS);
    if (yearToS) searchParams.append('yearTo', yearToS);
    if (priceFromS) searchParams.append('priceFrom', priceFromS);
    if (priceToS) searchParams.append('priceTo', priceToS);
    if (colorS) searchParams.append('color', colorS);
    if (transmissionS) searchParams.append('transmission', transmissionS);
    if (bodyTypeS) searchParams.append('bodyType', bodyTypeS);
    if (adTypeS) searchParams.append('adType', adTypeS);
    if (makeS) searchParams.append('make', encodeURIComponent(makeS));
    if (modelS) searchParams.append('model', encodeURIComponent(modelS));
    if (page) searchParams.append('page', page);
  
    const dynamicSearchURL = `/search?${searchParams.toString()}`;
  
    // Navigate to the dynamically generated search page URL
    router.replace(dynamicSearchURL);
  };
  

  return (
    <div id='categories-filter' className="collapse  bg-primary-light dark:bg-primary collapse-plus my-2 flex-shrink-0
                        order-2  w-full
                        md:collapse-open md:order-1">
            <input type="checkbox" /> 
            <h2 className="collapse-title font-semibold">
                Filters
                {makeS}
            </h2>
            <div className="collapse-content"> 
              
                <form onSubmit={handleSubmit}>
                
                {/* Keyword */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Keyword
                    </div>
                    <div className="collapse-content text-right"> 
                        <input
                            type="text"
                            placeholder="Search here"
                            className="input w-full bg-base-100"
                            onChange={(e) => setKeywordS(e.target.value)}
                            value={keywordS}
                        />
                        <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                            Go
                        </button>
                    </div>
                </div>
                {/* Year */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Year
                    </div>
                    <div className="collapse-content text-right"> 
                        <div className="flex gap-2">

                        <input
                            type="number"
                            min={1950}
                            max={2024}
                            placeholder="From"
                            className="input w-full bg-base-100"
                            onChange={(e) => setYearFromS(e.target.value)}
                            value={yearFromS}
                        />
                        <input
                            type="number"
                            min={1980}
                            max={2024}
                            placeholder="To"
                            className="input w-full bg-base-100"
                            onChange={(e) => setYearToS(e.target.value)}
                            value={yearToS}
                        />
                        </div>
                        <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                            Go
                        </button>
                    </div>
                </div>
                {/* Price */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Price
                    </div>
                    <div className="collapse-content text-right"> 
                        <p className='py-2 text-start'>Enter Price in Lacs</p>
                        <div className="flex gap-2">

                        <input
                            type="number"
                            min={1}
                            max={300}
                            placeholder="From"
                            className="input w-full bg-base-100"
                            onChange={(e) => setPriceFromS(e.target.value * 100000)}
                            value={priceFromS/100000}
                        />
                        <input
                            type="number"
                            min={5}
                            max={500}
                            placeholder="To"
                            className="input w-full bg-base-100"
                            onChange={(e) => setPriceToS(e.target.value * 100000)}
                            value={priceToS/100000}
                        />
                        </div>
                        <button className='btn bg-base bg-opacity-20 my-2 text-base' type="submit">
                            Go
                        </button>
                    </div>
                </div>
                {/* Color */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Color
                    </div>
                    <div className="collapse-content "> 
                        {
                            colors.map((color, index) =>(
                                <div>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{color} </span> 
                                        <input type="radio" name="color" value={color} onChange={(e)=>setColorS(e.target.value)}  checked={colorS?.toLocaleLowerCase()===color.toLocaleLowerCase()}  className="radio checked:bg-secondary"  />
                                    </label>
                                </div>
                            ))
                        }
                        <div className="flex justify-end">
                            <button className='btn bg-base bg-opacity-20 my-2  text-base' type="submit">
                                Go
                            </button>
                        </div>
                    </div>
                </div>
                {/* Body Type */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Transmission
                    </div>
                    <div className="collapse-content"> 
                    {
                            transmissions.map((trans, index) =>(
                                <div key={index}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{trans} </span> 
                                        <input type="radio" name="transmission" value={trans} onChange={(e)=>setTransmissionS(e.target.value)}  checked={transmissionS?.toLocaleLowerCase()===trans.toLocaleLowerCase()}  className="radio checked:bg-secondary"  />
                                    </label>
                                </div>
                            ))
                        }
                        <div className="flex justify-end">
                            <button className='btn bg-base bg-opacity-20 my-2  text-base' type="submit">
                                Go
                            </button>
                        </div>
                    </div>
                </div>
                {/* Body Type */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Body Type
                    </div>
                    <div className="collapse-content">
                    {
                            bodyTypes.map((body, index) =>(
                                <div key={index}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{body} </span> 
                                        <input type="radio" name="bodyType" value={body} onChange={(e)=>setBodyTypeS(e.target.value)}  checked={bodyTypeS?.toLocaleLowerCase()===body.toLocaleLowerCase()}  className="radio checked:bg-secondary"  />
                                    </label>
                                </div>
                            ))
                        }
                        <div className="flex justify-end">
                            <button className='btn bg-base bg-opacity-20 my-2  text-base' type="submit">
                                Go
                            </button>
                        </div>
                        
                    </div>
                </div>
                {/* Ad Type */}
                <div  className="collapse bg-primary-light dark:bg-primary collapse-plus my-2">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium">
                        Ad Type
                    </div>
                    <div className="collapse-content"> 
                        {
                            adTypes.map((adType, index) =>(
                                <div key={index}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{adType.name} </span> 
                                        <input type="radio" name="adType" value={adType.value} onChange={(e)=>setAdTypeS(e.target.value)}  checked={adTypeS?.toLocaleLowerCase()===adType.value.toLocaleLowerCase()}  className="radio checked:bg-secondary"  />
                                    </label>
                                </div>
                            ))
                        }
                        <div className="flex justify-end">
                            <button className='btn bg-base bg-opacity-20 my-2  text-base' type="submit">
                                Go
                            </button>
                        </div>
                        
                    </div>
                </div>

                </form>

            </div>
        </div>
   
  )
}

export default SideBarContent
