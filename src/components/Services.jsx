const services = [
  {
    id: 'inspection-expediting',
    icon: '📦',
    title: 'Inspection & Expediting of Supplies',
    tags: ['Factory Acceptance Tests', 'NCR Management', 'Milestone Tracking'],
    desc: 'Manufacturing control and inspection in supplier workshops, ensuring compliance with defined requirements. We identify quality problems, raise applicable Non-Conformity reports, and complement suppliers with expediting services — verifying contractual milestones and manufacturing progress to keep your project on track.',
  },
  {
    id: 'pressure-equipment',
    icon: '⚙️',
    title: 'Pressure Equipment Acceptance Testing',
    tags: ['PED 2014/68/EU', 'ASME BPVC', 'Hydrostatic Testing'],
    desc: 'Final tests and pressure tests on pressure equipment and assemblies, including testing of safety devices. Our inspectors verify structural integrity, compliance with the Pressure Equipment Directive (PED 2014/68/EU), ASME Boiler &amp; Pressure Vessel Code, and all applicable design specifications before equipment leaves the manufacturer.',
  },
  {
    id: 'qa-qc',
    icon: '📋',
    title: 'Inspection Coordination (QA/QC)',
    tags: ['ITP Development', 'QA/QC Plans', 'Factory Audits'],
    desc: 'Full coordination of inspection activities from the manufacturing quality standpoint. We review applicable technical documentation, develop and maintain Inspection &amp; Test Plans (ITPs), coordinate inspection visits to factories and supplier workshops, and verify that both specified requirements and best industry practices are consistently met.',
  },
  {
    id: 'ndt',
    icon: '🔬',
    title: 'Non-Destructive Testing (NDT)',
    tags: ['UT / RT / MT / PT', 'Visual Inspection (VT)', 'Acoustic Emission (AT)'],
    desc: 'Full-spectrum NDT services using standard and advanced methods so that neither the component nor the construction is affected during the test procedure. Our qualified personnel apply Ultrasonic Testing (UT), Radiographic Examination (RT), Magnetic Particle Testing (MT), Penetrant Testing (PT), Visual Testing (VT), Acoustic Emission Testing (AT), and Digital Radiography (CR) in accordance with EN ISO 9712.',
  },
  {
    id: 'welding',
    icon: '🔥',
    title: 'Welding Inspection & Qualification',
    tags: ['WPS / PQR', 'AWS D1.1 / EN ISO 3834', 'Weld UT Testing'],
    desc: 'Comprehensive welding inspection services for QA/QC purposes, factory acceptance tests, and damage assessments across all construction types. We develop Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and Welder Performance Qualifications per AWS D1.1, EN ISO 3834, and ASME Section IX — and support ultrasonic testing of weld seams to verify integrity without material damage.',
  },
  {
    id: 'supplier',
    icon: '✅',
    title: 'Supplier Evaluation & Quality Advisory',
    tags: ['Supplier Audits', 'QMS Assessment', 'Final Dossiers'],
    desc: 'Thorough evaluation of supplier capabilities, quality management systems, and process controls — ensuring your supply chain meets the highest standards before commitment. We also provide industrial quality advisory services to help organizations implement robust QM frameworks: from ITP and Final Dossier preparation to specification development, procedure qualification for pressure equipment, and ongoing technical customer support.',
  },
  {
    id: 'remote-inspection',
    icon: '📡',
    title: 'Remote Inspection & Monitoring',
    tags: ['Continuous Monitoring', 'Acoustic Emission', 'Online Dashboard'],
    desc: 'Advanced remote inspection and structural health monitoring solutions for infrastructure and industrial components. Utilizing acoustic emission technology with real-time data transmission (GSM) and trend analysis, we provide continuous oversight of critical assets — enabling predictive maintenance and early failure detection without the need for on-site personnel.',
  },
  {
    id: 'damage-analysis',
    icon: '🔍',
    title: 'Damage Analysis & Failure Investigation',
    tags: ['Root Cause Analysis', 'NDT Investigation', 'Forensic Engineering'],
    desc: 'Comprehensive damage analysis and failure investigation services to determine the root causes of material defects, structural failures, and equipment malfunctions. Our team uses advanced NDT methods and metallurgical techniques to assess damage, evaluate repair effectiveness, and provide actionable recommendations to prevent recurrence.',
  },
  {
    id: 'plant-safety',
    icon: '🏭',
    title: 'Plant Safety & Risk Assessment',
    tags: ['QRA', 'Steam Boiler', 'PED Compliance'],
    desc: 'Quantitative Risk Assessment (QRA) and plant safety inspections for industrial facilities, steam boilers, pressure equipment, and processing plants. We evaluate operational risks, verify compliance with safety regulations, and recommend mitigation strategies to ensure the protection of personnel, assets, and the environment.',
  },

];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-heading">Our Expertise &amp; Inspection Services</h2>
      <p className="section-subheading">
        Trust in Safety, Progress, and Quality. We provide comprehensive, independent testing,
        inspection, and quality control services — delivered by certified professionals with decades of international experience.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div className="card service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span className="badge badge-outline" key={tag}>{tag}</span>
              ))}
            </div>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services {
          background: #ffffff;
          padding: 100px 0;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          padding: 32px;
          color: #333;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          background: #ffffff;
          border-color: #00AEEF;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-5px);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .service-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0D1B5E;
          text-transform: uppercase;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .service-tags .badge {
          font-size: 0.75rem;
          padding: 5px 12px;
          background: #F4F7FB;
          border: 1px solid #ccc;
          color: #555;
          border-radius: 4px;
          font-weight: 600;
        }

        .service-card:hover .service-tags .badge {
          border-color: #00AEEF;
          color: #00AEEF;
        }

        .service-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .services {
            padding: 40px 0;
          }

          .service-card {
            padding: 18px;
          }

          .service-icon {
            font-size: 1.5rem;
          }

          .service-title {
            font-size: 1rem;
          }

          .service-desc {
            font-size: 0.82rem;
            line-height: 1.5;
          }

          .service-tags .badge {
            font-size: 0.65rem;
            padding: 3px 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;