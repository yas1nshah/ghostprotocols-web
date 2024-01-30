
import CarGallery from "@/components/CarDetails/CarGallery";
import Image from "next/image";



export default async function Home({params}) {

  const images = [  
    "https://ghostprotocols.pk/wp-content/uploads/elementor/thumbs/IMG-20230723-WA0156-q9u92qaqabc7gt48rb9rf6fgrbuy3jyxtjxkfflr8g.jpg",
    "https://ghostprotocols.pk/wp-content/uploads/elementor/thumbs/IMG-20230723-WA0156-q9u92qaqabc7gt48rb9rf6fgrbuy3jyxtjxkfflr8g.jpg",
    "https://ghostprotocols.pk/wp-content/uploads/elementor/thumbs/IMG-20230723-WA0163-q9u92s6enzes411igc30k5ydy3loiy6eht8jdziyw0.jpg",
    "https://ghostprotocols.pk/wp-content/uploads/jet-engine-forms/2/2023/07/IMG-20230723-WA0166.jpg"
  ]


  return (
    
  <main className="relative max-w-6xl mx-auto
  before:fixed before:h-[300px] before:opacity-15 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-accent before:to-transparent before:blur-2xl before:content-[''] before:-z-10
  after:fixed after:top-2/4 after:w-96  after:h-1/4  after:left-2/4 after:bg-gradient-conic after:from-secondary after:via-accent after:blur-2xl after:-z-10 after:opacity-25
  
  ">
  {/* <Image className="absolute w-2/3 h-auto right-0" width={200} height={200} src={"/primary-gradient.png"}/>
  <Image className="absolute w-2/4 h-auto left-0 top-1/2" width={200} height={200} src={"/primary-gradient.png"}/>
  <Image className="absolute w-1/4 h-auto left-0 top-1/2" width={200} height={200} src={"/secondary-gradient.png"}/> */}
  <div className="text-xs breadcrumbs p-2 ">
        <ul>
          <li><a>Home</a></li> 
          <li><a>Range Rover</a></li> 
          <li>Sports</li>
        </ul>
  </div>
  <div className="main flex gap-3 p-2">
    <div className="content w-2/3 flex-grow">
      
      <h1 className="text-2xl font-semibold text-primary-content pb-4">Range Rover Sport HSE 2003</h1>
      <CarGallery images={images}/>

      {/* Quick Overview */}
      <div className="bg-primary px-4 xl:px-8 xl:my-5 py-5  rounded-xl my-4 flex justify-between">
        <div className="flex justify-between gap-3 items-center">
          <div>
            <div className="stat-title">Year</div>
            <div className="text-xl font-semibold">Year</div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>     
        </div>

        <div className="border-x border-red-50 opacity-10"></div>

        <div className="flex justify-between gap-3 items-center">
          <div>
            <div className="stat-title">Mileage</div>
            <div className="text-xl font-semibold">18,625 km</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12L16 10"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>     
        </div>

        <div className="border-x border-red-50 opacity-10"></div>      

        <div className="flex justify-between gap-3 items-center">
          <div>
            <div className="stat-title">Engine</div>
            <div className="text-xl font-semibold">Petrol</div>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current" >
            <path d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div className="border-x border-red-50 opacity-10"></div>

        <div className="flex justify-between gap-3 items-center">
          <div>
            <div className="stat-title">Registraion</div>
            <div className="text-xl font-semibold">Lahore</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path d="M22 9.96997H2"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 18.9199H11"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>     
        </div>
      </div>
      {/* Quick Overview */}


      {/* Detailed Overview */}
      <div className="flex w-full px-2 py-5 my-4 xl:my-16">

        <div className="flex-grow mx-3">
          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Body</h4>
            <h4 className=" detailed-ov-value ">SUV</h4>
          </div>
          <hr className="opacity-15"/>
          
          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Color</h4>
            <h4 className=" detailed-ov-value ">Orange</h4>
          </div>
          <hr className="opacity-15"/>

          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Engnie Capacity</h4>
            <h4 className=" detailed-ov-value ">4400cc</h4>
          </div>
          <hr className="opacity-15"/>

          <div className="detailed-ov">
            <h4 className="detailed-ov-key">#Stock-ID</h4>
            <h4 className=" detailed-ov-value ">#9333</h4>
          </div>
          <hr className="opacity-15"/>

        </div>

        <div className="flex-grow mx-3">
          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Drive</h4>
            <h4 className=" detailed-ov-value ">FWD</h4>
          </div>
          <hr className="opacity-15"/>
          
          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Engine Capacity</h4>
            <h4 className=" detailed-ov-value ">Petrol</h4>
          </div>
          <hr className="opacity-15"/>

          <div className="detailed-ov">
            <h4 className="detailed-ov-key">Uploaded</h4>
            <h4 className=" detailed-ov-value ">3 Days Ago</h4>
          </div>
          <hr className="opacity-15"/>

        </div>


      </div>
      {/* Detailed Overview */}
      
      {/* Inspection */}
      <div className="py-4 xl:px-5 px-4 my-5 bg-primary rounded-xl flex justify-between items-center">
        <div className="flex-grow">
          <p className="text-secondary text-xs">REVEALING VEHICLE INSIGHTS</p>
          <h6 className="text-lg">Car Inspection</h6>
          <p className="text-sm">Discover your car's secrets with our inspections.</p>
          <button className="btn bg-primary mt-2 text-xs">Request Inspection</button>
        </div>
        <Image className="w-1/4" width={300} height={300} src={"/inspection.webp"} />
      </div>
      {/* Inspection */}

      {/* Comments */}
      <div className="seller xl:my-16 my-5 py-5">
        <h2 className="text-xl my-10 font-semibold">Seller Comments</h2>
        <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image width={100} height={100} alt="Seller Profile Pic" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  />
          </div>
        </div>
        <div className="chat-header">
          Seller Name
          <time className="text-xs opacity-50 mx-1">12:45</time>
        </div>
        <div className="chat-bubble bg-primary text-primary-content">Premio 2008 model. 2012 import and registered. 1500 cc. 37.50 demand. Location Islamabad</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            You
            <time className="text-xs opacity-50  mx-1">12:46</time>
          </div>
          <div className="chat-bubble bg-primary text-primary-content"><a href="">Click Here Chat With Seller!</a></div>
          
        </div>
      </div>
      {/* Comments */}


    </div>


    <div className="sidebar w-1/4 flex-shrink-0">
      
      
      <div className="stats stats-vertical my-2 w-full shadow bg-primary">
  
        <div className="stat">
          <div className="stat-title">Demand</div>
          <div className="stat-value text-secondary"><span className="font-normal">Rs</span> 3 Crore</div>
          <div className="stat-desc p-1 bg-secondary my-1 rounded-full text-center text-white">Managed By GP</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="stat-title">Ghost Inspection</div>
          <div className="stat-value">N/A</div>
          <div className="stat-desc">No Ratings Found</div>
        </div>
        
        <div className="stat">
        <button className="btn text-white w-full my-1 bg-primary">Seller Phone</button>
        <button button className="btn text-white w-full my-1 bg-secondary">Buy it For Me</button>
        </div>
        
      </div>



      <div className="p-2 my-4 bg-primary rounded-xl text-center py-4">
        <div className="avatar block text-center">
          <div className="my-4 p-0 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <h4 className="text-base font-semibold">Ghost Protocols</h4>
          <h4 className="text-sm">Lahore, Pakistan</h4>
          <h4 className="text-sm">3 Months Ago</h4>
          <button className="w-full mt-3 btn text-primary-content bg-primary">View Profile</button>
        </div>
      </div>
      
      <div className="p-2 my-4 bg-primary rounded-xl text-center py-4 flex-grow">
        <h4 className="font-semibold">Instructions</h4>
        <ul className="text-sm text-start  p-3 pl-4 list-decimal">
          <li>Use our WhatsApp Chatbot by clicking chat button to get instant replies.</li>
          <li>Meetings can be booked by Chatbot if our team isnt available on call.</li>
          <li>Our prices are almost final, further negociations are done on location only.</li>
          <li>GP is not responsible for B2B Deals in any way.</li>
        </ul>
      </div>
    </div>
    </div>

    <div className="Similar-Cars xl:my-16 my-5 py-5">
        <h2 className="text-xl my-10 font-semibold">Similar Cars</h2>
    </div>

    {/* APP CTA */}
    <div className="bg-primary p-4 xl:p-6 my-36 rounded-xl flex justify-between items-center relative h-60">
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-white">Get Ghost Protocols App Now</h2>
        <p>Buy & Sell Cars, Bikes and Auto Parts faster and better using our App.</p>
        {/* Stores */}
        <div className="flex justify-start gap-3 my-5">
          <a href="" className="bg-primary p-2 rounded-xl flex gap-4 t">
            <i className="icon" style={{backgroundPosition: '-30px -30px'}}></i>
            <div>
              <p className="text-xs"> Download on the</p>
              <h6 className="text-base font-semibold">App Store</h6>
            </div>
          </a>
          <a href="" className="bg-primary p-2 rounded-xl flex gap-4 t">
            <i className="icon" style={{backgroundPosition: '0 -30px'}}></i>
            <div>
              <p className="text-xs"> Get it on</p>
              <h6 className="text-base font-semibold">Play Store</h6>
            </div>
          </a>
        </div>
        {/* Stores */}
      </div>
      <div className="flex-shrink flex items-end">
        <Image className="w-full h-auto bottom-0" width={400} height={500} src={"/app-prev.webp"}/>
      </div>
    </div>
    {/* APP CTA */}
    <div className="h-96"></div>


  </main>
  
  );
}
