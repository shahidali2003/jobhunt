import React from "react";

const Header = ({ onClearAll }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg rounded-b-xl">
      
      {/* Left side */}
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">Job Hunt Pro</h1>
        <p className="text-sm md:text-base text-indigo-100 mt-1">Track your job applications easily</p>
      </div>

      {/* Right side */}
      <button
        onClick={onClearAll}
        className="bg-white/20 hover:bg-white/30 hover:scale-105 transition-transform duration-300 px-5 py-2 rounded-lg font-medium shadow-md"
      >
        Clear All
      </button>
    </header>
  );
};

export default Header;
