// Bright Smile Dental — chatbot knowledge base
//
// This is a stand-in for a real RAG pipeline. In production, these entries
// would be chunks retrieved from the clinic's own docs (a CMS, a PDF of
// policies, a booking system) and passed to an LLM as context. Here, each
// entry is checked directly against the user's message via keyword matching,
// so the widget works with zero API calls and zero cost.
//
// To swap in a live model later: keep this file as the "documents," and in
// ChatWidget.jsx replace `matchFaq()` with a call to your LLM of choice,
// passing the matched (or top-k) entries as context.

export const faqEntries = [
  {
    id: 'hours',
    keywords: ['hour', 'open', 'close', 'time', 'when are you'],
    answer:
      "We're open Mon–Fri 8am–6pm and Sat 9am–2pm. Closed Sundays.",
  },
  {
    id: 'insurance',
    keywords: ['insurance', 'delta dental', 'cigna', 'aetna', 'metlife', 'coverage', 'in-network'],
    answer:
      "We're in-network with Delta Dental, Cigna, Aetna, and MetLife. If you're uninsured, we also offer an in-house membership plan.",
  },
  {
    id: 'new-patient',
    keywords: ['new patient', 'first visit', 'first time', 'what to expect'],
    answer:
      'A new patient visit includes an exam, X-rays, and a cleaning — usually 60–75 minutes. Arrive 15 minutes early for paperwork, or fill it out online beforehand.',
  },
  {
    id: 'pricing-cleaning',
    keywords: ['cleaning cost', 'cleaning price', 'how much is a cleaning'],
    answer: 'Cleanings start from $90 without insurance.',
  },
  {
    id: 'pricing-whitening',
    keywords: ['whitening cost', 'whitening price', 'how much is whitening', 'whiten'],
    answer:
      'Whitening ranges $250–450 depending on in-office vs. take-home trays. In-office takes about 90 minutes; take-home trays work over about 2 weeks.',
  },
  {
    id: 'pricing-invisalign',
    keywords: ['invisalign cost', 'invisalign price', 'how much is invisalign', 'aligners'],
    answer:
      'Invisalign runs $3,000–5,500 depending on your case. We offer a free consultation first to check candidacy — average treatment is 6–18 months.',
  },
  {
    id: 'emergency',
    keywords: ['emergency', 'pain', 'chipped', 'knocked out', 'broke a tooth', 'urgent'],
    answer:
      "We hold same-day emergency slots every day. For after-hours emergencies, call our on-call line at (555) 010-0199.",
  },
  {
    id: 'cancellation',
    keywords: ['cancel', 'reschedule', 'cancellation policy', 'late fee'],
    answer:
      'We ask for 24 hours notice to cancel or reschedule. Late cancellations may incur a $50 fee.',
  },
  {
    id: 'pediatric',
    keywords: ['kid', 'child', 'children', 'pediatric', 'toddler'],
    answer:
      "We see kids from age 2+. We recommend a first visit by their first birthday or first tooth — Dr. Anand makes it a genuinely fun experience.",
  },
  {
    id: 'payment-plans',
    keywords: ['payment plan', 'financing', 'carecredit', 'afford', 'installment'],
    answer:
      'We accept CareCredit, and offer 0% in-house financing on treatment over $500.',
  },
  {
    id: 'parking',
    keywords: ['parking', 'park'],
    answer: "There's a free lot right behind the building, plus street parking nearby.",
  },
  {
    id: 'sedation',
    keywords: ['sedation', 'anxious', 'nervous', 'nitrous', 'scared'],
    answer:
      'We offer nitrous oxide for anxious patients, and oral sedation for larger procedures (scheduled in advance). Totally normal to ask about this!',
  },
  {
    id: 'what-to-bring',
    keywords: ['bring', 'need to bring', 'what should i bring'],
    answer:
      'Just bring a photo ID, your insurance card, and a list of any current medications.',
  },
  {
    id: 'location',
    keywords: ['address', 'location', 'where are you', 'directions'],
    answer: "We're at 128 Maple Grove Ave.",
  },
  {
    id: 'contact',
    keywords: ['phone number', 'call you', 'email'],
    answer: 'You can call us at (555) 010-0100 or email hello@brightsmile.example.',
  },
]

// Very small, dependency-free keyword matcher.
// Returns the first FAQ entry whose keywords appear in the user's message.
export function matchFaq(message) {
  const text = message.toLowerCase()
  return faqEntries.find((entry) => entry.keywords.some((kw) => text.includes(kw)))
}

// Words that trigger the guided booking flow instead of an FAQ lookup.
export const bookingTriggers = ['book', 'appointment', 'schedule', 'reschedule']

export function isBookingIntent(message) {
  const text = message.toLowerCase()
  return bookingTriggers.some((kw) => text.includes(kw))
}
