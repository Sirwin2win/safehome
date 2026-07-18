import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProperty } from "../features/properties/propertySlice";

const ServiceCharge = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentProperty, propStatus } = useSelector(
    (state) => state.properties,
  );
  useEffect(() => {
    dispatch(fetchProperty(id));
  }, [dispatch]);
  return (
    <div>
      <p>₦{currentProperty.service_charge}</p>
    </div>
  );
};

export default ServiceCharge;
