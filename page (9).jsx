import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Early Preschool Program | Ages 2–3',
  description:
    'ILIM Early Preschool in Charlotte, NC: four-language immersion for children ages 2–3. Arabic, Mandarin, Spanish, and English in a Montessori-inspired environment. The language acquisition window starts here.',
}

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'ILIM Early Preschool Program',
  description:
    'Four-language immersion for children ages 2–3 in Charlotte, NC. Montessori-inspired early childhood environment with instruction in Arabic, Mandarin, Spanish, and English. Designed to harness the peak of the language acquisition window.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'ILIM International School',
    url: 'https://ilimschool.com',
  },
  educationalLevel: 'Preschool',
  timeRequired: 'P1Y',
  locationCreated: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '601 N Polk St',
      addressLocality: 'Pineville',
      addressRegion: 'NC',
      postalCode: '28134',
      addressCountry: 'US',
    },
  },
}

const nextPrograms = [
  { label: 'Primary', ages: 'Age 4 – Kindergarten', href: '/programs/primary' },
  { label: 'Elementary', ages: '1st–6th Grade', href: '/programs/elementary' },
  { label: 'Middle School', ages: '7th–8th Grade', href: '/programs/middle-school' },
]

export default function EarlyPreschoolPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }}
        className="pt-36 pb-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-label">Early Preschool</div>
            <div className="text-cream-200/30 text-xs uppercase tracking-widest">Program 01</div>
          </div>
          <h1
            className="text-cream-50 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 500 }}
          >
            Ages 2–3.<br />
            <em className="text-gold-500">The window is wide open.</em>
          </h1>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-2xl">
            The human brain acquires language most naturally between birth and age 12. At age 2, your child is at the peak of that window. ILIM Early Preschool is designed to use every day of it.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="gold-label mb-4">The program</div>
              <h2
                className="text-navy-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 500 }}
              >
                Four languages from day one. Play is the curriculum.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                ILIM's Early Preschool environment is Montessori-inspired: structured exploration, child-led discovery, and materials designed for little hands and developing minds. Language instruction is woven through everything — it's not a class, it's the air they breathe.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                Your 2-year-old won't "study" Arabic. They'll sing in it. They'll count in Mandarin. They'll hear Spanish in circle time and English at lunch. By 3, they'll be responding naturally in all four.
              </p>
              <p className="text-navy-600 leading-relaxed">
                This is how language acquisition actually works — through immersive exposure, repetition, and joyful use. Worksheets come later. Right now, everything is play.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-cream-100 p-6">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">Ages</div>
                <div className="text-navy-900 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>2–3 years old</div>
              </div>
              <div className="bg-cream-100 p-6">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">Languages</div>
                <div className="text-navy-900 text-base">Arabic · Mandarin · Spanish · English</div>
              </div>
              <div className="bg-cream-100 p-6">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">Approach</div>
                <div className="text-navy-900 text-base">Montessori-inspired, play-based immersion</div>
              </div>
              <div className="bg-cream-100 p-6">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">Class ratio</div>
                <div className="text-navy-900 text-base">1 educator per 8 students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What they gain */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">By the end of Early Preschool, your child will:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-900/10 mt-8">
            {[
              'Respond naturally to basic phrases and instructions in all four languages',
              'Distinguish between Arabic, Mandarin, Spanish, and English as separate systems',
              'Build vocabulary in each language through daily, contextual use',
              'Develop social confidence in a structured multilingual peer environment',
              'Demonstrate independence, focus, and exploratory curiosity — Montessori foundations',
              'Enter the Primary program with a natural, accent-free linguistic foundation',
            ].map((item) => (
              <div key={item} className="bg-cream-50 p-6 flex gap-4 items-start">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-navy-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent FAQ */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">Common questions from Early Preschool parents</div>
          <div className="flex flex-col gap-8 mt-8">
            {[
              {
                q: 'Is my 2-year-old too young for language immersion?',
                a: '2 is the ideal starting point. The language acquisition window is open widest in early childhood. Children at this age absorb language the same way they absorb everything — naturally, effortlessly, and without the self-consciousness that slows older learners. The earlier, the better.',
              },
              {
                q: 'Will my child be confused by learning four languages at once?',
                a: 'Children\'s brains are built for this. Research consistently shows that multilingual children do not experience lasting confusion — they develop the ability to sort and use multiple languages as separate systems. ILIM educators are trained to support this development. Temporary mixing is normal and resolves naturally.',
              },
              {
                q: 'Do we need to reinforce the languages at home?',
                a: 'No. ILIM is designed to carry the immersion load. You don\'t need to speak Arabic to support your Arabic-learning child. The immersion environment handles the acquisition. At home, your engagement and enthusiasm are more valuable than any language practice.',
              },
              {
                q: 'What does a typical day look like for a 2-year-old at ILIM?',
                a: 'Days rotate through language-themed activities, Montessori work time, outdoor exploration, circle time, sensory play, and meals. Language is embedded in every transition — a song in Mandarin on the way outside, counting in Arabic during snack, a story in Spanish before nap. Nothing is drilled. Everything is lived.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-navy-900/10 pb-8">
                <h3
                  className="text-navy-900 mb-3 text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {q}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next programs */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-6">Continue the journey</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nextPrograms.map((p) => (
              <Link key={p.label} href={p.href} className="bg-white p-6 program-card block">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">{p.ages}</div>
                <div className="text-navy-900 text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.label}</div>
                <div className="text-gold-600 text-sm">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #112040 100%)' }}
        className="py-20 text-center"
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-cream-50 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500 }}
          >
            Age 2 is the moment to start.
          </h2>
          <p className="text-cream-200/60 mb-8">
            Early Preschool seats are limited. The families on the waitlist made this decision before the window started closing. Join them.
          </p>
          <Link href="/waitlist" className="btn-gold text-base px-10 py-4">
            Join the Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
