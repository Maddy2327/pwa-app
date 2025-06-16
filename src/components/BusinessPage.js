import React from 'react';

function BusinessPage({ openContactModal }) {
  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <main className="content-area" style={{ padding: '50px', minHeight: 'calc(100vh - 120px)' }}>
      <section id="business">
        <h2>Business-Ready Market Intelligence</h2>
        <p>RapidAlGO helps businesses build high-performance trading platforms, market monitoring dashboards, and data-rich financial apps with real-time, reliable stock market data APIs.</p>
        <p>Our APIs provide access to live stock prices, historical data, news feeds, and market sentiment analysis to empower your business decisions.</p>
        <button className="btn" onClick={() => openContactModal()}>Talk to an Expert</button>
      </section>
    </main>
  );
}

export default BusinessPage;