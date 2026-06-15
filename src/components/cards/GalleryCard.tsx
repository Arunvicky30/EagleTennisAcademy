import type { GalleryItem } from '../../data/mockData'

type GalleryCardProps = {
  item: GalleryItem
  onOpen?: (item: GalleryItem) => void
}

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  const cardClassName = 'group relative overflow-hidden rounded-2xl text-left'

  const content = (
    <>
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-full min-h-56 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.type} • {item.category}</p>
        <p className="mt-2 text-sm font-semibold text-white sm:text-base">{item.title}</p>
      </div>
    </>
  )

  if (!onOpen) {
    return <article className={cardClassName}>{content}</article>
  }

  return (
    <button type="button" className={cardClassName} onClick={() => onOpen(item)}>
      {content}
    </button>
  )
}
