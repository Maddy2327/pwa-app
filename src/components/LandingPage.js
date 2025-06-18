import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
// import companyLogo from './assets/logo.svg'; // Path to your logo for the hero section

// This LandingPage component should NOT have its own navbar.
// The main App.js renders the global navbar, and this component's content will appear below it.

function LandingPage({ openContactModal }) { // Ensure openContactModal is passed if used
  return (
    // The 'content-area' class from App.css provides general page styling and background.
    // 'landing-page' class will contain specific layout and element styles for this page.
    <main className="content-area landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="announcement">
            {/* This button is for a small announcement; it doesn't need to navigate directly */}
            <button className="create-api-small">What's new</button>
            {/* External link for the announcement */}
            <a href="https://example.com/benzinga-analyst-ratings" target="_blank" rel="noopener noreferrer" className="announcement-link">Benzinga Analyst Ratings and Earnings APIs</a>
          </div>

          <h1>
            Modernizing <span className="blue-text">Wall St.</span> one market at a time.
          </h1>

          <p>
            At RapidAIGO, we're on a mission to modernize the financial industry.
            We believe the industry runs on old tech — and we’re here to fix that.
          </p>

          <div className="hero-buttons">
            {/* The 'Talk to an Expert' functionality from App.js via openContactModal */}
            <button className="btn primary-btn" onClick={() => openContactModal('Create API Key Request')}>Create API Key</button>
            {/* Use Link for internal navigation to the /docs page */}
            <Link to="/docs" className="view-docs-link">View our API docs →</Link>
          </div>
        </div>
        {/* Optional: You can add a visual element to your hero section here */}
        {/* <div className="hero-image">
          <img src={companyLogo} alt="AI Finance Concept" className="animated-logo" />
        </div> */}
      </section>

      {/* Additional sections for features, testimonials, etc. can go here */}
      <section className="features-overview">
        <h2>Why RapidAIGO?</h2>
        <div className="features-grid">
            <div className="feature-card">
                <h3>Real-time Data</h3>
                <p>Access live stock prices, market data, and financial news as it happens.</p>
            </div>
            <div className="feature-card">
                <h3>AI-Driven Insights</h3>
                <p>Leverage advanced algorithms for sentiment analysis and predictive trends.</p>
            </div>
            <div className="feature-card">
                <h3>Scalable APIs</h3>
                <p>Robust and reliable APIs designed for high-performance applications.</p>
            </div>
            <div className="feature-card">
                <h3>Customizable Solutions</h3>
                <p>Tailor our data feeds to fit your unique business or individual needs.</p>
            </div>
        </div>
      </section>

      <section className="cta-section">
          <h2>Ready to Transform Your Financial Decisions?</h2>
          <p>Join the growing number of businesses and individuals who trust RapidAIGO for their market intelligence.</p>
          <button className="btn primary-btn" onClick={() => openContactModal('Get Started CTA')}>Get Started Now</button>
      </section>

    </main>
  );
}

export default LandingPage;
