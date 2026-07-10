import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const PayRent = () => {
  const { id } = useParams();
  return (
    <div>
      <p>PayRent Here({id})</p>
    </div>
  );
};

export default PayRent;
