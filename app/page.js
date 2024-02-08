import Image from "next/image";

import CarSlider from "@/components/Home/carSlider";
import Hero from "@/components/Home/hero";
import urls from "@/static-files/urls";
import services from "@/static-files/services";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${urls.APIURL}/home`,{ next: { revalidate: 7200 } })

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  // console.log(res.json.toString())
  return res.json()
}

export default async function Home() {
  const homeData = await getData();
  return (
    <main className="main">
      
      <Hero/>
      <CarSlider title="Ghost Yard's" cars={homeData.gpcars}/>
      
      

      {/* Services */}
      <div className="m-2">

      <h1 className="text-xl md:text-2xl font-semibold">Services</h1>
        <div className="m-2 grid grid-cols-2 gap-4">
          {
            services.map((item,index)=>(
              <Link href={item.link} key={index} className="bg-primary-light dark:bg-primary hover:bg-secondary hover:bg-opacity-25 dark:hover:bg-secondary dark:hover:bg-opacity-10 transition-all cursor-pointer 
                            flex justify-between p-4 rounded-xl
                            flex-col items-end
                            md:flex-row">
                <div className="text-wrap order-2  w-full md:order-1">
                  <h3 className="text-secondary text-xs hidden md:inline">{item.subTitle}</h3>
                  <h2 className="font-medium text-base md:text-lg self-start">{item.title}</h2>
                  <p className=" text-sm hidden md:inline">{item.details}</p>
                </div>
                <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={`/media/services${item.image}`} />
              </Link>
            ))
          }
        </div>
      </div>

      <CarSlider title="Featured Cars" cars={homeData.featuredCars}/>
      <CarSlider title="Recent Cars" cars={homeData.recentcars}/>
      {/* <CarSlider/>
      <CarSlider/> */}
    </main>
  );
}
