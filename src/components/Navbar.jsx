import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -15,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="nav-item flex flex-col flex-shrink-0">
          <span className="font-display text-2xl font-bold tracking-widest text-brandRose uppercase leading-none">
            AIKYAM
          </span>
          <span className="text-[10px] tracking-[0.2em] text-deepTeal uppercase font-bold mt-1">
            Women's PG
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-x-8 lg:gap-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item text-[13px] uppercase tracking-wider font-bold transition-colors duration-100 ${
                location.pathname === link.path
                  ? "text-brandRose"
                  : "text-gray-700 hover:text-brandRose"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="nav-item bg-brandRose text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-luxuryBlack transition-all shadow-sm"
          >
            Book Now
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-brandRose"
        >
          <X size={30} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-display font-bold text-gray-900"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-brandRose text-white px-10 py-4 rounded-full text-lg font-bold"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;