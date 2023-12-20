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
            <p className="mt-12 text-lg ml-4 p-30 text-justify mr-10 w-ful">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing.The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>
            <div className="flex items-center justify-center">
              <button className="ml-3 mt-14 mb-4 flex w-44 cursor-pointer items-center justify-center  bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                <Link className=" text-white" to="/">
                  See products
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-10 ">
        <div className="flex flex-col items-center p-10 ">
          <p className="flex flex-col text-4xl font-bold text-justify p-30 ml-2 mr-20 ">
            Various models of chairs, tables and lights
          </p>
          <div className="flex-col ">
            <button className="mt-20 text-center w-[200px] flex-row outline outline-offset-2 outline-orange-700 px-5 py-2.5 text-sm font-medium text-orange-700 hover:bg-orange-700  hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300">
              <Link to="/">See more</Link>
            </button>
          </div>
        </div>
        <div className="flex w-[35%] overflow-hidden ">
          <Carousel slides={slides} />
        </div>
      </div>

      <div className="flex items-center justify-center h-[300px]  bg-[#D6E0C6] mb-10">
        <div className="flex items-center jspace-between flex-col divide-y divide-gray-200 md:flex-row md:divide-x md:divide-y-0">
          <div class="flex max-w-s space-x-2 p-4 text-green-950 ">
            <p className="text-gray-600 font-bold ">
              Sustainability
              <p className="w-[350px] mt-2 font-normal">
                Choosing sustainable contributes to a greener and more
                eco-friendly lifestyle
              </p>
            </p>
          </div>
          <div className="flex max-w-s space-x-2 text-green-950">
            <p className="text-gray-600 font-bold ">
              Innovation
              <p className="w-[350px] font-normal mt-2">
                Embrace the future of interior design with innovative furniture
                solutions that seamlessly blend cutting-edge technology
              </p>
            </p>
          </div>
          <div className="flex max-w-s space-x-2  text-green-950">
            <p className="text-gray-600 font-bold">
              Aesthetics
              <p className="w-[350px] font-normal mt-2">
                Experience the perfect blend of form and function with our
                aesthetics-focused furniture
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className=" mx-auto   max-w-screen-xxl overflow-hidden shadow-lg mt-4">
        <div className=" w-full flex flex-col overflow-hidden bg-white sm:flex-row md:h-200">
          <div className="flex w-full flex-col sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold  md:text-2xl lg:text-4xl mt-16 ">
              3D Concept Models for sustainable furniture
            </h2>
            <p className="mt-12 text-lg ml-4 p-30 text-justify mr-10 w-ful">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing. The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>
            <div className="flex items-center justify-center">
              <button className="ml-3 mt-14 mb-4 flex w-44 cursor-pointer items-center justify-center  bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                <Link className=" text-white" to="/contact">
                  Contact
                </Link>
              </button>
            </div>
          </div>
          <div className="order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-[500px] w-full object-cover m-10  "
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
