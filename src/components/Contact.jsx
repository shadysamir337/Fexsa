import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_kfkojse';
const EMAILJS_TEMPLATE_ID = 'template_y376u63';
const EMAILJS_PUBLIC_KEY = 'f1AEnGOz1Kikqir5a';

const Contact = () => {
  const [form, setForm] = useState({
    subject: '',
    name: '',
    email: '',
    mobile: '',
    details: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.details.trim()) newErrors.details = 'Details are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subject: form.subject,
          from_name: form.name,
          reply_to: form.email,
          mobile: form.mobile || 'Not provided',
          message: form.details,
          to_email: 'shadysamir337@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'info@fexsa.net',
      href: 'mailto:info@fexsa.net',
      icon: '✉️',
    },
    {
      label: 'Phone / WhatsApp',
      value: '(+971) 50 225 93 01',
      href: 'tel:+971502259301',
      icon: '📱',
    },
    {
      label: 'Phone 2',
      value: '(+971) 52 435 02 07',
      href: 'tel:+971524350207',
      icon: '📱',
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="section-heading light">Get In Touch</h2>
      <p className="section-subheading light">
        Ready to ensure the quality of your next project? Reach out to our team of
        specialists and we will get back to you promptly.
      </p>
      <div className="contact-grid">
        {/* Contact Info Panel */}
        <div className="contact-info">
          <h3 className="contact-info-title">Contact Details</h3>
          <div className="contact-info-list">
            {contactInfo.map((item) => (
              <a href={item.href} className="contact-info-item" key={item.label}>
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h3 className="contact-form-title">Send Us a Message</h3>
          {status === 'sent' ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
              <button className="btn btn-primary" onClick={() => { setStatus('idle'); setForm({ subject: '', name: '', email: '', mobile: '', details: '' }); setErrors({}); }}>
                Send Another Message
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="form-error">
              <div className="error-icon">!</div>
              <h4>Something Went Wrong</h4>
              <p>We couldn't send your message. Please try again or contact us directly at info@fexsa.net.</p>
              <button className="btn btn-primary" onClick={() => { setStatus('idle'); setErrors({}); }}>
                Try Again
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Inspection services inquiry"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="details">Details *</label>
                <textarea
                  id="details"
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry in detail…"
                  rows="6"
                  className={errors.details ? 'error' : ''}
                ></textarea>
                {errors.details && <span className="error-text">{errors.details}</span>}
              </div>

              <button type="submit" className="btn-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Submit Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: #0A0F2C;
          padding: 80px 0;
        }

        .contact-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: start;
        }

        /* Contact Info */
        .contact-info {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 30px;
        }

        .contact-info-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-info-item {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          transition: background 0.3s ease;
        }

        .contact-info-item:hover {
          background: rgba(0, 174, 239, 0.1);
        }

        .contact-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 0.75rem;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .contact-value {
          color: #fff;
          font-size: 1rem;
          margin-top: 2px;
          word-break: break-word;
        }

        /* Contact Form */
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 30px;
        }

        .contact-form-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field.full-width {
          grid-column: 1 / -1;
        }

        .form-field label {
          color: #B0BEC5;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .form-field input,
        .form-field textarea {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          padding: 12px 14px;
          color: #fff;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: #00AEEF;
          outline: none;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(176, 190, 197, 0.5);
        }

        .form-field input.error,
        .form-field textarea.error {
          border-color: #ff4444;
        }

        .error-text {
          color: #ff4444;
          font-size: 0.8rem;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form .btn-submit {
          grid-column: 1 / -1;
        }

        /* Success State */
        .form-success,
        .form-error {
          text-align: center;
          padding: 40px 20px;
          color: #fff;
        }

        .success-icon,
        .error-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .success-icon {
          background: #00AEEF;
          color: #0A0F2C;
        }

        .error-icon {
          background: #ff4444;
          color: #fff;
        }

        .form-success h4,
        .form-error h4 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .form-success p,
        .form-error p {
          color: #B0BEC5;
          margin-bottom: 24px;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact {
            padding: 40px 0;
          }

          .contact-info,
          .contact-form-wrapper {
            padding: 18px;
          }

          .contact-info-title,
          .contact-form-title {
            font-size: 1.1rem;
          }

          .contact-info-item {
            padding: 10px;
            gap: 10px;
          }

          .contact-icon {
            font-size: 1.2rem;
          }

          .contact-value {
            font-size: 0.85rem;
          }

          .form-field input,
          .form-field textarea {
            padding: 10px 12px;
            font-size: 0.9rem;
          }

          .form-field label {
            font-size: 0.78rem;
          }

          .form-field textarea {
            min-height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;