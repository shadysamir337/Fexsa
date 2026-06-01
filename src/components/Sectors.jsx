const sectors = [
  {
    icon: '💧',
    name: 'Water Treatment Plants',
    specialisations: ['Effluent treatment plants', 'Desalination plants', 'Process water systems'],
  },
  {
    icon: '⚡',
    name: 'Conventional Energy',
    specialisations: ['Combined Cycles', 'Cogeneration plants', 'Internal Combustion plants'],
  },
  {
    icon: '☀️',
    name: 'Renewable Energy',
    specialisations: ['Photovoltaic plants', 'Solar Tower plants', 'Parabolic Cylinder Collector plants', 'Hybrid plants'],
  },
  {
    icon: '🛢️',
    name: 'Oil & Gas Plants',
    specialisations: ['Upstream Facilities', 'Midstream Facilities', 'Downstream Facilities'],
  },
  {
    icon: '🚗',
    name: 'Automotive Industry',
    specialisations: ['Component testing', 'Manufacturing audits', 'Supplier quality verification'],
  },
  {
    icon: '🏗️',
    name: 'Construction & Real Estate',
    specialisations: ['Building code compliance', 'Structural inspection', 'Materials testing'],
  },
  {
    icon: '🚆',
    name: 'Transport & Traffic',
    specialisations: ['Infrastructure monitoring', 'Bridge inspection', 'Rolling stock assessment'],
  },
  {
    icon: '⚙️',
    name: 'Machinery & Manufacturing',
    specialisations: ['Equipment certification', 'Process validation', 'Quality system audits'],
  },
];

const Sectors = () => {
  return (
    <section id="sectors" className="sectors">
      <h2 className="section-heading">Sectors We Serve</h2>
      <p className="section-subheading">
        At FEXSA we have extensive experience in international projects across the
        most demanding industrial sectors. Our inspectors are trained for the unique
        challenges of each domain.
      </p>
      <div className="sectors-grid">
        {sectors.map((sector) => (
          <div className="card sector-card" key={sector.name}>
            <div className="sector-icon">{sector.icon}</div>
            <h3 className="sector-name">{sector.name}</h3>
            <ul className="sector-list">
              {sector.specialisations.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .sectors {
          background: #EEF3F8;
          padding: 80px 0;
        }

        .sectors-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .sector-card {
          text-align: center;
          padding: 30px 20px;
          background: #fff;
        }

        .sector-card:hover {
          border-color: #1565C0;
          box-shadow: 0 8px 25px rgba(13, 27, 94, 0.12);
        }

        .sector-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .sector-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0D1B5E;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .sector-list {
          list-style: none;
          text-align: left;
        }

        .sector-list li {
          font-size: 0.88rem;
          color: #666;
          padding: 4px 0;
          position: relative;
          padding-left: 16px;
        }

        .sector-list li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #00AEEF;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .sectors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sectors-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Sectors;