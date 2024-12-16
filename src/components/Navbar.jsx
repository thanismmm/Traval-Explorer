import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 shadow-lg z-50 bg-white m-4 rounded-md">
      <div className=" container flex items-center justify-between px-4 h-16">
        <h3 className="text-2xl font-bold">Traval</h3>
        <div className="hidden md:flex gap-4 text-sm items-center font-bold">
          <Link
            to="/"
            className="px-4 py-2  rounded transform transition hover:hover:bg-gray-600 hover:text-white duration-300"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-2  rounded transform transition hover:hover:bg-gray-600 hover:text-white duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2  rounded transform transition hover:hover:bg-gray-600 hover:text-white duration-300"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-4 py-2  rounded transform transition hover:hover:bg-gray-600 hover:text-white duration-300"
          >
            About
          </Link>
          <button className="px-4 py-2 bg-blue-500 transform transition hover:bg-blue-300 rounded duration-300 ">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-3 text-sm items-center font-bold py-4 ">
          <Link
            to="/"
            className="px-4 py-2 transform transition hover:hover:bg-gray-600 hover:text-white duration-300 w-full flex justify-center"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-2 transform transition hover:hover:bg-gray-600 hover:text-white duration-300 w-full flex justify-center"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 transform transition hover:hover:bg-gray-600 hover:text-white duration-300 w-full flex justify-center"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 transform transition hover:hover:bg-gray-600 hover:text-white duration-300 w-full flex justify-center"
          >
            About
          </Link>
          <button className="bg-blue-500 px-10 py-2 transform transition hover:hover:bg-blue-400 duration-300 rounded-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
