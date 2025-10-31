import React from "react";

const ScrollTop = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-50 bg-indigo-600 text-white w-10 h-10 rounded-full shadow-lg"
    >
      ↑
    </button>
  );
};

export default ScrollTop;
