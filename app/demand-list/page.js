import React from 'react'
import urls from '@/static/urls'
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
    <div className="text-sm breadcrumbs  ">
        <ul>
          <li><Link href={"/"}>Home</Link></li> 
          <li>Demand List</li> 
        </ul>
    </div>
    <h1 className='text-xl md:text-2xl font-semibold'>Demand List </h1>
        
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
                <th>{item.id}</th>
                <td>{item.make} {item.model}</td>
                <td>{item.demand}</td>
                <td>{formatAmount(item.budget)}</td>
                <td>{formatTimeDifference(item.date)}</td>
            </tr>
            ))}
            
            </tbody>
        </table>
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