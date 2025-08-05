# 🧩 Web App Planning: AI Skincare Vending Website

## 📌 1. Project Overview

A modern, responsive landing website to promote and generate leads for an AI-powered skincare vending machine. The goal is to provide a professional, fast-loading web presence to showcase product benefits and generate demo requests or franchise leads.

## 👥 2. Target Audience

* Retail franchise owners
* Skincare brands
* Business investors
* Tech & beauty consumers

## 🧱 3. Page Structure

**Main Pages:**

1. `/` – Homepage (as per design)
2. `/manufacturing` – Info about production & tech
3. `/faq` – Frequently asked questions
4. `/contact-us` – Contact form
5. `/thank-you` – Post-form submission success page

## 🧩 4. Component Breakdown

| Section                   | Component Name               |
| ------------------------- | ---------------------------- |
| Navbar                    | `<Navbar />`                 |
| Hero Section (AI tagline) | `<HeroBanner />`             |
| Product Demo Highlight    | `<VendingMachineShowcase />` |
| Customizability Section   | `<CustomBusinessSection />`  |
| Services Provided         | `<ServicesOverview />`       |
| How it Works              | `<HowItWorks />`             |
| Key Features Grid         | `<FeaturesGrid />`           |
| CTA (Invest / Partner)    | `<InvestmentCTA />`          |
| Contact Form              | `<ContactForm />`            |
| Newsletter + Footer       | `<Footer />`                 |

## ⚙️ 5. Tech Stack

* **Frontend**: Next.js (App Router), Tailwind CSS
* **Form Handling**: react-hook-form + validation
* **Email Submission**: Formspree / Resend / custom API
* **Hosting**: Vercel
* **Analytics**: Google Analytics or PostHog (optional)

## 🧑‍💻 6. File Structure Example

```
/app
  ├─ page.tsx (Home)
  ├─ manufacturing/page.tsx
  ├─ faq/page.tsx
  ├─ contact-us/page.tsx
  ├─ thank-you/page.tsx
/components
  ├─ Navbar.tsx
  ├─ HeroBanner.tsx
  ├─ VendingMachineShowcase.tsx
  ├─ ServicesOverview.tsx
  ├─ ContactForm.tsx
  ├─ Footer.tsx
```

## 📬 7. Backend/API Integration (Optional)

* Store leads in Firebase, MongoDB, Airtable, or Supabase
* Email form submissions using Resend or Formspree
* (Future option) Admin dashboard with analytics

## 📆 8. Suggested Timeline

| Task                           | Duration |
| ------------------------------ | -------- |
| Setup project & Tailwind theme | 1 day    |
| Build reusable components      | 3–5 days |
| Integrate form + email backend | 1 day    |
| Deploy to Vercel               | 0.5 day  |
| Testing & Optimization         | 1–2 days |

**Total: 7–10 working days**

## ✅ 9. Next Steps

Would you like:

* Component code for a section (e.g., Hero, Contact form)?
* Project setup files (package.json, Tailwind config)?
* Form submission logic + backend?

Let me know and I can generate the next piece!
