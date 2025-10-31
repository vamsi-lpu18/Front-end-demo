import React from "react";
import { Link } from "react-router-dom";
import logoReact from "../assets/tech-react.svg";
import logoNode from "../assets/tech-node.svg";
import logoMysql from "../assets/tech-mysql.svg";
import logoTypescript from "../assets/tech-typescript.svg";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.svg";
import avatarDev from "../assets/avatar-dev.svg";

const Stat = ({ n, label }) => (
  <div className="text-center">
    <div className="text-3xl font-extrabold text-indigo-600">{n}</div>
    <div className="text-sm text-slate-600 mt-1">{label}</div>
  </div>
);

const About = () => (
  <section>
    {/* Hero */}
    <div className="bg-linear-to-b from-indigo-50 to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <nav className="text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">About</span>
        </nav>
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 max-w-3xl">
          Making professional IT solutions accessible for rural India
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          We build affordable, production-grade software for rural businesses, educational institutions, and startups across India.
        </p>
      </div>
    </div>

    {/* Body */}
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Trusted By */}
      <div className="flex items-center gap-6 opacity-80">
        <span className="text-xs font-medium text-slate-500">Trusted by teams using</span>
        <img src={logoReact} alt="React" className="h-5" />
        <img src={logoTypescript} alt="TypeScript" className="h-5" />
        <img src={logoNode} alt="Node.js" className="h-5" />
        <img src={logoMysql} alt="MySQL" className="h-5" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <div className="text-sm text-indigo-600 font-semibold">
          Empowering Rural India with Technology
        </div>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          What We Stand For
        </h2>

        <p className="mt-4 text-slate-600">
          Our Mission: Digital Inclusion for All — We believe technology should
          reach every corner of India. That's why we're committed to providing
          world-class IT solutions at prices that rural entrepreneurs, schools,
          and startups can afford.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">What We Do</h3>
        <ul className="mt-3 space-y-3 text-slate-700">
          <li>
            💼 Rural Businesses — affordable websites, apps and e-commerce
          </li>
          <li>📚 Education — learning management systems & student portals</li>
          <li>
            🚀 Startups — cost-effective MVP development and scaling guidance
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">Our Story</h3>
        <p className="mt-2 text-slate-600">
          Founded in 2025, AppDost was born from a simple yet powerful vision:
          to bridge the digital divide in rural India. We put social impact
          alongside profit and work to deliver quality services at pricing
          structures that make sense for underserved communities.
        </p>
      </div>

      <div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-lg text-slate-900">Our Impact</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Stat n="50+" label="Rural Businesses Served" />
            <Stat n="15+" label="Projects Completed" />
            <Stat n="10+" label="Educational Institutions" />
            <Stat n="40%" label="Lower Than Market Rates" />
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-900">Core Values</h3>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li>
              💰 Affordability — fair pricing, special packages for rural areas
            </li>
            <li>🤝 Accessibility — training and support in local languages</li>
            <li>
              ⚡ Quality — professional-grade solutions without compromise
            </li>
            <li>🌱 Growth — we grow when our clients grow</li>
            <li>🎓 Education — free training and documentation</li>
            <li>💚 Social Impact — creating positive change</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-slate-900">Our Commitment to You</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-semibold text-slate-900">For Rural Businesses</h4>
            <ul className="text-slate-600 mt-2 list-disc ml-6">
            <li>40-60% lower pricing than market rates</li>
            <li>Flexible payment plans</li>
            <li>Free basic maintenance for 6 months</li>
          </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-semibold text-slate-900">For Educational Institutions</h4>
            <ul className="text-slate-600 mt-2 list-disc ml-6">
            <li>Special education sector discounts</li>
            <li>Student & teacher training included</li>
            <li>Custom learning management systems</li>
          </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-semibold text-slate-900">For Startups</h4>
            <ul className="text-slate-600 mt-2 list-disc ml-6">
            <li>MVP development at startup-friendly rates</li>
            <li>Scalable architecture from day one</li>
            <li>Deferred payment options</li>
          </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold">Ready to Transform Your Business?</h3>
        <p className="text-slate-600 mt-2">
          Join hundreds of rural businesses, schools, and startups already growing with AppDost.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700" href="#contact">
            Get Free Consultation
          </a>
          <a className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" href="#services">
            View Our Services
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-slate-900">Our Timeline</h3>
        <ol className="mt-6 relative border-s-l border-slate-200 ps-6 space-y-8">
          <li>
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-indigo-600"></div>
            <div className="text-sm text-slate-500">2025</div>
            <div className="font-semibold text-slate-900">Founded AppDost</div>
            <div className="text-slate-600 text-sm">Set out to make IT accessible for rural India.</div>
          </li>
          <li>
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-indigo-600"></div>
            <div className="text-sm text-slate-500">2025 Q2</div>
            <div className="font-semibold text-slate-900">First 15 projects delivered</div>
            <div className="text-slate-600 text-sm">Websites, Android apps, and a CRM pilot.</div>
          </li>
          <li>
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-indigo-600"></div>
            <div className="text-sm text-slate-500">2025 Q4</div>
            <div className="font-semibold text-slate-900">Education partnerships</div>
            <div className="text-slate-600 text-sm">Launched LMS solutions for schools.</div>
          </li>
        </ol>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-slate-900">Leadership</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <img src={avatar1} alt="Priya" className="mx-auto size-20 rounded-full object-cover" />
            <div className="mt-3 font-semibold text-slate-900">Priya Sharma</div>
            <div className="text-sm text-slate-500">Founder & CEO</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <img src={avatar2} alt="Rohit" className="mx-auto size-20 rounded-full object-cover" />
            <div className="mt-3 font-semibold text-slate-900">Rohit Kumar</div>
            <div className="text-sm text-slate-500">Head of Engineering</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <img src={avatarDev} alt="Ananya" className="mx-auto size-20 rounded-full object-cover" />
            <div className="mt-3 font-semibold text-slate-900">Ananya Gupta</div>
            <div className="text-sm text-slate-500">Design Lead</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-slate-900">FAQs</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium text-slate-900">Do you work outside rural regions?</summary>
            <p className="mt-2 text-sm text-slate-600">Yes, we partner with startups and SMEs across India while keeping rural access at our core.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium text-slate-900">How do you keep prices affordable?</summary>
            <p className="mt-2 text-sm text-slate-600">Lean processes, reusable components, and transparent scoping help us offer fair pricing.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium text-slate-900">Can you help with grants or CSR?</summary>
            <p className="mt-2 text-sm text-slate-600">We assist with documentation and proposals to align projects with CSR or grant programs.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium text-slate-900">What tech stack do you use?</summary>
            <p className="mt-2 text-sm text-slate-600">React, Node.js, SQL/NoSQL databases, and modern hosting on popular clouds.</p>
          </details>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Let’s build something meaningful together</h3>
        <p className="mt-2 text-slate-600">Tell us your goals and constraints — we’ll propose a plan within 48 hours.</p>
        <div className="mt-4 flex justify-center gap-3">
          <a className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700" href="/contact">Contact Us</a>
          <a className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50" href="/services">Explore Services</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
