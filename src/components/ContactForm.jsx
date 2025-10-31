import React, { useState } from "react";

const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email) {
      setError("Please provide name and email.");
      return;
    }

    // naive email check
    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setSuccess("Thanks! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });

    // close after a short delay to show success
    setTimeout(() => {
      setSuccess("");
      onClose();
    }, 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-sm text-red-600">{error}</div>}
      {success && <div className="text-sm text-green-600">{success}</div>}

      <div>
        <label className="text-sm">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border px-3 py-2"
          rows={4}
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-indigo-600 text-white"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
