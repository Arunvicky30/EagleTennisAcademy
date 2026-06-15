import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Eagle Tennis Academy</h3>
          <p className="mt-3 text-sm text-slate-300">
            Premium table tennis coaching for aspiring champions and performance athletes.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link to="/programs" className="hover:text-cyan-200">
                Training Programs
              </Link>
            </li>
            <li>
              <Link to="/tournaments" className="hover:text-cyan-200">
                Tournaments
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Follow Us</h4>
          <p className="mt-3 text-sm text-slate-300">Instagram • YouTube • Facebook • LinkedIn</p>
          <p className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} Eagle Tennis Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
