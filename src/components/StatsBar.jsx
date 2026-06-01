import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '12+', label: 'Countries Served' },
  { number: '500+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Focus' },
];

const StatItem = ({ number, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targetNum = parseInt(number.replace(/[^0-9]/g, ''));
    const suffix = number.replace(/[0-9]/g, '').replace(' ', '');
    const duration = 1500;
    const steps = 50;
    const increment = targetNum / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {isVisible ? count + (number.includes('+') ? '+' : number.includes('%') ? '%' : '') : '0'}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat) => (
          <StatItem key={stat.label} number={stat.number} label={stat.label} />
        ))}
      </div>

      <style jsx>{`
        .stats-bar {
          background: linear-gradient(135deg, #0D1B5E, #1A2B8A);
          border-top: 3px solid #00AEEF;
          border-bottom: 3px solid #00AEEF;
          padding: 50px 0;
          position: relative;
          z-index: 3;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 0 20px;
        }

        .stat-item {
          text-align: center;
          color: #fff;
        }

        .stat-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #B0BEC5;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
          .stats-container {
            gap: 20px;
          }

          .stat-number {
            font-size: 2.8rem;
          }

          .stat-label {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-bar {
            padding: 35px 0;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsBar;