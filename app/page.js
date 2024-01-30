
import CarSlider from "@/components/Home/carSlider";
import Hero from "@/components/Home/hero";


export default function Home() {
  
  return (
    <main className="relative max-w-6xl mx-auto
     before:fixed before:h-[300px] before:opacity-15 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
  after:fixed after:top-2/4 after:w-96 my-3 after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-25
  
    ">
      <Hero/>
      <CarSlider/>
      <CarSlider/>
      <CarSlider/>
    </main>
  );
}
