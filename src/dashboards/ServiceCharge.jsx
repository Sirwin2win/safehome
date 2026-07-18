import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProperty } from "../features/properties/propertySlice";
import { initialize } from "../features/serviceCharge/serviceChargeSlice";

const ServiceCharge = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentProperty, propStatus } = useSelector(
    (state) => state.properties,
  );
  useEffect(() => {
    dispatch(fetchProperty(id));
  }, [dispatch]);
  const handleDispatch = async () => {
    if (!currentProperty) {
      return;
    }

    try {
      const d = new Date();

      const text = d.toISOString().split("T")[0];
      const form = {
        propertyId: currentProperty.id,

        estateId: currentProperty.estate_id,

        amount: currentProperty.service_charge,
        startDate: text,
        endDate: text,
      };
      console.log(form);
      const result = await dispatch(initialize(form)).unwrap();

      if (result?.payment_link) {
        window.location.href = result.payment_link;
      }
    } catch (error) {
      console.error("Failed to initialize payment:", error);
    }
  };
  console.log(currentProperty);
  return (
    <div>
      <p>Click the pay button to proceed</p>

      <button
        onClick={handleDispatch}
        disabled={!currentProperty}
        className="
          bg-[#223B7E]
          text-white
          rounded-lg
          p-3
          mt-3
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        <span>Pay</span>

        <span className="ms-2">₦{currentProperty?.service_charge ?? 0}</span>
      </button>
    </div>
  );
};

export default ServiceCharge;
