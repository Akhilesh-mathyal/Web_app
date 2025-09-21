/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/**
 * Props for the ThemeToggle component.
 */
interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

/**
 * A component that renders a button to toggle between light and dark themes.
 */
function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.11-1.36c-0.98,1.37-2.58,2.26-4.39,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.39C12.92,3.04,12.46,3,12,3z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zm0 18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zm-8-9c-.55 0-1-.45-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm18 0c-.55 0-1-.45-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zM5.64 5.64c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 2.81c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.42zm12.72 12.72c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.41-1.42c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.42zM5.64 18.36c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.41-1.42c.39-.39 1.02-.39-1.41 0s.39 1.02 0 1.41l-1.41 1.42zm12.72-12.72c-.39.39-1.02-.39-1.41 0s-.39-1.02 0-1.41l1.41-1.42c.39-.39 1.02-.39-1.41 0s.39 1.02 0 1.41l-1.41 1.42z" /></svg>
      )}
    </button>
  );
}

function Header({ theme, onToggle }) {
  return (
    <header className="header">
      <div className="container navbar">
        <a href="#home" className="nav-logo">Akhilesh M.</a>
        <nav>
          <ul className="nav-links">
            <li className="nav-link"><a href="#services">Services</a></li>
            <li className="nav-link"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-link"><a href="#about">About</a></li>
            <li className="nav-link"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Akhilesh Mathyal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Header theme={theme} onToggle={toggleTheme} />
      <main>
        <section id="home" className="hero visible">
          <div className="container">
            <div className="hero-content">
              <p className="subtitle">AKHILESH MATHYAL</p>
              <h1>Crafting Digital Solutions with Code and Creativity</h1>
              <p>
                A dedicated developer specializing in building robust, scalable web applications and intelligent systems that solve real-world problems.
              </p>
              <a href="#portfolio" className="cta-button">View My Work</a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <h2>Areas of Expertise</h2>
            <div className="grid">
              <div className="card">
                <svg className="card-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C9.21 2 7 4.21 7 7c0 2.22 1.21 4.15 3 5.19V14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.81c1.79-1.04 3-2.97 3-5.19 0-2.79-2.21-5-5-5zm-5 6c0-1.65 1.35-3 3-3s3 1.35 3 3-.34 1.3-.89 1.87L9.89 9.13c-.53-.31-1.11-.48-1.74-.48-1.65 0-3 1.35-3 3zm10 0c0-1.65-1.35-3-3-3s-3 1.35-3 3 .34 1.3.89 1.87l1.22.74c.53.31 1.11.48 1.74.48 1.65 0 3-1.35 3-3z"/></svg>
                <h3>Machine Learning</h3>
                <p>Developing and deploying intelligent models that learn from data to drive predictions, automate tasks, and uncover valuable insights.</p>
              </div>
              <div className="card">
                <svg className="card-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></svg>
                <h3>Data Science & Analytics</h3>
                <p>Transforming complex datasets into actionable strategies through rigorous analysis, visualization, and statistical modeling.</p>
              </div>
              <div className="card">
                <svg className="card-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg>
                <h3>API Development</h3>
                <p>Designing and building secure, scalable, and well-documented RESTful APIs to facilitate seamless data communication between services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="grid">
              <div className="card portfolio-card">
                <h3>Project Alpha</h3>
                <p>A web-based platform for real-time data visualization, built with React and D3.js, providing users with interactive dashboards.</p>
                <div className="tags"><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">D3.js</span></div>
              </div>
              <div className="card portfolio-card">
                <h3>Project Beta</h3>
                <p>An e-commerce backend powered by a Flask REST API, featuring user authentication, product management, and a payment gateway integration.</p>
                 <div className="tags"><span className="tag">Python</span><span className="tag">Flask</span><span className="tag">PostgreSQL</span></div>
              </div>
              <div className="card portfolio-card">
                <h3>Project Gamma</h3>
                <p>A sentiment analysis tool using a custom-trained machine learning model to classify customer feedback from various sources.</p>
                 <div className="tags"><span className="tag">NLP</span><span className="tag">Scikit-learn</span><span className="tag">Python</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="profile-pic-container">
                <svg className="profile-pic" viewBox="0 0 100 100" aria-label="An avatar image of Akhilesh" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="var(--primary-color)" /><stop offset="100%" stopColor="var(--primary-hover-color)" /></linearGradient></defs>
                  <circle cx="50" cy="50" r="48" fill="url(#avatarGradient)" />
                  <text x="50" y="68" fontFamily="Inter, sans-serif" fontSize="45" fill="#fff" textAnchor="middle" fontWeight="bold">AM</text>
                </svg>
              </div>
              <div className="bio">
                <p>
                  Hello! I'm Akhilesh, a passionate developer with a love for creating beautiful, functional, and user-centric web applications. My journey in tech is driven by a curiosity to learn new technologies and a desire to solve real-world problems with code.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, as well as a keen interest in the applications of machine learning, I strive to build products that are not only technically sound but also provide a meaningful and intuitive user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

         <section id="testimonials">
          <div className="container">
            <h2>What Others Say</h2>
            <div className="grid">
              <div className="card testimonial-card">
                <svg className="quote-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                <p><em>"Akhilesh is a highly skilled and dedicated developer. His ability to tackle complex problems with elegant solutions made him an invaluable asset to our team. I was consistently impressed by his work ethic and technical expertise."</em></p>
                <p className="author">Jane Doe <span>- Project Manager</span></p>
              </div>
               <div className="card testimonial-card">
                <svg className="quote-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                <p><em>"Working with Akhilesh was a pleasure. He has a deep understanding of modern web technologies and a great eye for detail. He is a proactive communicator and a collaborative team player."</em></p>
                <p className="author">John Smith <span>- Lead Engineer</span></p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact-section">
            <h2>Get In Touch</h2>
             <div className="grid">
                <div>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.</p>
                    <a href="mailto:akhilesh@example.com" className="cta-button">Say Hello</a>
                </div>
                <div>
                     <h3>Connect With Me</h3>
                    <div className="social-links-container">
                        <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg className="social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                        <a href="https://www.linkedin.com/in/akhilesh-mathyal-53538b23a" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
                        <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg className="social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
