import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Your existing CSS for layout and styling

// ====================================================================
// PAGE COMPONENTS - Import them here
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BusinessPage from './components/BusinessPage';
import IndividualsPage from './components/IndividualsPage';
import PricingPage from './components/PricingPage';
import DocsPage from './components/DocsPage'; // This is your main API Documentation section
// ====================================================================

function App() {
  // State for custom alert/message modal (for form submission success/error)
  const [messageModalActive, setMessageModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // State for the main contact form modal (the "Talk to an Expert" modal)
  const [contactModalActive, setContactModalActive] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(''); // To display which plan was selected in the modal

  // NEW STATE: State to control mobile navigation menu visibility
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  // Function to show custom message modal (after form submission)
  const showMessageModal = (message) => {
    setModalMessage(message);
    setMessageModalActive(true);
  };

  // Function to close custom message modal
  const closeMessageModal = () => {
    setMessageModalActive(false);
    setModalMessage('');
  };

  // Function to open the main contact modal (passed as prop to page components)
  const openContactModal = (plan = '') => {
    setSelectedPlan(plan); // Set selected plan if coming from pricing, otherwise empty
    setContactModalActive(true); // Activate the contact modal
  };

  // Function to close the main contact modal
  const closeContactModal = () => {
    setContactModalActive(false); // Deactivate the contact modal
    setSelectedPlan(''); // Clear selected plan
    // Reset the form if needed (we're still using DOM manipulation for this for simplicity)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.reset();
    }
  };

  // Function to close the mobile navigation menu
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  useEffect(() => {
    // --- Theme Toggle Logic ---
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

    // --- Cleanup for Hamburger Menu (removed direct DOM manipulation for menu state) ---
    // The hamburger click handler will now directly update `isNavMenuOpen` state,
    // so no need for an event listener here anymore for toggling 'active' class on navMenu.
    // The link click handlers will also update state directly.

    // Cleanup for theme toggle
    return () => {
      if (themeToggleBtn) {
        themeToggleBtn.onclick = null;
      }
    };
  }, []); // Runs once on mount


  useEffect(() => {
    // --- Contact Form Submission Logic ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      const handleSubmit = (e) => {
        e.preventDefault();
        showMessageModal(`Thank you, ${contactForm.name.value}! We will contact you soon.`);
        closeContactModal();
      };
      contactForm.addEventListener('submit', handleSubmit);

      return () => {
        contactForm.removeEventListener('submit', handleSubmit);
      };
    }
  }, [showMessageModal, closeContactModal]);


  return (
    <Router>
      <div className="App">
        {/* ====================================================== */}
        {/* Header/Navbar - Use Link for internal navigation */}
        <nav>
          <h1>RapidAIGO</h1>
          {/* Hamburger button now toggles isNavMenuOpen state */}
          <button className="hamburger" aria-label="Toggle menu" onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>☰</button>
          {/* Nav menu class is now conditional based on isNavMenuOpen state */}
          <ul className={`nav-menu ${isNavMenuOpen ? 'active' : ''}`}>
            {/* Each Link now calls closeNavMenu to hide the menu */}
            <li><Link to="/business" className="nav-link" onClick={closeNavMenu}>Business</Link></li>
            <li><Link to="/individuals" className="nav-link" onClick={closeNavMenu}>Individuals</Link></li>
            <li><Link to="/pricing" className="nav-link" onClick={closeNavMenu}>Pricing</Link></li>
            <li><Link to="/docs" className="nav-link" onClick={closeNavMenu}>Docs</Link></li>
            {/* START: NEW structure for mobile-only auth buttons */}
            {/* This single LI will be a flex container on mobile to arrange buttons horizontally */}
            <li className="mobile-only mobile-auth-container">
              <Link to="/login" className="btn menu-login" onClick={closeNavMenu}>Log in</Link>
              <Link to="/signup" className="btn menu-signup" onClick={closeNavMenu}>Sign up</Link>
            </li>
            {/* END: NEW structure for mobile-only auth buttons */}
          </ul>
          {/* Desktop auth buttons (will be hidden on mobile by CSS) */}
          <div className="desktop-auth">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Signup</Link>
          </div>
          <button className="theme-toggle" id="themeToggleBtn">🌙</button>
        </nav>
        {/* ====================================================== */}


        {/* ====================================================== */}
        {/* Main Content Area - Routes render components here */}
        <Routes>
          {/* Pass openContactModal function as a prop to these components */}
          <Route path="/" element={<DocsPage openContactModal={openContactModal} />} />
          <Route path="/docs" element={<DocsPage openContactModal={openContactModal} />} />

          <Route path="/business" element={<BusinessPage openContactModal={openContactModal} />} />
          <Route path="/individuals" element={<IndividualsPage openContactModal={openContactModal} />} />
          <Route path="/pricing" element={<PricingPage openContactModal={openContactModal} />} />

          {/* Login and Signup pages do not need the openContactModal prop */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Catch-all for 404 Not Found */}
          <Route path="*" element={
            <div className="content-area" style={{ padding: '50px', textAlign: 'center', minHeight: 'calc(100vh - 120px)' }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
        {/* ====================================================== */}


        {/* ====================================================== */}
        {/* Contact Modal (Visibility controlled by contactModalActive state) */}
        {contactModalActive && ( // Render only if contactModalActive is true
          <div id="contactModal" className="active" role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={(e) => {
            // Only close if clicking on the background overlay, not the modal content itself
            if (e.target.id === 'contactModal') {
              closeContactModal();
            }
          }}>
            <div className="modal-content">
              <button className="close-btn" aria-label="Close contact form" onClick={closeContactModal}>&times;</button>
              <h3 id="modalTitle">Contact Us</h3>
              <p id="selectedPlanText" style={{ fontWeight: 600, marginBottom: 10 }}>
                {selectedPlan ? `You selected the "${selectedPlan}" plan.` : ''} {/* Display selected plan */}
              </p>
              <form id="contactForm">
                <input type="text" id="name" name="name" placeholder="Your Full Name" required autoComplete="name" />
                <input type="email" id="email" name="email" placeholder="Your Email" required autoComplete="email" />
                <input type="tel" id="phone" name="phone" placeholder="Phone Number (optional)" autoComplete="tel" />
                <textarea id="message" name="message" placeholder="Your message or questions" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
        {/* ====================================================== */}

        {/* Custom Message Modal (for replacing alert) */}
        {messageModalActive && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div style={{
              backgroundColor: '#333', padding: '30px', borderRadius: '8px',
              color: 'white', textAlign: 'center', maxWidth: '400px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              <p>{modalMessage}</p>
              <button onClick={closeMessageModal} style={{
                marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff',
                color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'
              }}>Close</button>
            </div>
          </div>
        )}

        {/* ====================================================== */}
        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: 20, borderTop: '1px solid var(--border)' }}>
          © 2025 RapidAlGO. All rights reserved.
        </footer>
        {/* ====================================================== */}

      </div>
    </Router>
  );
}

export default App;
