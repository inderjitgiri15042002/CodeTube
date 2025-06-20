import React from "react";
import { FiMenu, FiSearch, FiBell, FiUser } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 text-gray-600 hover:text-gray-900 md:hidden"
          >
            <FiMenu size={24} />
          </button>
          <div className="text-xl font-bold text-blue-600">CodeTube</div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <FiBell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <FiUser size={18} />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
