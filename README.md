# Khandokar Ismail — Portfolio v2

Full-stack developer + DevOps Engineer portfolio with dark/light mode, profile photo, and EmailJS contact form.

## Stack
- **Next.js 14** · **Tailwind CSS** · **Framer Motion** · **EmailJS**
- Fonts: Syne (display) · DM Sans (body) · JetBrains Mono

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## EmailJS Setup (contact form)

1. Go to [emailjs.com](https://www.emailjs.com) → free account
2. Add **Email Service** (Gmail) → copy **Service ID**
3. Create **Email Template** with these variables:
   - `{{from_name}}` `{{from_email}}` `{{message}}` `{{to_email}}`
4. Copy your **Public Key** from Account settings
5. Edit `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## CV Download
Place your CV PDF at `public/cv.pdf`

## Deploy
```bash
npx vercel
```

## Structure
```
src/
├── lib/
│   └── ThemeContext.tsx     ← dark/light mode (localStorage)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       ← sticky + theme toggle
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx         ← profile photo + floating animation
│   │   ├── About.tsx
│   │   ├── Skills.tsx       ← filterable
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx   ← timeline
│   │   └── Contact.tsx      ← EmailJS form
│   └── ui/
│       ├── FadeIn.tsx       ← scroll animation wrapper
│       └── SectionLabel.tsx
├── data/index.ts            ← all content here
├── pages/
│   ├── index.tsx
│   └── projects/[id].tsx
└── styles/globals.css       ← CSS vars for dark/light
```
