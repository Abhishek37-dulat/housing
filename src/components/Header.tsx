import React from "react";
import headerImg from "../assets/3D_Floor_Plan_App___Kemper_Apps-removebg-preview.png";

const Header = () => {
  return (
    <div className="w-full mt-10 rounded-md shadow-lg grid grid-cols-2 justify-items-start items-center bg-gradient-to-r from-sky-300 from-20% to-amber-100 to-60% ">
      <div className=" text-gray-950 justify-items-start items-start text-pretty mx-auto max-w-2xl lg:text-start">
        <p className="font-medium mb-2">Welcome to allstate</p>
        <h1 className="mb-4 font-semibold text-6xl text-pretty tracking-tight lg:text-balance">
          Manage Your Property
        </h1>
        <p className=" mb-6 text-base font-normal text-left text-pretty lg:text-balance">
          You will have everything nearby supermarket, buses, stations, cinemas,
          thearea, the Canmen neighbourhood, etc.
        </p>
        <div className="bg-white shadow-sm rounded-4xl p-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-1.5 max-w-4/5 rounded-4xl py-1.2"
          />
          <a
            className="bg-gray-950 text-white py-2 px-3 rounded-4xl shadow-lg hover:bg-gray-600"
            href="#"
          >
            Get a Quodo
          </a>
        </div>
      </div>
      <img className="w-4/5" src={headerImg} alt="header-img" />
    </div>
  );
};

export default Header;
