
import CarSlider from "@/components/Home/carSlider";
import Hero from "@/components/Home/hero";

async function getData() {
  const res = await fetch('https://v2.ghostprotocols.pk/api/home',{ next: { revalidate: 7200 } })

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  // console.log(res.json.toString())
  return res.json()
}

export default async function Home() {
  const homeData = await getData();
  return (
    <main className="relative max-w-6xl mx-auto
     before:fixed before:h-[300px] before:opacity-15 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
  after:fixed after:top-2/4 after:w-96 my-3 after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-25
    ">
      
      <Hero/>
      <CarSlider title="Ghost Yard's" cars={homeData.gpcars}/>
      <CarSlider title="Featured Cars" cars={homeData.featuredCars}/>
      <CarSlider title="Recent Cars" cars={homeData.recentcars}/>
      {/* <CarSlider/>
      <CarSlider/> */}
    </main>
  );
}
