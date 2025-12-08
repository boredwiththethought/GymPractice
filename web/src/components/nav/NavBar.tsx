import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#E9ECFF]">
      <nav className="sticky container mx-auto flex w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="logo flex items-center gap-1">
          <img src="../../../public/nav/nav-logo.png" alt="nav-logo" />
          <h1 className="headline-4">PrimalTraining</h1>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="links-nav uppercase">
            Home
          </Link>
          <Link to="/about" className="links-nav uppercase">
            About
          </Link>
          <PrimaryButton className="links-nav uppercase" onClick={() => (window.location.href = "/reserve")}>
            reserve your spot
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-3xl font-bold transition-all duration-300 ease-in-out md:hidden">
          {isOpen ? "−" : "+"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 p-8">
            <Link to="/" className="links-nav uppercase" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="links-nav uppercase" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <PrimaryButton
              className="links-nav text-white uppercase"
              onClick={() => {
                setIsOpen(false);
                window.location.href = "/";
              }}
            >
              reserve your spot
            </PrimaryButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
