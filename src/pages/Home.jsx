// Home.jsx (updated)
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div
        className={`${isActive ? "hidden" : "block"}  md:w-64 flex-shrink-0`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white shadow-sm">
          <Navbar isActive={isActive} setIsActive={setIsActive} />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <h1 className="text-2xl font-bold">Welcome to CodeTube</h1>
          <p className="text-gray-600">Start exploring developer content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
