import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const LeaseSignForm = () => {
  const { id } = useParams();
  return (
    <div>
      <p className="text-3xl font-bold text-center">
        DIGITAL RESIDENTIAL TENANCY AGREEMENT
      </p>
    </div>
  );
};

export default LeaseSignForm;
