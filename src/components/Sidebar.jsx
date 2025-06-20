// Sidebar.jsx (improved)
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { MdHistory, MdOutlineExplore } from "react-icons/md";
import { Link } from "react-router-dom";

const sidebarData = [
  {
    Logo: <IoHome className="text-xl" />,
    Text: "Home",
    path: "/",
  },
  {
    Logo: <MdOutlineExplore className="text-xl" />,
    Text: "Explore",
    path: "/explore",
  },
  {
    Logo: <AiFillLike className="text-xl" />,
    Text: "Liked Videos",
    path: "/likedvideos",
  },
  {
    Logo: <MdHistory className="text-xl" />,
    Text: "Watch History",
    path: "/watchhistory",
  },
];

const Sidebar = () => {
  return (
    <div className="h-full bg-gradient-to-b from-indigo-900 to-purple-900 text-white shadow-xl">
      {/* Logo Header */}
      <div className="text-center py-6 border-b border-purple-700/50 px-4">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
          CodeTube
        </h1>
        <p className="text-xs mt-1 text-purple-200/70">Developer's Paradise</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col p-2 space-y-1 mt-2">
        {sidebarData.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex items-center px-3 py-3 gap-3 rounded-lg transition-all
                     hover:bg-purple-800/50 hover:text-white
                     text-gray-200 hover:translate-x-1"
          >
            <span className="text-purple-200">{item.Logo}</span>
            <span className="text-sm font-medium">{item.Text}</span>
          </Link>
        ))}
      </nav>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
    </div>
  );
};

export default Sidebar;
