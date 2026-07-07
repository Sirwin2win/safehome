import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";
import pdfImg from "../assets/images/pdf.jpg";

const DownloadLease = () => {
  const { id } = useParams();
  const pageRef = useRef(null);

  const exportPDF = async () => {
    const element = pageRef.current;

    const canvas = await html2canvas(element, {
      scale: 2, // Better quality
    });

    const imgData = canvas.toDataURL("../assets/images/safehome-logo.png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("document.pdf");
  };
  return (
    <div>
      <div ref={pageRef}>
        <h1>Invoice {id}</h1>
        <p>This content will be exported.</p>
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
