import logoColored from '../assets/Fexsa_Logo_Colored.png';

const valueCards = [
  { icon: '🎯', title: 'Precision-Focused', desc: 'Every inspection conducted with meticulous attention to compliance, standards, and client requirements.' },
  { icon: '🌍', title: 'International Reach', desc: 'Operations spanning multiple continents with qualified inspectors deployed globally.' },
  { icon: '🤝', title: 'Client-Centric', desc: 'Close, trusting relationships maintained through transparent communication and technical excellence.' },
  { icon: '🏅', title: 'Certified Professionals', desc: 'Specialized, qualified personnel certified in welding, NDT, and industrial quality systems.' },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <img src={logoColored} alt="FEXSA" className="about-logo" />
          <h2 className="section-heading" style={{ textAlign: 'left' }}>Who We Are</h2>
          <p className="about-text">
            FEXSA Inspection &amp; Audit Services LLC is an independent Quality and
            Inspection Services company with a clear focus and international reach.
            We have a team made up of the best professionals in the sector, which
            allows us to offer dynamic, client-oriented services with high technical focus.
          </p>
          <p className="about-text">
            Our team of professionals are specialized, qualified, and committed to the
            project — always maintaining a close and trusting relationship with the client.
            We provide Industrial Quality Advisory Services, Inspection Services,
            Expediting, Supplier Evaluation, Preparation of Welding Specifications, and more.
          </p>
          <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Talk to Our Team →
          </a>
        </div>
        <div className="about-right">
          <div className="value-cards-grid">
            {valueCards.map((card) => (
              <div className="card value-card" key={card.title}>
                <div className="value-icon">{card.icon}</div>
                <h3 className="value-title">{card.title}</h3>
                <p className="value-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: #F4F7FB;
          padding: 80px 0;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .about-logo {
          height: 45px;
          margin-bottom: 20px;
        }

        .about-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-left .btn {
          margin-top: 10px;
        }

        .value-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .value-card {
          text-align: center;
          padding: 24px 16px;
          background: #fff;
        }

        .value-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .value-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0D1B5E;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .value-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .value-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .value-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;