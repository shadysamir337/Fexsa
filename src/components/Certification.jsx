const certifications = [
  {
    icon: '📜',
    title: 'ISO 9001 Quality Management',
    desc: 'Comprehensive audit and certification support for ISO 9001 quality management systems, helping organizations implement robust QM frameworks that meet international standards.',
  },
  {
    icon: '🌿',
    title: 'ISO 14001 Environmental Management',
    desc: 'Guidance and assessment for ISO 14001 environmental management system certification, enabling companies to demonstrate environmental responsibility and regulatory compliance.',
  },
  {
    icon: '👤',
    title: 'Product & Personnel Certification',
    desc: 'Independent verification of product conformity and personnel competencies — ensuring that both manufactured goods and certified professionals meet required specifications.',
  },
  {
    icon: '✓',
    title: 'Verification of Conformity',
    desc: 'Third-party verification that persons, systems, and products comply with applicable directives, standards, and contractual requirements throughout the supply chain.',
  },
];

const standards = [
  'ISO 9001', 'EN ISO 9712', 'ASME BPVC', 'API 570/653', 'EN ISO 3834', 'PED 2014/68/EU',
];

const Certification = () => {
  return (
    <section id="certification" className="certification">
      <h2 className="section-heading light">Certification & Compliance Services</h2>
      <p className="section-subheading light">
        Independent verification and certification support across quality, environmental,
        and product standards — backed by international accreditations.
      </p>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="card cert-card" key={cert.title}>
            <div className="cert-icon">{cert.icon}</div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-desc">{cert.desc}</p>
          </div>
        ))}
      </div>
      <div className="standards-bar">
        {standards.map((std) => (
          <span className="badge" key={std}>{std}</span>
        ))}
      </div>

      <style jsx>{`
        .certification {
          background: #0D1B5E;
          padding: 80px 0;
        }

        .cert-grid {
          max-width: 1200px;
          margin: 0 auto 40px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cert-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          padding: 28px 18px;
          color: #fff;
        }

        .cert-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #00AEEF;
        }

        .cert-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .cert-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .cert-desc {
          font-size: 0.85rem;
          color: #B0BEC5;
          line-height: 1.55;
        }

        .standards-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .standards-bar .badge {
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
          font-size: 0.85rem;
          padding: 8px 18px;
        }

        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .certification {
            padding: 40px 0;
          }

          .cert-card {
            padding: 18px 12px;
          }

          .cert-icon {
            font-size: 1.5rem;
          }

          .cert-title {
            font-size: 0.9rem;
          }

          .cert-desc {
            font-size: 0.78rem;
          }

          .standards-bar .badge {
            font-size: 0.75rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Certification;