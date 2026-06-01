const ndtMethods = [
  {
    code: 'UT',
    title: 'Ultrasonic Testing',
    desc: 'Detection of internal flaws and weld defects using high-frequency sound waves, including standard and phased-array techniques.',
  },
  {
    code: 'RT',
    title: 'Radiographic Examination',
    desc: 'Digital and conventional radiography (CR/DR) for volumetric inspection of welds, castings, and pressure components.',
  },
  {
    code: 'MT',
    title: 'Magnetic Particle Testing',
    desc: 'Detection of surface and near-surface material separations in ferromagnetic materials such as weld joints and structural steel.',
  },
  {
    code: 'PT',
    title: 'Penetrant Testing',
    desc: 'Dye penetrant testing to reveal open surface discontinuities in non-porous materials, commonly used on austenitic welds.',
  },
  {
    code: 'VT',
    title: 'Visual Testing',
    desc: 'External and internal examination by certified inspectors — the foundation of every inspection program, covering dimensional and surface checks.',
  },
  {
    code: 'AT',
    title: 'Acoustic Emission Testing',
    desc: 'Real-time detection of active defects in pressure vessels, storage tanks, and pipelines under operational or proof-test loads.',
  },
];

const NDTMethods = () => {
  return (
    <section id="ndt-methods" className="ndt-methods">
      <h2 className="section-heading light">Non-Destructive Testing (NDT) Methods</h2>
      <p className="section-subheading light" style={{ marginBottom: '30px' }}>
        All methods applied so that neither the component nor the structure is affected
        during the test — personnel certified to{' '}
        <strong style={{ color: '#00AEEF' }}>EN ISO 9712</strong>.
      </p>
      <div className="ndt-grid">
        {ndtMethods.map((method) => (
          <div className="ndt-card" key={method.code}>
            <span className="badge ndt-code">{method.code}</span>
            <h3 className="ndt-title">{method.title}</h3>
            <p className="ndt-desc">{method.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ndt-methods {
          background: #080B25;
          padding: 80px 0;
        }

        .ndt-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .ndt-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ndt-card:hover {
          border-color: #00AEEF;
          background: rgba(255, 255, 255, 0.05);
        }

        .ndt-code {
          background: #00AEEF;
          color: #0A0F2C;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 6px 16px;
          margin-bottom: 14px;
          display: inline-block;
          border-radius: 4px;
        }

        .ndt-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .ndt-desc {
          font-size: 0.88rem;
          color: #B0BEC5;
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .ndt-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ndt-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default NDTMethods;