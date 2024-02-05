import React from 'react'
import CarCard from './carCard'
import urls from '@/static/urls'
import formatAmount from '@/utils/foramt-price'
import formatTimeDifference from '@/utils/format-date'

async function getData(props) {
    const { keyword, yearFrom, yearTo, priceFrom, priceTo, color, transmission, bodyType, adType,page ,make, model } = props;

    const searchParams = new URLSearchParams();
  
    if (keyword) searchParams.append('keyword', decodeURIComponent(keyword));
    if (yearFrom) searchParams.append('yearFrom', yearFrom);
    if (yearTo) searchParams.append('yearTo', yearTo);
    if (priceFrom) searchParams.append('priceFrom', priceFrom);
    if (priceTo) searchParams.append('priceTo', priceTo);
    if (color) searchParams.append('color', color);
    if (transmission) searchParams.append('transmission', transmission);
    if (bodyType) searchParams.append('bodyType', bodyType);
    if (adType) searchParams.append('adType', adType);
    if (page) searchParams.append('page', page);
    if (make) searchParams.append('make', make);
    if (model) searchParams.append('make', model);
  
    const dynamicSearchURL = `/inventory?${searchParams.toString()}`;
  
    // console.log("yoyoyoyoo")
    // console.log(props?.toString())
    const res = await fetch(`${urls.APIURL}${dynamicSearchURL}`,{ next: { revalidate: 5 } })
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    // console.log(res.json.toString())
    return res.json()
  }


const CarResult = async (params) => {

    const cars = await getData(params)


  return (
    <>
    {
        cars.length != 0 ?
        cars.map((car)=>(
          <CarCard
        img=""
        title={car.title}
        price={formatAmount(car.price)}
        year={car.year}
        registration={car.registration}
        mileage={car.mileage.toLocaleString()}
        engine={car.engine}
        time={formatTimeDifference(car.date)}
      />
        ))
      :
      <h4 className='text-center'>No Cars Found</h4>
      }
      </>
  )
}

export default CarResult