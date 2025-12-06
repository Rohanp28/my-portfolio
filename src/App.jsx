import { useEffect, useState } from "react";
import "./App.css";

const highlights = [
  "Turning complexity into clean, intuitive experiences",
  "Blending frontend craft with full-stack depth",
  "Delivering polished features with a product-first mindset",
];

const technologies = [
  { name: "React", category: "Frontend", color: "#61dafb" },
  { name: "Next.js", category: "Frontend", color: "#000000" },
  { name: "TypeScript", category: "Frontend", color: "#3178c6" },
  { name: "JavaScript", category: "Frontend", color: "#f7df1e" },
  { name: "Redux", category: "Frontend", color: "#764abc" },
  { name: "HTML", category: "Frontend", color: "#e34c26" },
  { name: "CSS/SCSS", category: "Frontend", color: "#1572b6" },
  { name: "Material UI", category: "Frontend", color: "#007fff" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "Express.js", category: "Backend", color: "#000000" },
  { name: "GraphQL", category: "Backend", color: "#e10098" },
  { name: "RESTful APIs", category: "Backend", color: "#00d9ff" },
  { name: "MongoDB", category: "Database", color: "#47a248" },
  { name: "MS SQL", category: "Database", color: "#cc2927" },
  { name: "AWS", category: "Cloud", color: "#ff9900" },
  { name: "Git", category: "Tools", color: "#f05032" },
  { name: "Jira", category: "Tools", color: "#0052cc" },
  { name: "Postman", category: "Tools", color: "#ff6c37" },
];

function TechIcon({ name }) {
  const icons = {
    React: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(-60 12 12)"
        />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.5714 6L18 18H15.6L11.5714 11.619L7.54286 18H5.14286L11.5714 6Z"
          fill="currentColor"
        />
        <path
          d="M18 6H20.4L14.4 18H12L18 6Z"
          fill="currentColor"
          opacity="0.5"
        />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 8h8M8 12h6M8 16h4" strokeWidth="1.5" />
        <path d="M14 16l2-2" strokeWidth="1.5" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 8h4v8M12 8h4M12 12h2" strokeWidth="1.5" />
      </svg>
    ),
    Redux: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    HTML: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4l2 16 6 2 6-2 2-16H4z" />
        <path d="M7 8h10M7 12h8M7 16h6" strokeWidth="1.5" />
      </svg>
    ),
    "CSS/SCSS": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4l2 16 6 2 6-2 2-16H4z" />
        <path d="M7 8h10M7 12h10M7 16h8" strokeWidth="1.5" />
        <circle cx="17" cy="16" r="1.5" />
      </svg>
    ),
    "Material UI": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0h8v8H0V0zm8 8h8v8H8V8zm8-8h8v8h-8V0zm0 16h8v8h-8v-8z"
          fill="currentColor"
        />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="M12 2v20l10-5V7L12 2z" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm1 1v6h6V9H9z"
          fill="currentColor"
        />
      </svg>
    ),
    GraphQL: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4" r="2" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
        <circle cx="12" cy="20" r="2" />
        <path d="M12 6l-6 6 6 6M12 6l6 6-6 6" />
        <path d="M4 12h16" />
      </svg>
    ),
    "RESTful APIs": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v4H4z" />
        <path d="M4 10h16v4H4z" />
        <path d="M4 16h16v4H4z" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C8 2 5 5 5 9c0 3 2 5.5 5 6.5v7h4v-7c3-1 5-3.5 5-6.5 0-4-3-7-7-7z"
          fill="currentColor"
        />
        <path
          d="M12 2v13.5c-3-1-5-3.5-5-6.5 0-4 2-7 5-7z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    ),
    "MS SQL": (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"
          fill="currentColor"
        />
        <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 8.5L12 2l6.5 6.5L12 15l-6.5-6.5z" fill="currentColor" />
        <path
          d="M5.5 15.5L12 9l6.5 6.5L12 22l-6.5-6.5z"
          fill="currentColor"
          opacity="0.7"
        />
        <path d="M12 2v7l6.5-6.5L12 2z" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M12 8v8M6 18l6-6M18 18l-6-6" />
      </svg>
    ),
    Jira: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8v8H8z" />
        <path d="M10 10h4v4h-4z" fill="currentColor" />
      </svg>
    ),
    Postman: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  };

  return (
    icons[name] || (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" strokeWidth="2" />
      </svg>
    )
  );
}

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Musafir.com",
    period: "Mar 2025 — Present",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    points: [
      "Contributing to JETT, an in-house SaaS-based travel infrastructure platform, and leading the frontend architecture for the Admin Console.",
      "Developed and maintained core admin and travel modules — including onboarding for TMCs/organizations, pricing policies, access control, and revenue workflows — using React, TypeScript, and the MERN stack.",
      "Engineering reusable component systems and scalable UI patterns that boost development speed and maintainability.",
      "Designing and integrating end-to-end APIs while improving platform performance and stability through optimizations and production issue resolution.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Musafir.com",
    period: "Jan 2022 — Feb 2025",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "Strapi",
      "GraphQL",
      "JavaScript",
      "jQuery",
      "Sass",
      "Material UI",
      "Storybook",
    ],
    points: [
      "Delivered high-impact travel modules including Flight Listing, Request Forms, Seatmap Integration, and Hotel Quotation.",
      "Built a dynamic Flight Seatmap System that increased booking efficiency by 30%.",
      "Modernized large sections of the frontend, improving performance, reducing build issues by 25%, and enhancing UX.",
      "Developed scalable React components and GraphQL-backed interfaces, accelerating feature delivery by 30%.",
    ],
  },
  {
    title: "Member of Technical Staff",
    company: "Mindstix Software Labs",
    period: "Aug 2021 — Dec 2021",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "CSS",
    ],
    points: [
      "Project- Amway Taiwan (E-Commerce Platform)",
      "Built responsive, reusable React components that delivered a consistent multi-device user experience.",
      "Integrated RESTful APIs for better performance and smoother data rendering.",
      "Developed backend endpoints in Node.js & Express to support frontend workflows.",
      "Improved UI stability and performance through debugging and refactoring.",
    ],
  },
  {
    title: "Graduate Trainee Engineer",
    company: "Reliance Jio",
    period: "Sep 2020 — Jul 2021",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    points: [
      "Contributed to full-stack development using React, Node.js, Express, and MongoDB.",
      "Resolved production issues, improving system stability and user experience.",
      "Collaborated in Agile teams and quickly adapted to new technologies, contributing across the full feature lifecycle.",
    ],
  },
];

const projects = [
  {
    title: "My Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my skills and experience with glassmorphic design.",
    techStack: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Rohanp28/my-portfolio",
    live: "https://rohanpatare-portfolio.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "A full-stack task management application for creating, organizing, and tracking daily tasks and to-do items.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Rohanp28/expense-tracker",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management application for tracking and managing personal finances.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Rohanp28/expense-tracker",
    live: "#",
  },
];

const services = [
  {
    number: "01",
    icon: "⚛️",
    title: "Frontend Development",
    description:
      "Modern, intuitive, and performant interfaces built with React & TypeScript.",
  },
  {
    number: "02",
    icon: "🚀",
    title: "Full-Stack MERN Development",
    description:
      "End-to-end feature delivery: UI, APIs, backend logic, and database workflows.",
  },
  {
    number: "03",
    icon: "🔌",
    title: "API Development & Integration",
    description:
      "Building and integrating REST APIs for smooth, reliable communication.",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Improving speed, stability, and overall application performance.",
  },
];

// Utility function to wrap words in spans for progressive reveal
const wrapWords = (text) => {
  let wordIndex = 0;
  return text.split(/(\s+)/).map((word, index) => {
    if (word.trim() === "") {
      return <span key={index}>{word}</span>;
    }
    const currentIndex = wordIndex++;
    return (
      <span
        key={index}
        className="word"
        style={{ "--word-index": currentIndex }}
      >
        {word}
      </span>
    );
  });
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // Also animate section headings when section is visible
          const sectionHeading = entry.target.querySelector(".section-heading");
          if (
            sectionHeading &&
            !sectionHeading.classList.contains("animate-in")
          ) {
            sectionHeading.classList.add("animate-in");
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animatable elements (excluding hero section)
    const animatableElements = document.querySelectorAll(
      ".glass-card:not(#hero .glass-card), .tech-item, .project-card, .service-card, .timeline-list li, .grid-section > *, section:not(#hero)"
    );

    animatableElements.forEach((el) => {
      observer.observe(el);
    });

    // Also observe section headings directly
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatableElements.forEach((el) => {
        observer.unobserve(el);
      });
      sectionHeadings.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll-based timeline highlighting
    // Use a small delay to ensure DOM is ready
    let highlightObserver = null;
    const hoveredItems = new Set();
    const eventHandlers = new Map();

    const timeoutId = setTimeout(() => {
      const timelineItems = document.querySelectorAll(".timeline-item");

      if (timelineItems.length === 0) return;

      // Add hover event handlers
      const handleMouseEnter = (item) => {
        hoveredItems.add(item);
        // Remove highlight from all items
        timelineItems.forEach((timelineItem) => {
          timelineItem.classList.remove("timeline-highlighted");
        });
        // Add highlight to hovered item
        item.classList.add("timeline-highlighted");
      };

      const handleMouseLeave = (item) => {
        hoveredItems.delete(item);
        // Remove highlight from hovered item
        item.classList.remove("timeline-highlighted");
        // Restore scroll-based highlighting
        updateScrollHighlight();
      };

      // Attach hover handlers to all timeline items
      timelineItems.forEach((item) => {
        const enterHandler = () => handleMouseEnter(item);
        const leaveHandler = () => handleMouseLeave(item);
        eventHandlers.set(item, { enterHandler, leaveHandler });
        item.addEventListener("mouseenter", enterHandler);
        item.addEventListener("mouseleave", leaveHandler);
      });

      // Function to update scroll-based highlighting
      const updateScrollHighlight = () => {
        // Only update if no items are being hovered
        if (hoveredItems.size > 0) return;

        // Find the most visible item
        let maxRatio = 0;
        let mostVisibleItem = null;

        timelineItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const itemTop = rect.top;
          const itemBottom = rect.bottom;
          const itemHeight = rect.height;

          // Calculate intersection ratio
          const visibleTop = Math.max(0, -itemTop);
          const visibleBottom = Math.min(itemHeight, viewportHeight - itemTop);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const ratio = visibleHeight / itemHeight;

          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleItem = item;
          }
        });

        // Remove highlight from all items
        timelineItems.forEach((item) => {
          item.classList.remove("timeline-highlighted");
        });

        // Add highlight to the most visible item
        if (mostVisibleItem && maxRatio > 0.3) {
          mostVisibleItem.classList.add("timeline-highlighted");
        }
      };

      highlightObserver = new IntersectionObserver(
        (entries) => {
          // Only update if no items are being hovered
          if (hoveredItems.size > 0) return;

          // Find the entry with the highest intersection ratio (most visible)
          let maxRatio = 0;
          let mostVisibleItem = null;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleItem = entry.target;
            }
          });

          // Remove highlight from all items
          timelineItems.forEach((item) => {
            item.classList.remove("timeline-highlighted");
          });

          // Add highlight to the most visible item
          if (mostVisibleItem && maxRatio > 0.3) {
            mostVisibleItem.classList.add("timeline-highlighted");
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: "-20% 0px -20% 0px", // Only highlight when item is in center 60% of viewport
        }
      );

      // Observe all timeline items
      timelineItems.forEach((item) => {
        highlightObserver.observe(item);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (highlightObserver) {
        const timelineItems = document.querySelectorAll(".timeline-item");
        timelineItems.forEach((item) => {
          highlightObserver.unobserve(item);
          // Remove event listeners
          const handlers = eventHandlers?.get(item);
          if (handlers) {
            item.removeEventListener("mouseenter", handlers.enterHandler);
            item.removeEventListener("mouseleave", handlers.leaveHandler);
          }
        });
      }
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (section) => {
    const sectionId = section === "home" ? "hero" : section;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="stars-background" aria-hidden="true">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <header className="site-header">
        <div className="header-container">
          <button className="logo" onClick={() => handleNavClick("hero")}>
            <span className="logo-text">Rohan Patare</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="site-nav desktop-nav" aria-label="Primary">
            {["home", "experience", "projects", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className="nav-link"
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions desktop-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Actions (Theme + Hamburger) */}
          <div className="mobile-actions">
            <button
              className="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            {["home", "experience", "projects", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className="mobile-nav-link"
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Available for Collaboration</p>
            <h1>
              Hi, I'm <span className="gradient-text">Rohan</span>
            </h1>
            <p className="lede">
              A Frontend-focused Full-Stack MERN Engineer crafting fast, smooth,
              and scalable web applications.
            </p>
            <p className="lede">
              Experienced in building intuitive UIs backed by reliable,
              production-ready backend systems.
            </p>
            <div className="hero-cta">
              <button
                className="ghost-btn btn-collaborate"
                onClick={() => handleNavClick("contact")}
              >
                Let's Collaborate
              </button>
              <button
                className="ghost-btn btn-work"
                onClick={() => handleNavClick("projects")}
              >
                See My Work
              </button>
            </div>
            <div className="hero-meta">
              <span>
                📍 <span className="location-text">Pune, India</span>
              </span>
            </div>
          </div>
        </section>

        <section id="experience" className="timeline">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>Recent Experience</h2>
          </div>
          <ol className="timeline-list">
            {experiences.map((role, index) => (
              <li
                className="glass-card timeline-item"
                data-timeline-index={index}
                key={role.title + role.period}
              >
                <div className="timeline-meta">
                  <span>{role.period}</span>
                  <span>{role.company}</span>
                </div>
                <h3>{role.title}</h3>
                {role.technologies && (
                  <div className="experience-badges">
                    {role.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {role.points && role.points.length > 0 && (
                  <ul>
                    {role.points.map((point) => {
                      if (point.startsWith("Project-")) {
                        return (
                          <li key={point} className="project-point">
                            {point}
                          </li>
                        );
                      }
                      return <li key={point}>{point}</li>;
                    })}
                  </ul>
                )}
                {role.projects &&
                  role.projects.map((project) => (
                    <div key={project.name} className="project-section">
                      <h4 className="project-name">{project.name}</h4>
                      <ul>
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="glass-card">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card glass-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.github || project.live !== "#") && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="glass-card">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Tools I trust</h2>
          </div>
          <div className="tech-grid">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`tech-item ${
                  tech.color === "#000000" ? "tech-dark" : ""
                }`}
                style={{ "--tech-color": tech.color }}
              >
                <div className="tech-icon">
                  <TechIcon name={tech.name} />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="glass-card">
          <div className="section-heading">
            <p className="eyebrow">What I Offer</p>
            <h2>Services</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.number} className="service-card glass-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="glass-card">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Who I am</h2>
          </div>
          <div className="about-content">
            <p>
              {wrapWords(
                "Hello! I'm Rohan, a Full-Stack Developer with strong expertise in building fast, scalable, and user-friendly web applications. I specialize in React, TypeScript, Node.js, and the MERN stack, with a solid foundation in designing clean UIs and developing reliable end-to-end systems."
              )}
            </p>
            <p>
              {wrapWords(
                "I enjoy transforming complex ideas into intuitive, high-performing interfaces and applications. My work emphasizes writing clean, maintainable code, optimizing performance, and delivering seamless user experiences across platforms."
              )}
            </p>
            <p>
              {wrapWords(
                "As a strong collaborator, I work closely with design, product, and backend teams to deliver meaningful and impactful features. I'm continually exploring new technologies and refining my skills to build smarter, faster, and more efficient digital solutions that meet both user expectations and business goals."
              )}
            </p>
          </div>
          <div className="about-education">
            <h3 className="education-heading">Education</h3>
            <div className="education-item">
              <p className="edu-institution">
                Vishwakarma Institute of Technology, Pune
              </p>
              <p className="edu-degree">
                B.E. - Computer Engineering, CPI: 7.9
              </p>
              <p className="edu-period">Jun 2016 — May 2020</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact glass-card">
          <div className="section-heading">
            <p className="eyebrow">Get in touch</p>
            <h2>Ready to Work Together?</h2>
          </div>
          <p className="contact-intro">
            Let's make something incredible together! Reach out to discuss your
            project, and let's build solutions that create real impact.
          </p>
          <div className="contact-status">
            <span className="status-indicator"></span>
            <span>
              Available for freelance projects and full-time opportunities
            </span>
          </div>
          <div className="contact-methods">
            <a
              href="mailto:rohanpatare98@gmail.com"
              className="contact-method"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">rohanpatare98@gmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-patare-75b599162"
              className="contact-method"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Connect with me</span>
              </div>
            </a>
            <a
              href="https://github.com/Rohanp28"
              className="contact-method"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">View my work</span>
              </div>
            </a>
            <a href="tel:+917263923702" className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <span className="contact-label">Call Me</span>
                <span className="contact-value">Available for calls</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-copyright">
          © 2025 Rohan Patare • All Rights Reserved
        </p>
      </footer>

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
