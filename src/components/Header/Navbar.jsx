import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-b-2 border-primary"
              : "font-semibold hover:text-primary transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-b-2 border-primary"
              : "font-semibold hover:text-primary transition-all duration-300"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/readList"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-b-2 border-primary"
              : "font-semibold hover:text-primary transition-all duration-300"
          }
        >
          Read List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            📚 Boi Poka
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link
            to="/readList"
            className="btn btn-primary rounded-full px-6"
          >
            Reading List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;