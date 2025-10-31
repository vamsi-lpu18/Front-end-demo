import React from "react";
import ContactForm from "./ContactForm";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full max-w-lg mx-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b flex items-center justify-between">
            <div className="font-semibold">Get started</div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <ContactForm onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
