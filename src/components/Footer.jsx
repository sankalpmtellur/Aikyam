import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxuryBlack text-softIvory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-widest text-brandGold">
                AIKYAM
              </h2>
              <p className="text-[10px] tracking-[0.3em] text-brandRose uppercase font-semibold">
                Women's Co-Living
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining the PG experience in Bangalore with a focus on safety,
              community, and luxury interiors.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-white/10 rounded-full hover:bg-brandRose transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/10 rounded-full hover:bg-brandRose transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-brandGold transition-colors"
                >
                  Virtual Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brandGold transition-colors"
                >
                  Our Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="hover:text-brandGold transition-colors"
                >
                  Find Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brandGold transition-colors"
                >
                  Check Availability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white">Our Homes</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brandRose shrink-0 mt-1" />
                <span>7th Block, Jayanagar, Bangalore</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brandRose shrink-0 mt-1" />
                <span>Raghuvanahalli, Kanakapura Road</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-brandGold" />
                <span>+91 93412 25658</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="mailto:hello@aikyam.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-brandGold" />
                <span>hello@aikyam.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} AIKYAM WOMEN'S PG. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
