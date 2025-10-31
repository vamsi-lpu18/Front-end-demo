import React from "react";
import Services from "../components/Services";
import Process from "../components/Process";

const ServicesPage = () => (
  <div>
    <section className="bg-gradient-to-r from-indigo-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm text-indigo-600 font-semibold">
              ⚙️ Services
            </div>
            <h1 className="mt-2 text-4xl font-extrabold">
              Comprehensive IT Solutions Tailored to Your Business Needs
            </h1>
            <p className="mt-4 text-slate-600">
              What We Offer — end-to-end services from design and development to
              deployment and support.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#services"
                className="px-5 py-3 rounded-md bg-indigo-600 text-white"
              >
                Start Your Project
              </a>
              <a href="#contact" className="px-5 py-3 rounded-md border">
                View Our Services
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow">
              📱 🌐 🎨 💼 ☁️ 🔒
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">What We Offer</h2>
      <p className="text-slate-600 mt-2">
        Comprehensive IT services to take your idea from concept to product.
      </p>

      <div className="mt-6">
        <Services />
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Our Development Process</h3>
        <p className="text-slate-600 mt-2">
          A proven methodology that ensures quality, efficiency, and client
          satisfaction.
        </p>

        <div className="mt-6">
          <Process />
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-xl font-semibold">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-slate-600 mt-2">
          Contact us today to discuss your project requirements.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-indigo-600 text-white"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
