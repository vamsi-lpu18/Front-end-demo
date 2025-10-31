import React from "react";
import avatar1 from "../assets/avatar-1-ai.svg";
import avatar2 from "../assets/avatar-2-ai.svg";
import avatarDev from "../assets/avatar-dev-ai.svg";

const Testimonial = ({ name, quote, role, avatar }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="flex items-start gap-4">
      <img src={avatar} className="w-12 h-12 rounded-full" alt={name} />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
    <p className="mt-4 text-slate-600">“{quote}”</p>
  </div>
);

const Testimonials = () => {
  const items = [
    {
      name: "Rajat",
      role: "Designer",
      quote: "AppDost delivered a beautiful UI on time.",
      avatar: avatar1,
    },
    {
      name: "Priya",
      role: "Head, School",
      quote: "Our LMS transformed classroom learning.",
      avatar: avatar2,
    },
    {
      name: "Vikram",
      role: "Founder",
      quote: "Great communication and fast delivery.",
      avatar: avatarDev,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center">What our clients say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((i) => (
          <Testimonial key={i.name} {...i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
