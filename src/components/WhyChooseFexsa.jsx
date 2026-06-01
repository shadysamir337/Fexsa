const differentiators = [
  {
    num: '01',
    title: 'Independent & Impartial',
    desc: 'No conflicts of interest — we work solely in your project\'s best interest.',
  },
  {
    num: '02',
    title: 'Globally Deployed',
    desc: 'Inspectors available in key industrial hubs across Europe, Middle East, Asia, and Americas.',
  },
  {
    num: '03',
    title: 'Technical Excellence',
    desc: 'Senior engineers with advanced certifications in welding, NDT, and quality systems.',
  },
  {
    num: '04',
    title: 'Fast Response',
    desc: 'Agile mobilization of inspection teams to meet critical project timelines.',
  },
  {
    num: '05',
    title: 'Full Documentation',
    desc: 'Comprehensive reporting, ITPs, Non-Conformity reports, and final dossiers.',
  },
  {
    num: '06',
    title: 'Trusted Relationships',
    desc: 'Long-term partnerships built on transparency, honesty, and consistent results.',
  },
];

const WhyChooseFexsa = () => {
  return (
    <section id="why-fexsa" className="why-fexsa">
      <h2 className="section-heading light">Why Choose FEXSA</h2>
      <p className="section-subheading light">
        What sets us apart in the competitive world of industrial inspection and audit services.
      </p>
      <div className="why-grid">
        {differentiators.map((item) => (
          <div className="why-item" key={item.num}>
            <div className="why-number">{item.num}</div>
            <div className="why-content">
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .why-fexsa {
          background: linear-gradient(135deg, #1A2B8A, #0D1B5E);
          padding: 80px 0;
        }

        .why-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .why-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .why-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #00AEEF;
        }

        .why-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          flex-shrink: 0;
        }

        .why-content {
          flex: 1;
        }

        .why-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .why-desc {
          font-size: 0.88rem;
          color: #B0BEC5;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseFexsa;