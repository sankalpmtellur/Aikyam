import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-[#FAF9F6] pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h1 className="font-display text-5xl font-bold text-[#1A1A1A] mt-4">
            Start your journey.
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Have questions about rooms, pricing, or amenities? We're here to
            help you find your perfect home at Aikyam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="tel:+91 93412 25658"
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brandRose/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brandRose/5 text-brandRose rounded-xl flex items-center justify-center mb-6 group-hover:bg-brandRose group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-1 text-lg">
                  Call Us
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  +91 93412 25658
                </p>
              </a>

              <a
                href="https://wa.me/919341225658"
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brandRose/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-1 text-lg">
                  WhatsApp
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Chat with us now
                </p>
              </a>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-brandRose shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Jayanagar 1st Block, Near Yediyur Lake,
                    <br />
                    Bangalore, Karnataka 560011
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-brandRose shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">
                    Visiting Hours
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Daily: 9:00 AM - 8:00 PM <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
            <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">
              Schedule a Visit
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border-none focus:ring-2 focus:ring-brandRose/40 transition-all outline-none text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border-none focus:ring-2 focus:ring-brandRose/40 transition-all outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Room Type Interested
                </label>
                <select className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border-none focus:ring-2 focus:ring-brandRose/40 transition-all outline-none text-sm appearance-none">
                  <option>Single Sharing</option>
                  <option>Double Sharing</option>
                  <option>Triple Sharing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Additional Note
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border-none focus:ring-2 focus:ring-brandRose/40 transition-all outline-none text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-brandRose text-white py-4 rounded-2xl font-bold shadow-lg shadow-brandRose/20 hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2 group">
                Send Inquiry{" "}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
