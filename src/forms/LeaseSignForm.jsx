import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import {
  fetchLeaseById,
  updateLeaseAgreement,
} from "../features/lease/leaseSlice";

import { getUserById } from "../features/auth/authSlice";

const LeaseSignForm = () => {
  // Get token from localStorage
  const dispatch = useDispatch();
  const { id } = useParams();

  const token = localStorage.getItem("token");

  let userId = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.uuid;
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
    }
  }
  // get auth info from the state
  const { user, status, error } = useSelector((state) => state.auth);

  // initialize dispatch
  // const dispatch = useDispatch();

  // dispatch for the actual user
  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  // console.log(user);
  // const { id } = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentLease, leStatus } = useSelector((state) => state.leases);
  useEffect(() => {
    if (id) {
      dispatch(fetchLeaseById(id));
    }
  }, [id, dispatch]);
  console.log(currentLease);
  const [form, setForm] = useState({
    start_date: "",
    end_date: "",
    landlord_name: "",
    landlord_email: "",
    landlord_phone: "",
    tenant_name: "",
    tenant_email: "",
    tenant_phone: "",
  });

  // Signature Sign
  const [signature, setSignature] = useState({
    landlordSigned: false,
    tenantSigned: false,
  });
  useEffect(() => {
    if (currentLease?.data) {
      setForm({
        start_date: currentLease.start_date || "",
        end_date: currentLease.end_date || "",
        landlord_name: currentLease.landlord_name || "",
        landlord_email: currentLease.landlord_email || "",
        landlord_phone: currentLease.landlord_phone || "",
        tenant_name: currentLease.tenant_name || "",
        tenant_email: currentLease.tenant_email || "",
        tenant_phone: currentLease.tenant_phone || "",
      });

      setSignature({
        landlordSigned: currentLease.landlord_signed || false,
        tenantSigned: currentLease.tenant_signed || false,
      });
    }
  }, [currentLease]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // user conditionals
  // const landlordReadOnly = user?.roles?.includes("landlord");
  // const tenantReadOnly = user?.roles?.includes("tenant");

  const isLandlordOfLease = user?.id === currentLease?.landlord_id;
  const isTenantOfLease = user?.id === currentLease?.tenant_id;

  const canEditLandlord = isLandlordOfLease && !currentLease?.landlord_signed;
  const canEditTenant = isTenantOfLease && !currentLease?.tenant_signed;
  const canSubmit = canEditLandlord || canEditTenant;

  // const canSubmit = canEditLandlord || canEditTenant;

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      start_date: form.start_date,
      end_date: form.end_date,
      landlord_name: form.landlord_name,
      landlord_email: form.landlord_email,
      landlord_phone: form.landlord_phone,
      tenant_name: form.tenant_name,
      tenant_email: form.tenant_email,
      tenant_phone: form.tenant_phone,
      landlord_signed: signature.landlordSigned,
      tenant_signed: signature.tenantSigned,
    };
    // const payload = { id, form };

    console.log(payload);

    // dispatch(signLease(payload));
    try {
      if (canEditLandlord && !signature.landlordSigned) {
        alert("Please sign as landlord.");
        return;
      }

      if (canEditTenant && !signature.tenantSigned) {
        alert("Please sign as tenant.");
        return;
      }
      // console.log(payload);
      await dispatch(updateLeaseAgreement({ id, payload })).unwrap();

      // Reset form
      setForm({
        start_date: "",
        end_date: "",
        landlord_name: "",
        landlord_email: "",
        landlord_phone: "",
        tenant_name: "",
        tenant_email: "",
        tenant_phone: "",
      });

      // Redirect after successful submission
      // navigate("/leases");
      // return <p>Lease created!!!</p>;
    } catch (error) {
      console.error("Failed to submit lease:", error);
    }
  };

  if (leStatus === "loading") {
    return <p>Loading lease...</p>;
  }

  if (!currentLease) {
    return <p>Lease not found.</p>;
  }
  return (
    <div>
      <p className="text-md md:text-3xl font-bold text-center">
        DIGITAL RESIDENTIAL TENANCY AGREEMENT
      </p>
      <form onSubmit={handleSubmit}>
        {/* Parties Started */}
        <p className="text-center text-lg font-semibold my-10">Parties</p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-lg font-semibold mb-5">Landlord</p>

            <div>
              {" "}
              Name:{" "}
              <span className="font-semibold">
                {currentLease?.landlord_name}
              </span>{" "}
            </div>
            <div>
              {" "}
              Email:{" "}
              <span className="font-semibold">
                {currentLease?.landlord_email}
              </span>{" "}
            </div>
            <div>
              {" "}
              Phone:{" "}
              <span className="font-semibold">
                {currentLease?.landlord_phone}
              </span>{" "}
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-5">Tenant</p>
            <div>
              {" "}
              Name:{" "}
              <span className="font-semibold">
                {currentLease?.tenant_name}
              </span>{" "}
            </div>
            <div>
              {" "}
              Email:{" "}
              <span className="font-semibold">
                {currentLease?.tenant_email}
              </span>{" "}
            </div>
            <div>
              {" "}
              Phone:{" "}
              <span className="font-semibold">
                {currentLease?.tenant_phone}
              </span>{" "}
            </div>
          </div>
        </div>
        {/* Parties Ended */}
        {/* Property Started */}
        <p className="text-center text-lg font-semibold my-10">Property</p>
        <p>
          The Landlord agrees to let, and the Tenant agrees to rent, the
          residential property located at:
        </p>
        <div className="my-5">
          Property Address:{" "}
          <span className="font-semibold">
            {currentLease?.property_address}
          </span>
        </div>
        <p>The premises shall be used solely for residential purposes.</p>
        {/* Property Ended */}
        {/* Lease Term Started */}
        <p className="text-center text-lg font-semibold my-10">Lease Term</p>
        <div>
          <label
            htmlFor="start_date"
            className="block mb-2 text-sm font-medium"
          >
            Start Date
          </label>

          <input
            id="start_date"
            name="start_date"
            type="date"
            value={form.start_date}
            onChange={handleChange}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            readOnly={!canEditTenant}
          />
        </div>
        <div>
          <label htmlFor="end_date" className="block mb-2 text-sm font-medium">
            End Date
          </label>

          <input
            id="end_date"
            name="end_date"
            type="date"
            value={form.end_date}
            onChange={handleChange}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            readOnly={!canEditTenant}
          />
        </div>
        {/* Lease Term Ended */}
        {/* Rent started */}
        <p className="text-center text-lg font-semibold my-10">Rent</p>
        <div>
          Annual Rent:{" "}
          <span className="font-semibold">₦{currentLease?.rent_amount}</span>
        </div>
        {/* Rent ended */}
        {/* Utilities Started */}
        <p className="text-center text-lg font-semibold my-10">Utilities</p>
        <p className="text-center mb-5">
          Unless otherwise agreed, the Tenant shall pay for:
        </p>
        <ul className="list-disc pl-5">
          <li>Electricity</li>
          <li>Water</li>
          <li>Internet</li>
          <li>Waste Disposal</li>
          <li>Other utilities used during the tenancy</li>
        </ul>
        {/* Utilities Ended */}
        {/* Landlord's Responsibilities Started */}
        <p className="text-center text-lg font-semibold my-10">
          Landlord's Responsibilities
        </p>
        <p className="text-center mb-5">The Landlord agrees to:</p>
        <ul className="list-disc pl-5">
          <li>Provide peaceful enjoyment of the premises.</li>
          <li>Carry out major structural repairs.</li>
          <li>
            Deliver the property in habitable condition at the commencement of
            the tenancy.
          </li>
        </ul>
        {/* Landlord's Responsibilities Ended */}
        {/* Tenant's Responsibilities Started */}
        <p className="text-center text-lg font-semibold my-10">
          Tenant's Responsibilities
        </p>
        <p className="text-center mb-5">The Tenant agrees to:</p>
        <ul className="list-disc pl-5">
          <li>Pay rent on time.</li>
          <li>Keep the premises clean.</li>
          <li>Report maintenance issues promptly.</li>
          <li>
            Not make structural alterations without the Landlord's written
            consent.
          </li>
          <li>
            Not sublet the property without the Landlord's written approval.
          </li>
        </ul>
        {/* Tenant's Responsibilities Ended */}
        {/* Inspection Started */}
        <p className="text-center text-lg font-semibold my-10">Inspection</p>
        <p>
          The Landlord may inspect the property after giving reasonable notice
          to the Tenant, except in emergency situations.
        </p>
        {/* Inspection Ended */}
        {/* Termination Started */}
        <p className="text-center text-lg font-semibold my-10">Termination</p>
        <p>
          Either party may terminate this Agreement by giving the notice
          required by applicable law or as otherwise agreed in writing.
        </p>
        {/* Termination Ended */}
        {/* Governing Law Started */}
        <p className="text-center text-lg font-semibold my-10">Governing Law</p>
        <p>
          This Agreement shall be governed by the laws of the Federal Republic
          of Nigeria
        </p>
        {/* Governing Law Ended */}
        {/* ELECTRONIC SIGNATURES STARTED */}
        <p className="text-center text-lg font-semibold my-10">
          ELECTRONIC SIGNATURES
        </p>
        <p>
          By selecting the checkbox below, each party confirms that they have
          read, understood, and agreed to all the terms of this Agreement. Each
          party acknowledges that selecting the checkbox constitutes their
          electronic signature.
        </p>
        {/* ELECTRONIC SIGNATURES ENDED */}
        {/* LANDLORD */}
        <p className="text-center text-lg font-semibold my-10">
          LANDLORD LEGAL INFORMATION
        </p>

        <div className="mb-5">
          <label htmlFor="landlordLegalName">Full Legal Name:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="landlordLegalName"
            name="landlord_name"
            value={form.landlord_name}
            onChange={handleChange}
            readOnly={!canEditLandlord}
          />
        </div>
        <div>
          <label htmlFor="landlordEmail">Landlord Email:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="landlordEmail"
            name="landlord_email"
            readOnly={!canEditLandlord}
            value={form.landlord_email}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="landlordPhone">Landlord Phone:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="landlordPhone"
            name="landlord_phone"
            onChange={handleChange}
            readOnly={!canEditLandlord}
            value={form.landlord_phone}
          />
        </div>

        <div>
          <input
            id="landlordSignature"
            disabled={!canEditLandlord}
            type="checkbox"
            checked={signature.landlordSigned}
            onChange={(e) =>
              setSignature({
                ...signature,
                landlordSigned: e.target.checked,
              })
            }
          />
          <label htmlFor="landlordSignature" className="ms-2">
            I confirm that I am the Landlord named in this Agreement and I
            electronically sign and agree to be legally bound by its terms.
          </label>
        </div>
        {/* TENANT */}
        <p className="text-center text-lg font-semibold my-10">
          TENANT LEGAL INFORMATION
        </p>

        <div className="mb-5">
          <label htmlFor="tenantLegalName">Full Legal Name:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="tenantLegalName"
            name="tenant_name"
            readOnly={!canEditTenant}
            value={form.tenant_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tenantEmail">Tenant Email:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="tenantEmail"
            name="tenant_email"
            readOnly={!canEditTenant}
            value={form.tenant_email}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="tenantPhone">Tenant Phone:</label>
          <input
            type="text"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
            id="tenantPhone"
            name="tenant_phone"
            readOnly={!canEditTenant}
            value={form.tenant_phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="tenantSignature"
            disabled={!canEditTenant}
            checked={signature.tenantSigned}
            onChange={(e) =>
              setSignature({
                ...signature,
                tenantSigned: e.target.checked,
              })
            }
          />
          <label htmlFor="tenantSignature" className="ms-2">
            I confirm that I am the Tenant named in this Agreement and I
            electronically sign and agree to be legally bound by its terms.
          </label>
        </div>
        <button
          type="submit"
          disabled={!canSubmit || leStatus === "loading"}
          className="w-full bg-[#1B2B3F] text-white py-2 my-3 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {leStatus === "loading" ? "Submitting..." : "Submit Lease Agreement"}
        </button>
      </form>
    </div>
  );
};

export default LeaseSignForm;
