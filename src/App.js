import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Component imports
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  // State for custom alert/message modal
  const [messageModalActive, setMessageModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // State for the main contact form modal
  const [contactModalActive, setContactModalActive] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Function to show custom message modal
  const showMessageModal = (message) => {
    setModalMessage(message);
    setMessageModalActive(true);
  };

  // Function to close custom message modal
  const closeMessageModal = () => {
    setMessageModalActive(false);
    setModalMessage('');
  };

  // Function to open the main contact modal
  const openContactModal = (plan = '') => {
    setSelectedPlan(plan);
    setContactModalActive(true);
  };

  // Function to close the main contact modal
  const closeContactModal = () => {
    setContactModalActive(false);
    setSelectedPlan('');
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.reset();
    }
  };

  useEffect(() => {
    // Theme Toggle Logic
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

  useEffect(() => {
    // Contact Form Submission Logic
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
        {/* Global Navbar for all pages */}
        <Navbar />
        
        {/* Main Page Routing */}
        <Routes>
          <Route path="/" element={<LandingPage openContactModal={openContactModal} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={
            <div className="content-area" style={{ padding: '50px', textAlign: 'center', minHeight: 'calc(100vh - 120px)' }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>

        {/* Contact Modal */}
        {contactModalActive && (
          <div id="contactModal" className="active" role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={(e) => {
            if (e.target.id === 'contactModal') {
              closeContactModal();
            }
          }}>
            <div className="modal-content">
              <button className="close-btn" aria-label="Close contact form" onClick={closeContactModal}>&times;</button>
              <h3 id="modalTitle">Contact Us</h3>
              <p id="selectedPlanText" style={{ fontWeight: 600, marginBottom: 10 }}>
                {selectedPlan ? `You selected the "${selectedPlan}" plan.` : ''}
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

        {/* Message Modal */}
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

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: 20, borderTop: '1px solid var(--border)' }}>
          © 2025 RapidAlGO. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;