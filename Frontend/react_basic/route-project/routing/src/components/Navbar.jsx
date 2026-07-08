import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-[70px] bg-sky-400 flex justify-between items-center px-7 z-50">
      <h1 className="text-2xl font-bold text-white">
        Logo
      </h1>

      <div className="flex gap-8 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-4 py-2 rounded-2xl border cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;