import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { matchFaq, isBookingIntent } from '../data/faq'

const GREETING =
  "Hi! I'm the Bright Smile assistant. Ask me about hours, insurance, pricing, or say \"book an appointment\" to get started."

const FALLBACK =
  "I don't have that on file yet, but I can pass your question to the front desk — want me to grab your name and number? (yes/no)"

// Simulated "thinking" delay so the mocked bot feels alive rather than instant.
const TYPING_DELAY = [600, 900]
function randomDelay() {
  const [min, max] = TYPING_DELAY
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ sender: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  // flow tracks any multi-step guided conversation (booking or escalation)
  const [flow, setFlow] = useState({ step: 'idle', data: {} })
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping, open])

  function pushBotMessage(text) {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { sender: 'bot', text }])
    }, randomDelay())
  }

  function handleSend(e) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }])
    setInput('')
    respondTo(trimmed)
  }

  function respondTo(text) {
    // --- Guided flows take priority over FAQ matching ---
    if (flow.step === 'booking-name') {
      setFlow({ step: 'booking-time', data: { ...flow.data, name: text } })
      pushBotMessage(`Thanks, ${text}! What day and time works best for you?`)
      return
    }
    if (flow.step === 'booking-time') {
      setFlow({ step: 'idle', data: {} })
      pushBotMessage(
        "You're on the list! Our team will confirm within 1 business hour. (This is a demo — no real booking system is connected.)"
      )
      return
    }
    if (flow.step === 'fallback-confirm') {
      if (/^y/i.test(text)) {
        setFlow({ step: 'fallback-name', data: {} })
        pushBotMessage("Sure — what's your name?")
      } else {
        setFlow({ step: 'idle', data: {} })
        pushBotMessage('No problem! Anything else I can help with?')
      }
      return
    }
    if (flow.step === 'fallback-name') {
      setFlow({ step: 'fallback-phone', data: { name: text } })
      pushBotMessage('And the best phone number to reach you?')
      return
    }
    if (flow.step === 'fallback-phone') {
      setFlow({ step: 'idle', data: {} })
      pushBotMessage(
        "Got it — I've passed this along to the front desk and they'll follow up soon. (Demo only — nothing was actually sent.)"
      )
      return
    }

    // --- Normal turn: booking intent, then FAQ match, then fallback ---
    if (isBookingIntent(text)) {
      setFlow({ step: 'booking-name', data: {} })
      pushBotMessage("Happy to help you book! What's your name?")
      return
    }

    const match = matchFaq(text)
    if (match) {
      pushBotMessage(match.answer)
      return
    }

    setFlow({ step: 'fallback-confirm', data: {} })
    pushBotMessage(FALLBACK)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Bright Smile Dental assistant"
          className="flex h-[480px] w-[340px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-brand-mint bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-brand-teal px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Bright Smile Assistant</p>
              <p className="text-xs text-white/70">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 transition hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-brand-mint/40 px-3 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'rounded-br-sm bg-brand-teal text-white'
                      : 'rounded-bl-sm bg-white text-brand-navy shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-slate [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-slate [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-slate" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-brand-mint bg-white p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              aria-label="Message"
              className="flex-1 rounded-pill border border-brand-mint bg-brand-mint/30 px-3 py-2 text-sm text-brand-navy outline-none focus:border-brand-teal"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal text-white transition hover:bg-brand-tealDark disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-pill bg-brand-teal px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-brand-tealDark focus-visible:scale-105"
      >
        <MessageCircle size={18} />
        Ask us anything
      </button>
    </div>
  )
}
