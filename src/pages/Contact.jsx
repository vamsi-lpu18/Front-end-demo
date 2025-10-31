import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-extrabold">Contact Us</h1>
    <p className="mt-2 text-slate-600">
      Have a project? Drop us a message and we'll get back within 24 hours.
    </p>

    <div className="mt-6 bg-white p-6 rounded-xl shadow">
      <ContactForm onClose={() => {}} />
    </div>

    <div className="mt-6 text-sm text-slate-600">
      <div>Email: contact@appdost.in</div>
      <div>Phone: +91 76350 75422</div>
      <div>Locations: Banka (HQ), Motihari, Patna</div>
    </div>
  </section>
);

export default Contact;
