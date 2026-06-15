import { adminOverview, announcements, students, tournaments } from '../../data/mockData'

const widgetClass =
  'rounded-2xl border border-slate-700 bg-slate-900 p-5 transition hover:border-cyan-500/50'

export function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
        <p className="mt-2 text-sm text-slate-400">Track academy performance and content activity.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <article className={widgetClass}>
          <p className="text-sm text-slate-400">Total Students</p>
          <p className="mt-2 text-3xl font-semibold text-white">{adminOverview.totalStudents}</p>
        </article>
        <article className={widgetClass}>
          <p className="text-sm text-slate-400">Total Photos</p>
          <p className="mt-2 text-3xl font-semibold text-white">{adminOverview.totalPhotos}</p>
        </article>
        <article className={widgetClass}>
          <p className="text-sm text-slate-400">Total Videos</p>
          <p className="mt-2 text-3xl font-semibold text-white">{adminOverview.totalVideos}</p>
        </article>
        <article className={widgetClass}>
          <p className="text-sm text-slate-400">Upcoming Tournaments</p>
          <p className="mt-2 text-3xl font-semibold text-white">{adminOverview.upcomingTournaments}</p>
        </article>
        <article className={widgetClass}>
          <p className="text-sm text-slate-400">Academy Status</p>
          <p className="mt-2 text-3xl font-semibold text-emerald-300">{adminOverview.academyStatus}</p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5 lg:col-span-2">
          <h3 className="text-xl font-semibold text-white">Recent Announcements</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {announcements.map((item) => (
              <li key={item.id} className="rounded-lg bg-slate-800 p-3">
                {item.date} • {item.title}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="text-xl font-semibold text-white">Quick Snapshot</h3>
          <p className="mt-3 text-sm text-slate-300">Active students in system: {students.length}</p>
          <p className="mt-2 text-sm text-slate-300">Tournaments tracked: {tournaments.length}</p>
          <button
            type="button"
            className="mt-5 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Export Reports
          </button>
        </article>
      </section>
    </div>
  )
}
