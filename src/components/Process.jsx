import React from "react";

const Step = ({ idx, title, desc }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center">
        {idx}
      </div>
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-600">{desc}</div>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      desc: "Understand requirements, goals and create a roadmap.",
    },
    {
      title: "Design & Prototype",
      desc: "Wireframes, UI mockups and interactive prototypes.",
    },
    {
      title: "Development & Testing",
      desc: "Clean, scalable code and thorough QA.",
    },
    {
      title: "Deployment & Support",
      desc: "CI/CD, hosting and ongoing maintenance.",
    },
  ];

  return (
    <section className="mt-12 py-12 bg-indigo-50 rounded-2xl p-6">
      <h3 className="text-2xl font-bold text-center">
        Our Development Process
      </h3>
      <p className="text-center text-slate-600 mt-2">
        A proven methodology that ensures quality and client satisfaction.
      </p>

      <div className="mt-8 space-y-6 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-white rounded-lg p-6 shadow">
            <Step idx={i + 1} title={s.title} desc={s.desc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
