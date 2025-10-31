import React from "react";
import FloatingNotification from "../components/FloatingNotification";
import ViewersWidget from "../components/ViewersWidget";
import ScrollTop from "../components/ScrollTop";
import proj1 from "../assets/project-1-ai.svg";
import proj2 from "../assets/project-2-ai.svg";
import proj3 from "../assets/project-3-ai.svg";
import iconReact from "../assets/tech-react.svg";
import iconNode from "../assets/tech-node.svg";
import iconAI from "../assets/tech-ai.svg";
import iconTypescript from "../assets/tech-typescript.svg";
import iconPostgresql from "../assets/tech-postgresql.svg";
import iconPhp from "../assets/tech-php.svg";
import iconLaravel from "../assets/tech-laravel.svg";
import iconMysql from "../assets/tech-mysql.svg";

const techIcons = {
  react: iconReact,
  node: iconNode,
  ai: iconAI,
  typescript: iconTypescript,
  postgresql: iconPostgresql,
  php: iconPhp,
  laravel: iconLaravel,
  mysql: iconMysql,
};

const ProjectCard = ({ image, title, desc, tech = [], actions = [] }) => (
  <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-0 overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition hover:scale-105"
      />
      <div className="absolute left-4 bottom-4 bg-black/60 text-white text-xs rounded-full px-3 py-1 drop-shadow">
        Featured Project
      </div>
    </div>
    <div className="p-6">
      <div className="text-sm text-slate-500">Featured Project</div>
      <h3 className="mt-2 font-semibold text-lg text-slate-900 drop-shadow-sm">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <div className="mt-4 flex gap-3 flex-wrap">
        {tech.map((t) => (
          <div
            key={t}
            className="flex items-center gap-2 text-xs bg-slate-100 rounded-full px-3 py-1"
          >
            <img
              src={techIcons[t]}
              alt={t}
              className="w-5 h-5"
            />
            <span>{t}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm shadow-sm"
          >
            {a.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      image: proj1,
      title: "BEU Mate - Bihar Engineering",
      desc: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
      tech: ["react", "node", "ai"],
      actions: [
        { label: "Play Store", href: "#" },
        { label: "Website", href: "#" },
      ],
    },
    {
      image: proj2,
      title: "Devskillquest",
      desc: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects.",
      tech: ["react", "typescript", "postgresql"],
      actions: [{ label: "Website", href: "#" }],
    },
    {
      image: proj3,
      title: "The Weddings Chapter",
      desc: "A premium wedding planning platform connecting couples with top vendors, venues, and services.",
      tech: ["php", "laravel", "mysql"],
      actions: [{ label: "Website", href: "#" }],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold">Featured Projects</h1>
      <p className="mt-2 text-slate-600">
        Real solutions for real businesses — explore our successful projects.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 text-white"
          href="#"
        >
          View All Projects →
        </a>
      </div>
      <FloatingNotification />
      <ViewersWidget />
      <ScrollTop />
    </section>
  );
};

export default Portfolio;
