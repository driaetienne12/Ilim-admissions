# ILIM School Admissions Site
**admissions.ilimschool.com** — Built with Next.js 14, deployed on Vercel.

---

## Setup & Deployment

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
# Opens at http://localhost:3000
```

### 3. Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel
vercel
# Follow prompts. Choose your ILIM Vercel team/project.
```

**Option B — GitHub push (recommended for ongoing updates)**
1. Push this repo to GitHub
2. In Vercel dashboard → New Project → Import from GitHub
3. Vercel auto-detects Next.js — click Deploy
4. Set custom domain to `admissions.ilimschool.com`

---

## Custom Domain Setup

In Vercel Dashboard → Project → Settings → Domains:
- Add `admissions.ilimschool.com`
- Add a CNAME record in your DNS pointing to `cname.vercel-dns.com`

---

## After Deployment

### Google Search Console
1. Go to search.google.com/search-console
2. Add property: `admissions.ilimschool.com`
3. Verify via DNS or HTML tag
4. Submit sitemap: `https://admissions.ilimschool.com/sitemap.xml`

### Google Business Profile
1. Update GMB website URL to `admissions.ilimschool.com`
2. Update GMB description to include four languages and Charlotte, NC
3. Add "See menu" or "Book appointment" link to `/waitlist`

---

## Connect the Waitlist Form

The waitlist form at `/waitlist` currently logs to console.
To connect to your CRM or Kit:

### Kit (ConvertKit) integration
```javascript
// In src/app/waitlist/page.jsx — replace handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSubmitted(true)
}
```

Then create `src/app/api/waitlist/route.js`:
```javascript
export async function POST(req) {
  const data = await req.json()
  // POST to Kit API: https://api.kit.com/v4/forms/{FORM_ID}/subscribers
  // Include your Kit API key in env var: KIT_API_KEY
  return Response.json({ ok: true })
}
```

### Environment variables (add in Vercel → Project → Settings → Environment Variables)
```
KIT_API_KEY=your_kit_api_key
KIT_FORM_ID=your_form_id
NEXT_PUBLIC_SITE_URL=https://admissions.ilimschool.com
```

---

## Adding Real Photos

Replace placeholder divs with Next.js Image components:

```jsx
import Image from 'next/image'

// Founder photo:
<Image
  src="/images/dria-etienne.jpg"
  alt="Dria Etienne, Founder of ILIM International School"
  width={600}
  height={800}
  className="object-cover w-full h-full"
/>
```

Place images in `/public/images/`.

---

## File Structure

```
src/app/
├── layout.jsx          — Root layout + schema markup
├── page.jsx            — Homepage (main conversion page)
├── globals.css         — Design system, fonts, utilities
├── sitemap.js          — Auto-generated sitemap
├── robots.js           — robots.txt
├── admissions/
│   └── page.jsx        — 6-step admissions process
├── waitlist/
│   └── page.jsx        — Waitlist form (primary CTA)
├── faq/
│   └── page.jsx        — FAQ with FAQPage schema (GEO priority)
├── tuition/
│   └── page.jsx        — Tuition & investment framing
├── founder/
│   └── page.jsx        — Dria Etienne founder story + Person schema
└── programs/
    ├── early-preschool/page.jsx   — Ages 2–3
    ├── primary/page.jsx           — Age 4–Kindergarten
    ├── elementary/page.jsx        — 1st–6th Grade
    └── middle-school/page.jsx     — 7th–8th Grade

src/components/
├── Navigation.jsx      — Sticky nav with mobile menu
└── Footer.jsx          — Full-site footer
```

---

## Brand Notes

**Colors:**
- Navy `#0A1628` — primary dark
- Gold `#C9A84C` — accent / CTA
- Cream `#F8F4ED` — light backgrounds

**Fonts:**
- Display: Playfair Display (Google Fonts)
- Body: DM Sans (Google Fonts)

**Tone:** Premium private school. Confident. Direct. No hype.
