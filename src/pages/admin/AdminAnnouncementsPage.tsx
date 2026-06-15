import { announcements } from '../../data/mockData'

export function AdminAnnouncementsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Announcements Management</h2>
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <button
          type="button"
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Create Announcement
        </button>
        <div className="mt-5 grid gap-3">
          {announcements.map((item) => (
            <article key={item.id} className="rounded-lg bg-slate-800 p-4">
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-300">{item.date}</p>
              <p className="mt-1 text-xs text-cyan-300">{item.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
