// import React from "react";

// const About = () => {
//   return <div>Details</div>;
// };

// export default About;

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import scenaImage from "../assets/scena.png";
import dulapuri from "../assets/dulapuri.png";
// import left from "../left.png";
// import right from "../right.png";
// import { Carousel } from "flowbite-react";
import Carousel from "../components/Carousel/Carousel";

function About() {
  const slides = [
    "https://askiafurniture.ro/wp-content/uploads/2017/04/atelier-arm-chair-copy-2-708x708.png",
    "https://askiafurniture.ro/wp-content/uploads/2018/10/Fair-and-Square-Chair.png",
    "https://askiafurniture.ro/wp-content/uploads/2017/04/v3-barstool-low-copy.png",
    "https://askiafurniture.ro/wp-content/uploads/2017/04/atelier-table.png",
  ];

  return (
    <div>
      <div className=" mx-auto max-w-screen-xxl overflow-hidden shadow-lg ">
        <div className=" w-full flex flex-col overflow-hidden  sm:flex-row md:h-200">
          <div class="order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-full w-full object-cover bg-[#D6E0C6]"
              src={scenaImage}
              alt="Scena"
            />
          </div>
          <div className="flex w-full flex-col sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold  md:text-2xl lg:text-4xl mt-4 ">
              3D Concept Models for sustainable furniture
            </h2>
            <p className="mt-6 text-lg ml-4 p-30 text-justify mr-10 w-ful">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing.The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>
            <div className="flex items-center justify-center">
              <button className="ml-3 mt-4 mb-4 flex w-44 cursor-pointer items-center justify-center  bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-10 ">
        <div className="flex flex-col items-center p-10 ">
          <p className="flex flex-col text-4xl font-bold text-justify p-30 ml-2 mr-20 ">
            Various models for lighting and acoustic comfort
          </p>
          <div className="flex-col ">
            <button className="mt-20 text-center w-[200px] flex-row outline outline-offset-2 outline-orange-700 px-5 py-2.5 text-sm font-medium text-orange-700 hover:bg-orange-700  hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300">
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex w-[35%] overflow-hidden ">
          <Carousel slides={slides} />
        </div>
      </div>

      <div class="flex items-center justify-center h-[300px] bg-[#D6E0C6]">
        <div class="flex items-center jspace-between m-20 flex-col divide-y divide-gray-200 md:flex-row md:divide-x md:divide-y-0">
          <div class="flex max-w-s space-x-2 p-4 text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex max-w-s space-x-2 p-4 text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex max-w-s space-x-2 p-4 text-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-gray-600 pt-3">Aesthetics</p>
          </div>
        </div>
      </div>

      <div className=" mx-auto   max-w-screen-xxl overflow-hidden shadow-lg ">
        <div className=" w-full flex flex-col overflow-hidden bg-white sm:flex-row md:h-200">
          <div className="flex w-full flex-col sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold  md:text-2xl lg:text-4xl mt-4 ">
              3D Concept Models for sustainable furniture
            </h2>
            <p className="mt-6 text-lg ml-4 p-30 text-justify mr-10 w-ful">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing.The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>

            <button className="ml-3 mt-4 mb-4 flex w-44 cursor-pointer items-center justify-center  bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
              Add to cart
            </button>
          </div>
          <div className="order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-[500px] w-full object-cover"
              src={dulapuri}
              alt="img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
