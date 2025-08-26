// pages/HomePage.jsx
import { useEffect } from "react";
import GoToTop from "./components/GoToTop";
import './index.css'

export default function HomePage() {
  // Optional: ensure we start at top when landing on "/"
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      {/* HERO */}
      <section id="hero" className="section hero">
        <h1 className="mainHeader">HASTE</h1>
        <p className="tagline">Welcome to the new age of science</p>
        <div className="ctas">
          <a href="/#services" className="btn primary">Explore Services</a>
          <a href="/#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          We accelerate research with modern tooling, reproducible pipelines,
          and collaborative workflows.
        </p>
      </section>

      {/* TEAM */}
      <section id="team" className="section">
        <h2>Team</h2>
        <div className="cardGrid">
          <article className="card">
            <h3>Dr. Ada Lovelace</h3>
            <p>ML Lead · Causal inference · MLOps</p>
          </article>
          <article className="card">
            <h3>Alan Turing</h3>
            <p>Systems · Distributed compute · Security</p>
          </article>
          <article className="card">
            <h3>Katherine Johnson</h3>
            <p>Data Science · Simulation · Flight dynamics</p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Services</h2>
        <ul className="featureList">
          <li>End-to-end experiment platforms</li>
          <li>Model evaluation + monitoring</li>
          <li>Interactive data apps + dashboards</li>
        </ul>
      </section>

      {/* RESEARCH */}
      <section id="research" className="section">
        <h2>Research</h2>
        <div className="cardGrid">
          <article className="card">
            <h3>Paper Title One</h3>
            <p>Short abstract or highlight goes here.</p>
            <a href="#" className="link">Read more →</a>
          </article>
          <article className="card">
            <h3>Paper Title Two</h3>
            <p>Key result and impact in one line.</p>
            <a href="#" className="link">Read more →</a>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form className="contactForm" onSubmit={e => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} placeholder="How can we help?" />
          </label>
          <button type="submit" className="btn primary">Send</button>
        </form>
      </section>
      <GoToTop />
    </main>
  );
}
