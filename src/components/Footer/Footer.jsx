import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <footer className="relative mt-20 bg-[#213425] px-4 pt-20">
        <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-lg border-4 border-[#213425] bg-white ">
          <img
            height={8000}
            width={8000}
            class="h-full w-full object-contain"
            src="./logo4.png"
            alt="logo"
          />
        </div>
        <nav
          aria-label="Footer Navigation"
          className="mx-auto mb-6 flex max-w-lg flex-col gap-8 text-center sm:flex-row sm:text-left align-center justify-center"
        >
          <Link className="font-medium text-white" to="/about">
            About
          </Link>

          <Link className="font-medium text-white" to="/">
            Products
          </Link>

          <Link className="font-medium text-white" to="/cart">
            Cart
          </Link>
          <Link className="font-medium text-white" to="/contact">
            Contact
          </Link>
          <Link className="font-medium text-white" to="/admin">
            Admin
          </Link>
        </nav>
        <p class="py-8 text-center text-gray-300">
          © 2023 | 3D Green Concept | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
