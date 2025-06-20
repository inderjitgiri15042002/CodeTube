import React from "react";

const devCategories = [
  {
    id: 1,
    category: "ReactJS",
    image: "https://img.youtube.com/vi/sBws8MSXN7A/0.jpg",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    id: 2,
    category: "JavaScript",
    image: "https://img.youtube.com/vi/0ik6X4DJKCc/0.jpg",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    id: 3,
    category: "CSS",
    image: "https://img.youtube.com/vi/JJSoEo8JSnc/0.jpg",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    id: 4,
    category: "HTML",
    image: "https://img.youtube.com/vi/UB1O30fR-EE/0.jpg",
    color: "bg-orange-100",
    textColor: "text-orange-800",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="header rounded-b-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-8 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to CodeTube
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Your gateway to developer knowledge
        </p>
        <div className="mt-6">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all shadow-sm">
            Start Learning
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {devCategories.map((data) => (
            <div
              key={data.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${data.color}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={data.image}
                  alt={data.category}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-xl font-bold mb-2 ${data.textColor}`}>
                  {data.category}
                </h3>
                <button className="mt-2 px-4 py-2 bg-white rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
                  View Content
                </button>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-1 ${data.color.replace(
                  "100",
                  "500"
                )}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="Featured content"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                Featured Content
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Master Modern Web Development
              </h3>
              <p className="mt-3 text-gray-500">
                Learn the latest technologies and frameworks with our
                comprehensive tutorials and courses designed for developers of
                all levels.
              </p>
              <div className="mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
