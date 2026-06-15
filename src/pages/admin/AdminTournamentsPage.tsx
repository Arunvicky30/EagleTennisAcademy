import { tournaments } from '../../data/mockData'

export function AdminTournamentsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Tournament Management</h2>
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <button
          type="button"
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Add Tournament
        </button>
        <div className="mt-5 grid gap-3">
          {tournaments.map((tournament) => (
            <article key={tournament.id} className="rounded-lg bg-slate-800 p-4">
              <p className="font-medium text-white">{tournament.title}</p>
              <p className="mt-1 text-sm text-slate-300">{tournament.date} • {tournament.venue}</p>
              <p className="mt-1 text-xs text-cyan-300">Status: {tournament.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
