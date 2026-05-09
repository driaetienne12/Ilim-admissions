import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Primary Program | Age 4 – Kindergarten',
  description:
    'ILIM Primary Program in Charlotte, NC: four-language immersion for children age 4 through Kindergarten. Reading, writing, and numeracy in Arabic, Mandarin, Spanish, and English with Reggio Emilia foundations.',
}

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'ILIM Primary Program',
  description:
    'Four-language immersion for children age 4 through Kindergarten in Charlotte, NC. Core literacy and numeracy foundations delivered in Arabic, Mandarin, Spanish, and English with Reggio Emilia-inspired approaches.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'ILIM International School',
    url: 'https://ilimschool.com',
  },
  educationalLevel: 'Kindergarten Readiness, Kindergarten',
}

export default function PrimaryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />

      <section style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }} className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-label">Primary</div>
            <div className="text-cream-200/30 text-xs uppercase tracking-widest">Program 02</div>
          </div>
          <h1 className="text-cream-50 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 500 }}>
            Age 4 – Kindergarten.<br />
            <em className="text-gold-500">Where literacy begins in four languages.</em>
          </h1>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-2xl">
            Reading. Writing. Counting. Reasoning. All of it — in Arabic, Mandarin, Spanish, and English — at the exact age when those skills are being laid down for life.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="gold-label mb-4">The program</div>
              <h2 className="text-navy-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 500 }}>
                Foundational academics. Four languages. Reggio Emilia environment.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Primary is where the Montessori exploration of Early Preschool transitions into structured learning. Children at this age are ready to begin reading and writing — and at ILIM, they begin it in all four languages simultaneously.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                The Reggio Emilia approach shapes the environment: children are seen as capable, curious contributors. Projects are real. Questions are encouraged. The classroom is a place of provocation, not compliance.
              </p>
              <p className="text-navy-600 leading-relaxed">
                By the end of Kindergarten, ILIM Primary students are reading in multiple languages, writing basic sentences in each, and performing at or above grade level in all core subjects.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                ['Ages', 'Age 4 – Kindergarten'],
                ['Languages', 'Arabic · Mandarin · Spanish · English'],
                ['Approach', 'Reggio Emilia, Montessori foundations'],
                ['Class ratio', '1 educator per 8 students'],
                ['Core subjects', 'Literacy, numeracy, science, social studies — in four languages'],
              ].map(([label, value]) => (
                <div key={label} className="bg-cream-100 p-6">
                  <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-1">{label}</div>
                  <div className="text-navy-900 text-base">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-6">Other programs</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Early Preschool', ages: 'Ages 2–3', href: '/programs/early-preschool' },
              { label: 'Elementary', ages: '1st–6th Grade', href: '/programs/elementary' },
              { label: 'Middle School', ages: '7th–8th Grade', href: '/programs/middle-school' },
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
            Ready to learn more?
          </h2>
          <p className="text-cream-200/60 mb-8">Join the waitlist and our admissions team will be in touch when Primary seats are available for your child's year.</p>
          <Link href="/waitlist" className="btn-gold text-base px-10 py-4">Join the Waitlist</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
