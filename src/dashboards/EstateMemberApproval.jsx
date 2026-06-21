import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEstateMembers } from "../features/estateMember/estateMemberSlice";



const EstateMemberApproval = () => {
  const dispatch = useDispatch()
  const {estateMembers,status,error} = useSelector(state=>state.estateMembers)

  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchEstateMembers())
    }
  },[status,dispatch])
  console.log(estateMembers)

  return (
    <div>
      <p className="text-center font-bold">
        Kindly engage the user to know the reason why they want to join this estate before you approve
        them
      </p>
    </div>
  );
};

export default EstateMemberApproval;
