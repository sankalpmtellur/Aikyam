import React, { useState } from "react";
import { ArrowRight, Camera } from "lucide-react";

import Room1 from "../assets/Room1.png";
import Room2 from "../assets/Room2.png";
import Room3 from "../assets/Room3.png";
import Room4 from "../assets/Room4.png";
import Room5 from "../assets/Room5.png";
import Food1 from "../assets/Food1.png";
import Food2 from "../assets/Food2.png";
import Dining1 from "../assets/Dining1.png";
import Balcony1 from "../assets/Balcony1.png";
import Balcony2 from "../assets/Balcony2.png";
import Kitchen from "../assets/Kitchen.png";
import Exterior1 from "../assets/Exterior1.png";
import Stairs from "../assets/Stairs.png";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Rooms", "Dining", "Lifestyle"];

  const photos = [
    { src: Room1, category: "Rooms", title: "Premium Suite" },
    { src: Food1, category: "Dining", title: "Healthy Meals" },
    { src: Balcony1, category: "Lifestyle", title: "Sunlit Balcony" },
    { src: Room2, category: "Rooms", title: "Cozy Double" },
    { src: Dining1, category: "Dining", title: "Dining Hall" },
    { src: Exterior1, category: "Lifestyle", title: "Main Entrance" },
    { src: Room3, category: "Rooms", title: "Modern Interior" },
    { src: Food2, category: "Dining", title: "Fresh Preparation" },
    { src: Balcony2, category: "Lifestyle", title: "Evening View" },
    { src: Kitchen, category: "Dining", title: "Modular Kitchen" },
    { src: Room4, category: "Rooms", title: "Standard Room" },
    { src: Stairs, category: "Lifestyle", title: "Elegant Hallways" },
    { src: Room5, category: "Rooms", title: "Suite" },
  ];

  const filteredPhotos =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <main className="bg-[#FAF9F6] pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-brandRose font-bold tracking-[0.3em] text-[10px] uppercase">
            Experience Aikyam
          </span>
          <h1 className="font-display text-5xl font-bold text-[#1A1A1A] mt-4">
            Photo Gallery
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-brandRose text-white shadow-lg"
                    : "bg-white text-gray-500 hover:text-brandRose border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-[2rem] bg-white border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-500 break-inside-avoid"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-brandRose text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {photo.category}
                </span>
                <h3 className="text-white font-display text-xl font-bold">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-sm border border-gray-100">
          <div className="max-w-2xl mx-auto">
            <Camera className="mx-auto text-brandRose mb-6" size={40} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Love the vibe? Come see it in person.
            </h2>
            <p className="text-gray-500 mb-10">
              Photos are great, but the feeling of being at Aikyam is even
              better. Book a tour today.
            </p>
            <button className="bg-brandRose text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#1A1A1A] transition-all flex items-center gap-3 mx-auto">
              Schedule a Visit <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
