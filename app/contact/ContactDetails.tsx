// pages/contact.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import MapPage from "./map";

const ContactDetails = () => {
  return (
    <div className="bg-white">
      {/* Top Info Section */}
      <div className="bg-[#c0e6c9] py-[60px] md:py-[100px] px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <p className="text-[22px] uppercase font-medium tracking-widest mb-4 subheading pl-3">
              Contact Us
            </p>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 heading">
              We'd love to hear from you
            </h2>
            <p className="text-gray-800 text-base  subheading">
              Have any question in mind or want to enquire? <br /> Reach out anytime via the form or contact details below. 
            </p>
          </div>

          {/* Right Column */}
          <div className="text-gray-900 space-y-6 subheading">
            <div>
              <h3 className="text-2xl md:text-[20px] xl:text-[25px] font-semibold pb-2 ">Let's talk!</h3>
              <p className="text-base">
                +91 9873335928 &nbsp;&nbsp;&nbsp;&nbsp; 
                <a href="mailto:info@theprayasfoundation.org" className="underline">
                  info@theprayasfoundation.org
                </a>
              </p>
            </div>

            <div className="pt-4 pb-4">
              <h3 className="text-2xl md:text-[20px] xl:text-[25px] font-semibold pb-2">Head Office</h3>
              
               <p className="text-base leading-relaxed">
               E-1703, Cloud 9, Vaishali,  <br />
              Ghaziabad, UP: 201019
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-[20px] xl:text-[25px] font-semibold pb-2">Branch Office</h3>
             <p className="text-base leading-relaxed">
               B405, Celebrity Square apartment, Sarjapura Attibele Road, <br />
                Bangalore -562017
              </p>
            </div>
             <div>
              <h3 className="text-2xl md:text-[20px] xl:text-[25px] font-semibold pb-2">Branch Office</h3>
              <p className="text-base leading-relaxed">
               Late Lt. Col. Braja Mohan Patnaik Residence 
Ramachandi Sahi,  <br />
               Puri-752001,Odisha
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 pt-2">
              <a href="#" className="text-gray-700 hover:text-black">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <MapPage />
        
      </div>
    </div>
  );
};

export default ContactDetails;
