import React from "react";

import { FaGithub } from "react-icons/fa6";
const projects = [
  {
    id: "project-1",
    name: "🏥Medical Camp Management System",
    image: "https://i.ibb.co.com/vx80m6g1/Screenshot-93.png",
    stack: ["React", "Node.js","Stripe", "Express ", "MongoDB","Recharts",],
    brief:
      "A full-featured MERN stack web application that streamlines the process of organizing and participating in medical camps. MCMS enables organizers to create, manage, and track medical camps, while allowing participants to register, pay, and provide feedback with ease.",
    live: "https://medical-camp-cb4e0.web.app/",
    github: "https://github.com/AmanMunshi032/Delmont",
    challenges:
      "Implementing realtime sync across devices; designing offline-first behaviour.",
    improvements:
      "Add mobile offline sync, richer access controls, and kanban-style boards.",
  },
  {
    id: "project-2",
    name: " Lost & Found Web Application",
    image: "https://i.ibb.co.com/dJ4FJZyj/Screenshot-94.png",
    stack: ["React", "Express js", "Firebase", "jwt ", "Node js","MongoDB"],
    brief:
      "A full-stack web application to help users post and find lost or found items. Built with React, Firebase, Node.js, Express, MongoDB, Tailwind CSS, and JWT authentication.",
    live: "https://assingment-4494e.web.app/",
    github: "https://github.com/AmanMunshi032/Lost-and-Found-web-Application?tab=readme-ov-file",
    challenges:
      "Handling payments securely and keeping UI responsive during network delays.",
    improvements:
      "Add user profiles, order history, and better product search filters.",
  },
  {
    id: "project-3",
    name: "Freelance Task Marketplace",
    image: "https://i.ibb.co.com/c546D76/Screenshot-102.png",
    stack: ["React", "Express js","Node js" ,"Firebase", "JWT","MongoDB"],
    brief:"A MERN-based platform that connects task posters with freelancers. Users can post short-term freelance tasks, browse available tasks, and place bids. Built for smooth and secure user experience with meaningful UI/UX and responsive design.",
    live: "https://freelancer-marketplase.web.app/",
    github: "https://github.com/AmanMunshi032/Freencermarketpalce",
    challenges:
      "Designing role-based dashboards and secure payment integration.",
    improvements:
      "Polish mobile UX, add analytics, and multi-language support.",
  },
];
const Project = () => {
  return (
   <div className="bg-gray-800">
     <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> MY Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow overflow-hidden flex flex-col "
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-black">{p.name}</h3>
              <p className="mt-2 mb-2 text-sm text-gray-600 flex-1">{p.brief}</p>
             <div className="space-x-2 space-y-2">
               <button className=" px-4 py-2  bg-gray-100   text-black rounded-2xl">{p.stack[0]}</button>
               <button className=" px-4 py-2 bg-gray-100  text-black rounded-2xl">{p.stack[1]}</button>
               <button className=" px-4 py-2 bg-gray-100  text-black rounded-2xl">{p.stack[2]}</button>
               <button className=" px-4 py-2 bg-gray-100  text-black rounded-2xl">{p.stack[3]}</button>
               <button className=" px-4 py-2 bg-gray-100  text-black rounded-2xl">{p.stack[4]}</button>
               <button className=" px-4 py-2 bg-gray-100  text-black rounded-2xl">{p.stack[5]}</button>
              
             </div>
              <div className="mt-4 flex items-center justify-between">
              <button className="btn bg-linear-to-r from-cyan-500 to-blue-500"> <a href={p.live}>view Live</a></button>
                
                
                <div className="text-xs px-6 py-2 gap-2 rounded-lg bg-black items-center flex">
                
                    <FaGithub  size={24}/>
                 <bitton className=' text-amber-50 font-bold'><a href={p.github}>Code</a></bitton>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>

  );
};

export default Project;
