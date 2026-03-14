import React from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  Heart,
  Users,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Exterior2 from "../assets/Exterior2.png";
import Stairs from "../assets/Stairs.png";

const About = () => {
  const reviews = [
    {
      name: "Priyanka Padhi",
      text: "Aikyam is the best PG in Jayanagar. Extremely well maintained, spacious, hygienic and clean environment. The safety and security is best part. The owner sir is welcoming and takes care of everything promptly.",
      rating: 5,
    },
    {
      name: "Sushma Chikkodi",
      text: "The pg is very good, pretty hygienic and well maintained, I felt really safe over there and no body disturbs you, good for introverts.",
      rating: 5,
    },
    {
      name: "Siri Amruth",
      text: "Best and safest place to stay in Bangalore. Hygienic, good food and homely atmosphere. Highly recommend this place to stay in Jayanagar.",
      rating: 5,
    },
    {
      name: "Bhavya Lokesh",
      text: "Good PG with good facilities. Safe and secure, clean and hygiene, 24 hours hot water, and washing machine. Close to Metro station and shopping complex.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-[#FAF9F6] pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brandRose font-bold tracking-[0.3em] text-[10px] uppercase">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
              A Sanctuary Built <br />
              <span className="text-brandRose italic font-medium">
                For Her.
              </span>
            </h1>
            <p className="text-gray-600 mt-8 text-lg leading-relaxed">
              Founded with a vision to redefine urban living, <b>Aikyam</b> is
              more than just a PG - it's a community. We recognized the need for a
              space in Bangalore that doesn't compromise on safety, hygiene, or
              comfort.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Our mission is to provide students and working professionals a
              "home away from home" in prime locations like Jayanagar, ensuring
              every resident feels secure, respected, and inspired.
            </p>

            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-[#1A1A1A]">115+</p>
                <p className="text-xs font-bold text-brandRose uppercase tracking-widest mt-1">
                  Google Reviews
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A1A1A]">4.5</p>
                <div className="flex text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
              <img
                src={Exterior2}
                alt="Aikyam Living"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl hidden md:block z-20">
              <img
                src={Stairs}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#1A1A1A]">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: "Unyielding Safety",
                desc: "From biometric access to 24/7 CCTV, we prioritize your peace of mind above all else.",
              },
              {
                icon: <Heart size={32} />,
                title: "Homely Vibe",
                desc: "A supportive environment perfect for both extroverts and introverts to thrive.",
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "Prompt Service",
                desc: "Our management team is always on-site to resolve issues instantly and efficiently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center group p-8 rounded-3xl hover:bg-[#FAF9F6] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brandRose/5 text-brandRose rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandRose group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brandRose font-bold tracking-[0.3em] text-[10px] uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-4xl font-bold text-[#1A1A1A] mt-4">
              Voices of Aikyam
            </h2>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm font-bold text-gray-700">
              4.5/5 Average Rating
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-md transition-all relative group"
            >
              <Quote
                className="absolute top-8 right-8 text-brandRose/10 group-hover:text-brandRose/20 transition-colors"
                size={60}
              />
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 relative z-10">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brandRose/10 flex items-center justify-center text-brandRose font-bold text-sm">
                  {rev.name.charAt(0)}
                </div>
                <p className="font-bold text-[#1A1A1A]">{rev.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-brandRose rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Ready to join our community?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brandRose px-10 py-4 rounded-full font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                Book Your Room
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brandRose transition-all">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
