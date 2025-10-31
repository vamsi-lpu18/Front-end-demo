import React from "react";

const Footer = () => (
  <footer className="mt-16 border-t border-slate-200 bg-white/60">
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold transform transition hover:scale-105">
            AD
          </div>
          <div>
            <div className="font-semibold">AppDost</div>
            <div className="text-sm text-slate-600">
              Complete IT Solution for your business needs
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Quick Links</div>
        <div className="flex flex-col text-sm text-slate-600 gap-1">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/careers">Careers</a>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Contact</div>
        <div className="text-sm text-slate-600">
          <div>contact@appdost.in</div>
          <div>+91 76350 75422</div>
          <div>Mon - Sat: 9:00 AM - 6:00 PM IST</div>
        </div>
      </div>

      <div className="md:col-span-3 text-center text-sm text-slate-600 mt-6">
        © {new Date().getFullYear()} AppDost — Complete IT Solution. All rights
        reserved. • Built with ❤️ in India
      </div>
    </div>
  </footer>
);

export default Footer;
