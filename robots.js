import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Middle School Program | 7th–8th Grade',
  description:
    'ILIM Middle School in Charlotte, NC: four-language immersion for 7th and 8th grade. ILIM graduates leave fluent in Arabic, Mandarin, Spanish, and English — with public speaking skills, project leadership experience, and cultural fluency that sets them apart in high school and beyond.',
}

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'ILIM Middle School Program',
  description:
    'Advanced four-language academic program for 7th and 8th grade in Charlotte, NC. ILIM middle school graduates speak Arabic, Mandarin, Spanish, and English fluently, have led real projects, and possess cultural fluency and leadership skills that distinguish them in high school admissions and beyond.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'ILIM International School',
    url: 'https://ilimschool.com',
  },
  educationalLevel: 'Middle School',
}

export default function MiddleSchoolPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />

      <section style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }} className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-label">Middle School</div>
            <div className="text-cream-200/30 text-xs uppercase tracking-widest">Program 04</div>
          </div>
          <h1 className="text-cream-50 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 500 }}>
            7th–8th Grade.<br />
            <em className="text-gold-500">They graduate ready for a world that doesn't slow down for one language.</em>
          </h1>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-2xl">
            ILIM's Middle School program is where everything compounds. The languages. The leadership. The academic rigor. By 8th grade, ILIM students have what most MBA graduates are still working toward.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">What ILIM graduates walk into high school with</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-900/10 mt-8">
            {[
              { title: 'Four-language fluency', detail: 'Reading, writing, speaking, and listening in Arabic, Mandarin, Spanish, and English — genuinely, not "I took two years in high school."' },
              { title: 'Public presentation skills', detail: 'Trained to stand in a room, own it, and communicate clearly across cultural contexts. In multiple languages.' },
              { title: 'Project leadership experience', detail: 'Led real projects with real outcomes — not simulations. They know how to start, execute, and deliver.' },
              { title: 'Cultural fluency', detail: 'Four cultures lived daily for years. They navigate cultural dynamics instinctively — a skill most adults never develop.' },
              { title: 'Academic strength', detail: 'ILIM graduates enter high school performing above their grade level. The multilingual academic load builds capacity, not gaps.' },
              { title: 'Entrepreneurship fundamentals', detail: 'They understand value creation, problem-solving, and resourcefulness — because it\'s been woven into their education since elementary school.' },
            ].map(({ title, detail }) => (
              <div key={title} className="bg-cream-100 p-6">
                <div className="divider-gold" />
                <h3 className="text-navy-900 mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500 }}>{title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-6">Other programs</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Early Preschool', ages: 'Ages 2–3', href: '/programs/early-preschool' },
              { label: 'Primary', ages: 'Age 4 – Kindergarten', href: '/programs/primary' },
              { label: 'Elementary', ages: '1st–6th Grade', href: '/programs/elementary' },
            ].map((p) => (
              <Link key={p.label} href={p.href} className="bg-white p-6 program-card block">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-2">{p.ages}</div>
                <div className="text-navy-900 text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.label}</div>
                <div className="text-gold-600 text-sm">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #0A1628 0%, #112040 100%)' }} className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-cream-50 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500 }}>
            The window doesn't wait.
          </h2>
          <p className="text-cream-200/60 mb-8">Middle School seats are limited and competitive. Join the waitlist and our admissions team will reach out when your child's year approaches.</p>
          <Link href="/waitlist" className="btn-gold text-base px-10 py-4">Join the Waitlist</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
