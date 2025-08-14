import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800">
      <section id="about" className=" max-w-6xl mx-auto px-6 py-16 ">
      <h2 className=" text-underline  text-5xl my-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">
     About me
      </h2>
      <div className="lg:flex gap-8">
        <div>
          <img
            src="https://i.ibb.co.com/Ld7WfZCq/IMG-4723-1.png"
            alt="Your Photo"
            className="w-full rounded-xl h-full object-cover border-white border-5"
          />
        </div>

        <div className=" space-y-4 ">
          <p>
            I started my programming journey learning HTML & CSS, then moved to
            JavaScript and modern frontend frameworks. I enjoy building
            interfaces that are both beautiful and usable.
          </p>
          <p>
            Type of work I enjoy: Interactive UI, performance optimization, and
            building tools that make other developers' lives easier.
          </p>
          <p>
            Hobbies: I love football, sketching, and exploring new cafes. I also
            enjoy reading about product design and usability.
          </p>
          <p>
            Personality: Curious, detail-oriented, and friendly — I enjoy
            collaborating and learning from others.
          </p>
          <div className="space-x-4  space-y-4  ">
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              React js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Next js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Express js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              MongoDB
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Javascript{" "}
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Tailwind css
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Node js
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Figma
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              github
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Firebase
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Bootstap
            </button>
            <button className="px-6 py-2 font-semibold text-white  bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Meterial UI
            </button>
          </div>
          <div className="flex gap-2 font-bold ">
            <div className=" px-4 py-2   rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500">
              <h1 className="text-center">1+</h1>
            <p>Years of Experience</p>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500">
              <h1 className="text-center">20+</h1>
            <p>Projects Completed</p>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500">
              <h1 className="text-center">10+</h1>
            <p>Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default About;
