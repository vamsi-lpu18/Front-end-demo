import React from "react";

const Stat = ({ emoji, number, label }) => (
  <div className="flex flex-col items-center p-6">
    <div className="text-3xl">{emoji}</div>
    <div className="text-3xl font-extrabold text-indigo-600 mt-3">{number}</div>
    <div className="text-sm text-slate-500 mt-2">{label}</div>
  </div>
);

const Stats = () => {
  const items = [
    { emoji: "💻", number: "10+", label: "Web Projects" },
    { emoji: "📱", number: "4+", label: "Android Apps" },
    { emoji: "🎯", number: "1", label: "CRM Project" },
    { emoji: "🚀", number: "2025", label: "Founded Year" },
  ];

  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
        {items.map((it) => (
          <Stat
            key={it.label}
            emoji={it.emoji}
            number={it.number}
            label={it.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
