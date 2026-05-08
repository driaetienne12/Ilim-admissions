import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Elementary Program | 1st–6th Grade',
  description:
    'ILIM Elementary Program in Charlotte, NC: four-language immersion for 1st through 6th grade. Full academic curriculum, project-based learning, entrepreneurship, and public speaking — delivered in Arabic, Mandarin, Spanish, and English.',
}

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'ILIM Elementary Immersion Program',
  description:
    'Four-language academic program for 1st through 6th grade in Charlotte, NC. Core academics in reading, writing, mathematics, and science delivered alongside instruction in Arabic, Mandarin, Spanish, and English. ILIM students consistently perform above grade level on standardized assessments.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'ILIM International School',
    url: 'https://ilimschool.com',
  },
  educationalLevel: 'Elementary School',
}

export default function ElementaryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />

      <section style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }} className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-label">Elementary</div>
            <div className="text-cream-200/30 text-xs uppercase tracking-widest">Program 03</div>
          </div>
          <h1 className="text-cream-50 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 500 }}>
            1st–6th Grade.<br />
            <em className="text-gold-500">Full academics. Four languages. Real skills.</em>
          </h1>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-2xl">
            Same rigorous academics as any top private school in Charlotte. Then Arabic, Mandarin, Spanish, and English on top. Then public speaking, project leadership, and entrepreneurship thinking layered in. That's the ILIM elementary experience.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">The program</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
            <div>
              <h2 className="text-navy-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 500 }}>
                The Academics-Plus model.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                ILIM elementary students receive the full academic curriculum — reading, writing, mathematics, science, and social studies — at or above grade level. That's not the differentiator. That's the floor.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                The differentiator is what gets built on top: four languages of instruction, daily cultural competency, project-based learning with real-world application, public speaking training in multiple languages, and entrepreneurship thinking woven through the curriculum.
              </p>
              <p className="text-navy-600 leading-relaxed">
                ILIM elementary students consistently perform above grade level on standardized assessments — because deep, engaged, immersive learning produces strong academic outcomes as a natural consequence.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                ['Grades', '1st through 6th Grade'],
                ['Languages', 'Arabic · Mandarin · Spanish · English'],
                ['Academic approach', 'Project-based learning, core academics, 4-language instruction'],
                ['Additional skills', 'Public speaking · Entrepreneurship · Cultural competency'],
                ['Class ratio', '1 educator per 8 students'],
              ].map(([label, value]) => (
                <div key={label} className="bg-cream-100 p-5">
                  <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-1">{label}</div>
                  <div className="text-navy-900 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="gold-label mb-6">By the end of 6th grade, ILIM students:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-900/10">
            {[
              'Read and write in all four languages at grade level or above',
              'Have presented publicly in multiple languages — not once, but consistently',
              'Have completed real project-based learning units with measurable outcomes',
              'Understand basic entrepreneurship concepts: problem identification, solution design, value creation',
              'Demonstrate cultural fluency in four distinct cultural contexts',
              'Score above grade level in core academic subjects',
              'Enter middle school with confidence, capability, and a competitive edge most high schoolers haven\'t built yet',
            ].map((item) => (
              <div key={item} className="bg-cream-100 p-5 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-navy-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Early Preschool', ages: 'Ages 2–3', href: '/programs/early-preschool' },
              { label: 'Primary', ages: 'Age 4 – Kindergarten', href: '/programs/primary' },
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
            This is what four languages look like in action.
          </h2>
          <p className="text-cream-200/60 mb-8">Join the waitlist. When seats open for your child's grade, you'll hear from us directly.</p>
          <Link href="/waitlist" className="btn-gold text-base px-10 py-4">Join the Waitlist</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
