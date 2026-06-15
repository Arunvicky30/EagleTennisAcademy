import type { Announcement } from '../../data/mockData'

type AnnouncementCardProps = {
  item: Announcement
}

export function AnnouncementCard({ item }: AnnouncementCardProps) {
  const tagStyles: Record<Announcement['tag'], string> = {
    Notice: 'bg-amber-300/20 text-amber-200',
    News: 'bg-cyan-300/20 text-cyan-200',
    Update: 'bg-fuchsia-300/20 text-fuchsia-200',
  }

  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
      <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[item.tag]}`}>
        {item.tag}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{item.date}</p>
      <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
    </article>
  )
}
