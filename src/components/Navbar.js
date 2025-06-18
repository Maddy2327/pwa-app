import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBell, FaLightbulb, FaProjectDiagram, FaRobot, FaBook, FaNewspaper, FaBriefcase, FaRoad, FaEnvelope, FaGraduationCap, FaUser, FaQuestionCircle } from 'react-icons/fa';
import '../assets/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const rootEl = document.documentElement;

    const setTheme = (theme) => {
      rootEl.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (themeToggleBtn) {
      themeToggleBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
      themeToggleBtn.onclick = () => {
        const currentTheme = rootEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        themeToggleBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      };
    }

    return () => {
      if (themeToggleBtn) {
        themeToggleBtn.onclick = null;
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (openDropdown) setOpenDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span className="black">RAPID</span>
        <span className="blue">AIGO</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <div
          className="nav-item"
          onMouseEnter={() => handleDropdownToggle('individual')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="nav-item-label">Individual <span className="dropdown-icon">▼</span></span>
          {openDropdown === 'individual' && (
            <div className="dropdown-menu">
              <Link to="/wave-rider" className="dropdown-card">
                <FaChartLine className="card-icon" />
                <div className="card-content">
                  <strong>Wave Rider</strong>
                  <p>Algo trading solution for all traders.</p>
                </div>
              </Link>
              <Link to="/tide-alert" className="dropdown-card">
                <FaBell className="card-icon" />
                <div className="card-content">
                  <strong>Tide Alert</strong>
                  <p>Stay updated.</p>
                </div>
              </Link>
              <Link to="/stocatalyst" className="dropdown-card">
                <FaLightbulb className="card-icon" />
                <div className="card-content">
                  <strong>Stocatalyst</strong>
                  <p>Analyze stocks efficiently.</p>
                </div>
              </Link>
              <Link to="/intrikate" className="dropdown-card">
                <FaProjectDiagram className="card-icon" />
                <div className="card-content">
                  <strong>IntriKate</strong>
                  <p>Deep financial data.</p>
                </div>
              </Link>
              <Link to="/portfolio-bot" className="dropdown-card">
                <FaRobot className="card-icon" />
                <div className="card-content">
                  <strong>Portfolio Bot</strong>
                  <p>Automate your portfolio.</p>
                </div>
              </Link>
              <Link to="/tutorials" className="dropdown-card">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Tutorials</strong>
                  <p>Step by step guides.</p>
                </div>
              </Link>
              <Link to="/general-news" className="dropdown-card">
                <FaNewspaper className="card-icon" />
                <div className="card-content">
                  <strong>General News</strong>
                  <p>General financial news.</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleDropdownToggle('blog')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="nav-item-label">Blog</span>
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleDropdownToggle('company')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="nav-item-label">Company <span className="dropdown-icon">▼</span></span>
          {openDropdown === 'company' && (
            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-card">
                <FaBriefcase className="card-icon" />
                <div className="card-content">
                  <strong>About RapidAI Go</strong>
                  <p>Who we are?</p>
                </div>
              </Link>
              <Link to="/roadmap" className="dropdown-card">
                <FaRoad className="card-icon" />
                <div className="card-content">
                  <strong>Roadmap</strong>
                  <p>Keep track and pick what's coming.</p>
                </div>
              </Link>
              <Link to="/careers" className="dropdown-card">
                <FaGraduationCap className="card-icon" />
                <div className="card-content">
                  <strong>Careers</strong>
                  <p>See open roles and join us.</p>
                </div>
              </Link>
              <Link to="/contact" className="dropdown-card">
                <FaEnvelope className="card-icon" />
                <div className="card-content">
                  <strong>Contact</strong>
                  <p>Connect with our team.</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleDropdownToggle('docs')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="nav-item-label">Docs <span className="dropdown-icon">▼</span></span>
          {openDropdown === 'docs' && (
            <div className="dropdown-menu">
              <Link to="/documentation" className="dropdown-card">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Documentation</strong>
                  <p>Comprehensive guides.</p>
                </div>
              </Link>
              <Link to="/tutorials" className="dropdown-card">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Tutorials</strong>
                  <p>Step-by-step instructions.</p>
                </div>
              </Link>
              <Link to="/api-status" className="dropdown-card">
                <FaChartLine className="card-icon" />
                <div className="card-content">
                  <strong>API Status</strong>
                  <p>Real-time service health.</p>
                </div>
              </Link>
              <Link to="/knowledge-base" className="dropdown-card">
                <FaQuestionCircle className="card-icon" />
                <div className="card-content">
                  <strong>Knowledge Base</strong>
                  <p>General Q&A and support articles.</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleDropdownToggle('pricing')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="nav-item-label">Pricing <span className="dropdown-icon">▼</span></span>
          {openDropdown === 'pricing' && (
            <div className="dropdown-menu">
              <Link to="/individual-pricing" className="dropdown-card">
                <FaUser className="card-icon" />
                <div className="card-content">
                  <strong>Individual Pricing</strong>
                  <p>Affordable plans for individuals.</p>
                </div>
              </Link>
              <Link to="/educational-pricing" className="dropdown-card">
                <FaGraduationCap className="card-icon" />
                <div className="card-content">
                  <strong>Educational Pricing</strong>
                  <p>Special plans for Educational Institutions.</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="auth-buttons">
        <Link to="/login">
          <button className="auth-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-btn">Sign Up</button>
        </Link>
        <button id="themeToggleBtn" aria-label="Toggle theme"></button>
      </div>

      <div
        className="hamburger-icon"
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <FaBell /> {/* Using FaBell as a placeholder; adjust if needed */}
      </div>

      {menuOpen && (
        <div className="hamburger-menu-expanded">
          <div
            className="nav-item-mobile"
            onClick={() => handleDropdownToggle('individual')}
            role="button"
            aria-expanded={openDropdown === 'individual'}
            aria-label="Individual menu"
          >
            Individual
          </div>
          {openDropdown === 'individual' && (
            <div className="dropdown-menu-mobile">
              <Link to="/wave-rider" className="dropdown-card-mobile">
                <FaChartLine className="card-icon" />
                <div className="card-content">
                  <strong>Wave Rider</strong>
                  <p>Algo trading solution for all traders.</p>
                </div>
              </Link>
              <Link to="/tide-alert" className="dropdown-card-mobile">
                <FaBell className="card-icon" />
                <div className="card-content">
                  <strong>Tide Alert</strong>
                  <p>Stay updated.</p>
                </div>
              </Link>
              <Link to="/stocatalyst" className="dropdown-card-mobile">
                <FaLightbulb className="card-icon" />
                <div className="card-content">
                  <strong>Stocatalyst</strong>
                  <p>Analyze stocks efficiently.</p>
                </div>
              </Link>
              <Link to="/intrikate" className="dropdown-card-mobile">
                <FaProjectDiagram className="card-icon" />
                <div className="card-content">
                  <strong>IntriKate</strong>
                  <p>Deep financial data.</p>
                </div>
              </Link>
              <Link to="/portfolio-bot" className="dropdown-card-mobile">
                <FaRobot className="card-icon" />
                <div className="card-content">
                  <strong>Portfolio Bot</strong>
                  <p>Automate your portfolio.</p>
                </div>
              </Link>
              <Link to="/tutorials" className="dropdown-card-mobile">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Tutorials</strong>
                  <p>Step by step guides.</p>
                </div>
              </Link>
              <Link to="/general-news" className="dropdown-card-mobile">
                <FaNewspaper className="card-icon" />
                <div className="card-content">
                  <strong>General News</strong>
                  <p>General financial news.</p>
                </div>
              </Link>
            </div>
          )}

          <div
            className="nav-item-mobile"
            onClick={() => handleDropdownToggle('company')}
            role="button"
            aria-expanded={openDropdown === 'company'}
            aria-label="Company menu"
          >
            Company
          </div>
          {openDropdown === 'company' && (
            <div className="dropdown-menu-mobile">
              <Link to="/about" className="dropdown-card-mobile">
                <FaBriefcase className="card-icon" />
                <div className="card-content">
                  <strong>About RapidAI Go</strong>
                  <p>Who we are?</p>
                </div>
              </Link>
              <Link to="/roadmap" className="dropdown-card-mobile">
                <FaRoad className="card-icon" />
                <div className="card-content">
                  <strong>Roadmap</strong>
                  <p>Keep track and pick what's coming.</p>
                </div>
              </Link>
              <Link to="/careers" className="dropdown-card-mobile">
                <FaGraduationCap className="card-icon" />
                <div className="card-content">
                  <strong>Careers</strong>
                  <p>See open roles and join us.</p>
                </div>
              </Link>
              <Link to="/contact" className="dropdown-card-mobile">
                <FaEnvelope className="card-icon" />
                <div className="card-content">
                  <strong>Contact</strong>
                  <p>Connect with our team.</p>
                </div>
              </Link>
            </div>
          )}

          <div
            className="nav-item-mobile"
            onClick={() => handleDropdownToggle('docs')}
            role="button"
            aria-expanded={openDropdown === 'docs'}
            aria-label="Docs menu"
          >
            Docs
          </div>
          {openDropdown === 'docs' && (
            <div className="dropdown-menu-mobile">
              <Link to="/documentation" className="dropdown-card-mobile">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Documentation</strong>
                  <p>Comprehensive guides.</p>
                </div>
              </Link>
              <Link to="/tutorials" className="dropdown-card-mobile">
                <FaBook className="card-icon" />
                <div className="card-content">
                  <strong>Tutorials</strong>
                  <p>Step-by-step instructions.</p>
                </div>
              </Link>
              <Link to="/api-status" className="dropdown-card-mobile">
                <FaChartLine className="card-icon" />
                <div className="card-content">
                  <strong>API Status</strong>
                  <p>Real-time service health.</p>
                </div>
              </Link>
              <Link to="/knowledge-base" className="dropdown-card-mobile">
                <FaQuestionCircle className="card-icon" />
                <div className="card-content">
                  <strong>Knowledge Base</strong>
                  <p>General Q&A and support articles.</p>
                </div>
              </Link>
            </div>
          )}

          <div
            className="nav-item-mobile"
            onClick={() => handleDropdownToggle('pricing')}
            role="button"
            aria-expanded={openDropdown === 'pricing'}
            aria-label="Pricing menu"
          >
            Pricing
          </div>
          {openDropdown === 'pricing' && (
            <div className="dropdown-menu-mobile">
              <Link to="/individual-pricing" className="dropdown-card-mobile">
                <FaUser className="card-icon" />
                <div className="card-content">
                  <strong>Individual Pricing</strong>
                  <p>Affordable plans for individuals.</p>
                </div>
              </Link>
              <Link to="/educational-pricing" className="dropdown-card-mobile">
                <FaGraduationCap className="card-icon" />
                <div className="card-content">
                  <strong>Educational Pricing</strong>
                  <p>Special plans for Educational Institutions.</p>
                </div>
              </Link>
            </div>
          )}

          <div className="hamburger-auth-buttons">
            <Link to="/login">
              <button className="auth-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="auth-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;