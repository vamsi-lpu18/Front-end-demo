import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onOpenModal }) => {
  return (
    <header className="backdrop-blur-sm sticky top-0 z-30 bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold transform transition hover:scale-105">
            AD
          </div>
          <div>
            <div className="font-semibold text-slate-900">AppDost Clone</div>
            <div className="text-xs text-slate-500">
              Creative frontend assignment
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-slate-700 hover:text-slate-900" to="/">
            Home
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/about">
            About
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/services">
            Services
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/portfolio">
            Portfolio
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/careers">
            Careers
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/blog">
            Blog
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/contact">
            Contact
          </Link>
          <button
            onClick={onOpenModal}
            className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Get Started
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={onOpenModal}
            className="px-3 py-2 rounded-md bg-indigo-600 text-white"
          >
            Try
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
