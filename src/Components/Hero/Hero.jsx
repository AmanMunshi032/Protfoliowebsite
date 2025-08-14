import React from "react";
  import { FaGithub } from "react-icons/fa6";
  import { FaLinkedin } from "react-icons/fa";
  import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <header  id="hero" className="hero bg-gray-800">
      <div className="max-w-6xl mx-auto  px-6 py-20 flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-indigo-400"> Hi, I&apos;m
           <span className=" text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> Aman Munshi </span>
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-2xl ">
           I build polished and responsive web applications
            using React and the MERN stack. I focus on clean UI, good
            performance, and a developer-friendly codebase.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/Resume.pdf"
              download="Aman_Munshi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className=" font-semibold bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded "
            >
              Download Resume
            </a>
            <a href="#projects" className="px-4 py-2 border rounded">
              View Projects
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a className=" p-2 rounded-lg text-2xl bg-linear-to-r from-cyan-500 to-blue-500"
              href="https://github.com/AmanMunshi032"
              target="_blank"
              rel="noreferrer"
            >
           <FaGithub />
            </a>
            <a className="p-2 rounded-lg text-2xl bg-linear-to-r from-cyan-500 to-blue-500"
              href="https://www.linkedin.com/in/amanmunshi7/"
              target="_blank"
              rel="noreferrer"
            >
             <FaLinkedin />
            </a>
            <a className="p-2 rounded-lg text-2xl bg-linear-to-r from-cyan-500 to-blue-500"
              href="https://www.facebook.com/tanvirislam.aman.1"
              target="_blank"
              rel="noreferrer"
            >
             <FaFacebookSquare />
            </a>
          </div>
        </div>
        <div className="lg:w-100 lg:h-100 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
          <img
            src="https://i.ibb.co.com/KzDD5dRg/Whats-App-Image-2025-08-14-at-13-31-28-4fa8801c.jpg"
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
