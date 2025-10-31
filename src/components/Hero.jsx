import React from "react";
import heroImg from "../assets/project-1-ai.svg";
import avatar from "../assets/avatar-1-ai.svg";
import logoReact from "../assets/tech-react.svg";
import logoNode from "../assets/tech-node.svg";
import logoMysql from "../assets/tech-mysql.svg";
import logoTypescript from "../assets/tech-typescript.svg";

const Hero = ({ onPrimaryAction }) => {
  return (
    <section className="relative grid md:grid-cols-2 gap-10 items-center py-12">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <span className="size-2 rounded-full bg-indigo-500"></span>
          Trusted UI starter for product teams
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Build
          <span className="mx-2 bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            delightful products
          </span>
          faster
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl">
          A modern React + Tailwind foundation with polished components, smart
          defaults, and responsive layouts so you can focus on your product.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onPrimaryAction}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
          >
            Start free
          </button>
          <a
            href="#features"
            className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            See features
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="p-3 bg-white rounded-lg border text-slate-700">
            Users <div className="text-2xl font-bold">1.2k+</div>
          </div>
          <div className="p-3 bg-white rounded-lg border text-slate-700">
            Templates <div className="text-2xl font-bold">24</div>
          </div>
          <div className="p-3 bg-white rounded-lg border text-slate-700">
            Deploys <div className="text-2xl font-bold">512</div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-6 opacity-80">
          <img src={logoReact} alt="React" className="h-6" />
          <img src={logoTypescript} alt="TypeScript" className="h-6" />
          <img src={logoNode} alt="Node.js" className="h-6" />
          <img src={logoMysql} alt="MySQL" className="h-6" />
        </div>
      </div>

      <div className="relative">
        <div className="rounded-2xl bg-linear-to-br from-indigo-50 to-pink-50 p-6 shadow-lg">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={heroImg}
              alt="preview"
              className="w-full h-64 object-cover transform transition hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <div className="text-sm font-semibold">Live preview</div>
                <div className="text-xs text-white/90">BEU Mate — app screenshot</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow flex items-center gap-3 border transform transition hover:translate-y-[-4px] hover:shadow-2xl">
          <img
            src={avatar}
            className="w-12 h-12 rounded-full object-cover transform transition hover:scale-110"
            alt="avatar"
          />
          <div>
            <div className="text-sm font-semibold">Rajat — Designer</div>
            <div className="text-xs text-slate-500">Loved the UI — shipped in 2 weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
