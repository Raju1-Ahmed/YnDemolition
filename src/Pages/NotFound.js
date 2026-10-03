import React from "react";
import { Link } from "react-router-dom";
// Optional: If you want to use an icon (you'd need to install a library like react-icons)
// import { RiBuilding2Fill } from "react-icons/ri"; 

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 relative overflow-hidden">
      
      {/* Optional: Subtle Background Graphic for Demolition Brand */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-color-yellow-900)_0%,_transparent_70%)] opacity-10 pointer-events-none"></div>

      {/* Company Logo */}
      <img 
        src="https://i.ibb.co/Dg5vnzDy/Whats-App-Image-2025-09-12-at-4-46-14-PM-removebg-preview.png" 
        alt="YN Demolition Logo"
        className="w-40 md:w-52 mb-8 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)] z-10" // Larger logo with a subtle glow
      />

      {/* 404 Header - Modern and Impactful */}
      <div className="relative z-10">
        <h1 className="text-9xl md:text-[10rem] lg:text-[12rem] font-extrabold text-yellow-500 opacity-20 select-none pointer-events-none">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white -mt-16 md:-mt-20">
          Page <span className="text-yellow-400">Demolished.</span>
        </h2>
      </div>

      <div className="text-center max-w-lg mt-8 z-10">
        {/* Effective Messaging */}
        <p className="text-gray-400 mb-6 text-lg">
          We couldn't find the page you were looking for. It seems like the link was faulty or the content has been removed!
        </p>

        {/* Productive Suggestion */}
        <div className="bg-gray-800 p-4 rounded-xl mb-10 border-l-4 border-yellow-500 shadow-xl">
          <p className="text-sm font-medium text-gray-300">
            **What you can do:**
            <ul className="list-disc list-inside text-left ml-4 mt-2 text-gray-400">
              <li>**Check the URL** for typos.</li>
              <li>Use the **main navigation** to find your way.</li>
            </ul>
          </p>
        </div>

        {/* Call to Action - Primary */}
        <Link 
          to="/" 
          className="px-10 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold text-lg uppercase tracking-wider shadow-xl hover:bg-yellow-400 transition transform hover:scale-[1.02] active:scale-[0.98] mr-4"
        >
          Go Back Home
        </Link>

        {/* Call to Action - Secondary (Optional: if you have a separate Contact page) */}
        {/* <Link 
          to="/contact" 
          className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg font-semibold shadow hover:bg-yellow-500 hover:text-gray-900 transition"
        >
          Contact Support
        </Link> */}
      </div>

    </div>
  );
}

export default NotFound;