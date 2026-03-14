import React from 'react';
import { MapPin, Train, Coffee, ShoppingBag, Landmark, Building2, Utensils, Navigation } from 'lucide-react';

const Location = () => {
  const categories = [
    {
      title: "Transit & Commute",
      items: [
        { name: "Indiranagar Metro", dist: "800m", time: "10 mins walk", icon: <Train size={18} /> },
        { name: "Binnamangala Bus Stop", dist: "200m", time: "3 mins walk", icon: <Navigation size={18} /> }
      ]
    },
    {
      title: "Dining & Cafes",
      items: [
        { name: "Glen's Bakehouse", dist: "1.2km", time: "5 mins drive", icon: <Coffee size={18} /> },
        { name: "Empire Restaurant", dist: "1.5km", time: "7 mins drive", icon: <Utensils size={18} /> }
      ]
    },
    {
      title: "Shopping & Lifestyle",
      items: [
        { name: "100ft Road Market", dist: "1.0km", time: "12 mins walk", icon: <ShoppingBag size={18} /> },
        { name: "HDFC & SBI Bank/ATM", dist: "300m", time: "4 mins walk", icon: <Landmark size={18} /> }
      ]
    }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-12">
          <h1 className="font-display text-5xl font-bold text-[#1A1A1A] mt-6">Prime Location</h1>
          <p className="text-gray-600 mt-4 max-w-xl flex items-start gap-2">
            <MapPin className="text-brandRose shrink-0 mt-1" size={20} />
            Perfectly situated in the heart of the city, Aikyam ensures you're never more than a few minutes away from work or leisure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-white">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.925565349544!2d77.6387!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a6bb6de5af%3A0x67812bc89617ba2a!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-white">
            <iframe
              title="Street View"
              src="https://www.google.com/maps/embed?pb=!4v1710400000000!6m8!1m7!1sCAoSLEFGMVFpcE80XzB3bV9XbV9XbV9XbV9XbV9XbV9XbV9XbV9XbV9XbV9X!2m2!1d12.9716!2d77.6387!3f0!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-center gap-3">
                <span className="w-8 h-px bg-brandRose"></span>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="group p-6 rounded-3xl bg-white border border-gray-100 hover:border-brandRose/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] text-brandRose flex items-center justify-center group-hover:bg-brandRose group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-bold text-[#1A1A1A]">{item.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <span>{item.dist}</span>
                      <span className="text-brandRose bg-brandRose/5 px-2 py-1 rounded-md">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-luxuryBlack text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Need help finding us?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Click below to open the exact coordinates in your navigation app.</p>
            <a 
              href="https://goo.gl/maps/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brandRose text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              <Navigation size={20} /> Open in Google Maps
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Location;