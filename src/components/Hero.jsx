import React, { useState } from "react";
import icons from "../assets/icons1x.webp";

export const Hero = () => {
  const valueData = {
    icons: ["Settings", "Camera", "Phone", "Video", "Photo"],
    music: ["Song", "Artist", "Album", "Playlist", "Genre"],
    illustrations: ["Sketch", "Vector", "Cartoon", "Flat", "Outline"],
    photo: ["Portrait", "Landscape", "Nature", "Urban", "Macro"],
    models: ["3D Character", "Vehicle", "Building", "Object", "Scene"],
  };

  const [activeTab, setActiveTab] = useState("icons");

  return (
    <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 h-full p-4 md:p-8 lg:p-16">
        <h3 className="font-bold text-xl md:text-3xl lg:text-4xl text-black">
          Original stock graphics by our team, plus design apps and AI tools
        </h3>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mt-2">
          The ultimate design kit for creatives and developers
        </p>

        {/* Tabs */}
        <div className="w-full mt-4">
          <ul className="flex flex-wrap gap-2 mb-2">
            {Object.keys(valueData).map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize cursor-pointer px-3 py-1 rounded-lg text-sm ${
                  activeTab === tab ? "bg-black text-white" : "bg-gray-300"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Input */}
          <input
            type="text"
            placeholder={activeTab}
            className="w-full p-4 border border-gray-300 rounded-lg mb-2"
          />

          {/* Popular Now */}
          <p className="text-sm text-gray-400">Popular Now:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {valueData[activeTab].map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-200 px-2 py-1 rounded text-xs text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Static Icons */}
      <div className="flex flex-wrap justify-center gap-2 items-start w-full lg:w-1/2 h-full p-4 md:p-8 lg:p-16">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-400 flex rounded-lg p-2 gap-2 items-center"
          >
            <img className="w-10 h-10" src={icons} alt="home" />
            <span className="text-black text-base">Icons</span>
          </div>
        ))}
      </div>
    </div>
  );
};
