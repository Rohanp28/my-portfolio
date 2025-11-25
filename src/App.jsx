import { useEffect, useState } from "react";
import "./App.css";

const highlights = [
  "Led flight seatmap integration that boosted conversion by 30%",
  "Reduced build issues by 25% after dependency modernization",
  "Championed component library that accelerated feature delivery",
  "Mentored interns via pair programming and code reviews",
];

const skills = [
  {
    title: "Frontend",
    details:
      "React, Next.js, TypeScript, JavaScript (ES6+), Redux, Storybook, Strapi, HTML, CSS/SCSS, Material UI, Webpack",
  },
  {
    title: "Backend & APIs",
    details: "Node.js, Express.js, RESTful APIs, GraphQL",
  },
  { title: "Data & Cloud", details: "MongoDB, MS SQL, AWS, CI/CD pipelines" },
  {
    title: "Practices",
    details:
      "Agile delivery, Jira, Git/Bitbucket, Postman, Swagger, VS Code, Pairing & Mentorship",
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Musafir.com",
    location: "UAE",
    period: "Mar 2025 — Present",
    points: [
      "Directed Agile rituals, ensuring high-quality, on-time delivery across flight modules.",
      "Shipped API-driven seatmap experiences, increasing booking efficiency by 30%.",
      "Modernized dependencies and front-end component library, boosting stability and reducing build issues by 25%.",
      "Resolved critical incidents in high-traffic modules with near-zero downtime.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Musafir.com",
    location: "UAE",
    period: "Jan 2022 — Feb 2025",
    points: [
      "Owned flight listing, quotation, and pooling flows end-to-end with GraphQL integrations.",
      "Improved UX by 20% through scalable React components and client-specific optimizations.",
      "Collaborated in Agile sprints and mentored interns via code reviews and pair programming.",
    ],
  },
  {
    title: "Member of Technical Staff",
    company: "Mindstix Software Labs · Amway Taiwan",
    location: "Pune",
    period: "Aug 2021 — Dec 2021",
    points: [
      "Built accessible, responsive e-commerce journeys using reusable React components.",
      "Led debugging and refactoring initiatives that elevated frontend stability.",
      "Integrated RESTful APIs for real-time catalog rendering and richer UI interactions.",
    ],
  },
  {
    title: "Graduate Trainee Engineer",
    company: "Reliance Jio",
    location: "Mumbai",
    period: "Sep 2020 — Jul 2021",
    points: [
      "Delivered scalable React applications with cross-functional teams.",
      "Proactively resolved production bugs, strengthening stability and UX.",
      "Adapted quickly to new technologies, contributing across the full feature lifecycle.",
    ],
  },
];

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <header className="site-header">
        <a className="logo" href="#hero">
          RP
        </a>
        <nav className="site-nav" aria-label="Primary">
          {["about", "skills", "experience", "education", "contact"].map(
            (section) => (
              <button
                key={section}
                className="nav-link"
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"} theme
          </button>
          <div className="cta-group">
            <a className="ghost-btn" href="mailto:rohanpatare98@gmail.com">
              Email
            </a>
            <a
              className="solid-btn"
              href="https://github.com/RohanPatare"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero glass-card">
          <div className="hero-copy">
            <p className="eyebrow">Results-driven Frontend Specialist</p>
            <h1>Rohan Patare</h1>
            <p className="lede">
              Senior Software Engineer crafting high-performance, accessible web
              applications with React, TypeScript, and GraphQL. 4.5+ years
              enabling teams to ship faster while elevating UX.
            </p>
            <div className="hero-meta">
              <span>Pune · Remote friendly</span>
              <span>rohanpatare98@gmail.com</span>
              <span>
                <a
                  href="https://linkedin.com/in/rohan-patare"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
            <div className="hero-cta">
              <a className="solid-btn" href="#experience">
                View Experience
              </a>
              <a className="ghost-btn" href="#contact">
                Let's Collaborate
              </a>
            </div>
          </div>
          <div className="hero-stats glass-card">
            <div>
              <p className="stat-value">4.5+</p>
              <p className="stat-label">Years building enterprise UX</p>
            </div>
            <div>
              <p className="stat-value">30%</p>
              <p className="stat-label">Avg uplift in booking efficiency</p>
            </div>
            <div>
              <p className="stat-value">40%</p>
              <p className="stat-label">Faster onboarding via mentorship</p>
            </div>
          </div>
        </section>

        <section id="about" className="grid-section">
          <article className="glass-card intro">
            <h2>Summary</h2>
            <p>
              I translate complex business requirements into resilient digital
              experiences. My recent work at Musafir.com spans delivery
              leadership, reusable component systems, and high-traffic issue
              resolution—always balancing performance, maintainability, and
              brand storytelling.
            </p>
            <p>
              I thrive in cross-functional squads, partnering with Product, UX,
              and Backend teams to deliver measurable impact while coaching
              engineers on clean, scalable patterns.
            </p>
          </article>
          <article className="glass-card badges">
            <h3>Highlights</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="skills" className="glass-card">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Tools I trust</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="timeline">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>Recent Experience</h2>
          </div>
          <ol className="timeline-list">
            {experiences.map((role) => (
              <li className="glass-card" key={role.title + role.period}>
                <div className="timeline-meta">
                  <span>
                    {role.period} · {role.location}
                  </span>
                  <span>{role.company}</span>
                </div>
                <h3>{role.title}</h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="grid-section">
          <article className="glass-card">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Foundations</h2>
            </div>
            <p className="edu-title">Bachelor of Computer Engineering</p>
            <p>
              Vishwakarma Institute of Technology, Pune
              <br />
              Jun 2016 — May 2020 · CPI: 7.9
            </p>
          </article>
          <article className="glass-card">
            <div className="section-heading">
              <p className="eyebrow">Certifications</p>
              <h2>Recognition</h2>
            </div>
            <p>
              Certificate of Appreciation for leading Flight Seatmap Integration
              & Flights Polling at Musafir.com.
            </p>
          </article>
        </section>

        <section id="contact" className="contact glass-card">
          <div className="section-heading">
            <p className="eyebrow">Get in touch</p>
            <h2>Let's build something bold</h2>
          </div>
          <p>
            Whether you're scaling an e-commerce platform or polishing a
            mission-critical travel experience, I can help ship accessible,
            resilient interfaces quickly.
          </p>
          <div className="contact-actions">
            <a className="solid-btn" href="mailto:rohanpatare98@gmail.com">
              Start a conversation
            </a>
            <a
              className="ghost-btn"
              href="https://linkedin.com/in/rohan-patare"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Rohan Patare. Crafted with glassmorphic
          minimalism.
        </p>
      </footer>
    </>
  );
}

export default App;
