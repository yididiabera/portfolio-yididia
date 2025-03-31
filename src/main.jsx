import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
