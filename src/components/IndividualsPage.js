import React from 'react';

function IndividualsPage({ openContactModal }) {
  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <main className="content-area" style={{ padding: '50px', minHeight: 'calc(100vh - 120px)' }}>
      <section id="individuals">
        <h2>Empowering Individuals</h2>
        <p>Whether you are a trader, investor, or financial enthusiast, RapidAlGO delivers the data you need to make informed decisions.</p>
        <p>Use our APIs to track your favorite stocks, build personalized dashboards, and receive alerts tailored to your portfolio.</p>
        <button className="btn" onClick={() => openContactModal()}>Talk to an Expert</button>
      </section>
    </main>
  );
}

export default IndividualsPage;