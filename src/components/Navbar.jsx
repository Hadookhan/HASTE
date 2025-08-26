import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../css/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollWithOffset = el => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // tweak 80
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <HashLink smooth to="/#about" className="navItem" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>About</HashLink>
          <HashLink smooth to="/#team" className="navItem" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Team</HashLink>
          <HashLink smooth to="/#services" className="navItem" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Services</HashLink>
          <HashLink smooth to="/#research" className="navItem" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Research</HashLink>
          <HashLink smooth to="/#contact" className="navItem" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Contact</HashLink>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu" aria-expanded={isOpen}>
          &#9776;
        </button>
      </div>
    </nav>
  );
}
