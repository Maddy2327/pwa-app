import React from 'react';

function PricingPage({ openContactModal }) {
  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <main className="content-area" style={{ padding: '50px', minHeight: 'calc(100vh - 120px)', textAlign: 'center' }}>
      <section id="pricing">
        <h2>Pricing Plans</h2>
        <p>Select the perfect plan that fits your needs and start building your financial applications today.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
          {['Free', 'Basic', 'Standard', 'Premium'].map((plan, index) => (
            <div className="card" key={index} style={{
                // Removed hardcoded backgroundColor. Rely on App.css variables or specific classes.
                border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', margin: '10px',
                backgroundColor: 'var(--card-bg)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', // Use CSS variables
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
                minWidth: '200px', maxWidth: '250px'
            }}>
              <h4>{plan}</h4>
              <div className="price" style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>
                  {plan === 'Free' ? '$0' : `$${index * 50 + 29}`}<span style={{ fontSize: '0.5em' }}> / month</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0', textAlign: 'left' }}>
                <li>Sample Feature 1</li>
                <li>Sample Feature 2</li>
              </ul>
              <button className="btn select-plan" onClick={() => openContactModal(plan)} style={{
                  padding: '10px 20px', backgroundColor: '#007bff', color: 'white',
                  border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: 'auto'
              }}>Choose {plan}</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PricingPage;
