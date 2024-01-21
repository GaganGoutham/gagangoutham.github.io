// client/src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './js/Home';
import WorkExperience from './js/WorkExperience';
import Blog from './js/Blog';
import Publications from './js/Publications';
import Updates from './js/Updates';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/workexperience" element={<WorkExperienceSection />} />
          <Route path="/publications" element={<PublicationsSection />} />
          <Route path="/updates" element={<UpdatesSection />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function NavBar() {
  const [isHomePage, setIsHomePage] = React.useState(true);

  const toggleMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show');
  };

  const closeMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.remove('show');
  };

  React.useEffect(() => {
    const homeSection = document.querySelector('.home-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsHomePage(entry.isIntersecting);
      });
    });

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <nav className={`section-navigation ${isHomePage ? 'home-page' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Gagan Goutham
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="menu-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/workexperience" onClick={closeMenu}>
            Work Experience
          </Link>
          <Link to="/publications" onClick={closeMenu}>
            Publications
          </Link>
          <Link to="/updates" onClick={closeMenu}>
            Updates
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <a
            href="https://drive.google.com/file/d/1AZdKX30RiKvmqK3YswZatjTHM3nIfy8Z/view?usp=sharing"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}

function HomeSection() {
  return (
    <section className="home-section">
      <Home />
    </section>
  );
}

function WorkExperienceSection() {
  return (
    <section className="workexperience-section">
      <WorkExperience />
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="publications-section">
      <Publications />
    </section>
  );
}

function UpdatesSection() {
  return (
    <section className="updates-section">
      <Updates />
    </section>
  );
}

function BlogSection() {
  return (
    <section className="blog-section">
      <Blog />
    </section>
  );
}
