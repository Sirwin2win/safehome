import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../features/products/productSlice'
import { IoLocationOutline } from "react-icons/io5";
import { PiBookOpenUser } from "react-icons/pi";
import { PiListChecksBold } from "react-icons/pi";
import { MdOutlineMailOutline , MdOutlinePhoneEnabled } from "react-icons/md";





const PropertyDetailPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {currentProduct, status,error} = useSelector((state)=>state.products)
    const [isOpen, setIsOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

    // console.log(currentProduct)
    // console.log(id)
   
    useEffect(()=>{
       if(id){
          dispatch(fetchProduct(id))
        }
        
    },[dispatch,id])
console.log(currentProduct)
    if(status === "loading"){
  return <div>Loading...</div>
}
if(status === 'failed'){
  return <div>Error : {error}</div>
}
  return (
    <div className='mx-20'>
        <div className='md:flex md:justify-center'>
            {/* left hand image side */}
            <div className='w-80 md:w-full md:ms-0 -ms-12'>
            <p className='text-3xl font-bold mt-20'>{currentProduct?.title} {currentProduct?.estate}</p>
            <div className='flex justify-start'>
                <IoLocationOutline className='size-5 text-red-500'/>
                <p className='text-gray-500 ms-3 mb-5'>{currentProduct?.location}</p>
            </div>
       <img  className="md:h-150 md:w-full object-cover rounded-xl" src={`https://api.safehomeproperties.com/uploads/${currentProduct?.image}`} alt={currentProduct?.title} />
      
       <div className='md:flex mt-5 gap-3 flex-wrap'>
  {currentProduct?.images?.map((img) => (
    <img
      key={img.id}
      onClick={() => {
        setSelectedImage(img.images);
        setIsOpen(true);
      }}
      className='size-50 border-4 border-white object-cover rounded-xl cursor-pointer hover:scale-105 transition'
      src={`https://api.safehomeproperties.com/uploads/${img.images}`}
      alt={`gallery ${img.id}`}
    />
  ))}
</div>


{isOpen && (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
    
    {/* Close */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-5 right-5 text-white text-4xl"
    >
      &times;
    </button>

    {/* Preview */}
    <img
      src={`https://api.safehomeproperties.com/uploads/${selectedImage}`}
      alt="Preview"
      className="max-w-5xl w-full max-h-[90vh] object-contain rounded-xl"
    />
  </div>
)}

        <p className='my-5 text-lg'>{currentProduct?.description}</p>
            </div>
            {/* right hand */}
            <div className='bg-white w-80 rounded-xl md:ms-10 -ms-12 pe-5 h-100 shadow-2xl md:mt-40 mt-10 pt-10 ps-10'>
                <div className='flex my-5 -ms-5'>
                <PiListChecksBold className='size-8 text-red-500 '/>
                <p className='ms-3 text-2xl font-bold'>Property Contact</p>
                </div>

                <div className='flex'>
                    <PiBookOpenUser className='size-8 text-red-500 border-1 p-1'/>
                    <p className='ms-3'>{currentProduct?.location}</p>
                </div>

                <div className='flex my-3'>
                    <MdOutlinePhoneEnabled  className='size-8 text-red-500 border-1 p-1'/>
                    <p className='ms-3'>+2347041005315</p>
                </div>

                <div className='flex'>
                    <MdOutlineMailOutline className='size-8 text-red-500 border-1 p-1'/>
                    <p className='ms-3'>sales@safehomeproperties.com</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default PropertyDetailPage