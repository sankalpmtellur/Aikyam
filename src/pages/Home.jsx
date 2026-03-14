import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Wifi,
  Utensils,
  Wind,
  Zap,
  Coffee,
  ArrowRight,
} from "lucide-react";

import Exterior1 from "../assets/Exterior1.png";
import Exterior2 from "../assets/Exterior2.png";
import Balcony1 from "../assets/Balcony1.png";
import Balcony2 from "../assets/Balcony2.png";
import Food1 from "../assets/Food1.png";
import Room1 from "../assets/Room1.png";
import Room2 from "../assets/Room2.png";
import Dining1 from "../assets/Dining1.png";

const Home = () => {
  const amenities = [
    {
      icon: <Shield size={24} />,
      title: "24/7 Security",
      desc: "Biometric access and full CCTV coverage for absolute safety.",
    },
    {
      icon: <Wifi size={24} />,
      title: "High-Speed Wi-Fi",
      desc: "Premium gigabit internet connectivity across all floors.",
    },
    {
      icon: <Utensils size={24} />,
      title: "Home-Style Food",
      desc: "Freshly prepared nutritious veg & non-veg meals daily.",
    },
    {
      icon: <Wind size={24} />,
      title: "Daily Cleaning",
      desc: "Professional housekeeping to keep your space spotless.",
    },
    {
      icon: <Zap size={24} />,
      title: "Power Backup",
      desc: "Full electricity backup to ensure work is never interrupted.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Lounge Areas",
      desc: "Beautifully designed spaces to relax and socialize.",
    },
  ];

  const galleryImages = [
    Exterior1,
    Exterior2,
    Room1,
    Room2,
    Balcony1,
    Balcony2,
    Food1,
    Dining1,
    Exterior1,
    Exterior2,
    Room1,
    Room2,
    Balcony1,
    Balcony2,
    Food1,
    Dining1,
  ];

  return (
    <main className="bg-[#FAF9F6] overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 leading-[1.1]">
              Luxury Living, <br />
              <span className="text-brandRose italic font-medium">
                Designed for Her.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed">
              <b>Aikyam</b> offers premium, fully-managed co-living spaces in
              Bangalore's prime spots. Experience safety, comfort, and
              community.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brandRose text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#2D3134] transition-all flex items-center gap-2">
                Explore Rooms <ArrowRight size={18} />
              </button>
              <button className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                Book a Tour
              </button>
            </div>
          </div>

          <div className="lg:w-5/12 animate-in fade-in zoom-in-95 duration-1000">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square">
              <img
                src={Exterior1}
                alt="Aikyam Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-brandRose font-bold tracking-[0.3em] text-[10px] uppercase">
              Premium Facilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4">
              Everything you need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl bg-[#FAF9F6] border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl hover:border-brandRose/90 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brandRose shadow-sm mb-8 transition-all">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="text-brandRose font-bold tracking-[0.3em] text-[10px] uppercase">
              Visual Tour
            </span>
            <h2 className="font-display text-4xl font-bold text-[#1A1A1A] mt-2">
              Our Spaces
            </h2>
          </div>
          <Link
            to="/gallery"
            className="hidden md:flex items-center gap-2 text-brandRose font-bold hover:gap-4 transition-all"
          >
            View Full Gallery <ArrowRight size={20} />
          </Link>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-6 animate-infinite-scroll group-hover:[animation-play-state:paused] py-4 px-3">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white"
              >
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-brandRose text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            View More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-brandRose text-white text-center">
        <h2 className="font-display text-4xl font-bold mb-8">
          Ready to move in?
        </h2>
        <button className="bg-white text-brandRose px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all shadow-xl">
          Contact Us Now
        </button>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
      `,
        }}
      />
    </main>
  );
};

export default Home;
