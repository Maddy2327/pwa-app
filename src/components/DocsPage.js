import React from 'react';

function DocsPage({ openContactModal }) {
  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <main className="content-area" style={{ padding: '50px', minHeight: 'calc(100vh - 120px)' }}>
      <section id="docs">
        <h2>API Documentation</h2>
        <p>RapidAlGO's API documentation provides detailed instructions and examples to help you integrate our stock market data into your applications seamlessly.</p>
        <p>Find endpoints, authentication guides, rate limits, and sample code snippets to get you started quickly.</p>
        <p>We support RESTful APIs with JSON responses and provide SDKs for multiple programming languages.</p>
        <button className="btn" onClick={() => openContactModal()}>Talk to an Expert</button>
      </section>
    </main>
  );
}

export default DocsPage;