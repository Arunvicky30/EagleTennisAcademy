import type { Tournament } from '../../data/mockData'

type TournamentCardProps = {
  tournament: Tournament
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const statusClass: Record<Tournament['status'], string> = {
    Upcoming: 'bg-cyan-400/20 text-cyan-200',
    Ongoing: 'bg-emerald-400/20 text-emerald-200',
    Past: 'bg-slate-400/20 text-slate-200',
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition hover:border-cyan-500/60">
      <img src={tournament.poster} alt={tournament.title} className="h-52 w-full object-cover" />
      <div className="p-5">
        <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass[tournament.status]}`}>
          {tournament.status}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{tournament.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{tournament.date} • {tournament.venue}</p>
        <p className="mt-3 text-sm text-slate-300">{tournament.description}</p>
        <button
          type="button"
          className="mt-5 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Register Now
        </button>
      </div>
    </article>
  )
}
