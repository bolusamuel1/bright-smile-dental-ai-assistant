import { NavLink, Link } from 'react-router-dom'
import { Sparkle } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="border-b border-brand-mint bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-brand-navy">
          <Sparkle size={20} className="text-brand-teal" fill="currentColor" />
          Bright Smile Dental
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-slate md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `transition hover:text-brand-teal ${isActive ? 'text-brand-teal' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-pill bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-tealDark"
        >
          Book a visit
        </Link>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-5 border-t border-brand-mint py-2 text-xs font-medium text-brand-slate md:hidden">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => (isActive ? 'text-brand-teal' : '')}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
