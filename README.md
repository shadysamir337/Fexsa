# FEXSA Inspection & Audit Services LLC — Website

> **Assuring the Quality of Works and Controlling it for getting the Success of Targets**

A modern, professional single-page React website for FEXSA Inspection & Audit Services LLC — inspired by TÜV Austria's structure and styled with FEXSA's brand colors. Features 10 service cards, 8 sector cards, NDT showcase, certification services, and a fully functional contact form.

---

## 🚀 Quick Start

```bash
cd fexsa-website
npm install
npm run dev
```

Opens at `http://localhost:3000`.

---

## 📁 Project Structure

```
fexsa-website/
├── public/
│   ├── fexsa-icon.png           # Favicon (from Fexsa_Logo_Icon.png)
│   └── index.html               # Entry HTML with Google Fonts & meta tags
├── src/
│   ├── assets/
│   │   ├── Fexsa_Logo_Colored.png   # For light backgrounds (About section)
│   │   ├── Fexsa_Logo_White.png     # For dark backgrounds (Navbar, Footer)
│   │   └── Fexsa_Logo_Icon.png      # For favicon / app icon
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed nav, scroll effects, mobile hamburger
│   │   ├── Hero.jsx             # Full-viewport hero with CTA buttons
│   │   ├── StatsBar.jsx         # 4 animated KPIs (15+ yrs, 12+ countries...)
│   │   ├── About.jsx            # Company intro + 4 value-prop cards
│   │   ├── Services.jsx         # 10 service cards (6 core + 4 from TÜV Austria)
│   │   ├── NDTMethods.jsx       # 6 NDT method cards (UT, RT, MT, PT, VT, AT)
│   │   ├── Certification.jsx    # 4 certification cards + standards badges
│   │   ├── Sectors.jsx          # 8 industry sector cards
│   │   ├── WhyChooseFexsa.jsx   # 6 differentiators grid
│   │   ├── Contact.jsx          # Contact info + form (Subject, Name, Email, Mobile, Details)
│   │   ├── PopularSolutions.jsx # Quick-access badge links
│   │   └── Footer.jsx           # 4-column footer with logo, links, copyright
│   ├── styles/
│   │   └── global.css           # Brand colors, fonts, responsive breakpoints
│   ├── App.jsx                  # Main component (imports all sections)
│   └── main.jsx                 # React 18 entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Brand Colors

| Color       | Hex       | Usage                              |
|-------------|-----------|------------------------------------|
| Navy Dark   | `#0D1B5E` | Primary brand, section headings    |
| Navy        | `#1A2B8A` | Secondary backgrounds, gradients   |
| Blue        | `#1565C0` | Gradient start, CTA buttons        |
| Cyan        | `#00AEEF` | Accent, highlights, card borders   |
| Steel       | `#B0BEC5` | Subtle decorative elements         |
| Dark BG     | `#0A0F2C` | Main dark section backgrounds      |
| Off-White   | `#F4F7FB` | Light section backgrounds          |

### Typography

| Role              | Font              | Weights              |
|-------------------|-------------------|----------------------|
| Headings          | Barlow Condensed  | 600, 700, 800        |
| Body / UI         | Barlow            | 400, 500, 600, 700   |

---

## 📋 Contact Form Configuration

The contact form sends submissions to **shadysamir335@gmail.com** (test email).

### Option A — EmailJS (Recommended)

1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. Create an Email Service (e.g., Gmail, Outlook)
3. Create an Email Template with variables: `subject`, `from_name`, `reply_to`, `mobile`, `message`, `to_email`
4. Open `src/components/Contact.jsx` and update these values at the top:

```js
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';    // Your service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';  // Your template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key';    // Your public key
```

### Option B — Formspree (Alternative, No Backend)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form with endpoint `https://formspree.io/f/your_form_id`
3. In `Contact.jsx`, replace the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  setStatus('loading');
  try {
    const res = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: form.subject,
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.details,
      }),
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  } catch {
    setStatus('error');
  }
};
```

### Option C — Web3Forms (Alternative, Free)

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Replace the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  setStatus('loading');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'your_access_key',
        subject: form.subject,
        name: form.name,
        email: form.email,
        phone: form.mobile,
        message: form.details,
        to: 'shadysamir335@gmail.com',
      }),
    });
    const data = await res.json();
    if (data.success) setStatus('sent');
    else setStatus('error');
  } catch {
    setStatus('error');
  }
};
```

### Fallback — `mailto:` Link

If no backend is configured, the form falls back to opening the user's default email client with pre-filled content addressed to `shadysamir335@gmail.com`. For production, update the fallback to `info@fexsa.net`.

---

## 🖼️ Logo Usage

| Logo                    | Location                  | Background   |
|-------------------------|---------------------------|--------------|
| `Fexsa_Logo_White.png`  | Navbar, Footer            | Dark (#0A0F2C, #0A0A1A) |
| `Fexsa_Logo_Colored.png`| About section             | Light (#F4F7FB) |
| `Fexsa_Logo_Icon.png`   | Favicon (public/fexsa-icon.png) | — |

To switch logos or update paths, edit the imports in each component.

---

## 🌐 Deployment

### Vercel (Recommended — Free, Zero Config)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag & drop dist/ folder to netlify.com/drop
```

Or connect your GitHub repo for automatic CI/CD.

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes                 |
|------------|--------------------------------|
| 1200px+    | Full desktop layout            |
| 768-1024px | 3-col → 2-col grids, reduced spacing |
| <768px     | Single column, hamburger menu  |
| <480px     | Reduced font sizes, padding    |

---

## 📄 Sections Overview

| Section          | Anchor       | Content                                    |
|------------------|--------------|--------------------------------------------|
| Hero             | `#home`      | Badge, headline, CTAs                      |
| Stats Bar        | —            | 4 animated KPIs                            |
| About            | `#about`     | Company text + 4 value cards               |
| Services         | `#services`  | 10 service cards (inspection + TÜV-inspired)|
| NDT Methods      | `#ndt-methods`| 6 NDT methods with EN ISO 9712            |
| Certification    | `#certification`| 4 certification + standards badges      |
| Sectors          | `#sectors`   | 8 industry sectors                         |
| Popular Solutions| —            | 6 quick-access links                       |
| Why FEXSA        | —            | 6 differentiators                          |
| Contact          | `#contact`   | Info panel + form → shadysamir335@gmail.com |
| Footer           | —            | Logo, links, copyright                     |

---

## 🔧 Customization

### Updating Contact Details

In `src/components/Contact.jsx`, update the `contactInfo` array:

```js
const contactInfo = [
  { label: 'Email', value: 'info@fexsa.net', href: 'mailto:info@fexsa.net', icon: '✉️' },
  { label: 'Phone / WhatsApp', value: '(+971) 50 225 93 01', href: 'tel:+971502259301', icon: '📱' },
  { label: 'Phone 2', value: '(+971) 52 435 02 07', href: 'tel:+971524350207', icon: '📱' },
];
```

### Updating Colors

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --navy-dark: #0D1B5E;
  --cyan: #00AEEF;
  /* ... */
}
```

### Adding/Removing Service Cards

Edit the `services` array in `src/components/Services.jsx`.

### Updating Sectors

Edit the `sectors` array in `src/components/Sectors.jsx`.

---

## 📧 Production Email

For the live site, update the test email (`shadysamir335@gmail.com`) to the production email (`info@fexsa.net`) in `src/components/Contact.jsx`:

1. In the `handleSubmit` function, replace `'shadysamir335@gmail.com'` with `'info@fexsa.net'`
2. In the mailto fallback, update the email address

---

## 📝 License

&copy; 2025 FEXSA Inspection & Audit Services LLC. All rights reserved.