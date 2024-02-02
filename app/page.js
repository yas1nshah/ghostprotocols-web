import Image from "next/image";

import CarSlider from "@/components/Home/carSlider";
import Hero from "@/components/Home/hero";
import urls from "@/static/urls";

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
    <main className="relative max-w-6xl mx-auto overflow-x-hidden
     before:fixed before:h-[300px] dark:before:opacity-15 before:opacity-55 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
  after:fixed after:top-2/4 after:w-96 my-3 after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-55 dark:after:opacity-25
    ">
      
      <Hero/>
      <CarSlider title="Ghost Yard's" cars={homeData.gpcars}/>
      
      <div className="services  m-2  overflow-hidden">
        <div className="flex my-4 mx-2 md:mx-0  gap-4 ">
         
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
        </div>

        <div className="flex my-4 mx-2 md:mx-0  gap-4 ">
         
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
        </div>

        <div className="flex my-4 mx-2 md:mx-0  gap-4 ">
         
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
          <div className="bg-primary-light dark:bg-primary flex-grow hover:bg-base-100 transition-all cursor-pointer 
                          flex justify-between p-4  rounded-xl
                          flex-col items-end
                          md:flex-row">
            <div className="text-wrap order-2  w-full md:order-1">
              <p className="text-secondary text-xs hidden md:inline">ENCHANTING SALES SORCERY</p>
              <h4 className="font-medium text-base md:text-lg self-start">We Sell, You Win</h4>
              <hp className=" text-sm hidden md:inline">Experience the magic of hassle-free car sales.</hp>
            </div>
            <Image className="w-2/3 h-auto  order-1 md:w-auto md:h-full md:order-2" width={200} height={100} src={"https://v2.ghostprotocols.pk/static/sell-now.webp"} />
          </div>
        </div>
        
      </div>

      <CarSlider title="Featured Cars" cars={homeData.featuredCars}/>
      <CarSlider title="Recent Cars" cars={homeData.recentcars}/>
      {/* <CarSlider/>
      <CarSlider/> */}
    </main>
  );
}
