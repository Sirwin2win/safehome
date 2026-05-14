import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/images/logo.jpg'
import { IoCloudUploadOutline } from "react-icons/io5";
import { fetchCategories } from "../features/category/categorySlice";
import { addProduct } from "../features/products/productSlice";

const ProductForm = () => {
    const navigate = useNavigate();
      const dispatch = useDispatch();

      //  const user = useSelector((state)=> state.auth.user)
      
  const [image, setImage] = useState(false);
  const [images, setImages] = useState([]);
  const [data, setData] = useState({
    title: "",
    location: "",
    estate: "",
    price:"",
    rooms:"",
    baths:"",
    size:"",
    description: "",
    category_id:"",
  });


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("location", data.location);
  formData.append("estate", data.estate);
  formData.append("price", data.price);
  formData.append("rooms", data.rooms);
  formData.append("baths", data.baths);
  formData.append("size", data.size);
  formData.append("description", data.description);
  formData.append("image", image);
  formData.append("category_id", data.category_id);

  // Multiple images
for (let i = 0; i < images.length; i++) {
  formData.append("images", images[i]);
}

  dispatch(addProduct(formData));
};

    const {categories, status, error} = useSelector((state)=> state.categories)
    const {prodSuccess, productError} = useSelector(state=> state.products)

      useEffect(()=>{
      if(status==='idle'){
        dispatch(fetchCategories())
      }
    },[status, dispatch])
  
        useEffect(() => {
  if (prodSuccess === "succeeded") {
    navigate("/listings");
  }
}, [prodSuccess, navigate]);

  if(status === "loading"){
      return <div>Loading...</div>
    }
    if(status === 'failed'){
      return <div>Error : {error}</div>
    }

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
          <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
             {/* Email  */}
             {productError && <p style={{ color: 'red' }}>{productError}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="title">Property Name</label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
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
                value={data.location}
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
                value={data.estate}
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
                value={data.price}
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
                value={data.rooms}
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
                value={data.baths}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="size">Property Size</label>
              <input
                type="number"
                name='size'
                id="size"
                value={data.size}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

             {/* Password  */}
                <div className="mb-6">
          <p>Upload the main property image</p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                height={300}
                width={300}
              />
            ) : (
              <IoCloudUploadOutline className="size-[50px]" />
            )}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
       focus:outline-none focus:shadow-outline form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          />
        </div>
        {/* Multiple Images Upload */}
<div className="mb-6">
  <p className="font-semibold mb-2">Upload Property Images(property gallery images)</p>

  <input
    type="file"
    multiple
    accept="image/*"
    onChange={(e) => setImages([...e.target.files])}
    className="border p-2 rounded-lg w-full"
  />

  {/* Preview Images */}
  <div className="grid grid-cols-3 gap-3 mt-4">
    {images.length > 0 &&
      images.map((img, index) => (
        <img
          key={index}
          src={URL.createObjectURL(img)}
          alt=""
          className="w-32 h-32 object-cover rounded-lg"
        />
      ))}
  </div>
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
               value={data.category_id}
              name="category_id"
              value={data.category_id}
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
              <textarea name="description" value={data.description} onChange={handleChange} className='mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500' id="description">

              </textarea>
        
            </div>

           
            <button
              type="submit"
              // onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
             <span> {prodSuccess === 'loading' ? 'Creating...' : 'Create Product'}</span>
            </button> 
            
          </form>

        </div>
      </div>
    </div>
  )
}
export default ProductForm