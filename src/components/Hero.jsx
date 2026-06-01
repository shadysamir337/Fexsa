import logoWhite from '../assets/Fexsa_Logo_White.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>Independent Quality &amp; Inspection Services</span>
        </div>
        <h1 className="hero-title">
          Assuring the Quality
          <br />
          <span className="hero-highlight">of Works &amp; Controlling It</span>
          <br />
          for Success of Targets
        </h1>
        <p className="hero-text">
          FEXSA Inspection &amp; Audit Services LLC is an independent quality and
          inspection company with clear focus and international reach — serving
          energy, oil &amp; gas, and water treatment industries worldwide.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#services').scrollIntoView({ behavior: 'smooth' }); }}>
            Our Services
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-logo-watermark">
        <img src={logoWhite} alt="FEXSA" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0A0F2C 0%, #0D1B5E 50%, #0A0F2C 100%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(0, 174, 239, 0.08) 0%, transparent 60%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          text-align: center;
          padding: 0 20px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          border-radius: 30px;
          margin-bottom: 30px;
        }

        .hero-badge span {
          color: #00AEEF;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .hero-highlight {
          color: #00AEEF;
        }

        .hero-text {
          font-size: 1.15rem;
          color: #B0BEC5;
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-logo-watermark {
          position: absolute;
          bottom: 40px;
          right: 40px;
          opacity: 0.06;
          z-index: 1;
        }

        .hero-logo-watermark img {
          width: 200px;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-text {
            font-size: 1rem;
          }

          .hero-logo-watermark {
            bottom: 20px;
            right: 20px;
          }

          .hero-logo-watermark img {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-badge span {
            font-size: 0.7rem;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;