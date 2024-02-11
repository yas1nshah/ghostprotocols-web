'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import urls from '@/static-files/urls'
import Link from 'next/link'
import CarCard from '@/components/search/carCard'
import formatAmount from '@/utils/foramt-price'

const EditCarPage = ({params}) => {
    const {id} = params
    const router = useRouter()

    const [check, setCheck] = useState({"location":false, "model": false, "registration": false})
    const [message, setMessage] = useState({'message':"", "type":""});
    const [loading, setLoading] = useState(false)
    const notify = (message, type)=> {
        setMessage({"message":message, "type":type})
        // setTimeout(() => setMessage({ message: '', type: '' }), 5000);
      }
    
    const [title, setTitle] = useState('')

    const [carData, setCarData] = useState(
        {   "gallery":[],
            "galleryIndex": "",
            "title": "",
            "make":"",
            "model":"",
            "year":"",
            "price":"",
            "location":"",
            "mileage":"",
            "transmission":"",
            "engine":"",
            "engineCapacity":"",
            "registration":"",
            "body":"",
            "color":"",
            "sellerComments":"",
        }
    )

    const [oldCarData, setOldCarData] = useState(
        {   "gallery":[],
            "galleryIndex": null,
            "title": null,
            "make":null,
            "model":null,
            "year":null,
            "price":null,
            "location":null,
            "mileage":null,
            "transmission":null,
            "engine":null,
            "engineCapacity":null,
            "registration":null,
            "body":null,
            "Color":null,
            "sellerComments":null,
        }
    )
    const [editGallery, setEditGallery] = useState()
    
    const [imgPrev, setimgPrev] = useState(false)
    // ? Modle
    const [showModels, setShowModels] = useState(false)
    const [modelData, setModelData] = useState([ 
      {
        "id": 352,
        "makeID": 3,
        "make": "Honda",
        "model": "Civic Reborn VTi Oriel 1.8 i-VTEC",
        "title": "Honda Civic Reborn VTi Oriel 1.8 i-VTEC",
        "engineType": "Petrol",
        "engineCapacity": "1800 cc",
        "bodyType": "Sedan"
      },
      {
      "id": 332,
      "makeID": 3,
      "make": "Honda",
      "model": "Civic",
      "title": "Honda Civic",
      "engineType": "Petrol",
      "engineCapacity": "1500 cc",
      "bodyType": "Sedan"
    },
    {
      "id": 1322,
      "makeID": 1,
      "make": "Toyota",
      "model": "Corolla",
      "title": "Toyota Corolla",
      "engineType": "Petrol",
      "engineCapacity": "1600 cc",
      "bodyType": "Sedan"
    },
    {
      "id": 1375,
      "makeID": 1,
      "make": "Toyota",
      "model": "Corolla GLi 1.3",
      "title": "Toyota Corolla GLi 1.3",
      "engineType": "Petrol",
      "engineCapacity": "1300 cc",
      "bodyType": "Sedan"
    },
    {
      "id": 1054,
      "makeID": 2,
      "make": "Suzuki",
      "model": "Alto",
      "title": "Suzuki Alto",
      "engineType": "Petrol",
      "engineCapacity": "660 cc",
      "bodyType": "Hatchback"
    },
    {
      "id": 1752,
      "makeID": 1,
      "make": "Toyota",
      "model": "Yaris",
      "title": "Toyota Yaris",
      "engineType": "Petrol",
      "engineCapacity": "1000 cc",
      "bodyType": "Sedan"
    },
     ])

    const getModels = async (keyword) => {
        const result = await search(keyword);
        setModelData(result);
    }
    // ? Location
    const [showCity, setShowCity] = useState(false)
    const [cityData, setCityData] = useState([{"id": 103, "name": "Lahore"}, {"id": 162, "name": "Rawalpindi"}, {"id": 85, "name": "Karachi"}, {"id": 130, "name": "Multan"}, {"id": 71, "name": "Islamabad"}, {"id": 50, "name": "Faisalabad"},])

    const getCities = async (keyword) => {
        const result = await searchCities(keyword);
        setCityData(result);
    }

    // ? Registraion
    const [showReg, setShowReg] = useState(false)
    const [RegData, setRegData] = useState([{"id": 103, "name": "Lahore"}, {"id": 162, "name": "Rawalpindi"}, {"id": 85, "name": "Karachi"}, {"id": 130, "name": "Multan"}, {"id": 71, "name": "Islamabad"}, {"id": 50, "name": "Faisalabad"}, {"id": 1111, "name": "Punjab"},{"id": 1112, "name": "Sindh"},{"id": 1113, "name": "KPK"},])

    const getReg = async (keyword) => {
        const result = await searchCities(keyword);
        setRegData(result);
    }



    // ? Gallery

    const [newGallery, setNewGallery] = useState([])
      const handleFileChange = async (e) => {
        const files = e.target.files;
    
        // Restrict file types to images (you can customize this further)
        const allowedTypes = ['image/jpeg', 'image/png', 'image/heif', 'image/heic', 'image/bmp', 'image/webp'];
        const selectedFiles = Array.from(files).filter(file =>
            allowedTypes.includes(file.type)
        );
    
        // Ensure that the total number of selected files is not more than 5
        if (selectedFiles.length + newGallery.length > 5) {
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
        // setCarData({...carData, gallery : carData.gallery})
        setNewGallery(prevGallery => [...prevGallery, ...compressedImages]);
      };
  
      const removeImage = (index) => {
        let newGalleryIndex = carData.galleryIndex;
      
        if (newGallery.length === 1) {
          // If there's only one image left in newGallery, set galleryIndex to 0
          newGalleryIndex = 0;
        } else if (index === carData.galleryIndex) {
          // If the removed image is the currently selected one, adjust galleryIndex
          newGalleryIndex = index === 0 ? 0 : index - 1;
        }
      
        // Remove the image from newGallery
        const updatedGallery = newGallery.filter((_, idx) => idx !== index);
      
        // Update the state
        setNewGallery(updatedGallery);
      
        // Update the galleryIndex in carData
        setCarData({
          ...carData,
          galleryIndex: newGalleryIndex
        });
      };
      

      const uploadImages = async (stockId, apiKey = localStorage.getItem('jwtAccessToken')) => {
        const url = `${urls.APIURL}/add-car/gallery`; // Replace with your actual API endpoint
        const deleteUrl = `${urls.APIURL}/delete-gallery`; // Replace with your actual delete API endpoint
      
        // Delete existing gallery images first
        try {
          const deleteResponse = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ car_id: stockId }), // Assuming the server expects a JSON payload with car_id
          });
      
          if (!deleteResponse.ok) {
            throw new Error(`Failed to delete existing gallery images: ${deleteResponse.statusText}`);
          }
        } catch (error) {
          // Handle error while deleting existing gallery images
          console.error('Error while deleting existing gallery images:', error);
          return; // Exit function if deleting gallery images fails
        }
      
        // After deleting, upload new gallery images
        for (let index = 0; index < newGallery.length; index++) {
          const image = newGallery[index];
          const makeModel = `${carData.make}-${carData.model}`; // Assuming make and model are available
          const imageName = `${makeModel}-${id}-${index + 1}.webp`;
      
          const formData = new FormData();
          formData.append('car', String(id)); // Replace with your actual car ID
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
              notify(`Image ${index + 1} uploaded successfully`, "");
              console.log(`Image ${index + 1} uploaded successfully`);
            } else {
              // Handle error
              loading(false);
              notify(`Failed to upload image ${index + 1}`, "alert-error");
              console.error(`Failed to upload image ${index + 1}:`, response.message);
            }
          } catch (error) {
            // Handle network or other errors
            loading(false);
            notify(`Error while uploading image ${index + 1}`, "alert-error");
            console.error(`Error while uploading image ${index + 1}:`, error.toString());
          }
        }
      };
      

      // Create a function to compare two objects and return the keys with different values
        const getDifferentKeys = (obj1, obj2) => {
            const diffKeys = [];
            for (const key in obj1) {
            if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                if (obj1[key] !== obj2[key]) {
                diffKeys.push(key);
                }
            }
            }
            return diffKeys;
        };
        
        // Create a function to filter object properties based on keys
        const filterObjectByKeys = (obj, keys) => {
            const filteredObj = {};
            for (const key in obj) {
            if (keys.includes(key)) {
                filteredObj[key] = obj[key];
            }
            }
            return filteredObj;
        };

      const postCar = async (e) => {
        e.preventDefault();
        setLoading(true)
        // Assuming you have an endpoint to send the data to
        const apiUrl = `${urls.APIURL}/edit-car/${id}`; // Replace with your actual API endpoint
    
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

        // Get the keys with different values between carData and oldCarData
        const differentKeys = getDifferentKeys(carData, oldCarData);

        // Filter carData to include only the different fields
        const updatedCarData = filterObjectByKeys(carData, differentKeys);
        
        const carDataForPost = {
            ...updatedCarData,
            // Add additional fields if needed
          };
        // const carDataForPost = {
        //     "galleryIndex": String(carData.galleryIndex),
        //     "make": String(carData.make),
        //     "model": String(carData.model),
        //     "year": String(carData.year),
        //     "price": String(carData.price),
        //     "location": String(carData.location),
        //     "mileage": String(carData.mileage),
        //     "engine": String(carData.engine),
        //     "engineCapacity": String(carData.engineCapacity), // This
        //     "transmission": String(carData.transmission), // this
        //     "registration": String(carData.registration),
        //     "body": String(carData.body),
        //     "color": String(carData.color),
        //     "sellerComments": String(carData.sellerComments)
        //   };
        // const carData = {
        //     "galleryIndex": "1",
        //     "make": "Toyota",
        //     "model": "Corolla",
        //     "year": "2016",
        //     "price": "15600000",
        //     "location": "Multan",
        //     "mileage": "156253",
        //     "engine": "Pertrol",
        //     "registration": "Lahore",
        //     "body": "SUV",
        //     "color": "Red",
        //     "sellerComments": "This is a nice car"
        // }
        
        if(editGallery)
        {
            if(carData.galleryIndex> newGallery.length)
            {
                alert("Select Featured Image")
                return
            }
        }
        
    
        try {
          const response = await fetch(apiUrl, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(carDataForPost),
          });
    
          if (response.ok) {
            const {data} =  await response.json()
            notify("Car Poster Successfully", "alert-success")

            if(editGallery && newGallery.length > 0)
            {       
                await uploadImages(id, accessToken)
            }
            notify("Your Car is Listed", "alert-success")
            console.log('Car posted successfully!');
            notify("Redirecting You..", "")
            // You can handle success here
            setLoading(false)
        //     setTimeout(() => {
        //       router.push("/account");
        //   }, 1000);
          } else {
            notify("Failed to Post Car", "alert-error")
            setLoading(false)
            console.error('Failed to post car:', response.statusText);
            // Handle error accordingly
          }
        } catch (error) {
          notify("Failed to Post Car", "alert-error")
          setLoading(false)
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


    // ! Get Data
    const getData = async (apikey) => {
        const url = `${urls.APIURL}/edit-car/${id}`; // Make sure urls and id are defined
    
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${apikey}`
                }
            });
    
            if (res.ok) {
                console.log(res.status)
                return await res.json();
            } else {
                if(res.status === 403)
                {                   
                    throw new Error("You're Not the Owner of the Car.");
                }
                else if(res.status === 404)
                {                   
                    throw new Error("Car Not Found");
                }
                else {
                throw new Error('Failed to fetch data');}
            }
        } catch (error) {
            console.error(`Error while fetching data:`, error.toString());
            throw error; // Rethrow the error to propagate it further
        }
    }
    
    // ! Redirection or Loading Data.
    useEffect(() => {
        const status = localStorage.getItem("authenticated");
        if (status !== "true") {
            router.replace("/account/login");
        } else {
            const apikey = localStorage.getItem("jwtAccessToken");
            if (apikey) {
                getData(apikey)
                    .then(result => {setCarData(result); setOldCarData(result), setTitle(result.title); setimgPrev(true)})
                    .catch(error => console.error('Error fetching data:', error));
            }
        }
    }, []);



  return (
    <main className='main'>
      <div className="m-2">
          <h1 className='text-2xl md:text-4xl font-semibold'>Edit Car</h1>
          <div className="text-xs md:text-sm breadcrumbs ">
                <ul>
                  <li><Link href={"/"}>Home</Link></li> 
                  <li><Link href={`/inventory`}>Inventory</Link></li> 
                  <li>Edit Car</li>
                </ul>
          </div>
          <hr className='opacity-30 border-base-content'/>
      </div>

      {/* { message.message &&
        <div className="m-2">
        <div role="alert" className={`alert ${message.type}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{message.message}</span>
        </div>
      </div>
      } */}
        <div className="text-end">
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-success m-2" >Feature Car</button>
            
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-error m-2" >Delete Car</button>
            <dialog id="my_modal_5" className="text-start modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you Sure?!😖</h3>
                    <p className="py-4">Press DELETE to remove your car from Ghost Protocols.</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <div className="btn btn-error m-2" onClick={()=>{}}>Delete</div>
                        <button className="btn m-2 bg-primary">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
        <div className="py-4 m-2">
          <h2 className="text-base p-2">Live Preview:</h2>
            <CarCard
                img={editGallery && carData.galleryIndex < newGallery.length && newGallery.length > 0 ? URL.createObjectURL(newGallery[carData.galleryIndex]) : (imgPrev ? `http://127.0.0.1:8000/${oldCarData?.gallery[oldCarData?.galleryIndex]}` : "")}
                title={title}
                price={formatAmount(carData.price)}
                year={carData.year}
                registration={carData.registration}
                mileage={carData.mileage.toLocaleString()}
                engine={carData.engine}
                time={"0 seconds "}
            />
        </div>


      <form onSubmit={postCar} className='m-2'>

        {/* Select Gallery */}
        <div className='relative flex flex-col mb-4'>
          <span className='label-text-alt'>Gallery</span>
          {!editGallery && <div className="flex gap-2">
            {carData.gallery.map((url, index) => (
                    <div key={index} className={`relative m-4 rounded-xl ${index === carData.galleryIndex && "border-2"} border-secondary`}
                    onClick={()=>setCarData({
                            ...carData,
                            galleryIndex: index
                        })}>
                        <img
                            className='w-20 h-20 object-cover rounded-xl'
                            src={`http://127.0.0.1:8000${url}`}
                            alt={`Image ${index + 1}`}
                            
                        />
                     </div>
                    ))}
          </div>}
            
        <div onClick={()=>setEditGallery(prev => !prev)} className="btn">{editGallery ? "Cancel Change" : "Change Images"}</div>
          {editGallery && <><div>
          {
            newGallery.length > 0 && (
            
            <div className='flex gap-2'>

                {newGallery.map((file, index) => (
                    <div key={index} className={`relative m-4 rounded-xl ${index === carData.galleryIndex && "border-2"} border-secondary`}
                    onClick={()=>setCarData({
                            ...carData,
                            galleryIndex: index
                        })}>
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
            <p className='label-text-alt'>{"Select Upto 5 Images"}</p></>}
        </div>

        {/* Select Location */}
        <div className='relative'>
          <span className='label-text-alt'>Location</span>
          <input
            type='text'
            placeholder='Choose Your Location'
            className='input w-full bg-primary-light dark:bg-primary mb-4'
            onChange={(e) => {
                        setCarData({
                            ...carData,
                            location: e.target.value
                        });
                        getCities(e.target.value);
                    }}
            value={carData.location}
            onFocus={() => setShowCity(true)}
            onBlur={(e)=> setShowCity(false)}
          />

          {
            showCity &&
            <div className="p-4 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                cityData.length > 0 ?
                  cityData.map((city, index) => (
                    <div key={index} className='p-2 cursor-pointer'
                      onMouseDown={() => {
                        setCarData({
                            ...carData,
                            location: city.name
                        });
                        setCheck(prevCheck => ({ ...prevCheck, registration: true }));
                        setShowCity(false);
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
            onBlur={() => setShowModels(false)}
            value={title}
          />

          {
            showModels &&
            <div  className="p-4 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                modelData.length > 0 ?
                  modelData.map((model, index) => (
                    <div key={index} className='p-2'
                      onMouseDown={() => {
                        setCarData({
                            ...carData,
                            make: model.make,
                            model:model.model,
                            engine:model.engineType,
                            engineCapacity:model.engineCapacity,
                            body:model.bodyType, 
                        });
                       
                        setTitle(model.title); // Update title here
                        setCheck(prevCheck => ({ ...prevCheck, model: true }));
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
                onChange={(e) =>
                    setCarData({...carData,year: e.target.value})
                }

                min={1950}
                max={2024}
                value={carData.year}
            />

            </div>

            {/* Select Price */}
            <div className='relative w-full'>
            <span className='label-text-alt'>Price</span>
            <input
                type='number'
                placeholder='Enter Price'
                className='input w-full bg-primary-light dark:bg-primary '
                onChange={(e) =>
                    setCarData({...carData, price: e.target.value})
                }
                // min={100000}
                value={carData.price }
            />
            <p className='label-text-alt mb-4 mt-2 text-end'>{formatAmount(carData.price)} </p>

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
                onChange={(e) =>
                    setCarData({...carData, mileage: e.target.value})
                }
                
                value={carData.mileage}
            />
            <p className='label-text-alt mb-4 mt-2 text-end'>{ carData.mileage.toLocaleString()} km</p>

            </div>

            {/* Select Transmission */}
            <div className='relative w-full md:w-1/3'>
            <span className='label-text-alt'>Transmission</span>
            <select className="select select-bordered w-full bg-primary"
                value={carData.transmission}
                onChange={(e) =>
                    setCarData({...carData, transmission: e.target.value})
                }
                >
                    <option className='text-base-content bg-black' disabled>Select Transmission</option>
                    <option className='text-base-content bg-black'  value={0}>Manual</option>
                    <option className='text-base-content bg-black' value={1}>Automatic</option>
                    
            </select>
            </div>

            {/* Select Color */}
            <div className='relative mb-4 w-full md:w-1/3'>
            <p className='label-text-alt'>Color</p>
            <select className="select select-bordered w-full bg-primary"
                value={carData.color}
                onChange={(e) =>
                    setCarData({...carData, transmission: e.target.value})
                }
                >
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

            onChange={(e) =>{
                    setCarData({...carData, registration: e.target.value});
                    getReg(e.target.value);}
                }
            onFocus={() => setShowReg(true)}
            onBlur={() => setShowReg(false)}
            value={carData.registration}
          />

          {
            showReg &&
            <div className="p-4 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                RegData.length > 0 ?
                  RegData.map((city, index) => (
                    <div key={index} className=' p-2'
                      onMouseDown={() => {
                        
                        setRegistration(city.name)
                        setCheck(prevCheck => ({ ...prevCheck, registration: true }));
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
          placeholder="Enter Details" 
          value={carData.sellerComments}
          
        //   onChange={(e) => {
        //       const value = e.target.value.replace(/\n/g, '<br>');
        //       setSellerComments(value);
        //   }}
        onChange={(e) =>
                    setCarData({...carData, sellerComments: e.target.value})
                }
          >

          </textarea>

        </div>
          {
            loading ? <span className="loading loading-spinner loading-md"></span> :
            <button type='submit' className="btn bg-secondary w-full my-4">Post Car</button>
          }
      </form>
      { message.message &&
        <div className="m-2">
        <div role="alert" className={`alert ${message.type}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{message.message}</span>
        </div>
      </div>
      }
    </main>
  )
}

export default EditCarPage