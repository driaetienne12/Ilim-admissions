import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ILIM School Admissions | 4-Language Immersion PreK–8th Grade Charlotte NC',
  description:
    'ILIM International School in Charlotte, NC: Arabic, Mandarin, Spanish, and English immersion from age 2 through 8th grade. Rigorous academics. Small class ratios. Enrollment by invitation. Join the waitlist.',
}

const languages = [
  { lang: 'Arabic', pct: '75%', note: 'Global economic power, spoken by 400M+' },
  { lang: 'Mandarin', pct: '75%', note: 'World\'s most spoken language by native speakers' },
  { lang: 'Spanish', pct: '75%', note: '21 countries, 560M speakers, second in the US' },
  { lang: 'English', pct: '75%', note: 'Global commerce and academic standard' },
]

const programs = [
  {
    label: 'Early Preschool',
    ages: 'Ages 2–3',
    desc: 'The acquisition window opens here. Language immersion in a Montessori-inspired environment where everything is play — and play is everything.',
    href: '/programs/early-preschool',
    number: '01',
  },
  {
    label: 'Primary',
    ages: 'Age 4 – Kindergarten',
    desc: 'Reading, writing, and numeracy in four languages. Reggio Emilia foundations. Children build identity alongside fluency.',
    href: '/programs/primary',
    number: '02',
  },
  {
    label: 'Elementary',
    ages: '1st – 6th Grade',
    desc: 'Full academic curriculum delivered through four languages. Project-based learning. Public speaking. Entrepreneurship basics. Students who test two grade levels above — without making testing the point.',
    href: '/programs/elementary',
    number: '03',
  },
  {
    label: 'Middle School',
    ages: '7th – 8th Grade',
    desc: 'ILIM graduates enter high school speaking four languages, having led real projects, and possessing the cultural fluency most adults spend decades trying to build.',
    href: '/programs/middle-school',
    number: '04',
  },
]

const pillars = [
  { title: 'Four languages', detail: 'Arabic, Mandarin, Spanish, English — all four, not one or two' },
  { title: 'Academics-plus', detail: 'Same rigorous core academics as any top private school, then four languages stacked on top' },
  { title: '1:8 class ratio', detail: 'Every child is seen, known, and taught to — not managed' },
  { title: 'Public speaking', detail: 'Trained from early childhood to stand in a room and own it' },
  { title: 'Entrepreneurship', detail: 'Financial literacy, creative problem-solving, and project leadership' },
  { title: 'Cultural fluency', detail: 'Four cultures lived daily, not observed from a textbook' },
]

const steps = [
  {
    n: '01',
    title: 'Join the waitlist',
    desc: 'Submit your family\'s interest. No fee, no commitment — just the first step toward a conversation.',
  },
  {
    n: '02',
    title: 'Receive a personal tour invitation',
    desc: 'ILIM is selective. Tour invitations go to waitlisted families whose children are approaching an enrollment year. You\'ll hear from us directly.',
  },
  {
    n: '03',
    title: 'Tour + application ($250)',
    desc: 'Your family tours the campus. If it\'s mutual, you submit a formal application and pay the $250 observation fee to secure your child\'s Observation Week.',
  },
  {
    n: '04',
    title: 'Observation Week',
    desc: 'Your child spends a week in the ILIM environment. Our educators observe fit, readiness, and potential. Your child experiences what learning can feel like.',
  },
  {
    n: '05',
    title: 'Enrollment decision',
    desc: 'We send an enrollment determination letter. Acceptance is an invitation to join a community of families who parent with the same intention you do.',
  },
  {
    n: '06',
    title: 'Parent orientation',
    desc: 'Before day one, you\'ll attend a parent orientation so you\'re prepared, connected, and aligned with the ILIM approach.',
  },
]

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #112040 100%)',
        }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C9A84C 1px, transparent 1px),
              linear-gradient(to bottom, #C9A84C 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="gold-label mb-6">Charlotte, NC · Enrollment by invitation</div>

            <h1
              className="text-cream-50 mb-8 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 500,
              }}
            >
              Your child will speak
              <span className="text-gold-500 block italic">four languages</span>
              by 8th grade.
            </h1>

            <p className="text-cream-200/70 text-lg font-body leading-relaxed max-w-xl mb-4">
              Arabic. Mandarin. Spanish. English. All four — with rigorous academics, small class ratios, and the cultural fluency most adults spend decades trying to build.
            </p>
            <p className="text-cream-200/50 text-base font-body leading-relaxed max-w-xl mb-10">
              ILIM International School in Charlotte, NC is enrolling students from age 2 through 8th grade. Seats are limited. Enrollment is selective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/waitlist" className="btn-gold text-base">
                Join the Waitlist
              </Link>
              <Link href="/admissions" className="btn-outline text-base">
                How admissions works
              </Link>
            </div>

            {/* Social proof bar */}
            <div className="flex flex-wrap gap-8 mt-14 pt-14 border-t border-white/10">
              {[
                ['120+', 'Students enrolled'],
                ['4', 'Languages taught'],
                ['1:8', 'Student-teacher ratio'],
                ['2021', 'Founded'],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div
                    className="text-gold-500 mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500 }}
                  >
                    {stat}
                  </div>
                  <div className="text-cream-200/50 text-xs uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-cream-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="gold-label mb-4">Why ILIM families chose us</div>
            <h2
              className="text-navy-900 mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}
            >
              The best traditional private schools still produce monolingual graduates.
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              They pay premium tuition. They get excellent academics. And they hand their child a future where they operate in exactly one language, one culture, and one worldview.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-10">
              ILIM families saw that gap before anyone told them to look for it. They weren't looking for a better school. They were looking for a different outcome entirely.
            </p>
          </div>

          {/* Pain points grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                q: '"My child will miss the language acquisition window."',
                fact: 'Native-like pronunciation and accent-free fluency closes around age 12. Every year in a monolingual environment is a year that can\'t be recovered.',
              },
              {
                q: '"The standard curriculum doesn\'t prepare them for a global economy."',
                fact: 'The markets representing the majority of global GDP are not English-only markets. The next generation of leaders will need to operate across cultures, not just countries.',
              },
              {
                q: '"Private school price, public school preparation."',
                fact: 'Premium tuition should buy exceptional outcomes, not a nicer campus with the same monolingual, test-focused model every family is already leaving.',
              },
              {
                q: '"I want them around families who parent the same way we do."',
                fact: 'ILIM is a community. The families here chose this school because they couldn\'t find enough people who thought about education the way they do. They found them here.',
              },
            ].map(({ q, fact }) => (
              <div key={q} className="bg-white border border-navy-900/5 p-8 program-card">
                <p
                  className="text-navy-900 mb-4 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontStyle: 'italic' }}
                >
                  {q}
                </p>
                <p className="text-navy-600 text-sm leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #112040 100%)' }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-label mb-4 text-center">The four languages</div>
          <h2
            className="text-cream-50 text-center mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 500 }}
          >
            Together, these four languages reach 75%<br className="hidden md:block" /> of the world's population.
          </h2>
          <p className="text-cream-200/60 text-center text-base max-w-2xl mx-auto mb-16">
            Arabic, Mandarin, Spanish, and English aren't chosen at random. They represent the economies, cultures, and markets that will define the next 50 years. Your child learns them all — before they turn 14.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { lang: 'Arabic', note: '400M+ speakers. Gulf economies, MENA markets, a language of ancient scholarship and modern commerce.' },
              { lang: 'Mandarin', note: 'The most spoken native language on earth. China\'s economic reach touches every industry.' },
              { lang: 'Spanish', note: '560M speakers across 21 countries. The second most spoken language in the United States.' },
              { lang: 'English', note: 'The global academic and commercial standard. Already spoken at home — your child masters the other three on top.' },
            ].map(({ lang, note }) => (
              <div
                key={lang}
                className="border border-gold-500/20 p-8 hover:border-gold-500/50 transition-all duration-300"
              >
                <div
                  className="text-gold-500 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 500 }}
                >
                  {lang}
                </div>
                <p className="text-cream-200/60 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-label mb-4">Programs</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <h2
              className="text-navy-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 500 }}
            >
              One school. Ages 2 through 14.<br />Four languages throughout.
            </h2>
            <Link href="/programs/early-preschool" className="btn-navy whitespace-nowrap">
              Explore programs
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Link key={p.label} href={p.href} className="block program-card bg-white p-8">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="text-gold-500/40"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 400 }}
                  >
                    {p.number}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-navy-400 font-medium mt-2">
                    {p.ages}
                  </div>
                </div>
                <h3
                  className="text-navy-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500 }}
                >
                  {p.label}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                <span className="text-gold-600 text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS / ACADEMICS PLUS ── */}
      <section className="bg-cream-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="gold-label mb-4">What ILIM students get</div>
            <h2
              className="text-navy-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 500 }}
            >
              Same rigorous academics as any top private school. Then four languages on top of that.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10">
            {pillars.map((p) => (
              <div key={p.title} className="bg-cream-50 p-8">
                <div className="divider-gold" />
                <h3
                  className="text-navy-900 mb-2 text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {p.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS PROCESS ── */}
      <section
        style={{ background: 'linear-gradient(160deg, #060D1A 0%, #112040 100%)' }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-label mb-4">How admissions works</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <h2
              className="text-cream-50 leading-tight max-w-xl"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 500 }}
            >
              Enrollment is selective. Every student is evaluated. Every family is chosen.
            </h2>
            <Link href="/admissions" className="btn-outline whitespace-nowrap">
              Full process →
            </Link>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gold-500/20 hidden md:block" />

            <div className="flex flex-col gap-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-6 md:gap-10 items-start">
                  <div className="step-number flex-shrink-0 relative z-10 bg-navy-900">
                    {s.n}
                  </div>
                  <div>
                    <h3
                      className="text-cream-100 mb-2 text-lg"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-cream-200/60 text-sm leading-relaxed max-w-xl">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link href="/waitlist" className="btn-gold text-base">
              Join the Waitlist
            </Link>
            <Link href="/tuition" className="btn-outline text-base">
              View tuition
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-cream-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="gold-label mb-8">From an ILIM family</div>
          <blockquote className="font-display text-navy-900 leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', fontStyle: 'italic' }}>
            "ILIM cared about our values. The small class sizes, the real guidance — our daughter built confidence, set boundaries, and learned to handle challenges. As parents, we finally felt supported. It was a complete shift."
          </blockquote>
          <p className="text-navy-400 text-sm uppercase tracking-widest">ILIM Parent, Elementary Program</p>
        </div>
      </section>

      {/* ── FOUNDER TEASER ── */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-label mb-4">The founder</div>
              <h2
                className="text-navy-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 500 }}
              >
                She built the school she couldn't find.
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Dria Etienne is a serial entrepreneur, international business traveler, and mother. She saw first-hand what it cost to be monolingual in global rooms. She couldn't find a school that would give her own children what she wished she'd had.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                So she built one. ILIM opened in 2021. Over 120 students later, it's the school Charlotte's most intentional families keep finding their way to.
              </p>
              <Link href="/founder" className="btn-navy">
                Read Dria's story
              </Link>
            </div>
            <div className="bg-navy-900 aspect-square flex items-center justify-center text-cream-200/20 text-sm tracking-wider">
              {/* Founder photo goes here */}
              <div className="text-center">
                <div className="text-6xl mb-4">✦</div>
                <div className="text-cream-200/30 text-xs uppercase tracking-widest">Founder portrait</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #112040 100%)' }}
        className="py-24 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="gold-label mb-4">Seats are limited</div>
          <h2
            className="text-cream-50 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}
          >
            The window for language acquisition is open right now.
          </h2>
          <p className="text-cream-200/60 text-lg mb-10 leading-relaxed">
            It closes around age 12. Every family on this waitlist made the decision before that window closed. Join them.
          </p>
          <Link href="/waitlist" className="btn-gold text-base px-10 py-4">
            Join the Waitlist
          </Link>
          <p className="text-cream-200/30 text-xs mt-6">
            No commitment. Waitlist placement doesn't guarantee enrollment. Tour invitations are extended by the admissions team.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
