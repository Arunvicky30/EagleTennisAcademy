import { useMemo, useState } from 'react'
import { GalleryCard } from '../components/cards/GalleryCard'
import { Modal } from '../components/common/Modal'
import { SectionHeader } from '../components/common/SectionHeader'
import { galleryItems, type GalleryItem } from '../data/mockData'

const PAGE_SIZE = 4

const filters = ['All', 'Photo', 'Video', 'Training', 'Tournament', 'Achievement'] as const

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) => item.type === activeFilter || item.category === activeFilter,
    )
  }, [activeFilter])

  const visibleItems = filteredItems.slice(0, visibleCount)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Gallery"
        title="Photo and Video Wall"
        subtitle="A premium visual archive of training, tournaments, and podium moments."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActiveFilter(filter)
              setVisibleCount(PAGE_SIZE)
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'bg-cyan-400 text-slate-950'
                : 'border border-slate-700 text-slate-300 hover:border-cyan-300 hover:text-cyan-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="mb-5 break-inside-avoid">
            <GalleryCard item={item} onOpen={setSelectedItem} />
          </div>
        ))}
      </div>

      {visibleCount < filteredItems.length ? (
        <div className="mt-6 text-center">
          <button
            type="button"
            className="rounded-full border border-cyan-300/60 px-6 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load More
          </button>
        </div>
      ) : null}

      <Modal isOpen={selectedItem !== null} onClose={() => setSelectedItem(null)}>
        {selectedItem?.type === 'Photo' ? (
          <img
            src={selectedItem.mediaUrl}
            alt={selectedItem.title}
            className="max-h-[75vh] w-full rounded-xl object-cover"
          />
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              title={selectedItem?.title ?? 'Video preview'}
              src={selectedItem?.mediaUrl}
              className="h-full w-full"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </div>
  )
}
