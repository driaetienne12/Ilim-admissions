import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-200/60 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-cream-100 text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              ILIM International School
            </div>
            <p className="text-sm leading-relaxed mt-3 max-w-xs">
              A private language immersion school in Charlotte, NC. Arabic, Mandarin, Spanish, and English — from age 2 through 8th grade.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <span>601 N Polk St, Pineville, NC 28134</span>
              <a href="tel:+17043899408" className="hover:text-gold-500 transition-colors">(704) 389-9408</a>
              <a href="mailto:contactus@ilimschool.com" className="hover:text-gold-500 transition-colors">
                contactus@ilimschool.com
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <div className="gold-label mb-4">Programs</div>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/programs/early-preschool" className="hover:text-cream-100 transition-colors">
                Early Preschool (Ages 2–3)
              </Link>
              <Link href="/programs/primary" className="hover:text-cream-100 transition-colors">
                Primary (Age 4–Kindergarten)
              </Link>
              <Link href="/programs/elementary" className="hover:text-cream-100 transition-colors">
                Elementary (1st–6th Grade)
              </Link>
              <Link href="/programs/middle-school" className="hover:text-cream-100 transition-colors">
                Middle School (7th–8th Grade)
              </Link>
            </div>
          </div>

          {/* Admissions */}
          <div>
            <div className="gold-label mb-4">Admissions</div>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/admissions" className="hover:text-cream-100 transition-colors">
                The process
              </Link>
              <Link href="/tuition" className="hover:text-cream-100 transition-colors">
                Tuition & fees
              </Link>
              <Link href="/faq" className="hover:text-cream-100 transition-colors">
                FAQ
              </Link>
              <Link href="/founder" className="hover:text-cream-100 transition-colors">
                Our founder
              </Link>
              <Link href="/waitlist" className="hover:text-gold-500 text-gold-500 transition-colors font-medium">
                Join the waitlist →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-200/30">
          <span>© {new Date().getFullYear()} ILIM International School. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="https://ilimschool.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-200/60 transition-colors">
              Main website
            </a>
            <Link href="/faq" className="hover:text-cream-200/60 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
