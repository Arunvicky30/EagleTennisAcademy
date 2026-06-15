import { NavLink, Outlet } from 'react-router-dom'

const adminLinks = [
  { to: '/admin', label: 'Dashboard Overview' },
  { to: '/admin/settings', label: 'Academy Settings' },
  { to: '/admin/gallery', label: 'Gallery Management' },
  { to: '/admin/students', label: 'Student Management' },
  { to: '/admin/tournaments', label: 'Tournament Management' },
  { to: '/admin/announcements', label: 'Announcements Management' },
]

export function AdminLayout() {
  return (
    <div className="grid min-h-screen bg-slate-950 text-slate-100 lg:grid-cols-[280px_1fr]">
      <aside className="border-r border-slate-800 bg-slate-900 p-5">
        <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-400">Eagle Tennis Academy CMS</p>
        <nav className="mt-8 grid gap-2">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/admin'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-cyan-400/20 text-cyan-200'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="p-5 sm:p-8">
        <Outlet />
      </div>
    </div>
  )
}
