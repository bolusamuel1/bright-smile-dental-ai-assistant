import { Link } from 'react-router-dom'
import { CircleDollarSign, CalendarClock, HeartPulse, Percent } from 'lucide-react'

const stats = [
  { value: '15+ years', label: 'of trusted practice' },
  { value: '10,000+', label: 'happy patients' },
  { value: 'In-network', label: 'with major insurers' },
]

const insurers = ['Delta Dental', 'Cigna', 'Aetna', 'MetLife']

const values = [
  { icon: CircleDollarSign, text: 'Transparent pricing — ranges shared upfront' },
  { icon: CalendarClock, text: 'Same-day emergency slots held daily' },
  { icon: HeartPulse, text: 'Nitrous & oral sedation for anxious patients' },
  { icon: Percent, text: '0% in-house financing on treatment over $500' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-pill bg-brand-mintBadge px-4 py-1.5 text-xs font-semibold text-brand-teal">
              Now welcoming new patients
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              Your Smile, <br className="hidden md:block" />
              Our Priority
            </h1>
            <p className="mt-4 max-w-md text-brand-slate">
              Gentle, modern dentistry for the whole family — from routine cleanings to
              Invisalign and same-day emergencies.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-pill bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-tealDark"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="rounded-pill border border-brand-mint bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-teal"
              >
                Explore services
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
            alt="Bright Smile Dental Clinic treatment room"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-brand-mint bg-brand-mint/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-2xl font-extrabold text-brand-teal">{s.value}</p>
              <p className="text-sm text-brand-slate">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-slate">
            Accepted:
          </p>
          <div className="flex flex-wrap gap-2">
            {insurers.map((name) => (
              <span
                key={name}
                className="rounded-pill border border-brand-mint bg-white px-3 py-1 text-xs font-medium text-brand-navy"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
          A calmer visit, from hello to goodbye
        </h2>
        <p className="mt-3 max-w-xl text-brand-slate">
          We built Bright Smile around one idea: the dentist shouldn't be stressful. Warm
          lighting, honest pricing, and a team that actually explains what's happening.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-brand-mint bg-white p-4"
            >
              <Icon size={20} className="mt-0.5 shrink-0 text-brand-teal" />
              <span className="text-sm text-brand-navy">{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
