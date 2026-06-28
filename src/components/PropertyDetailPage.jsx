import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct } from '../features/products/productSlice'
import { IoLocationOutline } from "react-icons/io5";
import { PiBookOpenUser } from "react-icons/pi";
import { PiListChecksBold } from "react-icons/pi";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
import { fetchProperty } from "../features/properties/propertySlice";

const PropertyDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentProperty, propStatus, propError } = useSelector(
    (state) => state.properties,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(currentProperty);
  // console.log(id)

  useEffect(() => {
    if (id) {
      dispatch(fetchProperty(id));
    }
  }, [dispatch, id]);
  console.log(currentProperty);
  if (propStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (propStatus === "failed") {
    return <div>Error : {propError}</div>;
  }
  return (
    <div className="mx-20">
      <div className="md:flex md:justify-center">
        {/* left hand image side */}
        <div className="w-80 md:w-full md:ms-0 -ms-12">
          <p className="text-3xl font-bold mt-20">
            {currentProperty?.type} {currentProperty?.estate}
          </p>
          <div className="flex justify-start">
            <IoLocationOutline className="size-5 text-red-500" />
            <p className="text-gray-500 ms-3 mb-5">
              {currentProperty?.address}
            </p>
          </div>
          <img
            className="md:h-150 md:w-full object-cover rounded-xl"
            src={`https://api.safehomeproperties.com/uploads/${currentProperty?.image}`}
            alt={currentProperty?.type}
          />

          <div className="md:flex mt-5 gap-3 flex-wrap">
            {currentProperty?.images?.map((img) => (
              <img
                key={img.id}
                onClick={() => {
                  setSelectedImage(img.image);
                  setIsOpen(true);
                }}
                className="size-40 border-4 border-white object-cover rounded-xl cursor-pointer hover:scale-105 transition"
                src={`https://api.safehomeproperties.com/uploads/${img.image}`}
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

          <p className="my-5 text-lg">{currentProperty?.description}</p>
          <Link
            to={"/dashboard/lease-form"}
            className="font-semibold rounded-lg bg-[#1B2B3F] text-white p-3"
          >
            Apply for Lease
          </Link>
          {/* Lease Application Form Request */}
          {/* {currentProperty.status === "AVAILABLE" ? (
            <Link
              to={"/dashboard/lease-form"}
              className="font-semibold rounded-lg bg-[#1B2B3F] text-white p-3"
            >
              Apply for Lease
            </Link>
          ) : (
            <p className="text-red-500 font-bold text-lg">
              Property unavailable at the moment
            </p>
          )} */}
        </div>
        {/* right hand */}
        <div className="bg-white w-80 rounded-xl md:ms-10 -ms-12 pe-5 h-100 shadow-2xl md:mt-40 mt-10 pt-10 ps-10">
          <div className="flex my-5 -ms-5">
            <PiListChecksBold className="size-8 text-red-500 " />
            <p className="ms-3 text-2xl font-bold">Property Contact</p>
          </div>

          <div className="flex">
            <PiBookOpenUser className="size-8 text-red-500 border-1 p-1" />
            <p className="ms-3">{currentProperty?.address}</p>
          </div>

          <div className="flex my-3">
            <MdOutlinePhoneEnabled className="size-8 text-red-500 border-1 p-1" />
            <p className="ms-3">+2347041005315</p>
          </div>

          <div className="flex">
            <MdOutlineMailOutline className="size-8 text-red-500 border-1 p-1" />
            <p className="ms-3">sales@safehomeproperties.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
