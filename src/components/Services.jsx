import React from "react";
import imgAndroid from "../assets/service-android-ai.svg";
import imgWeb from "../assets/service-web-ai.svg";
import imgUi from "../assets/service-ui-ai.svg";
import imgCrm from "../assets/service-crm-ai.svg";
import imgCloud from "../assets/service-cloud-ai.svg";
import imgSecurity from "../assets/service-security-ai.svg";

const ServiceCard = ({ title, desc, image, slug }) => (
  <div className="group bg-white rounded-xl shadow-sm border border-slate-200 transform transition hover:-translate-y-2 hover:shadow-md overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
      <div className="absolute left-4 bottom-4 bg-white text-indigo-700 text-xs rounded-full px-3 py-1 border border-indigo-100 shadow-sm">
        Service
      </div>
    </div>
    <div className="p-6">
      <div className="text-sm text-indigo-600">Service</div>
      <h4 className="mt-2 font-bold text-lg text-slate-900 drop-shadow-sm">
        {title}
      </h4>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>

      <div className="mt-4">
        <a className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm" href={`/services/${slug}`}>
          Learn more
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Android App Development",
      slug: "android",
      desc: "Native & Hybrid apps, Play Store deployment",
      image: imgAndroid,
    },
    {
      title: "Web Development",
      slug: "web",
      desc: "Responsive, scalable web apps",
      image: imgWeb,
    },
    {
      title: "UI/UX Development",
      slug: "ui-ux",
      desc: "Design systems, wireframes and prototypes",
      image: imgUi,
    },
    {
      title: "CRM Software",
      slug: "crm",
      desc: "Custom CRM, integrations, support",
      image: imgCrm,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud",
      desc: "AWS / Azure / GCP migration and tuning",
      image: imgCloud,
    },
    {
      title: "Cybersecurity",
      slug: "security",
      desc: "Security audits and penetration testing",
      image: imgSecurity,
    },
  ];

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-slate-900">Our Services</h3>
      <p className="text-slate-600 mt-2">
        Comprehensive services to take your idea from concept to product.
      </p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            desc={s.desc}
            image={s.image}
            slug={s.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
