'use client'
import React, { useState } from 'react'
import { search, searchCities } from '@/app/liveSearch/actions'
import Link from 'next/link'
import formatAmount from '@/utils/foramt-price';
import CarCard from '@/components/search/carCard';

import urls from '@/static/urls';


const page = () => {
    const [gallery, setGallery] = useState([])
    const [galleryIndex, setGalleryIndex] = useState(0)

    const [title, setTitle] = useState('')

    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [year, setYear] = useState()
    const [price, setPrice] = useState(0)

    const [location, setLocation] = useState()
    const [mileage, setMileage] = useState(0)    
    const [transmission, setTransmission] = useState()

    const [engine, setEngine] = useState()
    const [engineCapacity, setEngineCapacity] = useState()
    const [registration, setRegistration] = useState()
    const [body, setBody] = useState()
    const [color, setColor] = useState()

    const [sellerComments, setSellerComments] = useState()

    // ? Modle
    const [showModels, setShowModels] = useState(false)
    const [modelData, setModelData] = useState([])

    const getModels = async (keyword) => {
        const result = await search(keyword);
        setModelData(result);
    }
    // ? Location
    const [showCity, setShowCity] = useState(false)
    const [cityData, setCityData] = useState([])

    const getCities = async (keyword) => {
        const result = await searchCities(keyword);
        setCityData(result);
    }

    // ? Location
    const [showReg, setShowReg] = useState(false)
    const [RegData, setRegData] = useState([])

    const getReg = async (keyword) => {
        const result = await searchCities(keyword);
        setRegData(result);
    }

    // ? Gallery
    const handleFileChange = async (e) => {
      const files = e.target.files;
  
      // Restrict file types to images (you can customize this further)
      const allowedTypes = ['image/jpeg', 'image/png', 'image/heif', 'image/heic', 'image/bmp', 'image/webp'];
      const selectedFiles = Array.from(files).filter(file =>
          allowedTypes.includes(file.type)
      );
  
      // Ensure that the total number of selected files is not more than 5
      if (selectedFiles.length + gallery.length > 5) {
          alert('You can only select up to 5 images.');
          return;
      }
  
      // Define a function to compress and convert an image to WebP format
      const compressAndConvertToWebP = (imageFile) => {
          return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = function (event) {
                  const img = new Image();
                  img.src = event.target.result;
                  img.onload = function () {
                      const canvas = document.createElement('canvas');
                      const ctx = canvas.getContext('2d');
                      canvas.width = img.width;
                      canvas.height = img.height;
                      ctx.drawImage(img, 0, 0);
                      canvas.toBlob(blob => {
                          // Returning the blob directly
                          resolve(blob);
                      }, 'image/webp', 0.7); // Convert to WebP format with quality 0.7 (adjust as needed)
                  };
              };
              reader.readAsDataURL(imageFile);
          });
      };
  
      // Compress and convert each selected image to WebP format
      const compressedImages = await Promise.all(selectedFiles.map(async (file) => {
          return await compressAndConvertToWebP(file);
      }));
  
      // Update the gallery state with the compressed images
      setGallery(prevGallery => [...prevGallery, ...compressedImages]);
  };
  
  
  
  
  
      const removeImage = (index) => {
        
        setGallery((prevGallery) => {
          const newGallery = [...prevGallery];
          newGallery.splice(index, 1);
          return newGallery;
        });
        if (gallery.length === 0)
        {
          setGalleryIndex(0)
        }
        else if(gallery.length > 1)
        {

          setGalleryIndex(index-1)
        }
        else{
          setGalleryIndex(0)
        }
      }

      const uploadImages = async ( stockId, apiKey = localStorage.getItem('jwtAccessToken')) => {
      
        const url = `${urls.APIURL}/add-car/gallery`; // Replace with your actual API endpoint
      
        for (let index = 0; index < gallery.length; index++) {
          const image = gallery[index];
          const makeModel = `${make}-${model}`; // Assuming make and model are available
          const imageName = `${makeModel}-${stockId}-${index + 1}.webp`;
      
          const formData = new FormData();
          formData.append('car', String(stockId)); // Replace with your actual car ID
          formData.append('image', new File([image], imageName, { type: image.type }));
      
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${apiKey}`,
              },
              body: formData,
            });
      
            if (response.ok) {
              // Image uploaded successfully
              console.log(`Image ${index + 1} uploaded successfully`);
            } else {
              // Handle error
              console.error(`Failed to upload image ${index + 1}:`, response.message);
            }
          } catch (error) {
            // Handle network or other errors
            console.error(`Error while uploading image ${index + 1}:`, error.toString());
          }
        }
      };
      
      
      
      const postCar = async (e) => {
        e.preventDefault();
    
        // Assuming you have an endpoint to send the data to
        const apiUrl = `${urls.APIURL}/add-car`; // Replace with your actual API endpoint
    
        // Retrieve access token from localStorage
        const accessToken = localStorage.getItem('jwtAccessToken');
    
        if (!accessToken) {
          console.error('Access token not found');
          return;
        }
    
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        };
    
        // const carData = {
        //     "galleryIndex": String(galleryIndex),
        //     "make": String(make),
        //     "model": String(model),
        //     "year": String(year),
        //     "price": String(price),
        //     "location": String(location),
        //     "mileage": String(mileage),
        //     "engine": String(engine),
        //     "engineCapacity": String(engineCapacity), // This
        //     "transmission": String(transmission), // this
        //     "registration": String(registration),
        //     "body": String(body),
        //     "color": String(color),
        //     "sellerComments": String(sellerComments)
        //   };
        const carData = {
            "galleryIndex": "1",
            "make": "Toyota",
            "model": "Corolla",
            "year": "2016",
            "price": "15600000",
            "location": "Multan",
            "mileage": "156253",
            "engine": "Pertrol",
            "registration": "Lahore",
            "body": "SUV",
            "color": "Red",
            "sellerComments": "This is a nice car"
        }
          
        
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(carData),
          });
    
          if (response.ok) {
            const {data} =  await response.json()
            console.log(data)
            await uploadImages(data.stockid, accessToken)
            console.log('Car posted successfully!');
            // You can handle success here
          } else {
            console.error('Failed to post car:', response.statusText);
            // Handle error accordingly
          }
        } catch (error) {
          console.error('Error while posting car:', error);
          // Handle error accordingly
        }
        // try {
        //   const response = await fetch(apiUrl, {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify(carData),
        //   });
    
        //   if (response.ok) {
        //     const car =  response.json
        //     console.log(response.body.data)
        //     console.log('Car posted successfully!');
        //     // You can handle success here
        //   } else {
        //     console.error('Failed to post car:', response.statusText);
        //     // Handle error accordingly
        //   }
        // } catch (error) {
        //   console.error('Error while posting car:', error);
        //   // Handle error accordingly
        // }
      };

  return (
    <main className='main'>
      <div className="m-2">
          <h1 className='text-2xl md:text-4xl font-semibold'>Add Car</h1>
          <div className="text-xs md:text-sm breadcrumbs ">
                <ul>
                  <li><Link href={"/"}>Home</Link></li> 
                  <li><Link href={`/inventory`}>Inventory</Link></li> 
                  <li>Add Car</li>
                </ul>
          </div>
          <hr className='opacity-30 border-base-content'/>
      </div>

        <div className="py-4">
          <h2 className="text-base p-2">Live Preview:</h2>
            <CarCard
                img=""
                title={title}
                price={formatAmount(price)}
                year={year}
                registration={registration}
                mileage={mileage.toLocaleString()}
                engine={engine}
                time={"0 seconds "}
            />
        </div>


      <form onSubmit={postCar}>

        {/* Select Gallery */}
        <div className='relative flex flex-col mb-4'>
          <span className='label-text-alt'>Gallery</span>
          <div>
          {
            gallery.length > 0 && (
            
            <div className='flex gap-2'>

                {gallery.map((file, index) => (
                    <div key={index} className={`relative m-4 rounded-xl ${index === galleryIndex && "border-2"} border-secondary`}
                    onClick={()=>setGalleryIndex(index)}>
                        <img
                            className='w-20 h-20 object-cover rounded-xl'
                            src={URL.createObjectURL(file)}
                            alt={`Image ${index + 1}`}
                            
                        />
                        <i className="bg-base hover:bg-secondary absolute top-1 right-1 px-2 rounded-xl" onClick={()=>removeImage(index)}>x</i>
                     </div>
                    ))}
                
            </div>
            )}
          </div>
          <input type="file"  onChange={handleFileChange}
            multiple className="file-input file-input-bordered w-full max-w-xs" />
            <p className='label-text-alt'>{"Select Upto 5 Images"}</p>
        </div>

        {/* Select Location */}
        <div className='relative'>
          <span className='label-text-alt'>Location</span>
          <input
            type='text'
            placeholder='Choose Your Location'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => {
                setLocation(e.target.value)
              getCities(e.target.value);
            }}
            onFocus={() => setShowCity(true)}
            value={location}
          />

          {
            showCity &&
            <div className="absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                cityData.length > 0 ?
                  cityData.map((city, index) => (
                    <div key={index} className=' p-2'
                      onClick={() => {
                        
                        setLocation(city.name)
                        setShowCity(false)
                      }}
                    >
                      <h4 className="text-base md:text-lg font-semibold">
                        {city.name}
                      </h4>
                      <hr className='dark:opacity-35 opacity-100' />
                    </div>
                  )) :
                  <p className="text-center">No City Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
              }
            </div>
          }
        </div>

        {/* Select Model */}
        <div className='relative'>
          <span className='label-text-alt'>Model</span>
          <input
            type='text'
            placeholder='Choose Your Model'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => {
              setTitle(e.target.value);
              getModels(e.target.value);
            }}
            onFocus={() => setShowModels(true)}
            value={title}
          />

          {
            showModels &&
            <div className="absolute top-full left-0 z-20 bg-base-100 drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                modelData.length > 0 ?
                  modelData.map((model, index) => (
                    <div key={index} className='bg-primary p-2'
                      onClick={() => {
                        setMake(model.make);
                        setModel(model.model);
                        setEngine(model.engineType);
                        setEngineCapacity(model.engineCapacity);
                        setBody(model.bodyType);
                        setTitle(model.title); // Update title here
                        setShowModels(false);
                      }}
                    >
                      <h5 className="text-xs md:text-sm">
                        {model.make}
                      </h5>
                      <h4 className="text-base md:text-lg font-semibold">
                        {model.model}
                      </h4>
                      <hr className='dark:opacity-35 opacity-100' />
                    </div>
                  )) :
                  <p className="text-center">No Cars Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
              }
            </div>
          }
        </div>
        
        {/* Year and Price */}
        <div className="flex justify-between flex-col md:flex-row gap-4 w-full">
            {/* Select Year */}
            <div className='relative w-full'>
            {/* Select Year */}
            <span className='label-text-alt'>Year</span>
            <input
                type='number'
                placeholder='Enter Year'
                className='input w-full bg-primary-light dark:bg-primary mb-4'
                onChange={(e) =>setYear(e.target.value)}
                // onFocus={() => setShowModels(true)}
                // min={1950}
                // max={2024}s
                value={year}
            />

            </div>

            {/* Select Price */}
            <div className='relative w-full'>
            <span className='label-text-alt'>Price</span>
            <input
                type='number'
                placeholder='Enter Price'
                className='input w-full bg-primary-light dark:bg-primary '
                onChange={(e) =>setPrice( parseInt(e.target.value, 10))}
                // onFocus={() => setShowModels(true)}
                // min={100000}
                value={price }
            />
            <p className='label-text-alt mb-4 mt-2 text-end'>{formatAmount(price)} </p>

            </div>
        </div>

        {/* Color Transmission Mileage */}
        <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-4 "> 
            {/* Select Mileage */}
            <div className='relative w-full md:w-1/3'>
            <span className='label-text-alt'>Mileage</span>
            <input
                type='number'
                placeholder='Enter Mileage'
                className='input w-full bg-primary-light dark:bg-primary '
                onChange={(e) =>setMileage(e.target.value)}
                // onFocus={() => setShowModels(true)}
                
                value={mileage}
            />
            <p className='label-text-alt mb-4 mt-2 text-end'>{mileage.toLocaleString()} km</p>

            </div>

            {/* Select Transmission */}
            <div className='relative w-full md:w-1/3'>
            <span className='label-text-alt'>Transmission</span>
            <select className="select select-bordered w-full bg-primary"
                value={transmission}
                onChange={(e)=>setTransmission(e.target.value)}>
                    <option className='text-base-content bg-black' disabled>Select Transmission</option>
                    <option className='text-base-content bg-black' value={0}>Manual</option>
                    <option className='text-base-content bg-black' value={1}>Automatic</option>
                    
            </select>
            </div>

            {/* Select Color */}
            <div className='relative mb-4 w-full md:w-1/3'>
            <p className='label-text-alt'>Color</p>
            <select className="select select-bordered w-full bg-primary"
                value={color}
                onChange={(e)=>setColor(e.target.value)}>
                    <option className='text-base-content bg-black' disabled>Select Color</option>
                    <option className='text-base-content bg-black'>Red</option>
                    <option className='text-base-content bg-black'>Black</option>
                    <option className='text-base-content bg-black'>White</option>
            </select>

            </div>
        </div>

        {/* Select Registraion */}
        <div className='relative'>
          <span className='label-text-alt'>Registraion</span>
          <input
            type='text'
            placeholder='Choose Your Registration'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => {
                setRegistration(e.target.value)
              getReg(e.target.value);
            }}
            onFocus={() => setShowReg(true)}
            value={registration}
          />

          {
            showReg &&
            <div className="absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                RegData.length > 0 ?
                  RegData.map((city, index) => (
                    <div key={index} className=' p-2'
                      onClick={() => {
                        
                        setRegistration(city.name)
                        setShowReg(false)
                      }}
                    >
                      <h4 className="text-base md:text-lg font-semibold">
                        {city.name}
                      </h4>
                      <hr className='dark:opacity-35 opacity-100' />
                    </div>
                  )) :
                  <p className="text-center">No City Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
              }
            </div>
          }
        </div>

        {/* Sellers Comments */}
        <div className='relative'>
          <span className='label-text-alt'>Seller Comments</span>
          <textarea className="textarea bg-primary w-full min-h-64" 
          placeholder="Enter Details" onChange={(e)=>setSellerComments(e.target.value)}>

          </textarea>

        </div>

        <button className="btn bg-secondary w-full my-4">Post Car</button>
        


      </form>
    </main>
  );
};

  
export default page