import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import pdfImg from "../assets/images/pdf.jpg";
import { fetchLeaseById } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/safehome-logo.png";

const DownloadLease = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { currentLease, leStatus } = useSelector((state) => state.leases);
  useEffect(() => {
    if (id) {
      dispatch(fetchLeaseById(id));
    }
  }, [id, dispatch]);
  const pageRef = useRef(null);

  const exportPDF = async () => {
    const element = pageRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Remaining pages
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }

    pdf.save("lease-agreement.pdf");
  };
  return (
    <div>
      <div ref={pageRef} className="px-10">
        <h1>Invoice {id}</h1>
        <div className="flex justify-center">
          <img src={logo} alt="" className="size-20" />
        </div>
        {/* <img src={logo} alt="" /> */}
        <div>
          <p className="text-md md:text-3xl font-bold text-center">
            DIGITAL RESIDENTIAL TENANCY AGREEMENT
          </p>
          <form>
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
            <p className="text-center text-lg font-semibold my-10">
              Lease Term
            </p>
            <div>
              <p className="block mb-2 text-sm font-medium">
                Start Date:{" "}
                <span>
                  {new Date(currentLease?.start_date).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </span>
              </p>
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium">
                End Date:{" "}
                <span>
                  {new Date(currentLease?.end_date).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </span>
              </p>
            </div>
            {/* Lease Term Ended */}
            {/* Rent started */}
            <p className="text-center text-lg font-semibold my-10">Rent</p>
            <div>
              Annual Rent:{" "}
              <span className="font-semibold">
                ₦{currentLease?.rent_amount}
              </span>
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
                Deliver the property in habitable condition at the commencement
                of the tenancy.
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
            <p className="text-center text-lg font-semibold my-10">
              Inspection
            </p>
            <p>
              The Landlord may inspect the property after giving reasonable
              notice to the Tenant, except in emergency situations.
            </p>
            {/* Inspection Ended */}
            {/* Termination Started */}
            <p className="text-center text-lg font-semibold my-10">
              Termination
            </p>
            <p>
              Either party may terminate this Agreement by giving the notice
              required by applicable law or as otherwise agreed in writing.
            </p>
            {/* Termination Ended */}
            {/* Governing Law Started */}
            <p className="text-center text-lg font-semibold my-10">
              Governing Law
            </p>
            <p>
              This Agreement shall be governed by the laws of the Federal
              Republic of Nigeria
            </p>
            {/* Governing Law Ended */}
            {/* ELECTRONIC SIGNATURES STARTED */}
            <p className="text-center text-lg font-semibold my-10">
              ELECTRONIC SIGNATURES
            </p>
            <p>
              By selecting the checkbox below, each party confirms that they
              have read, understood, and agreed to all the terms of this
              Agreement. Each party acknowledges that selecting the checkbox
              constitutes their electronic signature.
            </p>
            {/* ELECTRONIC SIGNATURES ENDED */}
            {/* LANDLORD */}
            <p className="text-center text-lg font-semibold my-10">
              LANDLORD LEGAL INFORMATION
            </p>

            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium">
                Full Legal Name: <span>{currentLease?.landlord_name}</span>
              </p>
            </div>

            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium">
                Landlord Email: <span>{currentLease?.landlord_email}</span>
              </p>
            </div>
            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium">
                Landlord Phone: <span>{currentLease?.landlord_phone}</span>
              </p>
            </div>

            <div>
              <input
                id="landlordSignature"
                value={currentLease?.landlord_signed === 1 ? "Yes" : "No"}
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

            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium mb-3">
                Tenant Name: <span>{currentLease?.tenant_name}</span>
              </p>
            </div>
            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium mb-3">
                Tenant Email: <span>{currentLease?.tenant_email}</span>
              </p>
            </div>
            <div className="mb-3">
              <p className="block mb-2 text-sm font-medium">
                Tenant Phone: <span>{currentLease?.tenant_phone}</span>
              </p>
            </div>

            <div>
              <input
                // type="checkbox"
                value={currentLease?.tenant_signed === 1 ? "Yes" : "No"}
              />
              <label htmlFor="tenantSignature" className="ms-2">
                I confirm that I am the Tenant named in this Agreement and I
                electronically sign and agree to be legally bound by its terms.
              </label>
            </div>
          </form>
        </div>
      </div>

      <button
        onClick={exportPDF}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg mt-10"
      >
        Download pdf
      </button>
    </div>
  );
};

export default DownloadLease;
