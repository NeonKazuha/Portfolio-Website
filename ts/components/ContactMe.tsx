"use client";

import React, { FormEvent, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:2005.tanmaydeshmukh@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50 text-center">
      {/* Header */}
      <h3 className="top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 md:space-y-8 xl:space-y-10 items-center">
        {/* Heading */}
        <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-teal-700 underline">Let's talk.</span>
        </h4>

        {/* Contact Info */}
        <div className="space-y-3 md:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-teal-700 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+91 80104 13606</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-teal-700 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">2005.tanmaydeshmukh@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-teal-700 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Mumbai, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-xl mx-auto">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className="contactInput p-3 rounded-lg border-2 border-gray-300 shadow-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
              type="text"
            />
            <input
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="contactInput p-3 rounded-lg border-2 border-gray-300 shadow-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
              type="email"
            />
          </div>

          {/* Subject Field */}
          <input
            name="subject"
            onChange={handleChange}
            placeholder="Subject"
            className="contactInput p-3 rounded-lg border-2 border-gray-300 shadow-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
            type="text"
          />

          {/* Message Field */}
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Message"
            className="contactInput p-3 rounded-lg border-2 border-gray-300 shadow-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
          />

          {/* Submit Button */}
          <button className="bg-teal-700 py-3 px-6 rounded-lg text-white font-bold text-lg hover:bg-teal-900 transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
