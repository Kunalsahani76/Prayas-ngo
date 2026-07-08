"use client";

import React, { useRef } from "react";
import ContactDetails from "./ContactDetails";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      'service_bualwce',
      'template_n5ez9gm',
      form.current,
      'ZUtUsBOL88uEafhla'
    ).then(
      () => {
        alert('Message sent!');
        form.current?.reset();
      },
      (error) => {
        alert('Failed to send: ' + error.text);
      }
    );
  };

  return (
    <div className="bg-white w-full">
      {/* Banner */}
      <div className="w-full">
        <img
          src="/images/contact_bg.png"
          alt="Contact Banner"
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-16 subheading">
        <form className="space-y-10" ref={form} onSubmit={sendEmail}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="text-md text-gray-600 block mb-2">First Name</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full border-0 border-b-[2px] border-black focus:outline-none py-1 bg-white"
              />
            </div>
            <div>
              <label className="text-md text-gray-600 block mb-2">Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full border-0 border-b-[2px] border-black focus:outline-none py-1 bg-white"
              />
            </div>
          </div>

          {/* Email & Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="text-md text-gray-600 block mb-2">Email Id</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-0 border-b-[2px] border-black focus:outline-none py-1 bg-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border-0 border-b-[2px] border-black focus:outline-none py-1 bg-white"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Type your message"
              className="w-full border-[2px] border-black rounded-md focus:outline-none p-4 resize-none bg-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="bg-[#299E58] hover:bg-emerald-700 text-white">
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <ContactDetails />
    </div>
  );
};

export default Contact;
