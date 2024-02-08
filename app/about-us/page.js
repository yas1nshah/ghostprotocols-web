import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import team from '@/static-files/team'

const AboutUs = () => {
  return (
    <main className="main p-2">
        <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>About Us</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/about-us`}>About Us</Link></li> 
                
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
      </div>

        <div className="p-4 md:py-6 my-2 bg-primary-light dark:bg-primary rounded-xl">
          <h2 className='text-lg md:text-2xl font-semibold mb-2'>Our Story</h2>
          <p className='text-sm md:text-base opacity-95'>At GhostProtocols, we are more than just a dealership; we are a gateway to a world of automotive excellence. Our story is one of passion, commitment, and a relentless pursuit of automotive perfection.
            <br/><br />
            Founded by a group of enthusiasts, we understand the deep connection between drivers and their vehicles. Our mission is to offer you not just cars, but an experience that transcends the ordinary. We've curated a collection of the finest vehicles, each with a unique story waiting to be told.
          </p>
        </div>

        <div className="my-6">
          <h2 className='text-lg md:text-2xl font-semibold mb-2'>Our Core Values</h2>
          <div className="flex gap-4 flex:wrap flex-col md:flex-row">
            <div className="p-4 md:py-6 my-2 bg-primary-light dark:bg-primary rounded-xl flex-grow">
              <h3 className='text-base md:text-xl font-semibold mb-2'>Passion for Performance</h3>
              <p className='text-sm md:text-base opacity-95'>
                 At GhostProtocols, we share your passion for performance. We offer a range of high-performance vehicles to satisfy even the most demanding enthusiasts. When you choose GhostProtocols, you're choosing the thrill of the open road.
              </p>
            </div>
            <div className="p-4 md:py-6 my-2 bg-primary-light dark:bg-primary rounded-xl md:w-2/5 flex-shrink-0">
              <h3 className='text-base md:text-xl font-semibold mb-2'>Customer-Centric Excellence</h3>
              <p className='text-sm md:text-base opacity-95'>
                Our commitment to excellence extends to every aspect of our service. Your satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <div className="flex gap-4 flex:wrap flex-col md:flex-row">
            <div className="p-4 md:py-6 my-2 bg-primary-light dark:bg-primary rounded-xl  md:w-2/5 flex-shrink-0">
              <h3 className='text-base md:text-xl font-semibold mb-2'>Passion for Performance</h3>
              <p className='text-sm md:text-base opacity-95'>
               We embrace innovation and cutting-edge technology to ensure you have access to the latest advancements in the automotive world.
              </p>
            </div>
            <div className="p-4 md:py-6 my-2 bg-primary-light dark:bg-primary rounded-xl flex-grow">
              <h3 className='text-base md:text-xl font-semibold mb-2'>Sustainability and Responsibility</h3>
              <p className='text-sm md:text-base opacity-95'>
                We are dedicated to environmental responsibility. We offer eco-friendly options and implement green practices throughout our operations. When you choose GhostProtocols, you're choosing a more responsible automotive future.
              </p>
            </div>
          </div>
        </div>

        <div className="my-6">
          <h2 className='text-lg md:text-2xl font-semibold mb-4'>Our Team</h2>
          <div className="grid grid-cols-2 m-2 md:grid-cols-4 gap-4">

            {
              team.map((member, index)=>(
                <div key={index} className="text-center bg-primary-light dark:bg-primary p-4 rounded-xl">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image src={`/media/team${member.dp}`} width={100} height={100} alt={`${member.name}'s profile photo`}/>
                    </div>
                  </div>
                  <h3 className='text-base md:text-lg m-1 font-semibold'>{member.name}</h3>
                  <h4 className='text-sm md:text-base mb-2'>{member.role}</h4>
                  <div className="join mt-2">
                    <button className="btn join-item"><Link href={`tel:${member.phone}`}  target='blank' style={{ backgroundPosition: '0px 0px' }} className='icon invert dark:invert-0'/></button>
                    <button className="btn join-item"><Link href={`mailto:${member.mail}`}  target='blank' style={{ backgroundPosition: '-30px 0px' }} className='icon invert dark:invert-0'/></button>
                    <button className="btn join-item"><Link href={`https://wa.me/${member.whatsapp}`} target='blank' style={{ backgroundPosition: '-60px 0px' }} className='icon invert dark:invert-0'/></button>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
    </main>
  )
}

export default AboutUs