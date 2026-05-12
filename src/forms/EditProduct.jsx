import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import logo from '../assets/images/logo.jpg'
import { IoCloudUploadOutline } from "react-icons/io5";
import { fetchCategories } from "../features/category/categorySlice";
import { updateProduct , fetchProduct } from "../features/products/productSlice";


const EditProduct = () => {
    // Initializing hooks
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {id} = useParams()
    // getting products from the redux store
    const {currentProduct, prodSuccess,productError } = useSelector((state)=>state.products)
    const {categories, status, error} = useSelector((state)=> state.categories)
    const [inputs, setInputs] = useState({
   title: "",
    location: "",
    estate: "",
    price:"",
    rooms:"",
    baths:"",
    size:"",
  description: "",
  category_id: "",
  image: null, // file object or URL
});

   // Dispatching fetch request
    useEffect(()=>{
       if(id){
          dispatch(fetchProduct(id))
          // setRes(currentProduct)
        
        }
       
    },[dispatch,id])

   useEffect(() => {
  if (currentProduct) {
    setInputs({
      title: currentProduct.title || "",
      location: currentProduct.location || "",
      estate: currentProduct.estate || "",
      price: currentProduct.price || "",
      rooms: currentProduct.rooms || "",
      baths: currentProduct.baths || "",
      size: currentProduct.size || "",
      description: currentProduct.description || "",
      category_id: currentProduct.category_id || "",
      image: currentProduct.image || null, // can be string (URL)
    });
  }
}, [currentProduct]);


const handleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs((inputs=>({...inputs,[name]:value})))
    }

    const handleImageChange = (e)=>{
      setInputs((inputs)=>({...inputs,image:e.target.files[0]}))
    }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData  = new FormData();
  formData .append("title", inputs.title);
  formData .append("location", inputs.location);
  formData .append("estate", inputs.estate);
  formData .append("price", inputs.price);
  formData .append("rooms", inputs.rooms);
  formData .append("baths", inputs.baths);
  formData .append("size", inputs.size);
  formData .append("description", inputs.description);
  formData .append("category_id", inputs.category_id);

  // Only send file if it's a File object
  if(inputs.image && typeof inputs.image==='object'){
        formData.append("image",inputs.image)
      }

  console.log("formData:", formData);
console.log("currentProduct:", currentProduct);

  dispatch(updateProduct({ id:id,formData }));
}; 
    useEffect(()=>{
      if(status==='idle'){
        dispatch(fetchCategories())
      }
    },[status, dispatch])
    if(status === "loading"){
      return <div>Loading...</div>
    }
    if(status === 'failed'){
      return <div>Error : {error}</div>
    }


    useEffect(() => {
  if (prodSuccess === "succeeded") {
    navigate("/dashboard/manage-product");
  }
}, [prodSuccess, navigate]);


  return (
   <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
           <div
             className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
              {/* Header */}
             <div className="text-center mb-8">
              <img src={logo} alt='' className='my-5 mx-auto size-30' />
               <p className="mt-2 text-sm sm:text-base text-gray-600">
                 Please Upload Products here
               </p>
             </div>
              {/* Form  */}
             <form className="space-y-6" encType="multipart/form-data">
                {/* Email  */}
                {productError && <p style={{ color: 'red' }}>{productError}</p>}
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="title">Property Name</label>
                 <input
                   type="text"
                   id="title"
                   name="title"
                   value={inputs.title}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="location">Property Location</label>
                 <input
                   type="text"
                   id="location"
                   name="location"
                   value={inputs.location}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="estate">Estate Name</label>
                 <input
                   type="text"
                   id="estate"
                   name="estate"
                   value={inputs.estate}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="price">Property Price</label>
                 <input
                   type="number"
                   name='price'
                   id="price"
                   value={inputs.price}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="rooms">Number of Rooms</label>
                 <input
                   type="number"
                   name='rooms'
                   id="rooms"
                   value={inputs.rooms}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="baths">Number of Bathrooms</label>
                 <input
                   type="number"
                   name='baths'
                   id="baths"
                   value={inputs.baths}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="size">Property Size</label>
                 <input
                   type="text"
                   name='size'
                   id="size"
                   value={inputs.size}
                   onChange={handleChange}
                   className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                   required
                 />
               </div>
   
                {/* Password  */}
                   <div className="mb-6">
             <p>Attach Property Image</p>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                          {/* {currentProduct.image} */}
                {/* {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    height={300}
                    width={300}
                  />
                ) : (
                  <IoCloudUploadOutline className="size-[50px]" />
                )} */}
              </label>


              
        <input type="file" name='image' onChange={handleImageChange} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
           focus:outline-none focus:shadow-outline form-control"
             id="image"
                name="image"
                // value={inputs.image}
                onChange={handleImageChange}
                type="file"
        />
           </div>
           {/* Category */}
                 <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="category">Category</label>
                  <div className="md:w-1/3">
               </div>
               <select
                 className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 // value={city}
                 id="category"
                value={inputs.category_id}
                 name="category_id"
                 onChange={handleChange}
               >
                 <option value="">--Categories--</option>
                 {/* <option value="bag">bag</option> */}
                 {categories && 
                   categories.map((cat) => (
                 
                     <option key={cat.id} value={cat.id} >
                       {cat.name}
                     </option>
                  
                   ))}
               </select>
             </div>
               {/* </div> */}
                 <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</label>
                 <textarea name="description" value={inputs.description} onChange={handleChange} className='mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500' id="description">
   
                 </textarea>
           
               </div>
   
              
               <button
                 
                   onClick={handleSubmit}
                 className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                 <span> {prodSuccess === 'loading' ? 'Updating...' : 'Update Product'}</span>
               </button> 
               
             </form>
   
           </div>
         </div>
       </div>
  )
}

export default EditProduct