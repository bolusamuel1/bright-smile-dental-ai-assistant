const services = [
  {
    title: 'General Checkups',
    text: 'Comprehensive exams and X-rays to catch small issues before they grow.',
  },
  {
    title: 'Cleanings',
    text: 'Gentle, thorough hygiene visits recommended every 6 months. From $90.',
  },
  {
    title: 'Teeth Whitening',
    text: 'In-office (~90 min) or take-home trays. Noticeably brighter, no sensitivity.',
  },
  {
    title: 'Invisalign',
    text: 'Clear aligners for adults and teens. Free consultation to check candidacy.',
  },
  {
    title: 'Emergency Care',
    text: 'Same-day slots for pain, chips, and knocked-out teeth. After-hours on-call line.',
  },
  {
    title: 'Pediatric Dentistry',
    text: 'Kid-friendly visits from age 2. Building lifelong healthy habits.',
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
        Care for every smile
      </h1>
      <p className="mt-3 max-w-xl text-brand-slate">
        From your first cleaning to a full smile makeover, our team handles it under one calm
        roof.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-brand-mint bg-white p-5">
            <h3 className="font-semibold text-brand-teal">{s.title}</h3>
            <p className="mt-2 text-sm text-brand-slate">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
