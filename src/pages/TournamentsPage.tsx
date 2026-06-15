import { TournamentCard } from '../components/cards/TournamentCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { tournaments } from '../data/mockData'

export function TournamentsPage() {
  const grouped = {
    upcoming: tournaments.filter((tournament) => tournament.status === 'Upcoming'),
    ongoing: tournaments.filter((tournament) => tournament.status === 'Ongoing'),
    past: tournaments.filter((tournament) => tournament.status === 'Past'),
  }

  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Competitive Calendar"
        title="Tournaments"
        subtitle="Track upcoming, ongoing, and past events with registration access."
      />

      <section>
        <h3 className="text-2xl font-semibold text-white">Upcoming Tournaments</h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          {grouped.upcoming.map((item) => (
            <TournamentCard key={item.id} tournament={item} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-white">Ongoing Tournaments</h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          {grouped.ongoing.map((item) => (
            <TournamentCard key={item.id} tournament={item} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-white">Past Tournaments</h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          {grouped.past.map((item) => (
            <TournamentCard key={item.id} tournament={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
