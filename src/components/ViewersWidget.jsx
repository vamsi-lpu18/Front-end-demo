import React from "react";

const ViewersWidget = ({ count = 24 }) => (
  <div className="fixed right-6 bottom-20 z-50">
    <div className="bg-white rounded-xl p-3 shadow-lg border flex items-center gap-3">
      <div className="bg-indigo-100 rounded-full p-2 text-indigo-600">👥</div>
      <div className="text-sm">
        {count} <div className="text-xs text-slate-500">people viewing now</div>
      </div>
    </div>
  </div>
);

export default ViewersWidget;
