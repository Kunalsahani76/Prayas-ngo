"use client";
import React, { useEffect, useRef } from "react";




const DonationForm: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-lg border border-green-200 rounded-3xl shadow-xl p-8 space-y-6">
        {/* Decorative circle top-left */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-green-200 rounded-full blur-2xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-30 -z-10"></div>

        <h1 className="text-3xl font-extrabold text-center text-green-800 tracking-tight">
          Prayas Foundation Donation
        </h1>

        <div className="grid gap-2 text-sm text-gray-800">
          <p><span className="font-semibold">Bank Name:</span> ICICI Bank</p>
          <p><span className="font-semibold">Account Number:</span> 025501009162</p>
          <p><span className="font-semibold">Mobile Number:</span> +91 7982022319</p>
          <p><span className="font-semibold">Email:</span> prayasfoundation2025@gmail.com</p>
          <p><span className="font-semibold">Branch:</span> Sahibabad</p>
          <p><span className="font-semibold">IFSC Code:</span> ICIC0000255</p>
          
        </div>

        <div className="text-center">
          <p className="font-semibold text-green-700 mb-3">Scan QR to Donate</p>
          <div ref={ref} className="flex justify-center mx-auto" />
          {/* Fallback image (in case QR library fails) */}
          <img
            src="/logo/qr.png"
            alt="QR Code fallback"
            className="mx-auto mt-4  opacity-70"
          />
        </div>

        <div className="text-center text-xs text-gray-500 border-t pt-4">
          © {new Date().getFullYear()} Prayas Foundation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
