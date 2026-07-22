const team = [
  {
    name: 'Dr. Elena Cho, DDS',
    role: 'Founder · General & Cosmetic',
    bio: '15 years of practice. Believes the best dentistry is the kind you barely notice.',
  },
  {
    name: 'Dr. Marcus Reyes, DMD',
    role: 'Invisalign & Restorative',
    bio: 'Certified Invisalign provider. Loves a good before-and-after almost as much as his patients do.',
  },
  {
    name: 'Dr. Priya Anand, DDS',
    role: 'Pediatric Dentistry',
    bio: "Turns first visits into non-events. Sticker collection rivals any 6-year-old's.",
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
        The team behind the smiles
      </h1>
      <p className="mt-3 max-w-xl text-brand-slate">
        Bright Smile opened its doors in 2010 with a simple goal: dentistry that feels human.
        Three dentists, one hygiene team, and a lot of good coffee in the waiting room.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="rounded-2xl border border-brand-mint bg-white p-5">
            <div className="mb-3 h-14 w-14 rounded-full bg-brand-mint" aria-hidden="true" />
            <h3 className="font-semibold text-brand-navy">{member.name}</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-brand-teal">
              {member.role}
            </p>
            <p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
