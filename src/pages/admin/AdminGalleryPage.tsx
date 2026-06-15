import { galleryItems } from '../../data/mockData'

export function AdminGalleryPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Gallery Management</h2>
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <button
          type="button"
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Add New Media
        </button>
        <div className="mt-5 grid gap-3">
          {galleryItems.map((item) => (
            <article key={item.id} className="flex items-center justify-between rounded-lg bg-slate-800 p-3">
              <p className="text-sm text-slate-200">{item.title}</p>
              <div className="space-x-2 text-xs">
                <button type="button" className="rounded bg-slate-700 px-2 py-1 text-slate-200">
                  Edit
                </button>
                <button type="button" className="rounded bg-rose-600/70 px-2 py-1 text-rose-100">
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
