// components/GoToTop.jsx
import { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`goToTop ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      ↑
    </button>
  );
}
