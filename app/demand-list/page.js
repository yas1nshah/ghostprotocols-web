import React from 'react'
import urls from '@/static-files/urls'
import Link from 'next/link'
import formatAmount from '@/utils/foramt-price'
import formatTimeDifference from '@/utils/format-date'


const getData = async (page) => {
    const url = (`${urls.APIURL}/demand-list?page=${page}`)
    const res = await fetch(url,{ next: { revalidate: 5 } })
    const data = await res.json()
    console.log(data.demandList)
    return data
}

const DemandList = async ({params,searchParams}) => {
    const {page = 1} = searchParams;
    const {demandList} = await getData(page)

    // const router = useRouter();
  return (
    <main className="main">
    <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>Demand List</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/demand-list`}>Demand List</Link></li> 
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
      </div>
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Car</th>
                <th>Demand</th>
                <th>Budget</th>
                <th>Posted</th>
            </tr>
            </thead>
            <tbody>
            {demandList?.map((item,index)=>(
            <tr key={index}>
                <th><Link target='_blank' href={`https://wa.me/923344444302?text=Hello%2C%20I%20got%20${item.make}%20${item.model}%20for%20${item.buyer}%20in%20${item.budget}%2C%20listed%20in%20Demand%20List%20%40ghostprotocols.pk`}>{item.id}</Link></th>
                <td><Link target='_blank' href={`https://wa.me/923344444302?text=Hello%2C%20I%20got%20${item.make}%20${item.model}%20for%20${item.buyer}%20in%20${item.budget}%2C%20listed%20in%20Demand%20List%20%40ghostprotocols.pk`}>{item.make} {item.model}</Link></td>
                <td><Link target='_blank' href={`https://wa.me/923344444302?text=Hello%2C%20I%20got%20${item.make}%20${item.model}%20for%20${item.buyer}%20in%20${item.budget}%2C%20listed%20in%20Demand%20List%20%40ghostprotocols.pk`}>{item.demand}</Link></td>
                <td><Link target='_blank' href={`https://wa.me/923344444302?text=Hello%2C%20I%20got%20${item.make}%20${item.model}%20for%20${item.buyer}%20in%20${item.budget}%2C%20listed%20in%20Demand%20List%20%40ghostprotocols.pk`}>{formatAmount(item.budget)}</Link></td>
                <td><Link target='_blank' href={`https://wa.me/923344444302?text=Hello%2C%20I%20got%20${item.make}%20${item.model}%20for%20${item.buyer}%20in%20${item.budget}%2C%20listed%20in%20Demand%20List%20%40ghostprotocols.pk`}>{formatTimeDifference(item.date)}</Link></td>
            </tr>
            ))}
            
            </tbody>
        </table>
        <p className='text-sm p-4'>Tap👆 on the Car if you got it. 😉</p>
        <div className="flex justify-end m-4">
            <div className="join">
                <button disabled={page==1} className="join-item btn"><Link href={`/demand-list?page=${parseInt(page)-1}`}>«</Link></button>
                <button className="join-item btn">Page {page}</button>
                <button className="join-item btn"><Link href={`/demand-list?page=${parseInt(page)+1}`}>»</Link></button>
            </div>
        </div>
    </main>
  )
}

export default DemandList