import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Demo only — no backend wired up. In production this would POST to
    // a booking API / calendar integration.
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-extrabold text-brand-navy md:text-4xl">Book a visit</h1>
      <p className="mt-3 max-w-xl text-brand-slate">
        Fill out the form and we'll confirm within 1 business hour. Prefer to chat? Use the
        bubble in the corner — it works 24/7.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-4 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field label="Phone" name="phone" placeholder="(555) 010-0100" type="tel" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" name="email" placeholder="you@example.com" type="email" />
            <Field label="Preferred date" name="date" type="date" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-brand-navy" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Anything we should know before your visit?"
              className="w-full rounded-xl border border-brand-mint bg-white px-3 py-2 text-sm outline-none focus:border-brand-teal"
            />
          </div>
          <button
            type="submit"
            className="rounded-pill bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-tealDark"
          >
            Request appointment
          </button>
          {submitted && (
            <p className="text-sm font-medium text-brand-teal" role="status">
              Thanks! This is a demo form — no request was actually sent, but in production
              you'd get a confirmation within 1 business hour.
            </p>
          )}
        </form>

        <div className="space-y-5">
          <div className="flex h-36 items-center justify-center rounded-2xl border border-brand-mint bg-brand-mint/40 text-sm text-brand-slate">
            Map preview
          </div>

          <InfoRow icon={MapPin} text="128 Maple Grove Ave" />
          <InfoRow icon={Phone} text="(555) 010-0100" />
          <InfoRow icon={Phone} text="After-hours emergencies: (555) 010-0199" />
          <InfoRow icon={Mail} text="hello@brightsmile.example" />
          <InfoRow icon={Clock} text="Mon–Fri · 8am–6pm" />
          <InfoRow icon={Clock} text="Sat · 9am–2pm — Closed Sundays" />
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-brand-navy" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-mint bg-white px-3 py-2 text-sm outline-none focus:border-brand-teal"
      />
    </div>
  )
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-brand-slate">
      <Icon size={16} className="shrink-0 text-brand-teal" />
      <span>{text}</span>
    </div>
  )
}
