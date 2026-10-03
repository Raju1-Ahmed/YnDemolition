// src/components/Loader.js
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      {/* Using Tailwind built-in animate-bounce */}
      <img
        src="https://i.ibb.co/Dg5vnzDy/Whats-App-Image-2025-09-12-at-4-46-14-PM-removebg-preview.png"
        alt="YN Demolition Logo"
        className="h-24 w-24 animate-bounce"
      />
      <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
    </div>
  );
}
