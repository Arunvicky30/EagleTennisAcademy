import { AnnouncementCard } from '../components/cards/AnnouncementCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { announcements } from '../data/mockData'

export function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-[linear-gradient(130deg,#0f172a,#155e75)] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Featured Announcement</p>
        <h1 className="mt-3 text-3xl font-bold text-white">New National Camp Trials at Eagle Arena</h1>
        <p className="mt-4 text-slate-200">
          Eligible players can register before 30 June. Assessment includes agility, control, and tactical decision rounds.
        </p>
      </div>

      <div className="mt-12">
        <SectionHeader
          eyebrow="Updates"
          title="Latest Academy Announcements"
          subtitle="Important notices, academy news, and operational updates."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
