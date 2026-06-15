import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/students', label: 'Students' },
  { to: '/tournaments', label: 'Tournaments' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/contact', label: 'Contact' },
  { to: '/admin', label: 'Admin' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-cyan-200'}`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/70 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-wide text-white">
          Eagle <span className="text-cyan-300">Tennis Academy</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-slate-600 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((state) => !state)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-5 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkStyle} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div className="grid gap-2 border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkStyle}
              onClick={() => setIsOpen(false)}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}
