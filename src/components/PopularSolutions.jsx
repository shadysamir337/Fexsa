const popularSolutions = [
  { label: 'ISO 9001 Certification', href: '#certification' },
  { label: 'NDT Services', href: '#ndt-methods' },
  { label: 'Pressure Equipment Testing', href: '#services' },
  { label: 'Welding Inspection', href: '#services' },
  { label: 'Remote Monitoring', href: '#services' },
  { label: 'Supplier Audits', href: '#services' },
];

const PopularSolutions = () => {
  return (
    <section className="popular-solutions">
      <h2 className="section-heading light">Popular Solutions</h2>
      <div className="popular-grid">
        {popularSolutions.map((item) => (
          <a
            href={item.href}
            className="popular-link"
            key={item.label}
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(item.href);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {item.label} →
          </a>
        ))}
      </div>

      <style jsx>{`
        .popular-solutions {
          background: #080B25;
          padding: 60px 0;
        }

        .popular-grid {
          max-width: 1200px;
          margin: 30px auto 0;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .popular-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .popular-link:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: #00AEEF;
          color: #00AEEF;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .popular-grid {
            gap: 12px;
          }

          .popular-link {
            font-size: 0.85rem;
            padding: 14px 16px;
          }
        }

        @media (max-width: 768px) {
          .popular-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .popular-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularSolutions;