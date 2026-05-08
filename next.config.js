import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tuition & Investment',
  description:
    'ILIM International School tuition in Charlotte, NC. Annual tuition with monthly installment options. Small class ratios, four-language immersion, and outcomes that compound over a lifetime.',
}

export default function TuitionPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }}
        className="pt-36 pb-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">Tuition & investment</div>
          <h1
            className="text-cream-50 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 500 }}
          >
            An investment that compounds<br />
            <em className="text-gold-500">over a lifetime.</em>
          </h1>
          <p className="text-cream-200/60 leading-relaxed max-w-2xl text-lg">
            ILIM families don't ask whether they can afford the school. They ask whether the school is right for their child. That's the right question.
          </p>
        </div>
      </section>

      {/* Value framing */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="gold-label mb-4">What you're paying for</div>
              <h2
                className="text-navy-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 500 }}
              >
                Premium tuition buys premium outcomes.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Every dollar of ILIM tuition goes toward delivering something that doesn't exist at a standard private school: four-language fluency, a 1:8 student-teacher ratio, expert immersion educators, and a curriculum built for the world your child will actually graduate into.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Compare that to any top private school in Charlotte. Then compare what their graduates leave knowing. ILIM graduates leave speaking four languages, having led real projects, and possessing skills most adults spend their entire careers trying to acquire.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: '1:8 student-teacher ratio', detail: 'Every child is seen and known by name' },
                { label: 'Four certified language educators', detail: 'Native and near-native speakers in Arabic, Mandarin, and Spanish' },
                { label: 'Montessori + PBL materials', detail: 'Learning environments designed for engagement and depth' },
                { label: 'Cultural programming', detail: 'Events, speakers, and immersive experiences that bring the languages to life' },
                { label: 'Parent community', detail: 'A network of intentional families you can\'t buy at any other school' },
              ].map(({ label, detail }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-navy-900 text-sm font-medium">{label}</div>
                    <div className="text-navy-500 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition callout */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-900/10">
            {[
              {
                program: 'Early Preschool',
                ages: 'Ages 2–3',
                note: 'Half-day and full-day options available',
              },
              {
                program: 'Primary',
                ages: 'Age 4 – Kindergarten',
                note: 'Full-day program',
              },
              {
                program: 'Elementary',
                ages: '1st–6th Grade',
                note: 'Full academic year',
              },
            ].map(({ program, ages, note }) => (
              <div key={program} className="bg-white p-8">
                <div className="text-xs uppercase tracking-widest text-gold-600 font-medium mb-3">{ages}</div>
                <h3
                  className="text-navy-900 text-xl mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {program}
                </h3>
                <p className="text-navy-400 text-xs mb-6">{note}</p>
                <Link
                  href="/waitlist"
                  className="text-gold-600 text-sm font-medium hover:text-gold-500 transition-colors"
                >
                  Request tuition details →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-navy-900 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div>
                <h3
                  className="text-cream-100 text-xl mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Middle School (7th–8th Grade)
                </h3>
                <p className="text-cream-200/50 text-sm">Advanced academic program — request details</p>
              </div>
              <Link href="/waitlist" className="btn-gold whitespace-nowrap">
                Join waitlist for details
              </Link>
            </div>
          </div>

          <p className="text-navy-400 text-xs mt-6 leading-relaxed text-center">
            Tuition is annual. Monthly installment plans are available. A non-refundable $250 application and observation fee is required after your campus tour. Contact{' '}
            <a href="mailto:contactus@ilimschool.com" className="text-gold-600 hover:text-gold-500">
              contactus@ilimschool.com
            </a>{' '}
            for current tuition rates.
          </p>
        </div>
      </section>

      {/* Payment and policy */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-label mb-4">Payment options</div>
          <h2
            className="text-navy-900 mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 500 }}
          >
            Structured for how families actually plan.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Annual payment',
                desc: 'Pay the full academic year upfront. Ask about available discount for annual payment.',
              },
              {
                title: 'Semi-annual',
                desc: 'Two payments per year — one at enrollment, one at the mid-point of the academic year.',
              },
              {
                title: 'Monthly installments',
                desc: '10 monthly payments spanning the academic year. Automated billing. No additional fee.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 border border-navy-900/5">
                <div className="divider-gold" />
                <h3
                  className="text-navy-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">{desc}</p>
              </div>
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
            The window doesn't wait.
          </h2>
          <p className="text-cream-200/60 mb-8 leading-relaxed">
            Native-like fluency in four languages closes around age 12. The families who acted early are the families whose children speak four languages by the time their peers are starting Spanish 1.
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
