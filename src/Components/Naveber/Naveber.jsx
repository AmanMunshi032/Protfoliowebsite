import React from "react";

const Naveber = () => {
  return (
    <div className="navbar shadow-sm fixed top-0 bg-gray-800">
      <div className=" max-w-6xl mx-auto flex w-full">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* mobule  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <li><a href="#hero">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#skills">Skiles</a></li>
             <li><a href="#projects"> Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img className="w-12" src="/src/assets/Logo.png" alt="" />
            <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">Aman</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 gap-5">
             <li className="font-bold text-xl"><a href="#hero">Home</a></li>
             <li className="font-bold text-xl"><a href="#about">About</a></li>
             <li className="font-bold text-xl"><a href="#skills">Skiles</a></li>
             <li className="font-bold text-xl"><a href="#projects"> Projects</a></li>
            <li className="font-bold text-xl"> <a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/Resume.pdf"
           download="Aman_Munshi_Resume.pdf"
           className=" px-6 py-2 rounded-md font-bold bg-linear-to-r from-cyan-500 to-blue-500">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Naveber;
