import React, { useState, useEffect } from "react";

const FloatingNotification = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(id);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <div className="bg-white rounded-xl p-4 shadow-lg border flex items-start gap-3 w-64">
        <div className="text-2xl">🔔</div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Vikram Singh from Pune</div>
          <div className="text-xs text-slate-500">
            booked a consultation — 15 minutes ago
          </div>
        </div>
        <button onClick={() => setOpen(false)} className="text-slate-400">
          ✕
        </button>
      </div>
    </div>
  );
};

export default FloatingNotification;
