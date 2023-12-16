// import React from "react";
// import CarouselCard from "./CarouselCard";

// const Carousel = ({ data }) => {
//   return (
//     <div className="flex space-x-4 overflow-x-scroll p-4">
//       {data.map((item) => (
//         <CarouselCard
//           key={item.id}
//           imageUrl={item.imageUrl}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default Carousel;

// import React from "react";

// import { Routes, Route, Link } from "react-router-dom";

// const Carousel = () => {
//   return (
//     <div
//       id="controls-carousel"
//       className="relative w-full"
//       data-carousel="static"
//     >
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {/* Item 1 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={require("../assets/abtract.png")}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//           <p></p>
//         </div>
//         {/* Item 2 */}
//         <div
//           className="hidden duration-700 ease-in-out"
//           data-carousel-item="active"
//         >
//           <img
//             src={require("../assets/abtract.png")}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         {/* Item 3 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={require("../assets/abtract.png")}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//       </div>
//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

// export default function Carousel({
//   children: slides,
//   //   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// codul din App.js pt carusel
// <div
// id="controls-carousel"
// className="relative w-full"
// data-carousel="static"
// >
// {/* Carousel wrapper */}
// <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//   {/* Item 1 */}
//   <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img
//       src={require("./assets/abtract.png")}
//       className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//       alt="..."
//     />
//     <p></p>
//   </div>
//   {/* Item 2 */}
//   <div
//     className="hidden duration-700 ease-in-out"
//     data-carousel-item="active"
//   >
//     <img
//       src={require("./assets/abtract.png")}
//       className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//       alt="..."
//     />
//   </div>
//   {/* Item 3 */}
//   <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img
//       src={require("./assets/abtract.png")}
//       className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//       alt="..."
//     />
//   </div>
// </div>
// {/* Slider controls */}
// <button
//   type="button"
//   className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//   data-carousel-prev
// >
//   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//     <svg
//       className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 6 10"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M5 1 1 5l4 4"
//       />
//     </svg>
//     <span className="sr-only">Previous</span>
//   </span>
// </button>
// <button
//   type="button"
//   className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//   data-carousel-next
// >
//   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//     <svg
//       className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 6 10"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="m1 9 4-4-4-4"
//       />
//     </svg>
//     <span className="sr-only">Next</span>
//   </span>

import React, { useState } from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

//daca vreau sa sar peste o img set current se initializeaza cu 0
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  // prin setCurrent(slides.length - 1) se afla indexul ultimului slide
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  // daca indexul este egal cu cel precendent atunci atunci setCurrent cu 0
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    //prin `translateX(-${current * 100}%)` se translateaza imaginea in functie de index* 100,
    //pt ima initiala este 0*100, sta pe loc
    <div className="relative">
      <div
        className="flex transition-transform duration-400 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            src={slide}
            alt={`Slide ${index}`}
            key={index}
            className="w-screen/4 h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full justify-between items-center px-10">
        <button onClick={previousSlide}>
          <img
            className="flex align-middle h-10"
            src={left}
            height={10}
            alt="img"
          ></img>
        </button>
        <button onClick={nextSlide}>
          <img
            className="flex align-middle h-10"
            src={right}
            height={10}
            alt="img"
          ></img>
        </button>
      </div>
      {/* se adauga cercurile de jos care corespund unei cheie unice egale cu indexul imaginii, current slide o sa fie alb altfel ramane gri*/}
      <div className="absolute bottom-0 left-0 flex w-full justify-center gap-3 p-5">
        {slides.map((s, index) => (
          <span
            key={index}
            // utilizand setCurrent in functie de index ne duce la imaginea corecpunzatoare cand apasam pe ele
            onClick={() => setCurrent(index)}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
