import { FaCopyright, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-white p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="">
          <h3 className="font-bold mb-3 text-xl">Traval Explorer</h3>
          <p className="mb-3 text-slate-200">
            Your Trusted Partner for unforgatable traval Experience. Explore The
            World With Us.
          </p>
        </div>
        <div className=" md:text-center">
          <h4 className="mb-3 font-bold">Quick Links</h4>
          <div className="flex flex-col md:items-center gap-1 ">
            <Link
              to="/"
              className=" transform transition hover:hover:text-blue-400 duration-300 w-fit"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className=" transform transition hover:hover:text-blue-400 duration-300 w-fit"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className=" transform transition hover:hover:text-blue-400 duration-300 w-fit"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className=" transform transition hover:text-blue-400 duration-300 w-fit"
            >
              About
            </Link>
          </div>
        </div>
        <div className="mt-3  md:mt-0 text-center">
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex flex-row gap-4 mt-3 justify-center">
            <Link>
              <FaFacebook
                size={25}
                className="text-blue-500 transform transition hover:scale-150 duration-300"
              />
            </Link>
            <Link>
              <FaInstagram
                size={25}
                className="text-pink-600 transform transition hover:scale-150 duration-300"
              />
            </Link>
            <Link>
              <FaTwitter
                size={25}
                className="text-blue-600 transform transition hover:scale-150 duration-300"
              />
            </Link>
            <Link>
              <FaYoutube
                size={25}
                className="text-red-500 transform transition hover:scale-150 duration-300"
              />
            </Link>
          </div>
          <h4 className="mt-4">Mohammed Thanis</h4>
          <h4 className="mt-4">+94 76 307 5074 </h4>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm mt-10 border-t pt-3">
        <FaCopyright />
        <p>2024 Traval Explore. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
