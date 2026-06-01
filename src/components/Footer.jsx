import logoWhite from '../assets/Fexsa_Logo_White.png';

const Footer = () => {
  const serviceLinks = [
    'Inspection & Expediting',
    'Quality Technicians',
    'Welding & NDT',
    'Supplier Evaluation',
    'QA/QC Coordination',
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src={logoWhite} alt="FEXSA" className="footer-logo" />
            <p className="footer-tagline">
              FEXSA Inspection &amp; Audit Services LLC — Assuring the Quality of
              Works and Controlling it for getting the Success of Targets.
            </p>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); const el = document.querySelector('#services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@fexsa.net">info@fexsa.net</a>
              </li>
              <li className="footer-phone">(+971) 50 225 93 01</li>
              <li className="footer-phone">(+971) 52 435 02 07</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} FEXSA Inspection &amp; Audit Services LLC. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0A0A1A;
          padding: 60px 0 0;
          color: #B0BEC5;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
        }

        .footer-logo {
          height: 80px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
        }

        .footer-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-links a {
          color: #666;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #00AEEF;
        }

        .footer-phone {
          font-size: 0.9rem;
          color: #666;
          word-break: break-word;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 20px 0;
          text-align: center;
        }

        .footer-bottom p {
          font-size: 0.85rem;
          color: #555;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer {
            padding: 40px 0 0;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 0 0;
          }

          .footer-logo {
            height: 60px;
          }

          .footer-tagline {
            font-size: 0.82rem;
          }

          .footer-title {
            font-size: 0.95rem;
          }

          .footer-links a {
            font-size: 0.82rem;
          }

          .footer-phone {
            font-size: 0.82rem;
          }

          .footer-bottom p {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;