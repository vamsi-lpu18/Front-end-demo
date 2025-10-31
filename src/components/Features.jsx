import React from "react";

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 transform transition hover:-translate-y-2 hover:shadow-md">
    <div className="text-indigo-600 text-2xl">{icon}</div>
    <div className="mt-3 font-semibold text-slate-900">{title}</div>
    <div className="mt-2 text-sm text-slate-600">{desc}</div>
  </div>
);

const Features = () => {
  const items = [
    {
      title: "Lightning fast",
      desc: "Optimized components and tiny bundle size",
      icon: "⚡",
    },
    {
      title: "Accessible",
      desc: "Built with semantic HTML and keyboard support",
      icon: "♿",
    },
    {
      title: "Deploy-ready",
      desc: "Easy to deploy to Vercel or Netlify",
      icon: "🚀",
    },
  ];

  return (
    <section id="features" className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900">Highlights</h2>
      <p className="mt-2 text-slate-600">Small, focused UI building blocks to show your skills.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <FeatureCard
            key={it.title}
            title={it.title}
            desc={it.desc}
            icon={it.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
