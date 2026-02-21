# DevilsLab Digitals

Modern Next.js website for DevilsLab Digitals - Engineering excellence through code, creativity, and conviction.

## Features

- 🚀 Lead Generation System (The Surge System)
- 📱 WhatsApp Click-to-Chat Automation
- 📊 Google Sheets Integration for Contact Forms
- 🎨 Premium UI with Framer Motion Animations
- 💼 Service Showcase & Portfolio
- 📝 Quotation Calculator
- 🎯 DNDX Landing Page

## Tech Stack

- **Framework:** Next.js 15.5.6
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Forms:** React Hook Form + Zod
- **UI Components:** Radix UI
- **Email Service:** EmailJS
- **Backend:** Google Apps Script (Google Sheets)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_script_url
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Environment Variables

- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp Business number (without + or spaces)
- `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` - Google Apps Script URL for contact form submissions

## Deployment

This project can be deployed to any hosting platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

---

Built with ❤️ by DevilsLab Digitals
