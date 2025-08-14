import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
    return (
         <section id="contact" className=" py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 ">
        <h1 className='text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500'>Contact us</h1>
        <div className='lg:flex justify-between items-center  gap-4'>
            <div className="mt-4 space-y-2 w-full  ">
            <h2 className="text-4xl font-bold text-center mb-6">Get In Touch</h2>
         <div className='bg-gray-900 w-full h-18 rounded-lg flex items-center px-4'>
          <MdOutlineEmail size={24} />
           <p className='  rounded-xl'><strong>Email:</strong> <a href="mailto:amanmunshi032@gmail
           .com" className="underline">amanmunshi032@gmail.com</a></p>
         </div>
          <div className='bg-gray-900 w-full h-18 rounded-lg flex items-center px-4'>
          <CiLocationOn size={24} />
           <p className='  rounded-xl'><strong>Location:</strong> Faridpur Dhaka Bangladesh</p>
         </div>
          <div className='bg-gray-900 w-full h-18 rounded-lg flex items-center px-4'>
          <FaWhatsapp  size={24}/>
           <p className='  rounded-xl'><strong>WhatsApp:</strong>+8801949457409</p>
         </div>
         
        </div>
       <div className='w-full'>
         <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="p-3 border rounded" placeholder="Your name" />
          <input className="p-3 border rounded" placeholder="Your email" />
          <textarea className="p-3 border rounded" placeholder="Message" rows={4} />
          <button type="button" className="w-max px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded">Send Message</button>
        </form>
       </div>
        </div>
      </div>
    </section>
    );
};

export default Contact;